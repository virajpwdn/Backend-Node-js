const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.indexController = (req, res) => {
  try {
    res.render("register");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.postRegisterController = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      email,
      username,
      password: hashPassword,
    });

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWTSECRET
    );

    res.cookie("token", token);
    res.redirect("/feed");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.loginController = (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.render("login");
    res.redirect("/feed");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.postLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userModel.findOne({ email });
    
    if (!findUser) throw new Error("Invalid Credentials");

    const decodePassword = await bcrypt.compare(password, findUser.password);
    if (!decodePassword) throw new Error("Invalid Credentials");

    const token = jwt.sign(
      { email: email, id: findUser._id },
      process.env.JWTSECRET
    );

    res.cookie("token", token);
    res.redirect("/feed");
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};
