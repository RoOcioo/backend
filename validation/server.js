const express = require("express");
const router = express.Router()
const cors = require("cors")
const mongoose = require('mongoose')
const userName = require('./models/userName')
const expressValidator = require("express-validator");



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

app.get("/", async (req, res) => {
    try {
        const users = await User.find({})
        res.json(user)
    } catch (err) {
        console.log("Error", error);
        res.status(500).json({message: "There was a problem"})
    }


})

app.get("/users/add", async (req,res) => {
   try {
      const user = req.body 
      const newUser = await User.create(user)

      res.json({
          message : "The new user was added",
          newUser
      })
      
  } catch (error) {
      console.log(error);
      res.status(400).json({message : "There was a problem :("})
  }
})

app.get("/users/:username", async (req, res) => {
  try {
      const username = req.params.username
      const user = await User.findById(username)

      if(user){
      res.json(user)
      } else {
          res.json({
              message : "The user cant not found"
          })
      }
      
  } catch (error) {
      console.log(error)
      res.status(400).json({message : "There was a problem :("})
  }
})


app.listen(8001, () => {
  console.log('Server started');
});