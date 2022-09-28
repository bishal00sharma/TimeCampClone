const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("working fine");
})

app.listen(8080, async ()=>{
    console.log("Listening on http://localhost:8080");
})