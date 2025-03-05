const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    title:{
        type:String,
        required: [true, "Title is required"],
    },
    content:{
        type:String,
        maxlength: 1000,
    }
})

const postModel = mongoose.model("post", postSchema)
module.exports = postModel