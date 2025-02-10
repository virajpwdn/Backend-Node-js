const jwt = require("jsonwebtoken");
const config = require("../config/config");
const UserModel = require("../model/user.model");

module.exports.authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) throw new Error("Unauthorized");

    const decode = jwt.verify(token, config.JWT);

    const user = await UserModel.findOne({
      _id: decode.id,
    });

    req.user =
      user; /*  This is not a by-default property, we are creating this over here */

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
