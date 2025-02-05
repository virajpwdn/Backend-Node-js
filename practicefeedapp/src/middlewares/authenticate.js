const jwt = require("jsonwebtoken");

const isAuthenticate = (req) => {
  const { token } = req.cookies;

  const user = jwt.verify(token, process.env.JWT_SECRET);
  if (!user) throw new Error("Token not verified, register for full access");

  req.user = user;
};

module.exports = {
  isAuthenticate,
};
