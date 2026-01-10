"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.getCategoryById = exports.getCategories = exports.createCategory = void 0;
const category_model_1 = __importDefault(require("./category.model"));
const createCategory = async (req, res) => {
    try {
        const category = await category_model_1.default.create(req.body);
        res.status(201).json(category);
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Category name already exists" });
        }
        res.status(400).json({ message: error.message });
    }
};
exports.createCategory = createCategory;
const getCategories = async (_, res) => {
    try {
        const categories = await category_model_1.default.find({ isActive: true });
        res.json(categories);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getCategories = getCategories;
const getCategoryById = async (req, res) => {
    try {
        const category = await category_model_1.default.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getCategoryById = getCategoryById;
const updateCategory = async (req, res) => {
    try {
        const category = await category_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json(category);
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Category name already exists" });
        }
        res.status(400).json({ message: error.message });
    }
};
exports.updateCategory = updateCategory;
const deleteCategory = async (req, res) => {
    try {
        const category = await category_model_1.default.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json({ message: "Category deactivated successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=category.controller.js.map