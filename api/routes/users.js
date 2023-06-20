const User = require("../models/User.js");
const express = require("express");

const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const userId = req.body._Id;
        const user = await User.findById(userId)
        res.status(200).json(user);    
    } catch (error) {
        res.status(400).json({"error ":error});
    }
});


router.get("/get-users", async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);    
    } catch (error) {
        res.status(400).json({"error ":error});
    }
});
module.exports = router;