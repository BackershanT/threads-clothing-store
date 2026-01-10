"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductBySlug = exports.getProducts = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const variant_model_1 = __importDefault(require("./variant.model"));
const createProduct = async (req, res) => {
    const product = await product_model_1.default.create(req.body);
    res.status(201).json(product);
};
exports.createProduct = createProduct;
const getProducts = async (_, res) => {
    const products = await product_model_1.default.find().populate("category", "name description image");
    res.json(products);
};
exports.getProducts = getProducts;
const getProductBySlug = async (req, res) => {
    const { slug } = req.params;
    if (!slug) {
        return res.status(400).json({ message: "Slug parameter is required" });
    }
    const product = await product_model_1.default.findOne({ slug }).populate("category", "name description image");
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    const variants = await variant_model_1.default.find({ productId: product._id });
    res.json({ product, variants });
};
exports.getProductBySlug = getProductBySlug;
//# sourceMappingURL=product.controller.js.map