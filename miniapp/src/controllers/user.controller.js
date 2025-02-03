const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.registerController = (req, res) => {
  try {
    res.render("register");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.postRegisterController = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email,
      username,
      password: hashPassword,
    });

    const token = jwt.sign({ email }, process.env.JWTSECRET);

    res.cookie("kodr-cookie", token);
    res.render("feed");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.loginController = (req,res)=>{
    try {
        const {token} = req.cookies;
        const jwtkey = jwt.sign(token, process.env.JWTSECRET);
        res.cookie("isJwttoken", token);
        if(!token) res.redirect("/login")
        const verify = jwt.verify(token, process.env.JWTSECRET);
        if(!verify) res.redirect("/login");
        else res.render("feed");

    } catch (error) {
        
    }
}