const express = require("express");
const router = express.Router()

const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');

const app = express();

app.use(express.json());

const port = 8001

router.get("/", debug, async (req, res) => {
    try {
        const students = await studentModel.find().exec()

        res.json(students)
    } catch (error) {
        console.error("Error in GET /students", error)

        res.json({
            message: "Error when finding students :("
        }, 500)
    }
})
app.post('/signup',
  expressValidator.body("username").isEmail(),
  expressValidator.body("password").custom((value) => {
    var schema = new passwordValidator();
    schema
      .is().min(8) // Minimum length 8
      .is().max(100) // Maximum length 100
      .has().uppercase() // Must have uppercase letters
      .has().lowercase() // Must have lowercase letters
      .has().digits(2) // Must have at least 2 digits
      .has().not().spaces() // Should not have spaces
      .is().not().oneOf(["Passw0rd", "Password123"]);
    return schema.validate(value);
  }),
    (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty() === false) {
            res.json({
                errors: errors.array() // to be used in a json loop
            });
            return;
        } else {
            res.json({
                success: true,
                message: 'User will be saved'
            });
        }
    }
);

app.listen(8000, () => {
  console.log('Server started');
});