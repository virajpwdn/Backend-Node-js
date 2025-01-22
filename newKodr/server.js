// start server and connect database -> done
const { app } = require("./src/app");
const { connectDB } = require("./src/db/db");



connectDB
  .then(() => {
    console.log("Database Connected");
    app.listen(3000, (req, res) => {
      console.log("Server Connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
