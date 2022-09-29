const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title :{ type:String, required: true,},
    role : { type:String},
    description : {type: String},
    budget : { type:Number},
    tag : { type: String},
    userId: { type : mongoose.Schema.Types.ObjectId, ref:"user" }
})

const Project = mongoose.model("project", projectSchema);

module.exports = Project;