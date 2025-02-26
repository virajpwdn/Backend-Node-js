const mongoose = require('mongoose');
const config = require('../config/config')
const connectDB = async ()=>{
    mongoose.connect(config.MONGO_URL).then(()=>{
        console.log("database is connected");
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = connectDB;