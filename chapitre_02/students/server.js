const express = require("express")
const cors = require("cors")


const app = express()

app.use(express.json()) 
app.use(cors());

const port = 9000

const students = [ "Jean", "Binta", "Michael Scott"]



app.get("/students", (req, res) => {

    res.json(students)
})

app.post("/students/add", (req, res) => {
    const newStudent = req.body
    
    students.push(newStudent)

    res.json({
        message: "Student added!"
    })


});

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})

