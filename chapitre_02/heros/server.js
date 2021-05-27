const express = require("express")
const cors = require("cors")
const superHeros = require("./superHeros.js")

const app = express()

app.use(express.json()) 
app.use(cors());

const port = 9001

const debug = (req, res, next) => {
    console.log("Server..");

    next()
}

app.get("/heroes", (req, res) => {
    
    res.json({
        superHeros
    })
})

app.get("heroes/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const heroeFound = superHeros.find(elem => {
        return elem.id === id
    }) 

    res.json({
        heroeFound
    })
})

app.get("heroes/:id/powers", (req, res) => {
    const id = parseInt(req.params.id)
    const heroeFound = superHeros.find(elem => {
        return elem.id === id
    }) 
    const powerFound = heroeFound.power

    res.json({
        powerFound
    })
})

app.post("/heroes", (req, res) => {
    const newsuperHeros = req.body

    heros.push(newsuperHeros)

    res.json({
        message: "OK heros ajouté"
    })
})


app.post("/heroes/:id/powers", (req, res) => {
    const newPower = req.body

    heros.push(newPower)

    res.json({
        message: "Pouvoir ajouté!"
    })
})



app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})

