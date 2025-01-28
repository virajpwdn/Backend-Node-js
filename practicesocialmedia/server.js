require('dotenv').config();
const {app} = require('./src/app');
const {connectDB} = require('./src/database/db');


connectDB.then(()=>{
    console.log("Database Connected");
    app.listen(3000, (req,res)=>{
        console.log("Server Connected");
    })
})