const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")
const connectDB = require("../server/config/db")
const authroute = require("./routes/authroute")
const userroute = require("./routes/userroute")
connectDB()

const app = express()


app.use(cors({
    origin: ["http://localhost:5173", "*"],
    methods: ["GET","POST","DELETE"],
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authroute)
app.use("/api/user", userroute)


app.get("/", (req,res) => {
    res.send("server is working fine")
})


app.listen(process.env.PORT || 3000, () => console.log("server is running"))