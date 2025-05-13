import express from "express";
import { Send } from "../controllers/message/Send.js";
import { authenticate } from "../middlewares/authenticate.js";
import { msgValidation } from "../validation/msgValidation.js";
import { inbox } from "../controllers/message/Inbox.js";
import { markAsRead } from "../controllers/message/MarkAsRead.js";
import { remove } from "../controllers/message/Remove.js";
import { detail } from "../controllers/message/Detail.js";

const router = express.Router();

router.post("/send", authenticate, msgValidation, Send);
router.get("/inbox", authenticate, inbox);
router.patch("/mark/:id", authenticate, markAsRead);
router.delete("/remove/:id", authenticate, remove);
router.get("/detail/:id", authenticate, detail);
export default router;
