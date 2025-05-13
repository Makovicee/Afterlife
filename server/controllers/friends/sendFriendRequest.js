import mongoose from "mongoose";
import Friends from "../../models/Friends.js";
import User from "../../models/User.js";

export const sendFriendRequest = async (req, res) => {
  try {
    const senderId = req.user.userId;
    const { receiverId } = req.params;

    if (senderId === receiverId) {
      return res
        .status(400)
        .json({ error: "You cannot send friend request to yourself" });
    }

    if (!mongoose.Types.ObjectId.isValid(receiverId)) {
      return res.status(400).json({ error: "Invalid id format" });
    }

    const validUsers = await User.find({
      _id: { $in: [senderId, receiverId] },
    });
    if (validUsers.length !== 2) {
      return res.status(404).json({ error: "One or both user do not exist" });
    }

    const existing = await Friends.findOne({
      users: { $all: [senderId, receiverId] },
    });

    if (existing) {
      return res
        .status(400)
        .json({ error: "Friendship already exists or waits for confirmation" });
    }

    const friendship = new Friends({
      users: [senderId, receiverId],
      requestedBy: senderId,
    });

    await friendship.save();

    res.status(201).json({ message: "Friend request send" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
