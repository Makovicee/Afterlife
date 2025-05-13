import express from "express";
import { sendFriendRequest } from "../controllers/friends/sendFriendRequest.js";
import { reactFriendRequest } from "../controllers/friends/reactFriendRequest.js";
import { authenticate } from "../middlewares/authenticate.js";
import { revokeFriendship } from "../controllers/friends/revokeFriendship.js";
import { getFriendships } from "../controllers/friends/getFriendships.js";
const router = express.Router();

router.post("/sendFR/:receiverId", authenticate, sendFriendRequest);
router.patch("/reactFR/:friendshipId", authenticate, reactFriendRequest);
router.delete("/revokeFR/:friendshipId", authenticate, revokeFriendship);
router.get("/getFR", authenticate, getFriendships);
export default router;
