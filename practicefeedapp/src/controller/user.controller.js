const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PostModel = require("../models/post.model");
const { isAuthenticate } = require("../middlewares/authenticate");

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
    res.redirect("/feed");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.getCreatePostController = (req, res) => {
  try {
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
    res.status(400).json({ message: error.message });
  }
};

module.exports.getLoginController = (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.postLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const verifyUser = await UserModel.findOne({ email });
    if (!verifyUser) throw new Error("Invalid Credientials");

    const verifyPassword = await bcrypt.compare(password, verifyUser.password);
    if (!verifyPassword) throw new Error("Invalid Credientials");

    const token = jwt.sign(
      { id: verifyUser._id, email: verifyUser.email },
      process.env.JWT_SECRET
    );
    
    res.cookie("token", token);
    res.redirect("/feed");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports.logoutController = (req,res) =>{
    try {
        res.cookie("token", null);
        res.render("logout");
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports.getEditController =  (req,res) =>{
    try {        
        res.render("edit")
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports.postEditController = async (req,res)=>{
    try {
        const {username, photo} = req.body;
        
        const oldUser = req.user;
        console.log(oldUser);
        oldUser.username = username || oldUser.username;
        oldUser.photo = photo || oldUser.photo;

        await oldUser.save();
        res.json({
            message: "Your data has been successfully edited",
            user: oldUser,
        });
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports.getProfileController = (req,res) =>{
    try {
        const user = req.user;
        console.log(user);
        res.send(user);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}