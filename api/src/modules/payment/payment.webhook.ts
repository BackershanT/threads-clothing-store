import { Request, Response } from "express";
import crypto from "crypto";
import Order from "../order/order.model";

export const razorpayWebhook = async (req: Request, res: Response) => {
  try {
    const signature = req.headers["x-razorpay-signature"] as string;

    // Create the expected signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(JSON.stringify(req.body))
      .digest("hex");

    // Verify the signature
    if (signature !== expectedSignature) {
      console.error("Invalid webhook signature");
      return res.status(400).send("Invalid signature");
    }

    const event = req.body.event;

    if (event === "payment.captured") {
      const payment = req.body.payload.payment.entity;
      const orderId = payment.notes?.orderId || payment.receipt;

      if (orderId) {
        // Update the order status to PAID
        await Order.findByIdAndUpdate(orderId, {
          status: "PAID"
        });

        console.log(`Order ${orderId} marked as PAID`);
      }
    } else if (event === "payment.failed") {
      const payment = req.body.payload.payment.entity;
      const orderId = payment.notes?.orderId || payment.receipt;

      if (orderId) {
        console.log(`Payment failed for order ${orderId}`);
        // Optionally update order status to reflect failure
        // await Order.findByIdAndUpdate(orderId, { status: "FAILED" });
      }
    }

    res.status(200).send("OK");
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).send("Webhook error");
  }
};