const { userModel } = require("../models/usermodel");

module.exports.viewSignUpForm = (req, res) => {
  try {
    res.render("signupform");
  } catch (error) {
    throw new Error("ERROR " + error.message);
  }
};

module.exports.createUserController = async (req, res) => {
  try {
    const { username, email, bio, profileImage } = req.body;

    const createUser = await userModel.create([
      {
        username,
        email,
        bio,
        profileImage,
      },
    ]);

    res.redirect("feed");
  } catch (error) {
    throw new Error("ERROR " + error.message);
  }
};

module.exports.viewFeed = async (req, res) => {
  try {
    const createUser = await userModel.find();
    res.render("feed", { createUser });
  } catch (error) {
    throw new Error("ERROR " + error.message);
  }
};

module.exports.viewProfileController = async (req, res) => {
  try {
    const { userID } = req.params;
    const foundUser = await userModel.findById({userID})
    if(!foundUser) throw new Error("User Not Found");
    res.render("")
  } catch (error) {
    throw new Error("ERROR " + error.message);
  }
};

