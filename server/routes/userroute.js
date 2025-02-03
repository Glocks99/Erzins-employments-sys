const getUserData = require("../controllers/usercontroller")
const userAuth = require("../middleware/userauth")

const userRoute = require("express").Router()

userRoute.get("/getData", userAuth, getUserData)

module.exports = userRoute