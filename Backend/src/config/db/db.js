const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected successfully");
        return res;
    } catch (error) {
        console.log("error in connecting to mongodb", error);
    }
}

module.exports = connectDB;