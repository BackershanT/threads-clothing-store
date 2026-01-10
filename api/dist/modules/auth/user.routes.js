"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Forgot password route - doesn't require authentication
router.post("/forgot-password", user_controller_1.forgotPassword);
// Reset password route - doesn't require authentication but uses token
router.post("/reset-password", user_controller_1.resetPassword);
// Get current user profile - requires authentication
router.get("/profile", auth_middleware_1.protect, user_controller_1.getCurrentUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map