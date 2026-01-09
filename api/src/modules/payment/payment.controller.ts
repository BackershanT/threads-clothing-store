import { Request, Response } from "express";
import Razorpay from "razorpay";
import Order from "../order/order.model";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!
});

export const createRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(order.totalAmount! * 100), // Convert to paise
      currency: "INR",
      receipt: order._id!.toString(),
      notes: {
        orderId: order._id!.toString(),
        userId: (req as any).user.id
      }
    });

    res.json(razorpayOrder);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ message: "Error creating payment order" });
  }
};