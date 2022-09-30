const express = require('express');

const users = require("./users.schema");
const app = express.Router();

app.get("/",async (req,res)=>{
    let u = await users.find()
    res.send(u);
})

app.post("/signup", async (req,res)=>{
    let {email} = req.body;
    try{
        let user = await users.findOne({email});
        if(user){
         return res.status(401).send("Email id already exists! Try logging in");
        }

        let newUser = await users.create(req.body);
        res.send({
            token : `${newUser.id}:${newUser.email}:${newUser.password}}`
        });
    }catch(e){
        res.status(500).send(e.message)
    }
})

app.post("/login", async (req,res)=>{
    let { email, password } = req.body;
    try {
        let user = await users.findOne({email,password});
        if(!user){
            return res.status(401).send("Incorrect credentials");
        }
        res.send({
            token : `${user.id}:${user.email}:${user.password}}`
        })
    }catch(e) {
        req.status(500).send(e.message)
    }
})
//Patch for adding Tag
app.patch("/tags/:id", async(req,res)=>{
    let {id} =req.params;
     await users.updateOne({ "_id" :id },{
 $push : {
          "tags" :  req.body 
        }
               
      });
      res.send("Patched done")
});
    
app.get("/tags/:id", async(req,res) => {
    try{
    let {id} = req.params ; 
    let user= await users.findOne( { "_id" :id } );
    res.send(user);
    }
    catch(err){
        res.status(500).send(err.message);
    }
})




module.exports = app;