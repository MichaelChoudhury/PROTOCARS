const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb+srv://michaelchoudhury:cassie00@cluster0.0msxgk1.mongodb.net/car-sales', {useUnifiedTopology: true, useNewUrlParser: true})
      
    const connection = mongoose.connection

    connection.on('connected' , () => {
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error' , () => {
        console.log("Mongo DB Connection Error")
    })
}

connectDB()

module.exports = mongoose