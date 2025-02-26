const userModel = require("../models/user.model");

module.exports.indexcontroller = (req, res) => {
  res.render("index");
};

module.exports.createUser = async (req, res) => {
  const { username, bio, email, profileImage } = req.body;

  const newUser = await userModel.create({
    username,
    bio,
    email,
    profileImage,
  });
  res.redirect("/home")
};

module.exports.homeController = (req,res)=>{
    res.render("home")
}
