const express = require('express');

const users = require("./users.schema");
const app = express.Router();


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

// API request to get all User
app.get("/",authMiddleware, async (req,res)=>{
    let u = await users.find()
    res.send(u);
})
// app.get("/:id",authMiddleware, async (req,res)=>{
//     let id=req.params.id ;
//     let u = await users.find({_id})
//     res.send(u);
// })

// API request to delete User Id
app.delete("/", authMiddleware, async(req,res)=>{
    let id = req.userId;
    let delete_user = await users.deleteOne({id});
    res.send("User Id deleted Successfully!");
})

// API request to update User details
app.patch("/", authMiddleware, async(req,res)=>{
    let id = req.userId;
    let update = await users.updateOne({"_id":id},{$set: {...req.body}});
    res.send("User Details Updated Successfully!");
})

// API request to User signing up
app.post("/signup", async (req,res)=>{
    let {email} = req.body;
    try{
        let user = await users.findOne({email});
        if(user){
         return res.status(401).send("Email id already exists! Try logging in");
        }

        let newUser = await users.create(req.body);
        res.send({
            token : `${newUser.id}:${newUser.email}:${newUser.password}`
        });
    }catch(e){
        res.status(500).send(e.message)
    }
})

// API request to User logging in
app.post("/login", async (req,res)=>{
    let { email, password } = req.body;
    try {
        let user = await users.findOne({email,password});
        if(!user){
            return res.status(401).send("Incorrect credentials");
        }
        res.send({
            token : `${user.id}:${user.email}:${user.password}`
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
          "tags" :  req.body.tags
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