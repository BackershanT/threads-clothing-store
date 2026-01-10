"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.razorpayWebhook = void 0;
const crypto_1 = __importDefault(require("crypto"));
const order_model_1 = __importDefault(require("../order/order.model"));
const variant_model_1 = __importDefault(require("../product/variant.model"));
const razorpayWebhook = async (req, res) => {
    try {
        const signature = req.headers["x-razorpay-signature"];
        // Create the expected signature
        const expectedSignature = crypto_1.default
            .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
            .update(JSON.stringify(req.body))
            .digest("hex");
        // Verify the signature
        if (signature !== expectedSignature) {
            console.error("Invalid webhook signature");
            return res.status(400).send("Invalid signature");
        }
        if (req.body.event === "payment.captured") {
            const payment = req.body.payload.payment.entity;
            const orderId = payment.notes?.receipt;
            const order = await order_model_1.default.findById(orderId);
            if (!order || order.status === "PAID") {
                return res.status(200).send("Already processed");
            }
            // 🔥 DEDUCT STOCK
            for (const item of order.items) {
                if (item.quantity && typeof item.quantity === 'number') { // Check if quantity exists and is a number
                    await variant_model_1.default.findByIdAndUpdate(item.variantId, {
                        $inc: { stock: -item.quantity }
                    });
                }
            }
            order.status = "PAID";
            order.paymentId = payment.id;
            await order.save();
            console.log(`Order ${orderId} marked as PAID and stock deducted`);
        }
        else if (req.body.event === "payment.failed") {
            const payment = req.body.payload.payment.entity;
            const orderId = payment.notes?.orderId || payment.receipt;
            if (orderId) {
                console.log(`Payment failed for order ${orderId}`);
                // Optionally update order status to reflect failure
                // await Order.findByIdAndUpdate(orderId, { status: "FAILED" });
            }
        }
        res.status(200).send("OK");
    }
    catch (error) {
        console.error("Webhook error:", error);
        res.status(500).send("Webhook error");
    }
};
exports.razorpayWebhook = razorpayWebhook;
//# sourceMappingURL=payment.webhook.js.map