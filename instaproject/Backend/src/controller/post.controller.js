const Post = require("../model/post.model")
const UserModel = require("../model/user.model");

module.exports.createController = async (req,res)=>{
    try {
        const {media, caption} = req.body;
        if(!media) throw new Error("media is required");
        if(!caption) throw new Error("caption is required");

        const newPost = await Post.create({media,caption});



        await UserModel.findByIdAndUpdate(req.user._id, {
            $push:{
                posts:newPost._id
            }
        })
        res.status(201).json(newPost);

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}