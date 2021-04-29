
const express = require("express")
const app = express();

const countries  = require("./dataCountries.js")



const port = 8000

app.get("/countries", (req,res) => {

    res.json(countries)
})

app.get("/country/:name",(req,res) =>{
    
    let pays= req.params.name
    const countriesCount=[]
   
    for (let i=0;i<countries.length;i++){
       
        if(pays===countries[i].name){
          countriesCount.push(countries[i])
    }
   }
     res.json(countriesCount)

})

app.listen(port, () => 
    console.log(`Serveur à l'écoute dans le port ${port}`)
)


