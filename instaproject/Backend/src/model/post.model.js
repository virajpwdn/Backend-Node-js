const mongoose = require("mongoose");
const validator = require("validator");
const postSchema = new mongoose.Schema({
  media: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return validator.isURL(value);
      },
      message: "Enter correct URL",
    },
  },
  caption: {
    type: String,
    required: true,
    minlength: [3, "minimum length of caption should be 3"],
    maxlength: [50, "maximum length of caption should be 50"],
  },
});

const PostModel = mongoose.model("post", postSchema);
module.exports = PostModel;
