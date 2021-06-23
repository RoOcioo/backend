const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: { String, unique: true },
    email: { String, unique: true },
    password: {String, required: true },
    role: Number
})

const userModel = mongoose.model("User", UserSchema)



module.exports = userModel  