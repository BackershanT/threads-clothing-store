"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = exports.updateOrderStatus = void 0;
const order_model_1 = __importDefault(require("../order.model"));
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        // Validate status is one of the allowed values
        const validStatuses = ["PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }
        const order = await order_model_1.default.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json(order);
    }
    catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.updateOrderStatus = updateOrderStatus;
const getAllOrders = async (req, res) => {
    try {
        const orders = await order_model_1.default.find({})
            .populate("userId", "name email")
            .populate("items.variantId")
            .sort({ createdAt: -1 });
        res.json(orders);
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getAllOrders = getAllOrders;
//# sourceMappingURL=order.admin.controller.js.map