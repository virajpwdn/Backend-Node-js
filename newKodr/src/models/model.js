const mongoose = require("mongoose");
const {Schema} = require('mongoose');

const userSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  bio: {
    type: String,
  },
  profileImg: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);
module.exports = {
  userModel,
};
