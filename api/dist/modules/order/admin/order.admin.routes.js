"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_admin_controller_1 = require("./order.admin.controller");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// For now, using a simple role check instead of adminOnly middleware
const adminOnly = (req, res, next) => {
    if (req.user?.role !== "ADMIN") {
        return res.status(403).json({ message: "Admin access only" });
    }
    next();
};
router.get("/", auth_middleware_1.protect, adminOnly, order_admin_controller_1.getAllOrders);
router.patch("/:id/status", auth_middleware_1.protect, adminOnly, order_admin_controller_1.updateOrderStatus);
exports.default = router;
//# sourceMappingURL=order.admin.routes.js.map