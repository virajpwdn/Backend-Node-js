const {Router} = require('express');
const postRouter = Router();
const controller = require("../controller/post.controller");
const {authUser} = require('../middleware/validation');

postRouter.post("/create", authUser, controller.createController);

module.exports = postRouter