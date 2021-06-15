const express = require("express");
const router = express.Router()

const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');


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
    }catch (err) {
        console.log("Error", error);
        res.status(500).json({message: "There was a problem"})
    }


})
app.listen(8000, () => {
  console.log('Server started');
});