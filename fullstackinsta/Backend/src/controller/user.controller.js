const userModel = require("../models/user.model");

module.exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username) throw new Error("username is required");
    if (!email) throw new Error("email is required");
    if (!password) throw new Error("password is required");

    const findUsername = await userModel.findOne({ username });
    if (findUsername) throw new Error("username already exists, try new");
    const findUser = await userModel.findOne({
      email,
    });
    if (findUser) throw new Error("user already exists");

    const newUser = await userModel.create({
      username,
      email,
      password,
    });

    const token = newUser.generateToken();
    console.log(token);

    res.status(200).json({data: newUser, message: "You are successfully registerd", token})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.profileController = async (req,res) =>{
    try {
        const user = req.user;
        
        res.status(200).json({message: user})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}