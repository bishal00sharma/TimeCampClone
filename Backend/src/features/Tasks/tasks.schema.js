const mongoose= require("mongoose");
 
const taskSchema= new mongoose.Schema({
    task: {type: String , required: true},
    startTime: {type: Number},
    endTime: {type: Number},
    notes: {type: String },
    isBillingStatus: {type: Boolean},
    user:{ type : mongoose.Schema.Types.ObjectId, ref:"user" },
    project:{ type : mongoose.Schema.Types.ObjectId, ref:"project" },

}) 

const Task=mongoose.model("task", taskSchema)
module.exports= Task;