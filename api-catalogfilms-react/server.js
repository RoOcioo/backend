import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors())

import films from './dataFilms.js';

const port = 8000;


app.get("/films", (req, res) => {
    res.json(films)
})

app.get("/films/:id", (req, res) => {
    let id = parseInt(req.params.id)

   
})



app.listen(port, () => console.log('Server', port))