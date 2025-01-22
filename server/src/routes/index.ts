import { Router } from "express";
import UserRoutes from "./auth";

const router = Router();

router
  .use("/api/auth", UserRoutes)

export default router;
