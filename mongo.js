const {MongoClient} =require('mongodb');
const url='mongodb://localhost:27017'
const client = new MongoClient(url);

async function getData(){
    let result= await client.connect();
    let db = result.db('Flipkart');
    let collection = db.collection('products');
    let response= await collection.find({}).toArray();
    console.log(response);
}
getData();
