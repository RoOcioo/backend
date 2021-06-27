const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema ({
    username: String,
    email: String,
    password: String
})

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt)
}

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password)
}

const user = mongoose.model('User', userSchema)
module.exports = user