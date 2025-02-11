const UserModel = require("../model/user.model");
const { userValidation, editValidation } = require("../util/validation");

module.exports.signupController = async (req, res) => {
  try {
    await userValidation(req);
    const {
      email,
      password,
      username,
      gender,
      skills,
      bio,
      firstName,
      lastName,
    } = req.body;
    console.log(req.body);
    const newUser = await UserModel({
      email,
      password: password,
      username,
      skills,
      bio,
      gender,
      firstName,
      lastName,
    });
    // console.log(newUser);
    await newUser.save();
    res
      .status(200)
      .json({ message: "new user is created Successfully", newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.editController = async (req, res) => {
  try {
    editValidation(req);
    const oldData = req.user;
    const newData = req.body;

    Object.keys(newData).forEach((key)=> (oldData[key] = newData[key]));

    await oldData.save();

    res.status(200).json({message: "user edited successfully", data:oldData});

    const { firstName, lastName, username, skills, bio, gender } = req.body;
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
