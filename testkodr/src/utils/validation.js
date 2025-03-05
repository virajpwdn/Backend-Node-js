const validator = require("validator");
const signupValidator = (req) => {
  const { username, email, password, firstName } = req.body;
  if (!username) throw new Error("username is required");
  if (!firstName) throw new Error("Firstname is required");
  if(!email) throw new Error("Email is required");
  if (!validator.isEmail(email)) throw new Error("Enter valid email");
  if (!validator.isStrongPassword(password))
    throw new Error("Enter a strong password");

  return true;
};

const loginValidation = (req) =>{
    const {email, password} = req.body;
    if(!email) throw new Error("Email is required");
    if(!password) throw new Error("password is required");

    return true;
}

module.exports = {
  signupValidator,
  loginValidation
};
