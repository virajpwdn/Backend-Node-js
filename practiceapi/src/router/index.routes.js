const { Router } = require("express");
const router = Router();
const controller = require("../controllers/index.controller");

router.get("/", controller.helloController);
router.post("/signup", controller.signupController);
router.post("/login", controller.loginController);
router.get("/profile/:userId", controller.profileController);
router.get("/update", controller.updateController);

module.exports = router;
