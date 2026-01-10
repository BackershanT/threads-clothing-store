"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const user_routes_1 = __importDefault(require("./modules/auth/user.routes"));
const product_routes_1 = __importDefault(require("./modules/product/product.routes"));
const category_routes_1 = __importDefault(require("./modules/product/category.routes"));
const variant_routes_1 = __importDefault(require("./modules/product/variant.routes"));
const order_routes_1 = __importDefault(require("./modules/order/order.routes"));
const order_admin_routes_1 = __importDefault(require("./modules/order/admin/order.admin.routes"));
const payment_routes_1 = __importDefault(require("./modules/payment/payment.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api/auth", auth_routes_1.default);
app.use("/api/users", user_routes_1.default);
app.use("/api/products", product_routes_1.default);
app.use("/api/categories", category_routes_1.default);
app.use("/api/variants", variant_routes_1.default);
app.use("/api/orders", order_routes_1.default);
app.use("/api/admin/orders", order_admin_routes_1.default);
app.use("/api/payments", payment_routes_1.default);
// Health check
app.get("/", (req, res) => {
    res.json({ message: "Fashion API v1.0" });
});
exports.default = app;
//# sourceMappingURL=app.js.map