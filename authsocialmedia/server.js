require("dotenv").config();
const { app } = require("./src/app");
const { connectDB } = require("./src/database/db");


connectDB.then((result) => {
    console.log("database connected");
    app.listen('3000', (req,res)=>{
        console.log("server connected");
    })
}).catch((err) => {
    console.log("ERROR: "+ err.message);
});