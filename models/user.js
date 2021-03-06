const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
// user schema, how to construct a Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  sortPref: {
    type: String
  },
  aOrd: {
    type: Number
  },
  sprintType: {
    type: String
  }
})

// how to export the schema and turn the schema into an actual model
const User = module.exports = mongoose.model('User', UserSchema)
