const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/e-comm';

const main = async()=>{
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

main();