var express = require('express');
var app = express();

const arrAuthors = [
    {   id: "1", 
        author: "Lawrence Nowell, UK",
        books: "Beowulf",
    },
    {   id: "2",
        author: "William Shakespeare, UK",
        books: "Hamlet, Othello, Romeo and Juliet, MacBeth",
    },
    {   id: "3",
        author: "Charles Dickens, US",
        books: "Oliver Twist, A Christmas Carol",
    },
    {   id: "4",
        author: "Oscar Wilde, UK",
        books: "The Picture of Dorian Gray, The Importance of Being Earnest",
    },
];

app.get('/authors/:id/books', function(req, res) {
    
    var toto = arrAuthors[req.params.id - 1]
    // res.json(toto);
    res.send(toto.books);
})

const port = 8001;

app.listen(port, function() {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});
