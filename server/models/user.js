const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  image: String,
  name: String,
  surname: String,
  birthday: Number,
  country: String,
}, {timestamps: true})

mongoose.model('User', userSchema)