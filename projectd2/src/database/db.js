const config = require('../config/config');

const mongoose = require('mongoose');
const connectDB = mongoose.connect(config.MONGO_URL);

module.exports = connectDB;