const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("welcome to express");
})

app.listen(3000)