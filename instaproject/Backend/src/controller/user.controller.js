const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports.reqisterController = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!username) throw new Error("username is required");

    if (!email) throw new Error("email is required");

    if (!password) throw new Error("password is required");

    const isUserExist = await UserModel.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (isUserExist) throw new Error("user already exists");

    const hashPassword = await UserModel.hashPassword(password);
    const user = await UserModel.create({
      username,
      email,
      password: hashPassword,
    });

    const token = user.generateToken();

    // res.cookie("token", token); 
    // -> Insteading of sending cookies, best practice is to send token into header and this headers are set via frontend.

    res
      .status(200)
      .json({ message: "account created succssfully", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) throw new Error("Email is Required");

    if (!password) throw new Error("Password is Required");

    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("Invalid Credentials");

    const verifyPassword = await UserModel.comparePassword(password, user.password);
    if (!verifyPassword) throw new Error("Invalid Credentials");

    const token = user.generateToken();
    // res.cookie("token", token)

    // console.log(token);
    res
      .status(200)
      .json({ message: `${user.username}, you are successfully logged in...`, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.profileController = async (req,res)=>{
    try {
        const user = req.user;

        const isUser = await UserModel.findById(user._id).populate('posts')

        res.status(200).json({user:isUser})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

