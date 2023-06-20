const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();


//routes
const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");

dotenv.config();

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongoDB")
    } catch (error) {
        throw error
    }
}

app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);

app.listen(process.env.PORT,()=>{
    connect();
    console.log(`Example app listening on port ${process.env.PORT}`);
});