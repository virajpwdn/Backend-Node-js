const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const config = require("../config/config");

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

userSchema.methods.generateToken = function () {
    return jwt.sign({email:this.email, username: this.username}, config.JWT)
}

userSchema.statics.verifyJWT = function (token) {
    return jwt.verify(token, config.JWT)
}

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
