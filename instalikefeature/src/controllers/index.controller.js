const jwt = require('jsonwebtoken')

module.exports.feedController = (req,res)=>{
    try {

        const {token} = req.cookies;
        const decoded = jwt.verify(token, process.env.JWTSECRET);

        if(!decoded) throw new Error("Token not found");

        res.render("feed");
        // res.send("Feed Page");
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}