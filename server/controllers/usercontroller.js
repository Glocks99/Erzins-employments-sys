const usermodel = require("../models/authmodels")


const getUserData = async(req,res) => {
    const {userId} = req.body

    try {
        const user = await usermodel.findById(userId)

        if(!user) {
            return res.json({success: false, msg: "account not found"})
        }


        return res.json({
            success: true,
            userData: {
                username: user.username,
                isAccountVerified: user.isAccountVerified,
                role: user.role,
                skills: user.skills,
                phone: user.phone
            }
        })
    } catch (error) {
        return res.json({success: false, msg: error.message})
    }
}

module.exports = getUserData