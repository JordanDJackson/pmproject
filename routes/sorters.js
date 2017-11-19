'use strict'
const express = require('express')
const router = express.Router()

// bring in models
let User = require('../models/user')
let Sort = require('../models/sorter')
let Calc = require('../models/calc')
router.get('/highfirst', function (req, res) {
  Calc.find({}).
    limit(12).
    sort({total: -1}).
    exec(function (err, calcs) {
      if (err) {
        console.log(err)
      } else {
        res.render('index', {
          title: 'Calculations',
          calcs: calcs
        })
      }

    });
})
router.get('/lowfirst', function (req, res) {
  Calc.find({}).
    limit(12).
    sort({total: 1}).
    exec(function (err, calcs) {
      if (err) {
        console.log(err)
      } else {
        res.render('index', {
          title: 'Calculations',
          calcs: calcs
        })
      }

    });
})

router.get('/atoz', function (req, res) {
  Calc.find({}).
    limit(12).
    sort({title: 1}).
    exec(function (err, calcs) {
      if (err) {
        console.log(err)
      } else {
        res.render('index', {
          title: 'Calculations',
          calcs: calcs
        })
      }

    });
})

router.get('/ztoa', function (req, res) {
  Calc.find({}).
    limit(12).
    sort({title: -1}).
    exec(function (err, calcs) {
      if (err) {
        console.log(err)
      } else {
        res.render('index', {
          title: 'Calculations',
          calcs: calcs
        })
      }

    });
})
/*
router.get('/lowfirst', function (req, res) {
    var sor = new Sort();
    sor.by = "";
    sor.type = "";
      Sort.findOneAndUpdate({_id:'5a0e885b72b53627644eadd5'}, {$set:{by:"Low first"}}, {new: true}, function(err, doc){
      if(err){
          console.log("Something wrong when updating data!");
      }
      console.log(doc);
      res.redirect("/");
  });
})

*/
/// access control to make sure user is logged in
function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    req.flash('danger', 'Please login')
    res.redirect('/users/login')
  }
}
module.exports = router
