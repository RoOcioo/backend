var express = require('express');
var app = express();

const arrAuthors = [
    {
        author: "Lawrence Nowell, UK"
    },
    {
        author: "William Shakespeare, UK"
    },
    {
        author: "Charles Dickens, US"
    },
    {
        author: "Oscar Wilde, UK"
    },
];

app.get('/authors/:id', function(req, res) {
    var authors = arrAuthors[req.params.id]
    res.json(authors);
})

const port = 8000;

app.listen(port, function() {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});




     

