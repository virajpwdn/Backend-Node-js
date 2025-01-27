const { Router } = require("express");
const router = Router();
const controller = require("../controller/index.controller");

router.get("/", controller.signupController);
router.post("/create-user", controller.createController);

router.get("/feed", controller.feedController);
router.get("/user/:userId", controller.userDetailController);

router.get("/create-user-form", controller.newUserForm);
router.post("/create-new-profile", controller.userCreateController);

module.exports = router;
