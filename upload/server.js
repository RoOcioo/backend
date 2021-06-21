const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: './public/upload' });

const User = require('./models/user');

const port = 8000

app.use(cors())
app.use(express.static('public'));

app.get('/users', async (req, res) => {
  try{
    const user = await userModel.find({})
    res.json(user)
  } catch (err) {
  console.log("Error", err)
    res.status(500).json({ message: "Erreur"})
  }
})


app.post('/users/add', upload.single('image'), async (req, res) => {
  try{
    const date= new Date().toISOString().slice(0,10).replace(/-/g,"");
    const extension = req.file.originalname.split(".")[1]
    const newImageName = req.body.name + "_"+ date+ "."+ extension;
  
    const userAdded = await userModel.create({
      name: req.body.name,
      profilePicture: newImageName
  })
  
  fs.renameSync(req.file.path, path.join(req.file.destination, newImageName));

  res.json({
      message: "User ajouté correctement",
      userAdded
  })
} catch (error) {
  console.log("Error:", error)

  fs.rmSync(req.file.path)

  res.status(500).json({ message: "Erreur en traitant la requête" })
}
})

app.listen(port, () => {

 console.log('Server à l écoute dans le port: ', port)
})