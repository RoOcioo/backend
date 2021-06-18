const express = require("express");
const cors = require("cors")
const mongoose = require('mongoose')
const { usersRoutes } = require('./routes/usersRoutes')



mongoose.connect('mongodb://localhost:27017/validation', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});
const app = express();

app.use(express.json());
app.use(cors())
const port = 8001

app.use("/users", usersRoutes)



app.listen(8001, () => {
  console.log('Server started');
});