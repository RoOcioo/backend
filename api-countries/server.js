var express = require("express")
var app = express();


app.get('/countries', function(req, res) {
    var countries = ["Argentine", "France", "Italie", "Anglaterre", "Alemagne"];
    res.json(countries);
})


const port = 8002;
app.listen(port, function() {
    console.log(`Serveur lancé `+ port);
});