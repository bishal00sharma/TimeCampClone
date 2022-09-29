const express = require('express');

const Project = require("./projects.schema");

const app = express.Router();
app.get("/", async(req,res)=>{
    let p = await Project.find();
    res.send(p);
})

app.post("/", async (req,res)=>{
    let project = await Project.create();
    res.send(project)
})
module.exports = app;
