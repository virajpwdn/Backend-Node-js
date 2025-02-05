const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const isAuthenticate = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) throw new Error("Token not verified, register for full access");

    const findUser = await UserModel.findOne({ email: user.email });
    //   console.log(findUser._id);

    req.user = findUser;
    next();
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};

module.exports = {
  isAuthenticate,
};
