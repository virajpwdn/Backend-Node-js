require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/database/db");
const config = require("./src/config/config")

connectDB.then(() => {
  try {
    console.log("Database Connected");
    app.listen(config.PORT, () => {
      console.log("Server Connected");
    });
  } catch (error) {
    console.log(error.message);
  }
});

// refresh token, access token