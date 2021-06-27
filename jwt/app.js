// Config de la app

const express = require('express')
const app = express()
const auth = require('./controllers/authController')
const cors = require('cors')

app.use(express.json()) // reconoce los archivos json
app.use(cors())

module.exports = app;