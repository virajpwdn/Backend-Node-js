const postModel = require("../models/post.model");

module.exports.createController = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title) throw new Error("Title is required");

    const newPost = await postModel.create({ title, content });

    res.status(201).json({ data: newPost });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.updateController = async (req, res) => {
    try {
      const id = req.params.postID;
      const { content } = req.body;
  
    //   // Validate input
      if (!id || !content) {
        return res.status(400).json({ message: "Post ID and content are required." });
      }
  
      const updatedPost = await postModel.findOneAndUpdate(
        { _id: id },
        { $set: { content } },
        { new: true } 
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found." });
      }
  
      res.status(200).json({ message: "Caption was updated", updatedPost });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };
  

  module.exports.getAllPostController = async (req,res)=>{
    try {
        const findAll = await postModel.find();

        res.status(200).json({data: findAll});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
  }
