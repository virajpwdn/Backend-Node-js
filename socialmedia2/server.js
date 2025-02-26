// server and database connect
const express = require('express');
const {app} = require('./src/app');
const {connectDB} = require('./src/database/db');


connectDB.then(()=>{
    try {
        console.log("connected to database");
        app.listen(3000, (req, res)=>{
            console.log("connected to server");
        })
    } catch (error) {
        console.log("ERROR: "+ error.message);
    }
})