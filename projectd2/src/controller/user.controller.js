const UserModel = require("../model/user.model");
const { userValidation } = require("../util/validation");

module.exports.signupController = async (req, res) => {
  try {
    await userValidation(req);
    const {email, password, username, gender, skills, bio, firstName, lastName} = req.body
    console.log(req.body);
    const newUser = await UserModel({
      email,
      password:password,
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
