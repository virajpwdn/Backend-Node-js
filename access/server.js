require("dotenv").config();
const { connect } = require("mongoose");
const app = require('./src/app');
const connectDB = require("./src/database/db");

connectDB.then(()=>{
    console.log("Database connected");
    app.listen("3000", (req,res)=>{
        console.log("Server connected")
    })
}).catch((error)=>{
    console.log(error.message);
})

