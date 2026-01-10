"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyOrders = exports.createOrder = void 0;
const variant_model_1 = __importDefault(require("../product/variant.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = async (req, res) => {
    try {
        const { items } = req.body;
        let total = 0;
        const validatedItems = [];
        for (const item of items) {
            const variant = await variant_model_1.default.findById(item.variantId);
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
        const order = await order_model_1.default.create({
            userId: req.user.id,
            items: validatedItems,
            totalAmount: total
        });
        res.status(201).json(order);
    }
    catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.createOrder = createOrder;
const getMyOrders = async (req, res) => {
    try {
        const orders = await order_model_1.default.find({ userId: req.user.id })
            .populate("items.variantId");
        res.json(orders);
    }
    catch (error) {
        console.error("Error getting orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getMyOrders = getMyOrders;
//# sourceMappingURL=order.controller.js.map