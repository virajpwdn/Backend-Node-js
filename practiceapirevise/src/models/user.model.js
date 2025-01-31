const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
    trim: true,
    match: [
      /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    trim: true,
    minlength: [8, "password should be greater than 8 words"],
    maxlength: [32, "password should be less than 32 words"],
  },
  bio: {
    type: String,
  },
  skills: {
    type: Array,
    validate: {
      validator: function (value) {
        return value.length <= 5;
      },
      message: "You can add only up to 5 skills",
    },
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
