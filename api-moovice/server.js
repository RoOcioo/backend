const express = require('express');
const cors = require("cors");
const dataPopularMovies = require('./datapopularmovies.js')
const dataWeeklyMovies = require('./dataweeklymovies.js')

const app = express();
app.use(cors())

const port = 8000;


app.get('/movies/popular', (req, res) => {
    res.json(dataPopularMovies);
});

app.get('/movies/weekly', (req, res) => {
    res.json(dataWeeklyMovies);
});


app.listen(port, () => {
    console.log('Server started on port: ' + port);
});