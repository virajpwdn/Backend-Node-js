require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/database/db');

connectDB.then(()=>{
    try {
        console.log("Database is connected");
        app.listen(process.env.PORT, (req,res)=>{
            console.log("Server is connected");
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})