const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  imageURL: {
    type: String,
  },
  bio: {
    type: String,
  },
  likeCount:{
    type: Number
    
  }
});

const profileModel = mongoose.model("profile", profileSchema);
module.exports = { profileModel };
