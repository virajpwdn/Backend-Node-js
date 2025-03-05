const jwt = require('jsonwebtoken');
const config = require("../config/config");
const userModel = require("../models/user.model")

const authMiddleware = async (req,res,next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(!token) throw new Error("Token is required");

        const verifyToken = jwt.verify(token, config.JWTKEY);
        if(!verifyToken) throw new Error("Token is not valid");

        const user = await userModel.findOne({_id: verifyToken._id});

        req.user = user;
        next();
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = authMiddleware