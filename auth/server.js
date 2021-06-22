const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const port= 8003

app.get('/', (req, res) => {
    res.json({
        message: "working"
    })
})
   

app.post('/signup', (req, res) => {
    const user = {id: 3};
    const token = jwt.sign({user}, 'secret_password');
    res.json({
        token
    });
})
app.get('/protected', (req, res) => {
    jwt.verify(req.token, 'secret-password', (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json({
                message: "protected"
            })
        }
    })
})


const AuthHeader = req.headers['authorization']
console.log(AuthHeader)

app.listen(8003, () => {
    console.log('Server on port', port);
})