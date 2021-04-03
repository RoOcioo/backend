
var express = require("express");
var dataCountries = require("./dataCountries.js")

var app = express();

var port = 8002;

app.get("/country/all/", function (req, res) {
    res.json(dataCountries)
})

app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})
