const { userModel } = require("../models/model");
const mongoose = require("mongoose")
// const index = require("../views/index.ejs")

module.exports.signupController = async (req, res) => {
  try {
    const {_id} = req.params;

    const { userName, email, bio, profileImg } = req.body;
    const users = await userModel.create({
      userName,
      email,
      bio,
      profileImg,
    });
    console.log(req.body);
    res.redirect("allusers");
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports.findUserController = async (req, res) => {
  const findUserInDb = await userModel.find();
    // res.send(findUserInDb);
  res.render("index", { findUserInDb });
};

module.exports.formController = (req, res) => {
  try {
    // res.send("Hello World")
    res.render("signup");
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
};

module.exports.userIdDetails = async (req, res) => {
  try {
    const { userId } = req.params;
    const findUserById = await userModel.findById({_id: new mongoose.Types.ObjectId(userId)});
    console.log(findUserById);
    // res.send(findUserById);
    res.render("userDetails", { findUserById });
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
}