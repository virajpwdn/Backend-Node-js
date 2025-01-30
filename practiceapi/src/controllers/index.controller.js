const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const apivalidation = require("../utils/apivalidation");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");

module.exports.helloController = (req, res) => {
  try {
    res.send("hello world");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.signupController = async (req, res) => {
  try {
    apivalidation(req);
    const { email, password, username, gender, skills } = req.body;
    const findEmail = await User.findOne({ email });
    if (findEmail) throw new Error("Email already exists");
    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      email,
      password: hashPassword,
      username,
      gender,
      skills,
    });

    res.cookie("token", token);
    res.status(200).send("Data added to database successfully");
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findEmail = await User.findOne({ email });
    if (!findEmail) throw new Error("Invalid credientials");

    const dcrypt = await bcrypt.compare(password, findEmail.password);
    if (!dcrypt) throw new Error("Invalid credientials");
    const token = jwt.sign({_id: findEmail._id}, process.env.TOKEN_ID);
    console.log(token);
    res.cookie("token", token);
    res.status(200).send(findEmail);
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports.profileController = async (req, res) => {
  try {
    const { userId } = req.params;
    const findUser = await User.findOne({ _id: userId });
    if (!findUser) throw new Error("NOT FOUND");
    res.status(200).send(findUser);
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports.updateController = async (req, res) => {
  try {
    const cookie = req.cookies;
    const { token } = cookie;

    if(!token) throw new Error("Login in again");

    const decodedmsg = jwt.verify(token, process.env.TOKEN_ID);
    const findUser = await User.findById(decodedmsg);
    if(!findUser) throw new Error("Login in again");
    res.status(200).send(findUser);
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};
