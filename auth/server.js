const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const config = require("./config.js")
const usersRoutes = require('./routes/usersRoutes')
const userModel = require("./models/user")

const port= 8003
const port = config.port
app.use = (cors())
mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("Connected");
    }
})
app.use("/auth", authRoutes)
app.use('/users', usersRoutes);


app.listen(8003, () => {
    console.log('Server on port', port);
})