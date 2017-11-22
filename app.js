'use strict'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fs = require('fs')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')
const generateDocx = require('generate-docx')
const passport = require('passport')
const config = require('./config/database')
const Grid = require('gridfs-stream');
// Require a million things to use in the app
const places = require('./jsonplaceholder.js');


mongoose.Promise = global.Promise;
// connect mongoose to db form config file
// updated way to connect to mongo with mongoose without getting a warning
mongoose.connect(config.database, {
  useMongoClient: true
  /* other options */
})
// Old way to connected to mongo with mongoose
// mongoose.connect(config.database);
// assign mongoose connection to var 'db'
let db = mongoose.connection
// show msg on db err
db.on('error', function (err) { console.log(err) })
// Check connection tell server console we are connected
db.once('open', function () {

  console.log('Connected to Mongo')
})
// init express app
const app = express()

// create bucket for storing files with gridfs

// bring in models,articles,users, whatever you want
let Article = require('./models/article')
let Calc = require('./models/calc')
let Sort = require('./models/sorter')
// set views folder to 'views'
app.set('views', path.join(__dirname, 'views'))
// set view engine to whatever you want
app.set('view engine', 'pug')
// body parser for req.body
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// set public folder
app.use(express.static(path.join(__dirname, 'public')))
// express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))
// express message middleware
app.use(require('connect-flash')())
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res)
  next()
})

// express validator middleware
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']'
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    }
  }
}))

// passport config
require('./config/passport')(passport)

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// pass ALLLLL routes through this to see if the user is logged in
app.get('*', function (req, res, next) {
  res.locals.user = req.user || null
  next()
})
//var for page number
var numOfCards = 10;

// get request for app home page
app.get('/', function (req, res) {

            var totalCalcsInDB = 0;

            Calc.find({}, function(err,totalCalcs){
              if(err) throw err;
              totalCalcsInDB = totalCalcs.length;
            //})
              Calc.find({}).
                limit(numOfCards).
                sort({total: -1}).
                exec(function (err, calcs) {
                  if (err) {
                    console.log(err)
                  } else {
                    res.render('index', {
                      title: 'Calculations',
                      calcs: calcs,
                      numOfCalcs: totalCalcsInDB
                    })
                  }

                });

})

  /*
  Calc.find({}, function (err, calcs) {
    if (err) {
      console.log(err)
    } else {
      res.render('index', {
        title: 'Calculations',
        calcs: calcs
      })
    }
  })
  */
})
// including all the files with the routes
let articles = require('./routes/articles')
let users = require('./routes/users')
let calcs = require('./routes/calcs')
let sorters = require('./routes/sorters')
// telll the app to use the routes in the file above for the routes below
app.use('/articles', articles)
app.use('/users', users)
app.use('/calcs', calcs)
app.use('/sorts', sorters)
// START APP ON PORT 3001
app.listen(80, function () {
  console.log('Server started on port 80.....')
})
