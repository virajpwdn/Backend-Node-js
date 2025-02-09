const UserModel = require("../model/user.model");

module.exports.feedController = async (req, res) => {
  try {
    const allusers = await UserModel.find().select(
      "firstName lastName gender skills username"
    );
    
    res.status(200).json({ data: allusers });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
