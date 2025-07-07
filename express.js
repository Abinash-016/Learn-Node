const express=require('express');
// const path=require('path');
const app=express();

// const htmlPath=path.join(__dirname,'Htmlpages')


const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide your age")
    }
    else if(req.query.age<18){
        resp.send("Your age is below 18 You cannot access this page.....")
    }
     else{
         next();
    }
   
}

app.use(reqFilter);

app.get('', (req,resp)=>{
    resp.send("Hello, this is home page")
});

app.get('/about', (req,resp)=>{
    resp.send("Hello, this is About page")
});




// app.use(express.static(htmlPath));

app.listen(5001);

