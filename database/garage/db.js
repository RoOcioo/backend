

const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

// part 1
mongoose.connect('mongodb://127.0.0.1:27017/garage', (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log("I'm connected to the database");
  }
});

//  part 2
const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  created: { type: Date, default: Date.now },
});

const car = mongoose.model('Car', carSchema);

// part 3
const premierCar = new car({
  brand: 'Renault',
  model: 'Espace',
  year: 1999
});
premierCar.save((err, document) => {
  if(err) console.log(err);
  console.log(document)
})
console.log(car);

const deuxiemeCar = new car({
  brand: 'Renault',
  model: 'Scenic',
  year: 2004
});
deuxiemeCar.save((err, document) => {
  if(err) console.log(err);
  console.log(document)
})
console.log(car);

const troisiemeCar = new car({
  brand: 'Peugeot',
  model: '308',
  year: 2017,
});

troisiemeCar.save((err, document) => {
  if(err) console.log(err);
  console.log(document)
})
console.log(car);

car.findById({ _id: "60be1877ce7d1d41388dc6d9" }, (err, car) => {
  if (!err) {
    console.log(car);
  }
});

const updateCar = async () => {
  const updateYear = await car.update
    ({ _id: "60be1877ce7d1d41388dc6d9" }, { year: 2000 })
}

updateCar();

const effacerCar = async () => {
  const effacerCars = await car.deleteMany
    ({ marque: "Renault" })
}

effacerCar();

const ajouterCars = [

  { marque: 'Aston Martin', modele: 'DB9', year: 2010 },
  { marque: 'Range Rover', modele: 'Discovery Sport', year: 2017 }

];

car.insertMany(ajouterCars, (err, newCar) => {
  if(!err){
    console.log("Nouvelle voiture");
    console.log(newCar);
}
})

