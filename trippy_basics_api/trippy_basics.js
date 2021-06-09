const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Restaurant = require('./model/restaurant');
const Hotel = require('./model/hotel');

const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/trippy_basics', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

app.get('/', (req, res) => {
  res.json('Trippy');
});

app.listen(port, () => {
  console.log(`Serveur à l'écoute dans le port ${port} `);
});