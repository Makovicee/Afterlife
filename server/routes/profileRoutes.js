import express from "express";
import { getUser } from "../controllers/user/profile/GetUser.js";
import { authenticate } from "../middlewares/authenticate.js";
const router = express.Router();

router.get("/getUser", authenticate, getUser);

export default router;
