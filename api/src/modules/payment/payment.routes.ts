import { Router } from "express";
import { createRazorpayOrder } from "./payment.controller";
import { razorpayWebhook } from "./payment.webhook";
import { protect } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/create", protect, createRazorpayOrder);
router.post("/webhook", razorpayWebhook);

export default router;