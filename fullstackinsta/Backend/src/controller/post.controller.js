const postModel = require("../models/posts.model");
const userModel = require("../models/user.model");

module.exports.postController = async (req, res) => {
  try {
    const { media, caption } = req.body;
    if (!media) throw new Error("Enter media URL");
    if (!caption) throw new Error("Enter caption");

    const newPost = await postModel.create({
      media,
      caption,
    });

    await userModel.findOneAndUpdate({
      _id: req.user._id
    }, {
      $push:{
        posts: newPost._id
      }
    })
    res.status(200).json({message: newPost})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
};
