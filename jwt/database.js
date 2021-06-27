// Para conectarnos con la bdd
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jwtexemple', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('conectado'))