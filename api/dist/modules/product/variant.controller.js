"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVariantById = exports.getVariants = exports.createVariant = void 0;
const variant_model_1 = __importDefault(require("./variant.model"));
const createVariant = async (req, res) => {
    try {
        const variant = await variant_model_1.default.create(req.body);
        res.status(201).json(variant);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createVariant = createVariant;
const getVariants = async (_, res) => {
    try {
        const variants = await variant_model_1.default.find().populate("productId", "name");
        res.json(variants);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getVariants = getVariants;
const getVariantById = async (req, res) => {
    try {
        const variant = await variant_model_1.default.findById(req.params.id).populate("productId", "name");
        if (!variant) {
            return res.status(404).json({ message: "Variant not found" });
        }
        res.json(variant);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getVariantById = getVariantById;
//# sourceMappingURL=variant.controller.js.map