const mongoose = require('mongoose')
const Schema =mongoose.Schema

const schema =new Schema({
      name:String,
      email:String,
      phone:String,
      adults:Number,
      childern:Number,
      arrivalDate:Date,
      departureDate:Date,
      msg:String
})

module.exports = mongoose.model('Booking',schema)