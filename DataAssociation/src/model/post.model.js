const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
});

module.exports = mongoose.model("post", postSchema);
