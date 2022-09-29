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


app.get("/",authMiddleware, async (req,res)=>{
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
            token : `${newUser.id}:${newUser.email}:${newUser.password}`
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
            token : `${user.id}:${user.email}:${user.password}`
        })
    }catch(e) {
        req.status(500).send(e.message)
    }
})


module.exports = app;