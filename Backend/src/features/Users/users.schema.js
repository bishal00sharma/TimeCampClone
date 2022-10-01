const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    phone: {type: Number },
    tags : { type : Array , "default" : [] },
    clients : { type : Array , "default" : [] },
})

const users = mongoose.model("user", userSchema);
module.exports = users;
