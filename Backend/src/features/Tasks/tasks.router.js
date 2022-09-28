const express=require("express");
const Task = require("./tasks.schema");

const app = express.Router();
const fs=require('fs');
app.use(express.json());
const dbFile=fs.readFileSync(`${__dirname}/tasks.json`,{encoding:"utf-8"});
const db=JSON.parse(dbFile);
let tasks = db.tasks;

const updatedb = (upadtedData) => {
    fs.writeFileSync(`${__dirname}/tasks.json`,JSON.stringify(upadtedData) ,{encoding:"utf-8"
    });
}

app.get("/",async(req,res)=>{
    let tasks = await Task.find()
    res.send( tasks )
 })

app.post("/", async(req,res)=>{
  
    try{
        tasks = [...tasks,{
            ...req.body,
        }]
        updatedb({...db,  tasks});
        await Task.create(req.body)
        res.send("Data Posted")
      }
    catch(err){
        res.status(500).send(err.message);
    }}
)
app.delete("/:id", async(req,res) => {
    try{
    let {id} = req.params ; 
    await Task.deleteOne( { "_id" :id } );
    let index= tasks.findIndex((t) => t.id === Number(id));
    tasks.splice(index,1) ;
    updatedb({...db,  tasks});
    res.send("tasks");

}
catch(err){
    res.status(500).send(err.message);
}
})


module.exports =app;