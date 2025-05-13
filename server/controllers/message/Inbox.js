import { parse } from "dotenv";
import Message from "../../models/Message.js";
export const inbox = async (req, res) => {
  try {
    const user = req.user.userId;
    const { unread, limit } = req.query;

    const filters = {
      receivers: user,
      $or: [
        { shadowDropped: false },
        {
          shadowDropped: true,
          delivery: { $lte: new Date() },
        },
      ],
    };

    if (unread === "true") {
      filters.openedBy = { $ne: user };
    }

    let query = Message.find(filters).populate("sender", "username email");

    if (limit) {
      const parsedLimit = parseInt(limit);
      if (!isNaN(parsedLimit) && parsedLimit > 0) {
        query.limit(parsedLimit);
      }
    }

    let messages = await query;

    messages = messages.map((msg) => {
      if (msg.shadowDropped === false && new Date(msg.delivery) > new Date()) {
        return {
          ...msg.toObject(),
          content: null,
        };
      }
      return msg;
    });

    res.status(200).json({ messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
