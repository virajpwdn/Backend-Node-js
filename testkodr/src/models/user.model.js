const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    minlength: [3, "minimum length is of username is 3"],
    maxlength: [20, "maximum length of username is 20"],
  },
  firstName: {
    type: String,
    required: [true, "firstname is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "post"
  },
}, {timestamps:true});
// static model pe lagta hai aur methods instance pe
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, username: this.username },
    config.JWTKEY
  );
};

userSchema.statics.validateJWT = function (token) {
  if (!token) throw new Error("Token is required");
  return jwt.verify(token, config.JWTKEY);
};

userSchema.statics.hashPassword = async function (password) {
  if (!password) throw new Error("Password is required");
  return await bcrypt.hash(password, 10);
};

userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel