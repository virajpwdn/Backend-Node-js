const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  firstName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

userSchema.methods.generateJWT = function () {
  return jwt.sign({ _id: this._id, email: this._email }, process.env.JWTKEY);
};

userSchema.statics.verifyToken = function (token) {
  if (!token) throw new Error("token is required");
  return jwt.verify(token, process.env.JWTKEY);
};

userSchema.statics.hashPassword = async function (password) {
  if (!password) throw new Error("Password is required");
  return await bcrypt.hash(password, 10);
};

userSchema.methods.verifyPassword = async function (password) {
  if (!password) throw new Error("Password is required");
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("user", userSchema);
