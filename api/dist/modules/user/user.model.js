"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: String,
    email: { type: String, unique: true },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be at least 8 characters long"],
        validate: {
            validator: function (v) {
                // Minimum 8 chars, with lowercase, uppercase, number, and symbol
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: "Password must contain at least 8 characters, including lowercase, uppercase, number, and symbol"
        }
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
}, { timestamps: true });
exports.default = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=user.model.js.map