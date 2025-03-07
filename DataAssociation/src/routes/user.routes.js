const {Router} = require("express");
const controller = require("../controller/user.controller")
const userRouter = Router();
const authMiddleware = require("../middleware/authentication")

const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, bytes){
      const fn = bytes.toString("hex") + path.extname(file.originalname)
      cb(null, fn)
    })
  }
})

const upload = multer({ storage: storage })

userRouter.post("/signup", controller.signupController)
userRouter.post("/login", controller.loginController)
userRouter.post("/create-post", authMiddleware, controller.createPostController)
userRouter.get("/profile", authMiddleware, controller.profileController)

userRouter.get("/signup", controller.signupViewController)
userRouter.get("/profile-view", authMiddleware, controller.viewProfileController)
userRouter.get("/likes/:id", authMiddleware, controller.likeController);

userRouter.get("/edit/view/:id", authMiddleware, controller.viewEditController)
userRouter.post("/edit/:id", authMiddleware, controller.editController)

userRouter.get("/upload-view" , authMiddleware, controller.uploadViewController)
userRouter.post("/upload",authMiddleware, upload.single("image"), controller.uploadFileController)

module.exports = userRouter;