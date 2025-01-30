require("dotenv").config();
const app = require('./src/app');
const connectDB = require('./src/database/db');


connectDB.then(()=>{
    console.log("Database connected");
    app.listen(process.env.PORT, (req,res)=>{
        console.log("Server connected");
    })
}).catch((error)=>{
    console.log(error.message);
})