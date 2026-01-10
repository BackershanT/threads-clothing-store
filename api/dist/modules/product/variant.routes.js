"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const variant_controller_1 = require("./variant.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post("/", auth_middleware_1.protect, auth_middleware_1.adminOnly, variant_controller_1.createVariant);
router.get("/", variant_controller_1.getVariants);
router.get("/:id", variant_controller_1.getVariantById);
exports.default = router;
//# sourceMappingURL=variant.routes.js.map