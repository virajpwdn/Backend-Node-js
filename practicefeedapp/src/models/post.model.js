const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    media:{
        type:String,
    },
    caption:{
        type:String,
    }
})

const PostModel = mongoose.model("post", postSchema);
module.exports = PostModel;