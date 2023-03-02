//REQUIRING PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


//EXPRESS CONFIG
const app = express();

//PORT NO.
PORT = 4500;

//BODY-PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// MONGODB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/rest_api") //DB NAME:- rest_api(you can use your own)
    .then(()=>{
        console.log("connected");
    })
    .catch((error) => { console.log("The Error is: ", error.name) });


// DATABASE SCHEMA
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
})


// DATABASE MODEL/COLLECTION 
const Product = new mongoose.model('Product', productSchema);



//CREATE PRODUCT API
app.post("/api/v1/product/new", async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})


//READ PRODUCT API
app.get("/api/v1/products", async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
})

//UPDATE PRODUCT API
app.put("/api/v1/product/:id", async (req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    else {
        product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message:"Product Updated Successfully",
            product
        });
    }
});


//DELETE PRODUCT API
app.delete("/api/v1/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    else {
        await product.deleteOne();

        res.status(200).json({
            success: true,
            message:"Product Deleted Successfully"
        })
    }


})



//HOME PAGE ROUTE(OPTIONAL)
app.get("/", (req, res) => {
    res.send("I'm Home Page Route");
})


//SERVER LISTENING
app.listen(PORT, (req, res) => {
    console.log(`server listening on port no.: ${PORT}`);
})