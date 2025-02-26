const { userModel } = require("../models/user.models");
const { postModel } = require("../models/user.models");

module.exports.createController = async (req, res) => {
  const { username, bio, email, profileImage } = res.body;

  const newUser = await userModel.create({
    username,
    bio,
    email,
    profileImage,
  });

  res.send(newUser);
};

module.exports.homeController = (req, res) => {
  res.render("home");
};

module.exports.createPostController = (req, res) => {
  res.render("home");
};

module.exports.createPost = async (req, res) => {
  const { mediaImage, caption } = req.body;

  const newPost = await postModel.create({
    caption,
    mediaImage,
  });
  res.send(newPost);
};
