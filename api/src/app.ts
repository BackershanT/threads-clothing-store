import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/auth/user.routes";
import productRoutes from "./modules/product/product.routes";
import categoryRoutes from "./modules/product/category.routes";
import variantRoutes from "./modules/product/variant.routes";
import orderRoutes from "./modules/order/order.routes";
import adminOrderRoutes from "./modules/order/admin/order.admin.routes";
import paymentRoutes from "./modules/payment/payment.routes";
import { Request, Response } from "express";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/variants", variantRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin/orders", adminOrderRoutes);
app.use("/api/payments", paymentRoutes);

// Health check
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Fashion API v1.0" });
});

export default app;