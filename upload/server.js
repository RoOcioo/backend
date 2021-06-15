const express = require('express');
const app = express();
const cors = require('cors');
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: './public/uploads' });

const User = require('./models/user');

const port = 8000

app.use(cors())
app.use(express.static('public'));


app.post('/upload', upload.single('image'),  (req, res) => {
    console.log('req file', req.file);
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));

    res.send("ok");
  });

app.listen(port, () => {

 console.log('Server à l écoute dans le port: ', port))