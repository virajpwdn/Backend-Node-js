const {Router} = require("express");
const postRouter = Router();
const controller = require("../controller/post.controller");
const {authecticate} = require("../middleware/auth")

postRouter.post("/create", authecticate, controller.postController)

module.exports = postRouter