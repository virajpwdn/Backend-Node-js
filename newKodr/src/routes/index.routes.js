const express = require('express')
const router = express.Router();
const {signupController, findUserController, formController} = require('../controllers/controller')

router.post("/signup", signupController);
router.get("/allusers", findUserController);
router.get("/", formController)

module.exports = router;