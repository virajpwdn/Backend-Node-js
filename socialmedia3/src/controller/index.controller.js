const { default: mongoose } = require("mongoose");
const { userModel } = require("../models/user.model");
const { profileModel } = require("../models/profile.model");

module.exports.signupController = (req, res) => {
  res.render("signup");
};

module.exports.createController = async (req, res) => {
  const { username, email, bio, profileImage } = req.body;
  const newUser = await userModel.create({
    username,
    email,
    bio,
    profileImage,
  });
  res.redirect("feed");
};

module.exports.feedController = async (req, res) => {
  const alluser = await userModel.find();
  res.render("feed", { alluser });
};

module.exports.userDetailController = async (req, res) => {
  try {
    const { userId } = req.params;

    const foundUser = await userModel.findById({
      _id: new mongoose.Types.ObjectId(userId),
    });

    res.render("userdetails", { foundUser });
  } catch (error) {
    console.log("ERROR: " + error.message);
  }
};

module.exports.newUserForm = async (req, res) => {
  try {
    res.render("newuser");
  } catch (error) {
    console.log("ERROR: " + error.message);
  }
};

module.exports.userCreateController = async (req, res) => {
  try {
    const { imageURL, bio, likeCount } = req.body;
    const newProfile = await profileModel.create({
      imageURL,
      bio,
      likeCount,
    });
    res.redirect("feed");
  } catch (error) {
    console.log("ERROR: " + error.message);
  }
};

module.exports.likeCounter = async (req,res)=>{
  // const id = req.params.
}