const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()

const port = 9001

mongoose.connect("mongodb://localhost:27017/heros", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const herosSchema = mongoose.Schema({
    name: String,
    power: String,
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String
})
const Heros = mongoose.model("hero", herosSchema)

app.get("/heroes", async (req,res) => {
    try {
        const heros = await Heros.find().exec()

        res.json(heros)
    }
    
    catch (error) {
        console.error("Error", error)

        res.json({
            message: "Error.. "
        })
    }
})
app.get("/heroes/:name", async (req, res) => {

    try {
    const name = req.params.name
    const heroeFound = await Heros.findOne({ name: name })
    res.json({ heroeFound })

} catch (error) {

    res.json({
        heroeFound
    })
}
})

app.get("/heroes/:name/powers", async (req, res) => {

    try {
    const name = req.params.name
    const heroeFound = await Heros.findOne({ name: name })
    res.json({
        powerFound: heroeFound.power
    })

} catch (error) {

    res.json({
       message: "error"
    })
}
})
app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})
 