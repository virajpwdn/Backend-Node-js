const { Router } = require("express");
const postRouter = Router();
const controller = require("../controller/post.controller");
const authMiddleware = require("../middleware/authentication");

postRouter.post("/create", authMiddleware, controller.createController);
postRouter.patch("/update/:postID", authMiddleware, controller.updateController);
postRouter.get("/allpost", authMiddleware, controller.getAllPostController)

module.exports = postRouter;
