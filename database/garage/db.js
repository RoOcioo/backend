

const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

mongoose.connect('mongodb://localhost:27017/garage', (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
}) ;

const car = new mongoose.Schema({
    id : ID,
    brand : String,
    model: String,
    year: Number,
    created: { type: Date, default: Date.now },
});

const car = mongoose.model('Car', car);

const premierCar = new car({
  brand: 'Renault',
  model: 'Espace',
  year: 1999
});

const deuxiemeCar = new car({
  brand: 'Renault',
  model: 'Scenic',
  year: 2004
});

const troisiemeCar = new car({
  brand: 'Peugeot',
  model: '308',
  year: 2017,
});

car.save();

car.findById({_id: "60be1877ce7d1d41388dc6d9"}, (err, car) => {
    if (!err) {
      console.log(car); 
    }
  });