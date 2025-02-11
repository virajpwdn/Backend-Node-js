const mongoose = require("mongoose");
const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    toUserId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["accepted", "rejected", "interested", "ignored"],
      },
    },
  },
  { timestamps: true }
);

const UserRequestModel = mongoose.model(
  "connection requests",
  connectionRequestSchema
);

module.exports = UserRequestModel;
