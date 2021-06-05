const express = require("express")
const cors = require("cors")
const { superHeros } = require("./superHeros.js")

const app = express()

const debug = (req, res, next) => {
    console.log("Server..");

    next()
}

app.use(express.json()) 
app.use(cors());
app.use(debug);

const port = 9001


const transformName = (req, res, next) => {
  if (req.body.name === undefined) {
      res.json({
          errorMessage: "To add a hero send at least he's name"
      })
  } else {
      req.body.name = req.body.name.toLowerCase()
    
    next()
  }
};

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
    const name = req.params.name.toLowerCase()
    

    const heroeFound = superHeros.find(elem => {
        return name === elem.name.toLowerCase();
        
    });
    if (heroeFound) {
        const newPower = req.body.power;
        heroeFound.power.push(newPower);
    
    res.json({
        message: "Pouvoir ajouté!"
    })
    } else {
         res.json({
         errorMessage: 'Heros pas trouvé',
    });
  }
});

const testingName = (req, res, next) => {
    const name = req.params.name.toLowerCase();

    const newsuperHeros = superHeros.find (elem => {
        return elem.name.toLowerCase() === name
    })
    console.log(newsuperHeros);

    if (newsuperHeros) {
        next();
    } else {
        res.json({
            errorMessage: "Heros dont exist"
        })
    }
    
  };

app.delete("/heroes/:name", testingName, (req, res) => {
   const name = req.params.name.toLowerCase();

//    superHeros = superHeros.filter(elem => {
//         return elem.name.toLowerCase() !== name
//     })

for (var i = 0; i < superHeros.length; i++) {
    if (superHeros[i].name.toLowerCase() === name) {
        superHeros.splice(i, 1)
    }
}

    res.json({
        message: `Hero ${name} effacé correctement`
    }) 
    
})
app.delete("/heroes/:name/power/:power", testingName, (req, res) => {
    const name = req.params.name.toLowerCase()
    const newPower = req.params.power.toLowerCase()

    const newsuperHeros = superHeros.find(elem => {
        return elem.name.toLowerCase() === name
    })
    const indexPower = newsuperHeros.power.findIndex(elem => {
        return elem === newPower
    })

    if (indexPower > -1) {
        newsuperHeros.power.splice(indexPower, 1)

        res.json({
            message: `Le pouvoir ${newPower} de ${name} a été effacé correctement`
        })
    } else {
        res.json({
            message: `Le pouvoir ${newPower} n'existe pas dans l'héro ${name}`
        })
    }

})
app.put("/heroes/:name", testingName, (req, res) => {
    const name = req.params.name.toLowerCase()
    const newsuperHeros = req.body
    
    const heroId = superHeros.findIndex(elem => {
        return elem.name.toLowerCase() === name
    })

    superHeros[heroId] = newsuperHeros

    // superHeros.splice(heroId, 1, newHero) // Same as above

    res.json({
        message: `${name} a été remplace correctement`
    })
})



 

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})
 
