"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const order_routes_1 = __importDefault(require("./modules/order/order.routes"));
const payment_routes_1 = __importDefault(require("./modules/payment/payment.routes"));
const order_admin_routes_1 = __importDefault(require("./modules/order/admin/order.admin.routes"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/orders', order_routes_1.default);
app.use('/api/payments', payment_routes_1.default);
app.use('/api/admin/orders', order_admin_routes_1.default);
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Clothing Store API!' });
});
exports.default = app;
//# sourceMappingURL=app.js.map