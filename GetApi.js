const express =require ('express');
const dbConnect =require('./dbConnect');

const app= express();

app.get('/', (req,resp)=>{
    resp.send({name:'Abinash'})
});

app.listen(5000);