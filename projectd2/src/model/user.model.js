const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: [3, "minimum length should be 3, got value {VALUE}"],
      maxlength: [30, "maximum length should be at most 30, got value {VALUE}"],
      required: [true, "username is required"],
      validate: {
        validator: (value) => {
          const specialCharacters = "@/$*!";
          return !specialCharacters.includes(value[0]);
        },
        message: "you can add special characters at start",
      },
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "email is required"],
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Enter a valid Email",
      },
      index: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      validate: {
        validator: (value) => {
          return validator.isStrongPassword(value);
        },
        message:
          "Enter a strong password user uppercase, lowercase, special characters, numbers, etc.",
      },
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
    },
    skills: {
      type: [String],
    },
    bio: {
      type: String,
      default: "enter a bio to find a match",
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: "select your gender",
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.error("Error hashing password:", error);
    next(error);
  }
});

userSchema.methods.isValidate = async function (plainPassword) {
  const hashPassword = await bcrypt.compare(plainPassword, this.password);
  return hashPassword;
};

userSchema.methods.generateJWT = async function (id) {
  const token = jwt.sign({ id }, config.JWT, {expiresIn: "12h"});
  return token;
};

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;