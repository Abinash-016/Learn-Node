const mongoose=require('mongoose');

   const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number
    });

// const saveInDb = async ()=>{
    // await mongoose.connect("mongodb://localhost:27017/Flipkart");
 

//     const ProductModel=mongoose.model('products', ProductSchema);
//         let data=new ProductModel({name:"13 s", price:40000});
//         let result=await data.save();
//         console.log(result);
        
// }

// saveInDb();


const updateInDb = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/Flipkart");

     const ProductModel=mongoose.model('products', ProductSchema);
     let data= await ProductModel.updateOne(
        {name:"13 s"},
        {$set:{
            price:39900
        }}

     )
}
updateInDb();



const deleteInDb= async ()=>{

    const ProductModel=mongoose.model('products', ProductSchema);
    let data= await ProductModel.deleteOne({name:"Reno 10 5G"});
}

deleteInDb();