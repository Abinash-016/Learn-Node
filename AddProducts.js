const express= require('express');
require('./configMongoose');
const products=require('./product')

const app=express();

app.post("/create", (req,resp)=>{
    resp.send("Created");
});

app.listen(5000);