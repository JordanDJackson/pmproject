'use strict'
const express = require('express')
const router = express.Router()
//const moment = require(moment-datetime);
const fs = require('fs');
const generateDocx = require('generate-docx');
const fease = require('../algos/feasealgo.js');
// bring in models
let Article = require('../models/article')
let User = require('../models/user')
let Calc = require('../models/calc')

router.delete('/:id', function (req, res) {
  let query = {_id: req.params.id}
  Calc.findById(req.params.id, function(err,article){
    /*
    if(article.author != req.user._id){
      res.status(500).send();
    } else{} */
    Calc.remove(query,function(err){
      if(err){
        console.log(err);
      }
      res.send('Success');
    });

  });


})
router.post('/add/fease', function (req, res) { // ensureAuthenticated,
    // req.checkBody('title', 'Title is required').notEmpty();
    // req.checkBody('author', 'Author is required').notEmpty();
    // req.checkBody('body', 'Body is required').notEmpty();
    // Errors
  let errors = req.validationErrors()
  if (errors) {
    res.render('index', {
      errors: errors
    })
  } else {
    var calc = new Calc();
    calc.title = req.body.title
    // calc.author = req.user._id;
    //calc.madeby = req.user.username;
    // calc.madeat = moment().strftime("%m/%d/%y %I:%M %p");
    calc.notes = req.body.notes
    calc.q1 = req.body.q1
    calc.q2 = req.body.q2
    calc.q3 = req.body.q3
    calc.q4 = req.body.q4
    calc.q5 = req.body.q5
    calc.q6 = req.body.q6
    calc.q7 = req.body.q7
    calc.q8 = req.body.q8
    calc.madeby = req.user.username
    calc.whattype = 'Feasibility'
    calc.total = fease(req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.q8);
    const options = {
      template: {
        filePath: './docxtempt/fease.docx',
        data: {
          'title': req.body.title,
          'notes':req.body.notes,
          'q1': req.body.q2,
          'q2':req.body.q1,
          'q3': req.body.q3,
          'q4':req.body.q4,
          'q5': req.body.q5,
          'q6':req.body.q6,
          'q7': req.body.q7,
          'q8':req.body.q8,
        }
      }/*,
        save: {
          filePath: './random/'+ req.body.title +'.docx'
      }
      */
    }

    generateDocx(options, (error, buf) => {
      console.log("About to try and create the file");
        if (error) {
          console.log('FIle not created!!!!');
          console.error(error)
        } else {
          //fs.writeFileSync('test/data/frombuffer.docx', buf)
          calc.file = buf;
          console.log('File written')
          /* Code to make the app save the file to the file server
          generateDocx(options2)
            .then(buf => {
              fs.writeFileSync('./docxtempt/fease.docx', buf)
              console.log('File written')
            })
            .catch(error => console.error(error))
            */
        }
    })
    calc.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Saved to Mongo!')
        req.flash('success', 'Calculation Added')
        res.redirect('/')
      }
    })
  }
})

router.get('/Supboss', function (req, res) {
    Calc.find({title:'Supboss'}, function(err,calc){
      if(err) throw err;

      res.type('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.send(calc[0].file);
    })
})
router.get('/download/:id', function (req, res) {
    Calc.find({_id: req.params.id}, function(err,calc){
      if(err) throw err;
      res.type('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.send(calc[0].file);

    })



})
//display edit sheet
router.get('/edit/:id', function(req,res) {
  Calc.findById(req.params.id, function(err,calc) {
/* Code to make sure user is the same one that created it
    if(article.author != req.user._id) {
      req.flash('danger', 'Not authorized');
      res.redirect('/');
    }
*/
    res.render('editcalc', {
      title:'Edit Calculation',
      calc: calc
    });
  });
});

router.post('/edit/:id',function(req,res) {
  console.log("post route hit!!!!");
  var calc = {};
  calc.title = req.body.title
  // calc.author = req.user._id;
  //calc.madeby = req.user.username;
  // calc.madeat = moment().strftime("%m/%d/%y %I:%M %p");
    calc.notes = req.body.notes
    calc.q1 = req.body.q1
    calc.q2 = req.body.q2
    calc.q3 = req.body.q3
    calc.q4 = req.body.q4
    calc.q5 = req.body.q5
    calc.q6 = req.body.q6
    calc.q7 = req.body.q7
    calc.q8 = req.body.q8
    calc.whattype = 'Feasibility'
    calc.total = fease(req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.q8);
    var query = {_id:req.params.id};
    Calc.update(query,calc, function(err){
      if(err) {
        console.log(err);
      } else {
        req.flash('success','Feasibility calculation updated');
        res.redirect("/");
      }
    });

});

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
