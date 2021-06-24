const express = require("express");
const router = express.Router()
const {signUp, logIn} = require ('../controllers/authControllers.js');
const { validationSignup, validationLogin } = require("../middlewares/validationsMiddlewares")

router.post("/signup", validationSignup, signUp)

router.post("/login", validationLogin, logIn)

module.exports = router
