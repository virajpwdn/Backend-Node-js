const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    },
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;