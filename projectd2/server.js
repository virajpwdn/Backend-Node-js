require("dotenv").config();
const config = require("./src/config/config")
const app = require("./src/app");
const connectDB = require("./src/database/db");

connectDB.then(() => {
  console.log("Database is connected");
  app.listen(config.PORT, () => {
    console.log("Server is connected");
  });
}).catch((error)=>{
  console.log("ERROR: " + error.message);
});
