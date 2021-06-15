const mongoose = require('mongoose');

const userShema = mongoose.Schema({
  userName: { type: String, unique: true },
  email: String,
  age: Number,
  city: [String],
  date: { type: Date, default: date.now },
});

const User = mongoose.model('User', userShema);

module.exports = User