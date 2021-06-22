const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: { String, unique: true },
    email: { String, unique: true },
    password: {String, required: true },
    created: { type: Date, default: Date.now }
})

const User = mongoose.model("User", UserSchema)



module.exports = User