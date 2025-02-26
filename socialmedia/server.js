require("dotenv").config();
const express = require("express");
const {app} = require("./src/app");
const {connectDB} = require("./src/database/db")





connectDB.then(()=>{
    try {
        console.log("Connected to database");
        app.listen("3000", (req,res)=>{
            console.log("Connected to server");
        })
    } catch (error) {
        console.log("ERROR:" + ERROR.message);
    }
}
)
