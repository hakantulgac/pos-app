const Bill = require("../models/Bill.js");
const express = require("express");

const router = express.Router();

router.post("/add-bill", async(req,res)=>{
    try {
        const newBill = new Bill(req.body);
        await newBill.save();
        res.status(200).json({"msg ": "item added successfully."})
    } catch (error) {
        res.status(400).json({"error ":error});
    }
})

router.get("/get-bills", async(req,res)=>{
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);    
    } catch (error) {
        res.status(400).json({"error ":error});
    }
});
module.exports = router;