"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createAdmin = exports.register = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if user already exists
        const existingUser = await user_model_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcryptjs_1.default.hash(password, saltRounds);
        // Create new user
        const user = new user_model_1.default({ name, email, password: hashedPassword });
        await user.save();
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "30d" });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error during registration" });
    }
};
exports.register = register;
// Temporary endpoint to create an admin user (remove this in production)
const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if user already exists
        const existingUser = await user_model_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Create new admin user
        const user = new user_model_1.default({
            name,
            email,
            password,
            role: "ADMIN" // Explicitly set role to ADMIN
        });
        await user.save();
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "30d" });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error during admin creation" });
    }
};
exports.createAdmin = createAdmin;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await user_model_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Check password
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || "fallback_secret", { expiresIn: "30d" });
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token
        });
    }
    catch (error) {
        res.status(500).json({ message: "Server error during login" });
    }
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map