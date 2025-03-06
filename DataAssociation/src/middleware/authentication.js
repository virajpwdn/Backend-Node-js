const userModel = require("../model/user.model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error("Token is required");

    const decodeToken = userModel.verifyToken(token);
    if (!decodeToken) throw new Error("Invalid Token");

    const user = await userModel.findOne({ _id: decodeToken._id });

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};

module.exports = authMiddleware
