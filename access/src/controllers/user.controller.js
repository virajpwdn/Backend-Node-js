const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, bio, password, gender } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await userModel.create({
      username,
      email,
      bio,
      password: hashPassword,
      gender,
    });

    res.status(200).send("user successfully created");
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const finduser = await userModel.findOne({ email });

    if (!finduser) {
      throw new Error("Invalid email or password");
    }

    const findPassword = await bcrypt.compare(password, finduser.password);

    if(!findPassword) throw new Error("Invalid email or password");
    

    res.send(finduser);
  } catch (error) {
    res.status(404).send("ERROR: " + error.message)
  }
};
