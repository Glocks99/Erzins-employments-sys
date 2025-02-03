const usermodel = require("../models/authmodels.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const transporter = require("../config/mailer.js")


const register = async(req,res) => {
    const {username,email,password,role, phone,skills} = req.body

    if(!username || !email || !password) {
        return res.json({success: false, msg: "required fields"})
    }

    try {
        const existingAcc = await usermodel.findOne({email})

        if(existingAcc) {
            return res.json({success: false, msg: "Account already exists"})
        }

        const hashed = await bcrypt.hash(password, 10)

        const newUser = await usermodel({
            username,
            email,
            password: hashed,
            role,
            phone,
            skills
        })

        await newUser.save()

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"})

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        const mailOptions = {
            from: "jameslarbie30@gmail.com",
            to: email,
            subject: "Welcome to Erzins",
            text: `You registered to our website with this id  ${newUser.email}`
        }

        // await transporter.sendMail(mailOptions)

        return res.json({success: true, msg: "Account created successfully"})
    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

const login = async(req,res) => {
    const {email,password} = req.body

    if(!email || !password) {
        return res.json({success: false, msg: "email and password required"})
    }

    try {
        const user = await usermodel.findOne({email})

        if(!user) {
            return res.json({success: false, msg: "Email not found"})
        }

        const isMatchPassword = await bcrypt.compare(password, user.password)

        if(!isMatchPassword) {
            return res.json({success: false, msg: "wrong passwod"})
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"})

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.json({success: true, msg: "Logged in"})

    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

const logout = async(req,res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV = "production",
            sameSite: process.env.NODE_ENV = "production" ? "none" : "strict",
        })

        return res.json({success: true, msg: "Logged out"})

    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

const sendVerifyOtp = async(req,res) => {
    const {userId} = req.body

    if(!userId) {
        return res.json({success: false, msg: "log in again"})
    }

    try {
        const user = await usermodel.findById(userId)

        if(!user) {
            return res.json({success: false, msg: "cant find account"})
        }

        if(user.isAccountVerified) {
            return res.json({success: false, msg: "Account already verified"})
        }

        const otp = String(Math.floor(100_000 + Math.random() * 900_000))

        user.VerifyOtp = otp

        user.VerifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000

        await user.save()

        const mailOptions = {
            from: "JamesLarbie30@gmail.com",
            to: user.email,
            subject: "Verify your Email",
            text: `Hi there 👋, please use this otp: ${otp} to verify your email.`
        }
        
        // await transporter.sendMail(mailOptions)

        return res.json({success: true, msg: "Otp sent to your email"})
    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

const verifyOtp = async(req,res) => {
    const {otp, userId} = req.body

    if(!otp || !userId) {
        return res.json({success: false, msg: "Missing details"})
    }

    try {
        const user = await usermodel.findById(userId)

        if(user.VerifyOtp === "" || user.VerifyOtp != otp) {
            return res.json({success: false, msg: "OTP is incorrect"})
        }

        if(user.VerifyOtpExpireAt < Date.now()) {
            return res.json({success: false, msg: "OTP is expired"})
        }

        user.isAccountVerified = true

        user.VerifyOtp = ""

        user.VerifyOtpExpireAt = 0

        await user.save()

        return res.json({success: true, msg: "Account is now verified"})
    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

const isAunthenticated = async(req,res) => {
    try {
        return res.json({success: true})
    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

const resetOtp = async(req,res) => {
    const {email} = req.body

    if(!email) {
        return res.json({success: false, msg: "email is required"})
    }

    try {
        const user = await usermodel.findOne({email})

        if(!user) {
            return res.json({success: false, msg: "account not found"})
        }

        const otp = String(Math.floor(100_000 + Math.random() * 900_000))

        user.resetOtp = otp

        user.resetOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000

        await user.save()

        const mailOptions = {
            from: "JamesLarbie30@gmail.com",
            to: email,
            subject: "Reset your password 🔑",
            text: `Hi there 👋, please use this otp: ${otp} to reset your account.`
        }
        
        // await transporter.sendMail(mailOptions)

        return res.json({success: true, msg: "Reset Password Otp sent to your email"})

    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

const resetPassword = async(req,res) => {
    const {email, otp, newPassword} = req.body

    if(!email || !otp || !newPassword) {
        return res.json({success: false, msg: "Missing Details"})
    }

    try {
        const user = await usermodel.findOne({email})

        if(!user) {
            return res.json({success: false, msg: "account not found"})
        }

        if(user.resetOtp === "" || user.resetOtp != otp) {
            return res.json({success: false, msg: "Invalid OTP"})
        }

        if(user.resetOtpExpireAt < Date.now()) {
            return res.json({success: false, msg: "Expired OTP"})
        }

        const hash = await bcrypt.hash(newPassword, 10)

        user.password = hash

        user.resetOtp = ""

        user.resetOtpExpireAt = 0

        await user.save()

        return res.json({success: false, msg: "Password is reset successfully"})

    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

module.exports = {register,login,logout, sendVerifyOtp, verifyOtp, isAunthenticated, resetOtp, resetPassword}