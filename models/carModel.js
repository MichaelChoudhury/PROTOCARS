const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    carDesc : {type: String, required: true},
    carImg : {type: String, required: true},
    carPrice : {type: String, required: true},

}, {timestamps : true}

)
const carModel = mongoose.model('cars', carSchema)
module.exports = carModel
