const validator = require("validator");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [3, "username must be at least 3 characters long"],
    maxlength: [20, "username must be at most 20 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [3, "username must be at least 3 characters long"],
    maxlength: [20, "username must be at most 20 characters long"],
  },
  password: {
    type: String,
  },
  profileImage: {
    type: String,
    default:
      "https://imgs.search.brave.com/X7XPq0yunGvlrkH7gP12GzAcbLpgJ9-xhHWwA9RtyRQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzU0Lzc4/LzM2MF9GXzYzMzU0/Nzg0Ml9BdWdZemV4/VHBNSjl6MVljcFRL/VUJvcUJGMENVQ2sx/MC5qcGc",
    validate: {
      validator: (value) => {
        return validator.isURL(value);
      },
    },
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});


const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel