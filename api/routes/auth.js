const User = require("../models/User.js");
const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/register", async(req,res)=>{
    try {
        const {userName,email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(200).json({"msg ": "A new user created successfully."})
    } catch (error) {
        res.status(400).json({"error ":error});
    }
})

router.post("/login", async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).json({"msg": "User not found!"})

        const validPassword = await bcrypt.compare(req.body.password,user.password);
        
        if(!validPassword){
            res.status(403).json({"error" :"Password is invalid"})
        }
        else{
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(400).json({"error": error});
    }
})

module.exports = router;