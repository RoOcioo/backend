const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    profilePicture: String
})

const userModel = mongoosea.model("User", userSchema)

module.exports = userModel
