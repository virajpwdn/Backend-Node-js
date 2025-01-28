const {Router} = require("express");
const router = Router();
const controller = require('../controllers/index.controller')

router.get("/", controller.viewSignUpForm);
router.post("/create-user", controller.createUserController);

router.get("/feed", controller.viewFeed)

router.get("/profile/:userID", controller.viewProfileController)

module.exports = router