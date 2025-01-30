const validator = require("validator");

const isdatavalidate = (req) => {
  const { email, password } = req.body;
  if(!email) throw new Error("email is required");
  if(!password) throw new Error("password is requied");
  if (!validator.isEmail(email)) throw new Error("Enter correct email");
  if (!validator.isStrongPassword(password))
    throw new Error("Enter a strong password");
};

module.exports = isdatavalidate