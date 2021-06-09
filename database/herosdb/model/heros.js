const mongoose = require("mongoose")


const herosSchema = mongoose.Schema({
    name: String,
    power: String,
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String
})
const Heros = mongoose.model("hero", herosSchema)

module.exports = Heros