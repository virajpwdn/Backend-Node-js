const userModel = require("../models/user.model");
const { signupValidator, loginValidation } = require("../utils/validation");

module.exports.signupController = async (req, res) => {
  try {
    signupValidator(req);
    const { username, email, password, firstName } = req.body;

    const findUser = await userModel.findOne({
        $or:[{email}, {password}]
    })

    if(findUser) throw new Error("user already exists");

    const hashPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
      username,
      email,
      password: hashPassword,
      firstName,
    });

    const token = user.generateJWT();
    console.log(token);

    res.status(201).json({data:user, token})
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.loginController = async (req,res) =>{
    try {
        loginValidation(req);
        const {email, password} = req.body;
        const user = req.user;
        
        const verifyPassword = await user.verifyPassword(password);
        if(!verifyPassword) throw new Error("Invalid Credentials");
        res.status(200).json({message: "You are successfully loggedIn"});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}