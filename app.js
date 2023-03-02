const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const Product = require("./model/models");




//PORT NO.
PORT = 4500;




// DATABASE CONNECTION

const dbUrl = "mongodb://127.0.0.1:27017/rest_api";

// var connectWithRetry =()=> {
//     console.log("Called");
//     return mongoose.connect(dbUrl);
// };
// connectWithRetry();
// mongoose.Promise = global.Promise;


mongoose.connect(dbUrl)
    .then(console.log("connected"))
    .catch((error) => { console.log("error is: ", error.name) });


//BODY-PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//API

//CREATE PRODUCT
app.post("/api/v1/product/new", async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})


//READ PRODUCT
app.get("/api/v1/products", async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
})

//UPDATE PRODUCT
app.put("/api/v1/product/:id", async (req,res) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    else{
        product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success:true,
            product
        });
    }
    
})


//DELETE PRODUCT
app.delete("/api/v1/product/:id", async(req,res)=>{
    const product=await Product.findById(req.params.id);

    if(!product){
        res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    else{
    await product.deleteOne();
    
    res.status(200).json({
        success:true
    })
    }


})


app.get("/", (req, res) => {
    res.send("I'm Live");
})




//SERVER LISTENING
app.listen(PORT, (req, res) => {
    console.log(`server listening on port no.: ${PORT}`);
})