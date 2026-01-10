"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [{
            type: String
        }],
    model3dUrl: {
        type: String
    },
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model("Product", productSchema);
//# sourceMappingURL=product.model.js.map