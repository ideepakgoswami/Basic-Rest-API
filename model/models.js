const mongoose=require("mongoose");

// DATABASE SCHEMA
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
})

// DATABASE MODEL/COLLECTION 

const Product = new mongoose.model('Product',productSchema);

module.exports = Product;