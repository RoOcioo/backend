const express = require("express")
const cors = require("cors")
const { superHeros } = require("./superHeros.js")

const app = express()

app.use(express.json()) 
app.use(cors());

const port = 9001

const transformName = (req, res, next) => {
  
    next()
  };
const debug = (req, res, next) => {
    console.log("Server..");

    next()
}

app.get("/heroes", (req, res) => {
    
    res.json({
        superHeros
    })
})

app.get("/heroes/:name", (req, res) => {
    const name = req.params.name
    const heroeFound = superHeros.find(elem => {
        return elem.name.toLowerCase() === name.toLowerCase()
    })

    res.json({
        heroeFound
    })
})

app.get("/heroes/:name/powers", (req, res) => {
    const name = req.params.name
    const heroeFound = superHeros.find(elem => {
        return elem.name.toLowerCase() === name.toLowerCase()
    }) 
    

    res.json({
        powerFound: heroeFound.power
    })
})
  app.post("/heroes", transformName, (req, res) => {
  const newsuperHeros = req.body
superHeros.push(newsuperHeros)
     

    res.json({
         message: "OK heros ajouté"
     })
})


app.post("/heroes/:name/powers", (req, res) => {
    const name = req.params.name
    const newPower = req.body.power

    const heroeFound = superHeros.find(elem => {
        if (elem.name.toLowerCase() === name.toLowerCase()) {
            return elem.power.push(power)
        }
    })


    res.json({
        message: "Pouvoir ajouté!"
    })
})



app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})
 
