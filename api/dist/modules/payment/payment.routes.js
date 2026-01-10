"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("./payment.controller");
const payment_webhook_1 = require("./payment.webhook");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post("/create", auth_middleware_1.protect, payment_controller_1.createRazorpayOrder);
router.post("/webhook", payment_webhook_1.razorpayWebhook);
exports.default = router;
//# sourceMappingURL=payment.routes.js.map