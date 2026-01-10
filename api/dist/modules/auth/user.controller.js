"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = exports.resetPassword = exports.forgotPassword = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Forgot password functionality
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        // Find user by email
        const user = await user_model_1.default.findOne({ email });
        if (!user) {
            // Return success even if user doesn't exist to prevent email enumeration
            return res.status(200).json({
                message: "Password reset link sent if email exists in our system"
            });
        }
        // Generate password reset token
        const resetToken = crypto_1.default.randomBytes(32).toString("hex");
        const resetTokenExpiry = Date.now() + 3600000; // 1 hour
        // Save reset token and expiry to user
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = new Date(resetTokenExpiry);
        await user.save();
        // In a real application, you would send an email here with the reset link
        // For this demo, we'll just log it
        console.log(`Password reset link: http://localhost:5173/reset-password/${resetToken}`);
        res.status(200).json({
            message: "Password reset link sent if email exists in our system"
        });
    }
    catch (error) {
        console.error("Forgot password error:", error);
        res.status(500).json({ message: "Server error during password reset request" });
    }
};
exports.forgotPassword = forgotPassword;
// Reset password functionality
const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        // Find user by reset token
        const user = await user_model_1.default.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });
        if (!user) {
            return res.status(400).json({ message: "Invalid or expired reset token" });
        }
        // Hash the new password
        const saltRounds = 10;
        const hashedPassword = await bcryptjs_1.default.hash(newPassword, saltRounds);
        // Update user's password
        user.password = hashedPassword;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();
        res.status(200).json({ message: "Password reset successful" });
    }
    catch (error) {
        console.error("Reset password error:", error);
        res.status(500).json({ message: "Server error during password reset" });
    }
};
exports.resetPassword = resetPassword;
// Get current user profile
const getCurrentUser = async (req, res) => {
    try {
        // @ts-ignore - user is attached by auth middleware
        const user = await user_model_1.default.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error("Get current user error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getCurrentUser = getCurrentUser;
//# sourceMappingURL=user.controller.js.map