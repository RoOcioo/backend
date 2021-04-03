var express = require('express');
var app = express();

const aAuthorsBooks = [
    {   
        author: "Lawrence Nowell, UK",
        books: "Beowulf",
    },
    {   
        author: "William Shakespeare, UK",
        books: "Hamlet, Othello, Romeo and Juliet, MacBeth",
    },
    {   
        author: "Charles Dickens, US",
        books: "Oliver Twist, A Christmas Carol",
    },
    {   
        author: "Oscar Wilde, UK",
        books: "The Picture of Dorian Gray, The Importance of Being Earnest",
    },
];

app.get('/authors/:id', function(req, res) {
    
    var info = aAuthorsBooks[req.params.id - 1]
    // res.json(info);
    res.send(info.id);
})

app.get('/authors/:id/books/:books', function(req, res) {
    
    var books = aAuthorsBooks[req.params.id - 1]
    // res.json(books);
    res.send(books.books);
})

const port = 8000;

app.listen(port, function() {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});
