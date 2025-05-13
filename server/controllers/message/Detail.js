import mongoose from "mongoose";
import Message from "../../models/Message.js";
export const detail = async (req, res) => {
  try {
    const user = req.user.userId;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid id format" });
    }

    const detail = await Message.findById(id);

    if (!detail) {
      return res.status(404).json({ error: "Message not found" });
    }

    const isAllowed =
      detail.receivers.some((r) => r.toString() === user) ||
      detail.sender.toString() === user;

    if (!isAllowed) {
      return res.status(403).json({ error: "Lack of permission" });
    }

    res.status(200).json({ detail });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
