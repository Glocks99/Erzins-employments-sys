const mongoose = require("mongoose")

const connectDB = async(req,res) => {
    mongoose.connection.on("connected", () => { console.log("mongo connected")})
    await mongoose.connect(process.env.MONGODB_URL)
}

module.exports = connectDB