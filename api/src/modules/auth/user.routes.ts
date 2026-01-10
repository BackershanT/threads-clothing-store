import { Router } from "express";
import { forgotPassword, resetPassword, getCurrentUser } from "./user.controller";
import { protect } from "../../middlewares/auth.middleware";

const router = Router();

// Forgot password route - doesn't require authentication
router.post("/forgot-password", forgotPassword);

// Reset password route - doesn't require authentication but uses token
router.post("/reset-password", resetPassword);

// Get current user profile - requires authentication
router.get("/profile", protect, getCurrentUser);

export default router;