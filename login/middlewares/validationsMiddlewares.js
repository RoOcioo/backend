const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');


const validationSignup = [
    expressValidator.body("email").exists().isEmail(),
    expressValidator.body("password").exists().isString().custom(value => {
        const schema = new passwordValidator()

        schema
            .is().min(8)
            .is().max(20)

        return schema.validate(value);

    }),
    expressValidator.body(["firstName", "lastName"]).exists().isString(),
    validate
]

const validationLogin = [
    expressValidator.body("email").exists().isEmail(),
    expressValidator.body("password").exists().isString(),
    validate
]

module.exports = {
  
    validationSignup,
    validationLogin
}