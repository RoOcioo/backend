var express = require('express');
var app = express();

const authors = [
    {   
        author: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {   
        author: "William Shakespeare", 
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {   
        author: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {   
        author: "Oscar Wilde", 
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
];



app.get('/authors/:id/books', function(req, res) {
    
    var books = authors[req.params.id - 1]
    var listBooks = [
        "Beowulf",
        "Hamlet, Othello, Romeo and Juliet, MacBeth",
        "Oliver Twist, A Christmas Carol",
        "The Picture of Dorian Gray, The Importance of Being Earnest"
    ]

    var books = listBooks[books];

    res.send(books)
})

app.get("/json/authors/:id", function (req, res) {
    var books = req.params.id - 1;

    var author = authors[books]

    var resultObj = {
        name: author.author,
        nationality: author.nationality
    }

    res.json(resultObj)
})

app.get("/json/authors/:id/books", function (req, res) {
    var id = req.params.id;

    var author = authors[id - 1];

    res.json({
        books: author.books
    })
})

const port = 8000;

app.listen(port, function() {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});
