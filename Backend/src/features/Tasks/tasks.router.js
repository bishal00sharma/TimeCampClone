const express=require("express");
const Task = require("./tasks.schema");

const app = express.Router();
const fs=require('fs');
app.use(express.json());
// const dbFile=fs.readFileSync(`${__dirname}/tasks.json`,{encoding:"utf-8"});
// const db=JSON.parse(dbFile);
// let tasks = db.tasks;

// const updatedb = (upadtedData) => {
//     fs.writeFileSync(`${__dirname}/tasks.json`,JSON.stringify(upadtedData) ,{encoding:"utf-8"
//     });
// }
//Fetching Data
app.get("/",async(req,res)=>{
    let tasks = await Task.find()
    res.send( tasks )
 })

 //Posting Data
app.post("/", async(req,res)=>{
  
    try{
        // tasks = [...tasks,{
        //     ...req.body,
        // }]
        // updatedb({...db,  tasks});
        let newTask =await Task.create(req.body)
        res.send(newTask)
      }
    catch(err){
        res.status(500).send(err.message);
    }}
)
//Deleting Data
app.delete("/:id", async(req,res) => {
    try{
    let {id} = req.params ; 
    let deleted = await Task.deleteOne( { "_id" :id } );
    // let index= tasks.findIndex((t) => t.id === Number(id));
    // tasks.splice(index,1) ;
    // updatedb({...db,  tasks});
    res.send("Deleted tasks "+deleted);
}
catch(err){
    res.status(500).send(err.message);
}
})
//Patch Data
app.patch("/:id", async(req,res)=>{
    let {id} =req.params;
    // tasks = tasks.map(t => {
    //     if(t.id ===Number(id)){
    //         return {
    //             ...t,
    //             ...req.body
    //         }
    //     }
    //     else return p;
    // })
    await Task.updateOne({ "_id" :id },{...req.body})
    // updatedb({...db,  tasks});
    res.send("Patched done")
})

module.exports =app;