import Friends from "../../models/Friends.js";

export const reactFriendRequest = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { friendshipId } = req.params;
    const { reaction } = req.body;

    const validOpt = ["accept", "reject"];
    if (!validOpt.includes(reaction)) {
      return res
        .status(400)
        .json({ error: "Only allowed option types are accept/reject" });
    }

    const friendship = await Friends.findById(friendshipId);

    if (!friendship) {
      return res.status(404).json({ error: "Friendship not found" });
    }

    const isReceiver =
      friendship.users.some((id) => id.toString() === userId) &&
      friendship.requestedBy.toString() !== userId;

    if (!isReceiver) {
      return res
        .status(400)
        .json({ error: "Not authorized to react to this request" });
    }

    if (friendship.status === "accepted") {
      return res.status(400).json({ error: "Friendship already accepted" });
    }

    if (reaction === "accept") {
      friendship.status = "accepted";
    } else if (reaction === "reject") {
      await friendship.deleteOne();
      return res.status(200).json({ message: "Friend request was rejected" });
    }

    await friendship.save();
    res.status(200).json({ message: "Friend request was accepted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
