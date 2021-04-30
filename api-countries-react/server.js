
const express = require("express")
const app = express();
const cors = require('cors')
app.use(cors())
const countries  = require("./dataCountries.js")



const port = 8000;

app.get("/countries", function (req,res) {
    console.log("countries", countries)
    res.json({
        countries
    })
})

app.get("/countries/:country",(req,res) =>{
    
    const country= req.params.country.toUpperCase()
    console.log("hola",country);
    const countriesCount=[]
   
    for (let i=0;i<countries.length;i++){
       const currCountry=countries[i]
       
        if(currCountry.name.toUpperCase()===country){
          countriesCount.push(currCountry)
    }
   }
   console.log("chau", countriesCount)
     res.json({countriesCount
    })

})

app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`)
});


