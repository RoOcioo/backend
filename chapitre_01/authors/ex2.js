var express = require('express');
var app = express();

const arrAuthors = [
    {   id: "1", 
        author: "Lawrence Nowell, UK"
    },
    {   id: "2",
        author: "William Shakespeare, UK"
    },
    {   id: "3",
        author: "Charles Dickens, US"
    },
    {   id: "4",
        author: "Oscar Wilde, UK"
    },
];

app.get('/authors/:id', function(req, res) {
    
    var toto = arrAuthors[req.params.id - 1]
    // res.json(toto);
    res.send(toto.author);
})

const port = 8001;

app.listen(port, function() {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});




     

