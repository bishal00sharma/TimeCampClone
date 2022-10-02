require("dotenv").config({path: __dirname+"/config.env"})
const express = require('express');
var cors = require('cors')
const dbconnect = require("./config/dbConnect");


const tasksRouter=require("./features/Tasks/tasks.router");
const userRouter = require("./features/Users/users.router");
const projectRouter = require("./features/Projects/projects.router");

const users = require("./features/Users/users.schema");

 const authMiddleware = async (req,res,next) => {    
    let token = req.headers.token;
    if(token){
        let [id,email,password] = token.split(":");
        let u = await users.findById(id);
        if(u.email === email && u.password === password){
            req.userId = id;
            next();
        }else{
            res.status(401).send("Not Authorised");
        }
    }else{
        res.status(401).send("Not Authorised");
    }
}


const app = express();
app.use(express.json());
app.use(cors())





app.get("/", (req, res)=>{
    res.send("working fine");
})
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, "../../timecamp/build")));
  app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"timecamp","build","index.html"));

  })
  
}
else{
    app.get("/",(req,res)=>{
        res.send("API Running")
    })
    app.use("/users", userRouter);
    app.use("/tasks",authMiddleware,tasksRouter);
    app.use("/projects",authMiddleware,projectRouter);
}


app.listen(process.env.PORT, async ()=>{
    await dbconnect();
    console.log(`Listening on http://localhost:${process.env.PORT}`);

})





