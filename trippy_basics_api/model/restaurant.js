const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  country: String,
  stars: {
    type: Number,
    min: 1,
    max: 5,
  },
  cuisine: String,
  priceCategory: {
    type: Number,
    min: 1,
    max: 3,
  },
  created: { type: Date, default: Date.now },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant