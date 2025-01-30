const User  = require("../models/user.models");
const bcrypt = require("bcrypt");

module.exports.landingpagecontroller = (req, res) => {
  try {
    res.render("landingpage");
  } catch (error) {
    res.send(400).send(error.message);
  }
};

module.exports.registerController = (req, res) => {
  try {
    res.render("register");
  } catch (error) {
    res.send(400).send(error.message);
  }
};

module.exports.createUserController = async (req, res) => {
  try {
    const { username, email, password, profileImg } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      profileImg,
    });

    res.status(200).send(newUser);
  } catch (error) {
        console.log(error.message);
  }
};

module.exports.loginController = (req,res)=>{
    try {
        res.render("login")
    } catch (error) {
        res.send(400).send(error.message);
    }
}

module.exports.checkUserController = async (req,res)=>{
    try {
        const {email, password} = req.body;
        const findUser = await User.findOne({email});
        if(!findUser) throw new Error("Invalid Credientials");

        const dbpassword = await bcrypt.compare(password, findUser.password);
        if(!dbpassword) throw new Error("Invalid Credientials");
        res.send("Logged In Successfully")
    } catch (error) {
        res.status(400).send("ERROR: " + error.message)
    }
}