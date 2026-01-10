import { Router } from "express";
import { updateOrderStatus, getAllOrders } from "./order.admin.controller";
import { protect } from "../../../middlewares/auth.middleware";

const router = Router();

// For now, using a simple role check instead of adminOnly middleware
const adminOnly = (req: any, res: any, next: any) => {
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};

router.get("/", protect, adminOnly, getAllOrders);
router.patch("/:id/status", protect, adminOnly, updateOrderStatus);

export default router;