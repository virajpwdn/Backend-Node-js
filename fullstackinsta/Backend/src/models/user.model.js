const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  photo: {
    type: String,
  },
  bio: {
    type: String,
  },
  age: {
    type: Number,
  },
  posts:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"post"
  }
});

userSchema.methods.generateToken = function () {
  return jwt.sign({_id:this._id, email: this.email, username: this.username }, config.JWT);
};

userSchema.statics.hashPassword = async function (plainPassword) {
  return await bcrypt.hash(plainPassword, 10);
};

userSchema.statics.verifyJWT = function (token) {
  return jwt.verify(token, config.JWT);
};

userSchema.statics.verifyPassword = function (plainPassword, hashPassword) {
    return bcrypt.compare(plainPassword, hashPassword);
}

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
