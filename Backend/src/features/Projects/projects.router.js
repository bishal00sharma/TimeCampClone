const express = require('express');

const Project = require("./projects.schema");

const app = express.Router();

// API request to get all Projects
app.get("/", async(req,res)=>{
    try{
         let user = req.userId
         let p = await Project.find({user});
         res.send(p);
    }
    catch(err){
        res.status(500).send(err.message);
    }
   
})


// API request to add new Project
app.post("/", async (req,res)=>{
    let project = await Project.create({...req.body, user: req.userId});
    res.send(project)
})
module.exports = app;

// API request to delete Project
app.delete("/:id",async (req,res)=>{
    let id = req.params.id;
    let delete_project = await Project.deleteOne({"_id":id});
    res.status(200).send("Project deleted successfully!")
})

// API request to update Project details
app.patch("/:id", async (req,res)=>{
    let id = req.params.id;
    let update = await Project.updateOne({"_id":id},{$set:{...req.body}});
    res.status(200).send("Project Details Updated Successfully!");
})

