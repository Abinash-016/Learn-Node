// const fs=require('fs');

// const x=20
// console.log(x)

// fs.writeFileSync("Hello.txt", "Abinash")




// const multiply=(a,b)=>{
//     return(a*b);
// }

// console.log("Hello, there I'm Abinash");

// console.log(multiply(10,32));




// const data=require('./data')
// const http = require('http');

// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'Content-type': 'application\json' });
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);




// const fs=require('fs');
// const input=process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]),
//     console.log("File deleted");
    
// }
// else{
//     console.log("invalid input");
    
// }





// const fs =require('fs');
// const path =require('path');
// const dirPath=path.join(__dirname,'files');

// for(i=1; i<5; i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","textfile no"+i);
// }
// fs.readdir(dirPath,(error,files)=>{
//     console.log(files);
// });



// const fs =require('fs');
// const path =require('path');
// const dirPath=path.join(__dirname,'crud');
// const filepath=`${dirPath}/file.txt`;


// fs.writeFileSync(filepath,"Text file");  //create a file 
// fs.readFile(filepath,'Utf8',(err,item)=>{ //read the files content
//     console.log(item);
// })


// fs.appendFile(filepath," Added",(err)=>{ //update the file 
//     if(!err){
//         console.log("file is updated check the file's content");
        
//     }
// })


// fs.unlinkSync(`${filepath}`); //deleted the file 




//                                       How to handle asynchronous data 
let a=10;
let b=5;

const waitingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },2000)
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})