const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PostModel = require("../models/post.model");
const {isAuthenticate} = require('../middlewares/authenticate');

module.exports.postRegisterController = async (req, res) => {
  try {
    const { username, password, email, photo } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      email,
      password: hashPassword,
      photo,
    });

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    res.cookie("token", token);
    res.redirect("/feed")
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.getCreatePostController = (req, res) => {
  try {
    isAuthenticate(req);
    res.render("createpost");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.postCreatePostController = (req, res) => {
  try {
    const { media, caption } = req.body;

    const post = PostModel.create({
      media,
      caption,
    });

    res.redirect("/feed");
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};
