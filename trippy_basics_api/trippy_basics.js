const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Restaurant = require('./model/restaurant');
const Hotel = require('./model/hotel');


mongoose.connect('mongodb://localhost:27017/trippy_basics',
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected");
    }
  });

const port = 8000;

const app = express();

const debug = (req, res, next) => {
  console.log("I received a request!");

  next()
}

app.use(cors());
app.use(express.json());
app.use(debug)


app.get('/hotels', (req, res) => {
  try {
    const hotels = await Hotel.find()
    res.json('hotelsroute');
  } catch (err) {
    console.log(err)
    res.status(500).json({ errormessage: "There was a problem :(" })
  }
});


app.get('/hotels/:id', async (req, res) => {
  try {
    const hotelId = req.params.id
    const hotel = await Hotel.findById(hotelId)
    if (hotel) {
      res.json({ hotel })
    } else {
      res.json({
        message: "Hotel not found"
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ errormessage: "There was a problem :(" })
  }
});


app.post('/hotels', async (req, res) => {
  try {
    const hotel = req.body
    const newHotel = await Hotel.create(hotel)
    res.json({
      message: "New Hotel"
    })
  } catch (err) {
    console.log(error)
    res.status(500).json({ errormessage: "There was a problem :(" })
  }
});


app.put('/hotels/:id', async (req, res) => {
  try {
    const hotelId = req.query.id
    const name = req.query.name
    console.log('HotelId', hotelId, 'name', name);
    const hotel = await Hotel.updateOne({ _id: hotelId }, { name: name })
    res.json('nouveauhotel');
  } catch (err) {
    res.status(500).json({ errormessage: "There was a problem :(" })
  }
});


app.delete('/hotels/:id', async (req, res) => {
  try {
    const hotelId = req.params.id
    const effacerHotel = await Hotel.findByIdAndDelete(hotelId)

    res.json({
      message: 'effacerhotel'
    })
  } catch (err) {
    console.log(error);
    res.status(500).json({ errormessage: "There was a problem :(" })
  }
})

app.get("*", (req, res) => {
  res.json({
    errorMessage: "The route was not found"
  }, 404)
})


app.listen(port, () => {
  console.log(`Serveur à l'écoute dans le port ${port} `);
});