var express = require("express")
var app = express();

var countries = ["Argentine", "France", "Italie", "Anglaterre", "Alemagne"];

app.get('/countries', function(req, res) {
  
    res.json(countries);
})


const port = 8002;
app.listen(port, function() {
    console.log(`Serveur lancé `+ port);
});