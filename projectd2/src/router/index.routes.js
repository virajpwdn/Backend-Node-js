const {Router} = require('express');
const indexRouter = Router();

indexRouter.get("/check", (req,res)=>{
    res.send("hello world")
})

module.exports = indexRouter;