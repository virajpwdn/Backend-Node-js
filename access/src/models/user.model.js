const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: [6, "Password must be greater then 6 chars"],
  },
  gender: {
    type: String,
  },
  bio: {
    type: String,
    // minlength: [5, "Bio must be greater then 5 words"],
    // maxlength: [5, "Bio must be less then 150 words"],
  },
});

const userModel = mongoose.model("user model", userSchema);
module.exports = userModel;
