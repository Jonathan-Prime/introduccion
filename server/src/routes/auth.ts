import { Router } from "express";
import { loginUser, registerUser, getUsers } from "../controllers/user";
import verifyToken from "../middleware/verifyToken";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/getUsers", verifyToken, getUsers);

export default router;
