const {Router} = require("express")
const {indexcontroller, homeController, createUser} = require("../controller/index.controller")
const router = Router();

router.get("/", indexcontroller)
router.get("/home", homeController)
router.post("/create-user", createUser)
// router.post("/create-user", )

module.exports = router