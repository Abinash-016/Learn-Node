const express=require('express');
const path=require('path');
const app=express();

const htmlPath=path.join(__dirname,'Htmlpages')

// app.get('', (req,resp)=>{
//     resp.send("Hello, this is home page")
// });

// app.get('/about', (req,resp)=>{
//     resp.send("Hello, this is About page")
// });




app.use(express.static(htmlPath));

app.listen(5000);

