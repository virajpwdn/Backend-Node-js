const PostModel = require('../models/post.model');
const {isAuthenticate} = require('../middlewares/authenticate');


module.exports.getRegisterController = (req,res)=>{
    try {
        res.render("register");
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports.feedController = async (req,res)=>{
    try {
        isAuthenticate(req)
        const posts = await PostModel.find();
        console.log(posts);
        res.render("feed", {posts});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}