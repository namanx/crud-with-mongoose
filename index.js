const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/e-comm';
const mongodb = require('mongodb');



const saveinDB = async()=>{
    await mongoose.connect(url);
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String,
    });

    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"m 10",price:1000});
    let result = await data.save();
    console.log(result);
}
// saveinDB();


const updateinDB =async()=>{
    await mongoose.connect(url);
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String,
    });
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = await ProductsModel.updateOne({name:"m 10"},
    {$set:{name:"m45",price:700}});
    if(data.acknowledged){
        console.log("Hurray")
    }
    console.log(data);
};

// updateinDB();

const deleteinDB = async()=>{
    await mongoose.connect(url);
    const ProductSchema = new mongoose.Schema({
        
        name:String,
        price:Number,
        brand:String,
        category:String
    });

    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = await ProductsModel.deleteOne({name:"m8"});
    if(data.acknowledged){
        console.log("Document is deleted successfully");
    }
    
}

deleteinDB();