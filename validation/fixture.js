const mongoose = require('mongoose')
const userName = require('./models/userName');

mongoose.connect("mongodb://localhost:27017/username", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected")
    }
})

const adduserName = async () => {

    try {
      
        await userName.insertMany([
            {
                username: "Asma",
                email: "asma@gmail.com",
                age: 23,
                city: "Tokyo",
            },
            {
                username: "Fasulu",
                email: "fasulu@gmail.com",
                age: 44,
                city: "Los Angeles",
            },
            {
                username: "Karim",
                email: "karim@gmail.com",
                age: 38,
                city: "Paris",
            }
        ])

        console.log("Users collection");

    } catch (err) {
        console.error(err)
    }
}

adduserName()

