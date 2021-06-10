const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Restaurant = require('./model/restaurant');
const Hotel = require('./model/hotel');

const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/trippy_basics',
{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

app.get('/', (req, res) => {
  res.json('Trippy');
});


app.get('/hotels', (req, res) => {
  res.json('hotelsroute');
});


app.get('/hotels/:id', (req, res) => {
  res.json('hotelsidroute');
});


app.post('/hotels', (req, res) => {
  console.log(req.body);
});


app.put('/hotels/:id', (req, res) => {
  console.log(req.query);
  res.json('nouveauhotel');
});


app.delete('/hotels/:id', (req, res) => {
  res.json('effacerhotel');
});


app.listen(port, () => {
  console.log(`Serveur à l'écoute dans le port ${port} `);
});