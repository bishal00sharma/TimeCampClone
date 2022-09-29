const express = require('express');
const dbconnect = require("./config/dbConnect");
const tasksRouter=require("./features/Tasks/tasks.router");

const userRouter = require("./features/Users/users.router");
const projectRouter = require("./features/Projects/projects.router");

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks",tasksRouter);
app.use("/projects",projectRouter);


app.get("/", (req, res)=>{
    res.send("working fine");
})

app.listen(8080, async ()=>{
    await dbconnect();
    console.log("Listening on http://localhost:8080");
})