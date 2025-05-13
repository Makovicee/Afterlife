import mongoose from "mongoose";
import Friends from "../../models/Friends.js";

export const revokeFriendship = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { friendshipId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(friendshipId)) {
      return res.status(400).json({ error: "Invalid id format" });
    }
    const friendship = await Friends.findById(friendshipId);

    if (!friendship) {
      return res.status(404).json({ error: "Friendship not found" });
    }
    if (!friendship.users.some((id) => id.toString() === userId)) {
      return res
        .status(403)
        .json({ error: "Not authorized to revoke this friendship" });
    }

    await friendship.deleteOne();
    res.status(200).json(friendship);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
