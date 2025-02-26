const express = require('express');
const app = express();
const userRoutes = require('./routes/users.routes.js');
const cors = require('cors');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:5173"}));

app.use('/v1/api/users', userRoutes);





module.exports = app