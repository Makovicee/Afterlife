import mongoose from "mongoose";
import Message from "../../models/Message.js";
export const markAsRead = async (req, res) => {
  try {
    const user = req.user.userId;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid id format" });
    }

    const message = await Message.findOneAndUpdate(
      { _id: id, receivers: user },
      { $addToSet: { openedBy: user } },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json({ message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
