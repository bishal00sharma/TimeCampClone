const express = require('express');
const dbconnect = require("./config/dbConnect");

const app = express();

app.get("/", (req, res)=>{
    res.send("working fine");
})

app.listen(8080, async ()=>{
    await dbconnect();
    console.log("Listening on http://localhost:8080");
})