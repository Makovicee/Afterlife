import Friends from "../../models/Friends.js";

export const getFriendships = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { status } = req.query;

    const validStatus = ["accepted", "pending"];
    if (status && !validStatus.includes(status)) {
      return res.status(400).json({ error: "Invalid status filter" });
    }

    const query = {
      users: userId,
      ...(status && { status }),
    };

    const contacts = await Friends.find(query);
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
