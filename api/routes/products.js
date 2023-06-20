const Product = require("../models/Product.js");
const express = require("express");

const router = express.Router();

router.post("/add-product", async(req,res)=>{
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json({"msg ": "item added successfully."})
    } catch (error) {
        res.status(400).json({"error ":error});
    }
})

router.get("/get-products", async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);    
    } catch (error) {
        res.status(400).json({"error ":error});
    }
});

router.put("/update-product", async(req,res)=>{
    try {
        await Product.findOneAndUpdate({_id:req.body.productId},req.body)
        res.status(200).json({"msg": " Item updated successfully."})
    } catch (error) {
        res.status(400).json({"error ": error});
    }
});

router.delete("/delete-product", async(req,res)=>{
    try {
        await Product.findOneAndDelete({_id:req.body.productId})
        res.status(200).json({"msg": " Item deleted successfully."})
    } catch (error) {
        res.status(400).json({"error":error});
    }
})

module.exports = router;