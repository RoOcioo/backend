const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose')

const port= 8003

app.use('/users', usersRoutes);


app.listen(8003, () => {
    console.log('Server on port', port);
})