const express = require('express')
const router = express.Router()
// bring in bcrypt to add salt to scramble passwords
const bcrypt = require('bcryptjs')
// bring in passport to use login strats
const passport = require('passport')
// bring in models to use with mongoose
let User = require('../models/user')
// render registeration form
router.get('/register', function (req, res) {
  res.render('register')
})

// register process, this is actually creating and saving the user to the database
router.post('/register', function (req, res) {
  const name = req.body.name
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  const password2 = req.body.password2

  // this part is using express validator to check for the following
  req.checkBody('name', 'Name is required').notEmpty()
  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'Email is not valid').isEmail()
  req.checkBody('username', 'Username is required').notEmpty()
  req.checkBody('password', 'Password is required').notEmpty()
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password)

  // check to make this user hasnt registered
  var testThisName = username;
  var queryforUsername = {};
  queryforUsername["username"] = testThisName;
  User.find(queryforUsername, function(error,item) {
    if(error) throw error;
    if(item.length > 0) {
      req.flash('warning', 'That username is taken!')
      console.log(item);
      console.log(item.length);
    // then redirect to user logged in page
      res.redirect('/users/register');
    } else if (item.length == 0) {
          console.log("Creating an account with the free username");
          let errors = req.validationErrors()
          if (errors) {
              // if there are any errors re-render the register page
            res.render('register', {
              errors: errors
            })
          } else {
          // create a mongoose iteration and save the stuff the user put in to the database
            let newUser = new User({
              name: name,
              email: email,
              username: username,
              password: password
            })
          // bcrypt hashing its the password with random salt
            bcrypt.genSalt(10, function (err, salt) {
              bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err) {
                  console.log(err)
                }
              // make user hashed password equal to users actual password
                newUser.password = hash
              // save mongoose user iteration with hashed password to mongo
                newUser.save(function (err) {
                  if (err) {
                    console.log(err)
                  } else {
                  // flash message to let the user know they are logged in
                    req.flash('success', 'You are now registered and can log in!')
                  // then redirect to user logged in page
                    res.redirect('/users/login')
                  }
                })
              })
            })
          }
        }
  })
})
// renders the login form
router.get('/login', function (req, res) {
  res.render('login')
})
// login process
router.post('/login', function (req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next)
  //req.flash('success', 'Logged In')
})

// logout
router.get('/logout', function (req, res) {
  req.logout()
  req.flash('success', 'You are logged out')
  res.redirect('/users/login')
})

// export the router to be used in any file
module.exports = router
