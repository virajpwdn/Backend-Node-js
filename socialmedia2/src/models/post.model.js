const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  mediaImage: {
    type: String,
  },
  caption: {
    type: String,
  },
  likeCount: {
    type: String,
  },
});

const postModel = mongoose.model("model", postSchema);
module.exports = { postModel };
