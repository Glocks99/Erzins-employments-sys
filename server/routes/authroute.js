const { register, login, logout, sendVerifyOtp, verifyOtp, resetOtp, isAunthenticated, resetPassword } = require("../controllers/authcontroller")
const userAuth = require("../middleware/userauth")

const authroute = require("express").Router()

authroute.post("/register", register)
authroute.post("/login", login)
authroute.post("/logout", logout)
authroute.post("/send-otp",userAuth, sendVerifyOtp)
authroute.post("/verify-email", userAuth, verifyOtp)
authroute.post("/is-auth",userAuth, isAunthenticated)
authroute.post("/reset-otp", resetOtp)
authroute.post("/reset-password", resetPassword)

module.exports = authroute