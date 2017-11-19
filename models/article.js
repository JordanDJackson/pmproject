let mongoose = require('mongoose')
mongoose.Promise = global.Promise;
// article schema
let articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    require: true
  }
})

let Article = module.exports = mongoose.model('Article', articleSchema)
