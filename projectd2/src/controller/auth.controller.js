const UserModel = require("../model/user.model");
const { loginValidation } = require("../util/validation");

module.exports.loginController = async (req, res) => {
  try {
    await loginValidation(req,res);
    const { email, password } = req.body;

    res.status(200).json({ message: "You are successfully LoggedIn" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
