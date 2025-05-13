import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receivers: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],
    content: { type: String, required: true },
    spoiler: { type: String, default: null },
    shadowDropped: { type: Boolean, required: true }, //true->receiver doesn't know, false->receiver sees countdown
    delivery: { type: Date, required: true },
    delivered: { type: Boolean, default: false },
    openedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    //add attachments later
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
