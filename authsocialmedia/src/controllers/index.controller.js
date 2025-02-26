const { userModel } = require("../models/user.model");
const { authentication } = require("../utils/authencate");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

module.exports.loginForm = (req, res) => {
  try {
    res.render("loginform");
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports.loginController = async (req, res) => {
  try {
    authentication(req);
    
    const { email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ email, password: hashPassword });
    res.send("data saved to database successfully");
  } catch (error) {
    console.log("ERROR: " + error.message);
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports.uploadForm = async (req, res) => {
  try {
    res.render("uploadform");
  } catch (error) {
    throw new Error("ERROR " + error.message);
  }
};

module.exports.uploadController = async (req, res) => {
  try {
    const { email, username, bio, profileImage } = req.body;
    const verify = await userModel.findOne(email);
    console.log(verify);
    if (!verify) throw new Error("User not found, signup before uploading");

    const update = await userModel.findOneAndUpdate({
      username: username,
      bio: bio,
      profileImage: profileImage,
    });

    res.send(update);
  } catch (error) {
    console.log("ERROR: " + error.message);
    res.send("ERROR: " + error.message);
  }
};


module.exports.findinglogin = async (req,res)=>{
  try {
    const {email, password} = req.body;
    const findUser = await userModel.findOne({email});
    // console.log(findUser);
    res.cookie("token", "Thisisdummycookie")
    res.send("loggedIn...");
  } catch (error) {
    throw new Error("ERROR: " + error.message);
  }
}

module.exports.profileController = async (req,res)=>{
  try {
    const cookie = req.cookies;
    // const {token} = cookie
    res.send(cookie)
  } catch (error) {
    throw new Error("ERROR " + error.message);
  }
}

