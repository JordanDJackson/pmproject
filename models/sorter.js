let mongoose = require('mongoose')
mongoose.Promise = global.Promise;
// article schema
let sorterSchema = mongoose.Schema({
  by: {
    type: String
  },
  type: {
    type: String
  }
})

let Sorter = module.exports = mongoose.model('Sorter', sorterSchema)
