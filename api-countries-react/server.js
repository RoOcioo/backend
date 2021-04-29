
const express = require("express")
const cors = require("./dataCountries")
const { countries } = require("./dataCountries.js")

const app = express()


const port = 8000

app.get("/countries", (req,res) => {

    res.json({
        countries
    })
})

app.get("/country/:name",function(req,res){
    
    const pays= req.params.name
    const countriesCount=[]
   
    for (let i=0;i<countries.length;i++){
       
        if(pays===couentries[i].name){
          countriesCount.push(countries[i])
    }
   }
     res.json(countriesCount)

})

app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})





app.listen(port, () => {
    console.log("Server à l'écoute dans le port 8000");
})
