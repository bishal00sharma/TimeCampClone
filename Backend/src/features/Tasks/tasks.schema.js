const mongoose= require("mongoose");
 
const taskSchema= new mongoose.Schema({
    task: {type: String , required: true},
    startTime: {type: Number},
    endTime: {type: Number},
    notes: {type: String },
    isBillingStatus: {type: Boolean}
}) 

const Task=mongoose.model("task", taskSchema)
module.exports= Task;