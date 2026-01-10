"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post("/", auth_middleware_1.protect, auth_middleware_1.adminOnly, category_controller_1.createCategory);
router.get("/", category_controller_1.getCategories);
router.get("/:id", category_controller_1.getCategoryById);
router.put("/:id", auth_middleware_1.protect, auth_middleware_1.adminOnly, category_controller_1.updateCategory);
router.delete("/:id", auth_middleware_1.protect, auth_middleware_1.adminOnly, category_controller_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=category.routes.js.map