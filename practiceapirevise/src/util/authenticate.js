const validator = require("validator");

module.exports.isauthenticate = (req) => {
  const { email, password, bio, skills, username } = req.body;
  if (!email) throw new Error("Email is required");
  if (!password) throw new Error("Password is required");
  if (password.length < 8)
    throw new Error("Password length should be greater then 8 words");
  if (password.length > 32)
    throw new Error("Password length should be less then 32 words");
  if (!validator.isEmail(email)) throw new Error("Enter a valid email");
  if (!validator.isStrongPassword(password))
    throw new Error("Enter a strong password");
};
