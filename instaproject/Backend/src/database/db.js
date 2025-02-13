const mongoose = require('mongoose');
const config = require('../config/config')
const connectDB = mongoose.connect(config.MONGO_URL);

module.exports = connectDB;