import { Router } from "express";
import { loginUser, registerUser, getUsers } from "../controllers/user";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/getUsers", getUsers);

export default router;
