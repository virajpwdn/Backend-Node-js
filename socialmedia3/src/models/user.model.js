const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  bio: {
    type: String,
  },
  email: {
    type: String,
  },
  profileImage: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = { userModel };
