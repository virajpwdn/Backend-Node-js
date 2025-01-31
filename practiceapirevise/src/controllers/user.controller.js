const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const {isauthenticate} = require('../util/authenticate');
const {isLogin} = require('../util/loginValidate');
const jwt = require('jsonwebtoken');

module.exports.registerController = async (req, res) => {
  try {
    isauthenticate(req);
    const { email, password, username, bio, skills } = req.body;
    
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      email,
      password: hashPassword,
      bio,
      skills,
      username,
    });
    res.status(200).json("user successfully created");
  } catch (error) {
    res.status(400).json("ERROR: " + error.message);
  }
};

module.exports.loginController = async (req,res)=>{
    try {
        isLogin(req);
        const {email, password} = req.body;
        const findEmail = await userModel.findOne({email});
        if(!findEmail) throw new Error("Invalid credentials");

        const findPassword = await bcrypt.compare(password, findEmail.password);
        if(!findPassword) throw new Error("Invalid credentials");

        const token = jwt.sign({_id: findEmail._id}, process.env.JWTKEY);
        console.log(token);


        res.status(200).json({
            findEmail,
            token
        });

    } catch (error) {
        res.status(400).json("ERROR: " + error.message);
    }
}

module.exports.profileController = async (req,res)=>{
    try {
        const auth = req.headers["authorization"];
        const token = auth.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWTKEY);
        const findEmail = await userModel.findById({_id:decode._id});
        if(!findEmail) throw new Error("Token not found");
        res.send(findEmail);
    } catch (error) {
        res.status(400).json("ERROR: " + error.message);
    }
}