const expressValidator = require("express-validator");

const validationUsers = [
    expressValidator.body("username").isLength({ min: 4 }),
    expressValidator.body("email").isEmail(),
    expressValidator.body("age").isNumeric().isInt().isLength({ min: 2, max: 2 }),
    expressValidator.body("city").isIn(['Paris', 'Tokyo', 'Los Angeles'])
]

module.exports = {
    validationUsers
}