require("dotenv").config({path: __dirname+"/config.env"})
const mongoose = require('mongoose');

const dbconnect  = ()=>{
    console.log(process.env.MONGO_URI)
    return mongoose.connect(`${process.env.MONGO_URI}`)
}


module.exports = dbconnect;