const mongoose = require('mongoose');

const dbconnect  = ()=>{
    return mongoose.connect("mongodb+srv://Lokesh-dc:Prashant@timecamp.tydbh39.mongodb.net/Backend")
}


module.exports = dbconnect;