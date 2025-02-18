const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  media: {
    type: String,
  },
  status: {
    type: String,
  },
});

const profileModel = mongoose.model("post", profileSchema);
module.exports = profileModel