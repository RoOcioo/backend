const express = require('express');
const user = require('../models/user');
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../config')
const verifyToken = require('./verifyToken')


router.post('/signup', async (req, res, next) => {
    const {username, email, password} = req.body;
    const user = new User({
        username,
        email,
        password
    })
    user.password = await user.encryptPassword(user.password)
    await user.save();

    const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 60 * 60 * 24
    })
    res.json({auth: true, token})

})

router.get('/profile', verifyToken, async (req, res, next) => {

const user = await User.findById(req.userId, { password: 0})
if(!user) {
    res.status(404).json('no user found')
}
    res.json(user)
})


router.post('/signin', async (req, res, next) =>{
    const { email, password} = req.body
    
    const user = await User.findOne({email: email})
    if(!user) {
        res.status(404).json('The email doesnt exists')
    }

    const passwordIsValid = await user.validatePassword(password);
    if(!passwordIsValid) {
        res.status(401).json({auth: false, token: null})
    }

    const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 60 * 60 * 24
    })
    res.json({auth: true, token})
})


module.exports = router


