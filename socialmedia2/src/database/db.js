const mongoose = require("mongoose");
const connectDB = mongoose.connect(
  "mongodb+srv://alphadeveloper:c2zkQ04lrFjRC6F8@cluster0.j7cia.mongodb.net/"
);

module.exports = {
  connectDB,
};
