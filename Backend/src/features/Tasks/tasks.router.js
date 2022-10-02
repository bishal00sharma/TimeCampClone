 const express=require("express");
 const Task = require("./tasks.schema");

 const app = express.Router();
 app.use(express.json());

// API request to get all Projects

app.get("/", async(req,res)=>{
    try{
         let user = req.userId
         let p = await Task.find({user});
         res.send(p);
    }
    catch(err){
        res.status(500).send(err.message);
    }
   
})

// API request to add new Task
app.post("/", async (req,res)=>{
    let task = await Task.create({...req.body, user: req.userId});
    res.send(task)
})
module.exports = app;

// API request to delete Task
app.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let delete_Task = await Task.deleteOne({"_id":id});
    res.status(200).send("Task deleted")
})

// API request to update Task details
app.patch("/:id", async (req,res)=>{
    let id = req.params.id;
    let update = await Task.updateOne({"_id":id},{$set:{...req.body}});
    res.status(200).send("Task Details Updated Successfully!");
})

































// const express=require("express");
// const Task = require("./tasks.schema");

// const app = express.Router();
// const fs=require('fs');
// app.use(express.json());

// //Fetching Data

//  app.get("/", async(req,res)=>{
//     try{
//          let Task = req.projectId
//          let tasks = await Task.find({project});
//          res.send(tasks);
//     }
//     catch(err){
//         res.status(500).send(err.message);
//     }
   
// })

//  //Posting Data
//  app.post("/", async (req,res)=>{
//     let task = await Task.create({...req.body, project: req.projectId});
//     res.send(task)
// })

// // app.post("/", async(req,res)=>{
  
// //     try{
       
// //         let newTask =await Task.create(req.body)
// //         res.send(newTask)
// //       }
// //     catch(err){
// //         res.status(500).send(err.message);
// //     }}
// // )
// //Deleting Data
// app.delete("/:id", async(req,res) => {
//     try{
//     let {id} = req.params ; 
//     let deleted = await Task.deleteOne( { "_id" :id } );
    
//     res.send("Deleted tasks "+deleted);
// }
// catch(err){
//     res.status(500).send(err.message);
// }
// })
// //Patch Data
// app.patch("/:id", async(req,res)=>{
//     let {id} =req.params;
  
//     await Task.updateOne({ "_id" :id },{...req.body})
//     res.send("Patched done")
// })

// module.exports =app;