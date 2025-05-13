import mongoose from "mongoose";
import Message from "../../models/Message.js";
export const remove = async (req, res) => {
  try {
    const user = req.user.userId;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid id format" });
    }

    const message = await Message.findById(id);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    const isAllowed = message.sender.toString() === user;
    if (!isAllowed) {
      return res.status(403).json({ error: "Lack of permission" });
    }

    await message.deleteOne();

    res.status(200).json({ message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
