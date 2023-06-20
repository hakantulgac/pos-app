const Category = require("../models/Category.js");
const express = require("express");

const router = express.Router();

router.post("/add-category", async(req,res)=>{
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json({"msg ": "item added successfully."})
    } catch (error) {
        res.status(400).json({"error ":error});
    }
})

router.get("/get-categories", async(req,res)=>{
    try {
        const categories = await Category.find();
        res.status(200).json(categories);    
    } catch (error) {
        res.status(400).json({"error ":error});
    }
});

router.put("/update-category", async(req,res)=>{
    try {
        await Category.findOneAndUpdate({_id:req.body.categoryId},req.body)
        res.status(200).json({"msg": " Item updated successfully."})
    } catch (error) {
        res.status(400).json({"error ": error});
    }
});

router.delete("/delete-category", async(req,res)=>{
    try {
        await Category.findOneAndDelete({_id:req.body.categoryId})
        res.status(200).json({"msg": " Item deleted successfully."})
    } catch (error) {
        res.status(400).json({"error":error});
    }
})

module.exports = router;