const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: (value) => {
      try {
        if (!validator.isEmail(value)) {
          throw new Error("Enter correct Email");
        }
      } catch (error) {
        console.log("ERROR: " + error.message);
      }
      //   return true;
    },
  },
  password: {
    type: String,
    required: true,
    validate: (value) => {
      try {
        if (value.length < 3) {
          throw new Error("password should be greater then 3");
        }
      } catch (error) {
        console.log("ERROR: " + error.message);
      }
      return true;
    },
  },
  username: {
    type: String,
  },
  bio: {
    type: String,
  },
  profileImage: {
    type: String,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
