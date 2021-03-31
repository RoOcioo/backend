var express = require('express');
var app = express();

var port = 8001;

app.listen(port, function () {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});


app.get('/authors', (req, res) => {
    res.send('Authors API');
  });