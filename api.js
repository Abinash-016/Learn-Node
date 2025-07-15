const express =require ('express');
const app= express();
const dbConnect =require('./dbConnect');


app.post('/', (req,resp)=>{
    resp.send({name:'Abinash'})
});

app.listen(5001);