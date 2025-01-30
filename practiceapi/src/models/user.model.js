const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: (value) => {
      if (!validator.isEmail(value)) throw new Error("Enter correct email");
      return true;
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: (value) =>
        validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        }),
      message: "Enter a stronger password (at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 symbol).",
    },
  },
  username: {
    type: String,
  },
  gender: {
    type: String,
    validate: (value) => {
      if (!value.includes("male", "female", "other"))
        throw new Error("choose gender between male female or other");
    },
  },
  skills: {
    type: Array,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
