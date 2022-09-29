const express = require('express');

const Project = require("./projects.schema");

const app = express.Router();
app.get("/", async(req,res)=>{
    let user = req.userId
    let p = await Project.find({user});
    res.send(p);
})

app.post("/", async (req,res)=>{
    let project = await Project.create({...req.body, user: req.userId});
    res.send(project)
})
module.exports = app;
