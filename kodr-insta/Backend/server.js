require("dotenv").config();
const app = require("./src/app");
const config = require("./src/config/config");
const connectDB = require("./src/database/db");

connectDB();

app.listen(config.PORT, () => {
  console.log("server is running on port " + config.PORT);
});
