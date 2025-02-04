require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/database/db');

connectDB.then(()=>{
    console.log("database connected");
    app.listen(process.env.PORT, (req,res)=>{
        console.log("server connected");
    })
}).catch((error)=>{
    console.log(error.message);
})