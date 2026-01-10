"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post("/", auth_middleware_1.protect, auth_middleware_1.adminOnly, product_controller_1.createProduct);
router.get("/", product_controller_1.getProducts);
router.get("/:slug", product_controller_1.getProductBySlug);
exports.default = router;
//# sourceMappingURL=product.routes.js.map