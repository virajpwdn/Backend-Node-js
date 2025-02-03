const jwt = require("jsonwebtoken");

module.exports.indexController = (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.feedController = (req, res) => {
  try {
    const token = req.cookies["kodr-cookie"];
    if (!token) res.redirect("/user/register");
    const verify = jwt.verify(token, process.env.JWTSECRET);
    console.log(verify);
    if (!verify) res.redirect("/user/register");
    else res.render("feed", { email: verify });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
