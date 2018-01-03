let mongoose = require('mongoose')
mongoose.Promise = global.Promise;
// article schema
let calcSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  q1: {
    type: String
  },
  q2: {
    type: String
  },
  q3: {
    type: String
  },
  q4: {
    type: String
  },
  q5: {
    type: String
  },
  q6: {
    type: String
  },
  q7: {
    type: String
  },
  q8: {
    type: String
  },
  q9: {
    type: String
  },
  q10: {
    type: String
  },
  q11: {
    type: String
  },
  q12: {
    type: String
  },
  q13: {
    type: String
  },
  q14: {
    type: String
  },
  q15: {
    type: String
  },
  q16: {
    type: String
  },
  q17: {
    type: String
  },
  q18: {
    type: String
  },
  q19: {
    type: String
  },
  q20: {
    type: String
  },
  q21: {
    type: String
  },
  author: {
    type: String
  },
  madeby: {
    type: String
  },
  file: {
    type: Buffer
  },
  total: {
    type: Number
  },
  whattype: {
    type: String
  },
  madeby: {
    type: String
  },
  topfaults: {
    type: Array
  },
  lowerName: {
    type: String
  },
  dateCreated: {
    type: Date
  },
  oldScores: {
    type: Array
  }
})

let Calc = module.exports = mongoose.model('Calc', calcSchema)
