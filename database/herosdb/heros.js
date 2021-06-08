const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

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
