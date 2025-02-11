const validator = require("validator");
const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");

const userValidation = async (req) => {
  const {
    email,
    password,
    username,
    skills,
    bio,
    gender,
    firstName,
    lastName,
  } = req.body;

  if (!email || !password || !username) {
    const missingFields = !email
      ? "Email"
      : !password
      ? "password"
      : "username";
    throw new Error(`${missingFields} is required`);
  }

  const findEmail = await UserModel.findOne({ email });
  if (findEmail) {
    throw new Error("Email already exists");
  }

  if (!firstName) throw new Error("First Name is Required");

  if (!validator.isEmail(email)) throw new Error("Enter a valid email");
  if (!validator.isStrongPassword(password))
    throw new Error("Enter a strong Password");

  if (skills.length > 5) throw new Error("You can skills upto 5");

  const genderCheck = ["male", "female", "other"];
  if (!genderCheck.includes(gender)) throw new Error("select your gender");
};

const loginValidation = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new Error("All fields are mandatory");

  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("Invalid Credentials");

  const isPassword = await user.isValidate(password);
  if (!isPassword) throw new Error("Invalid Credentials");

  const token = await user.generateJWT(user._id);
  res.cookie("token", token, { maxAge: 7 * 24 * 60 * 60 * 1000 });
};

const editValidation = (req) => {
  const ALLOWEDFIELDS = [
    "firstName",
    "lastName",
    "username",
    "skills",
    "bio",
    "gender",
  ];

  const extraFields = Object.keys(req.body).filter(
    (key) => !ALLOWEDFIELDS.includes(key)
  );
  if (extraFields.length > 0)
    throw new Error(
      `Invalid fields, ${extraFields.join(", ")} are not allowed`
    );
};

module.exports = {
  userValidation,
  loginValidation,
  editValidation,
};
