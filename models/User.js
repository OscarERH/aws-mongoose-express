const mongoose = require('mongoose')
require('dotenv').config();

mongoose.Promise = Promise
mongoose.connect(process.env.DB)

const User = mongoose.model('User', {
  name: String,
  email: String
})

module.exports = User
