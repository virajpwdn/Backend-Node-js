const validator = require("validator");

const authentication = (req) => {
  const { email, password } = req.body;
  if (!email) throw new Error("Email not exist");
  if (!password) throw new Error("Password does not exist");

  if (!validator.isEmail(email)) throw new Error("Enter a valid email");
  if (password.length < 3 && password.length > 50)
    throw new Error("Password length should be between 3 & 50");
  if (!validator.isStrongPassword(password))
    throw new Error("Enter a strong password");
};

module.exports = {
  authentication,
};
