"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRazorpayOrder = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
const order_model_1 = __importDefault(require("../order/order.model"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createRazorpayOrder = async (req, res) => {
    try {
        const { orderId } = req.body;
        const order = await order_model_1.default.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        const razorpayKeyId = process.env.RAZORPAY_KEY_ID || 'rzp_test_123456789';
        const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || 'your_test_key_secret';
        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            console.warn('Razorpay keys not configured. Using test keys. This is not suitable for production.');
        }
        const razorpay = new razorpay_1.default({
            key_id: razorpayKeyId,
            key_secret: razorpayKeySecret
        });
        const razorpayOrder = await razorpay.orders.create({
            amount: Math.round(order.totalAmount * 100), // Convert to paise
            currency: "INR",
            receipt: order._id.toString(),
            notes: {
                orderId: order._id.toString(),
                userId: req.user.id
            }
        });
        res.json(razorpayOrder);
    }
    catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ message: "Error creating payment order" });
    }
};
exports.createRazorpayOrder = createRazorpayOrder;
//# sourceMappingURL=payment.controller.js.map