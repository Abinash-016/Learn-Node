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





const fs =require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'files');

for(i=1; i<5; i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt","textfile no"+i);
}
fs.readdir(dirPath,(error,files)=>{
    console.log(files);
});
