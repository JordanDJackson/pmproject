'use strict'
const express = require('express')
const router = express.Router()
//const moment = require(moment-datetime);
const fs = require('fs');
const generateDocx = require('generate-docx');
//const fease = require('../algos/feasealgo.js');
const desvia = require('../algos/desvia.js');
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
router.post('/add/desvias', function (req, res) { // ensureAuthenticated,
    // req.checkBody('title', 'Title is required').notEmpty();
    // req.checkBody('author', 'Author is required').notEmpty();
    // req.checkBody('body', 'Body is required').notEmpty();
    // Errors




 console.log("post hit!!!!!!!!!!!!!!!!");
 console.log(req.body);
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
    calc.problem = req.body.problem
    calc.notes = req.body.notes
    calc.q1 = req.body.q1
    calc.q2 = req.body.q2
    calc.q3 = req.body.q3
    calc.q4 = req.body.q4
    calc.q5 = req.body.q5
    calc.q6 = req.body.q6
    calc.q7 = req.body.q7
    calc.q8 = req.body.q8
    calc.q9 = req.body.q9
    calc.q10 = req.body.q10
    calc.q11 = req.body.q11
    calc.q12 = req.body.q12
    calc.q13 = req.body.q13
    calc.q14 = req.body.q14
    calc.q15 = req.body.q15
    calc.q16 = req.body.q16
    calc.q17 = req.body.q17
    calc.q18 = req.body.q18
    calc.q19 = req.body.q19
    calc.q20 = req.body.q20
    calc.q21 = req.body.q21
    calc.q22 = req.body.q22
    calc.q23 = req.body.q23
    calc.q24 = req.body.q24
    calc.madeby = req.user.username
    calc.whattype = 'D&V';
    var algoRes = desvia(req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.q7,req.body.q8,
      req.body.q9,req.body.q10,req.body.q11,req.body.q12,req.body.q13,req.body.q14,req.body.q15,req.body.q16, req.body.q17,req.body.q18,
      req.body.q19,req.body.q20,req.body.q21,req.body.q22,req.body.q23,req.body.q24);
    calc.total = algoRes[0];
    calc.topfaults = algoRes[1];
    calc.percent = algoRes[2];
    //calc.dateCreated = new Date();
    calc.oldScores = [];




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
        console.log('Saved to Mongo!');
        req.flash('success', 'Calculation Added')
        res.redirect('/users/home')
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

  var query2 = {_id:req.params.id};
  Calc.find(query2, function(err,doc){
          console.log(doc[0].oldScores);
          var old = [doc[0].total,doc[0].topfaults];
          //doc[0].oldScores.push(old);
          var updateOb = {};
          updateOb['oldScores'] = doc[0].oldScores.push(old);
          console.log(doc[0].oldScores);

          Calc.findOneAndUpdate(query2,updateOb,{new:true}, function(err, doc2) {
            if(err) throw err;

            console.log(doc2);

          })

  })
    var calc = {};
    calc.title = req.body.title
    calc.notes = req.body.notes
    calc.q1 = req.body.q1
    calc.q2 = req.body.q2
    calc.q3 = req.body.q3
    calc.q4 = req.body.q4
    calc.q5 = req.body.q5
    calc.q6 = req.body.q6
    calc.q7 = req.body.q7
    calc.q8 = req.body.q8
    calc.madeby = req.user.username;
    calc.whattype = 'Desirability & Viability';
    var algoRes = fease(req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.q8);
    calc.total = algoRes[0];
    calc.topfaults = algoRes[1];
    //calc.dateCreated = new Date();
    var query = {_id:req.params.id};

    Calc.update(query,calc, function(err){
      if(err) {
        console.log(err);
      } else {
        req.flash('success','Feasibility calculation updated');
        res.redirect("/users/home");
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
