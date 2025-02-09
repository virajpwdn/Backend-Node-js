const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const mongoose = require("mongoose");

const customValidation = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token)
      return res.status(401).json({ message: "Login again to view feed page" });

    let decoded;
    try {
      decoded = jwt.verify(token, config.JWT);
    } catch (error) {
      return res.status(403).json({ message: "Invalid Token" });
    }

    const { id } = decoded;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .json(404)
        .json({ message: "Invalid user id, sign up if not already" });
    }

    const user = await UserModel.findById(id);
    if (!user) throw new Error("user not found");

    req.user = user;

    next();
  } catch (error) {
    next(error)
  }
};

module.exports = { customValidation };
