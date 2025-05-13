import express from "express";
import { register } from "../controllers/user/auth/Register.js";
import { login } from "../controllers/user/auth/Login.js";
import { logout } from "../controllers/user/auth/Logout.js";
import { authenticate } from "../middlewares/authenticate.js";
import {
  loginValidation,
  registerValidation,
} from "../validation/authValidation.js";

const router = express.Router();

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);
router.post("/logout", logout);

export default router;
