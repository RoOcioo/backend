const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userModel = require("./models/user")

mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("There was a problem when connection to the database")
    } else {
        console.log("I'm connected to the database")
    }
})

const port = config.port

const app = express()

app.use(express.json())
app.use(cors())

const port = 8000



app.use("/auth", authRoutes)
app.use("/users", usersRoutes)


app.listen(port, () => {
    console.log("The server is waiting for requests")
})
