const jwt = require('jsonwebtoken')
const config = require('../config')

function verifyToken (req, res, next) {
    const token = req.headers['x-access-token']
    if(!token) {
        res.status(401).json({
            auth: false, 
            message: 'no token provided'
        })
    }
    const decoded = jwt.verifyToken(token, config.secret);
    req.userId = decoded.userId
    next()
}

module.exports = verifyToken