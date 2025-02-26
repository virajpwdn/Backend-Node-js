const { Router } = require("express");
const router = Router();
const {
  createController,
  homeController,
  createPostController,
  createPost,
} = require("../controller/index.controller");

router.get("/", createController);
router.get("/create", createController);
router.get("/home", homeController);
router.get("/create-post", createPostController);
router.post("/create-post", createPost);

module.exports = router;
