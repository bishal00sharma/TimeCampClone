const express = require('express');
var cors = require('cors')
require("dotenv").config({path: __dirname+"/config.env"})
const dbconnect = require("./config/dbConnect");
const tasksRouter=require("./features/Tasks/tasks.router");

const userRouter = require("./features/Users/users.router");
const projectRouter = require("./features/Projects/projects.router");

const app = express();
app.use(express.json());
app.use(cors())

app.use("/users", userRouter);
app.use("/tasks",tasksRouter);
app.use("/projects",projectRouter);


app.get("/", (req, res)=>{
    res.send("working fine");
})

app.listen(process.env.PORT, async ()=>{
    await dbconnect();
    console.log(`Listening on http://localhost:${process.env.PORT}`);
})