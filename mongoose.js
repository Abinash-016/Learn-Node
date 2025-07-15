const mongoose=require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/Flipkart");
    const ProductSchema=new mongoose.Schema({
        name:String
    });

    const ProductModel=mongoose.model('products', ProductSchema);
        let data=new ProductModel({name:"ABinash"});
        let result=await data.save();
        console.log(result);
        
}

main();