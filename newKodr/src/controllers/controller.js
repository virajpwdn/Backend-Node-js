const {userModel} = require('../models/model')
// const index = require("../views/index.ejs")

module.exports.signupController = async (req, res) => {
    try {
      const users = await userModel.create(req.body);
      console.log("data saved");
        // res.render("signup")
        res.redirect("allusers")
    } catch (error) {
      res.status(400).send("ERROR: " + error.message);
    }
  }

module.exports.findUserController = async (req, res) => {
    const findUserInDb = await userModel.find();
    //   res.send(findUserInDb);
    res.render("index", {findUserInDb});
  }

module.exports.formController = (req, res)=>{
    try {
        // res.send("Hello World")
        res.render("signup");
    } catch (error) {
        res.status(400).send("ERROR : " + error.message);
    }
}