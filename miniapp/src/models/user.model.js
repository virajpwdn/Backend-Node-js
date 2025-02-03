const mongoose = require("mongoose");
const validator = require('validator');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required:true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required:true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
