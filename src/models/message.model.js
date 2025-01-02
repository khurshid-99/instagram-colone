import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    recevierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
