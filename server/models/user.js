const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  surname: String,
  birthday: Number,
  country: String,
}, {timestamps: true})

mongoose.model('User', userSchema)