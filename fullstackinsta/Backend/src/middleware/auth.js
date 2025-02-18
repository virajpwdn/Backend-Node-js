const UserModel = require("../models/user.model");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

const authecticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) throw new Error("Login to view this page");

    const decode = UserModel.verifyJWT(token);
    if (!decode) throw new Error("Invalid token");

    const user = await UserModel.findOne({email:decode.email});
    if(!user) res.status(404).json({message: "user not found"});

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

module.exports = {
    authecticate
}