import mongoose from "mongoose";
const friendsSchema = new mongoose.Schema(
  {
    users: [{ type: mongoose.Types.ObjectId, ref: "User", required: true }],
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    requestedBy: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Friends = mongoose.model("Friends", friendsSchema);
export default Friends;
