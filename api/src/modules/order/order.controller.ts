import { Request, Response } from "express";
import Variant from "../product/variant.model";
import Order from "./order.model";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { items } = req.body;

    let total = 0;
    const validatedItems = [];

    for (const item of items) {
      const variant = await Variant.findById(item.variantId);

      if (!variant) {
        return res.status(400).json({ message: "Variant not found" });
      }

      if (variant.stock < item.quantity) {
        return res.status(400).json({ message: "Out of stock" });
      }

      total += variant.price * item.quantity;

      validatedItems.push({
        variantId: variant._id,
        quantity: item.quantity,
        price: variant.price
      });
    }

    const order = await Order.create({
      userId: (req as any).user.id,
      items: validatedItems,
      totalAmount: total
    });

    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMyOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({ userId: (req as any).user.id })
      .populate("items.variantId");

    res.json(orders);
  } catch (error) {
    console.error("Error getting orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};