import Message from "../../models/Message.js";
export const Send = async (req, res) => {
  try {
    const { receivers, content, shadowDropped, delivery } = req.body;
    const sender = req.user.userId;

    const message = new Message({
      sender,
      receivers,
      content,
      shadowDropped,
      delivery,
    });
    await message.save();
    res.status(201).json({ message: "Message created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
