const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  bio: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  password: {
    type: String,
  },
  likeCount: {
    type: Number,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = { userModel };
