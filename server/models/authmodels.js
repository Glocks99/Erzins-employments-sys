const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, default: ""},
    role: {type: String, required: true, enum: ["user", "technician"], default: "user"},
    skills: {type: [String], default: []},
    availabilityStat: {type: String, enum: ["available", "unavailable", "busy"]},
    VerifyOtp: {type: String, default: ""},
    VerifyOtpExpireAt: {type: Number, default: 0},
    isAccountVerified: {type: Boolean, default: false},
    resetOtp: {type: String, default: ""},
    resetOtpExpireAt: {type: Number, default: 0},
})


const usermodel = mongoose.models.users || mongoose.model("users", userSchema)

module.exports = usermodel