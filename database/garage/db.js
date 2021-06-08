const mongoose = require('mongoose')

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

const Car = mongoose.model('Car', carSchema);

// part 3

Car.insertMany([
  {
  brand: 'Renault',
  model: 'Espace',
  year: 1999
},

{
  brand: 'Renault',
  model: 'Scenic',
  year: 2004
},
{
  brand: 'Peugeot',
  model: '308',
  year: 2017,
},

]).then(data => {
  console.log(data)
}).catch(err => {
  console.log("Error insertMany Cars: ", err);
})

const findById = async () => {
  try {
    const car = await Car.findById("60bf6ba05af23a21ebedc0ac")

    console.log("findCar", car)
} catch (err) {
    console.error(err)
}
}
findById()

const updateCarById = async (newValues) => {
    try {
      const car = await Car.findByIdAndUpdate("60bf6ba05af23a21ebedc0ac", newValues)
        
      console.log("updateCarByID", car);
  } catch (err) {
      console.error(err)
  }
}
updateCarById()

const updateCar = async (newValues) => {

  try {
      const car =  await Car.findById("60bf6ba05af23a21ebedc0ac")

      car.model = "Espace 2"

      await car.save()
      
      console.log("updateCar", car);
  } catch (err) {
      console.error(err)
  }
}
updateCar()

const effacerManyCars = async () => {
try {

   await Car.deleteMany
    ({ brand: "Renault" })

} catch (err) {
  console.error(err)
}
}

effacerManyCars()

