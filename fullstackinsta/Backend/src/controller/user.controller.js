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

    const hashPassword = await userModel.hashPassword(password);
    console.log(hashPassword);

    const newUser = await userModel.create({
      username,
      email,
      password: hashPassword,
    });

    const token = newUser.generateToken();
    // console.log(token);

    res
      .status(200)
      .json({
        data: newUser,
        message: "You are successfully registerd",
        token,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.profileController = async (req, res) => {
  try {
    const user = req.user;  

    const prevUser = await userModel.findOne({_id:user._id}).populate("posts")


    res.status(200).json({ user:prevUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.loginController = async (req,res) =>{
    try {
        const {email, password} = req.body;
        const findUser = await userModel.findOne({email});
        if(!findUser) throw new Error("Invalid credientials");

        const comparePassword = userModel.verifyPassword(password, findUser.password)
        if(!comparePassword) throw new Error("Invalid credientials");

        const token = findUser.generateToken();

        res.status(200).json({message: findUser, token})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}