const userModel = require("../models/user.model");

module.exports.registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, bio, password, gender } = req.body;

    const createUser = await userModel.create({
      username,
      email,
      bio,
      password,
      gender,
    });

    res.status(200).send("user successfully created");
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};
