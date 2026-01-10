"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            variantId: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "Variant",
                required: true
            },
            quantity: Number,
            price: Number
        }
    ],
    totalAmount: Number,
    status: {
        type: String,
        enum: ["PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"],
        default: "PENDING"
    },
    paymentId: String
}, { timestamps: true });
exports.default = mongoose_1.default.model("Order", orderSchema);
//# sourceMappingURL=order.model.js.map