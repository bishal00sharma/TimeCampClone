const mongoose = require('mongoose');

const dbconnect  = ()=>{
    return mongoose.connect("mongodb+srv://bishalsharma:bishal00sharma@timecamp.tydbh39.mongodb.net/Backend")
}


module.exports = dbconnect;