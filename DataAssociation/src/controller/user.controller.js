const userModel = require("../model/user.model");
const postModel = require("../model/post.model");

module.exports.signupController = async (req, res) => {
  try {
    const { username, email, firstName, password } = req.body;
    if (!username || !email || !firstName || !password)
      throw new Error("All fields are required");

    const isUserExists = await userModel.findOne({ email });
    if (isUserExists) throw new Error("email already exists");

    const hashPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
      username,
      email,
      password: hashPassword,
      firstName,
    });

    const token = user.generateJWT();
    res.cookie("token", token);

    res.status(201).json({ data: user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("All fields are required");
    const verifyUser = await userModel.findOne({ email });
    if (!verifyUser) throw new Error("Invalid Credentials");

    const verifyPassword = await verifyUser.verifyPassword(password);
    if (!verifyPassword) throw new Error("Invalid Credentials");

    const token = verifyUser.generateJWT();
    res.cookie("token", token);

    res.status(200).json({ message: "You are logged In" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.profileController = async (req, res) => {
  try {
    const loggedInUser = req.user;
    const getAllPosts = await userModel
      .findOne({ email: loggedInUser.email })
      .select("posts")
      .populate("posts", "title content -_id");

    res.status(200).json({ getAllPosts });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.createPostController = async (req, res) => {
  try {
    const loggedInUser = req.user;
    const { title, content } = req.body;
    const newPost = await postModel.create({
      title,
      content,
      user: loggedInUser._id,
    });

    loggedInUser.posts.push(newPost._id);
    await loggedInUser.save();
    res.status(200).json({ data: newPost });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
