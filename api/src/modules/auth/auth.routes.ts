import { Router } from "express";
import { register, login, createAdmin } from "./auth.controller";
import { protect, adminOnly } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

// Temporary route to create an admin user (remove this in production)
router.post("/create-admin", createAdmin);

export default router;