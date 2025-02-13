const PostModel = require("../model/post.model")

module.exports.feedController = async (req,res)=>{
    try {
        const posts = await PostModel.find();

        res.status(200).json({message:  "post fetched successfully"}, posts);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}