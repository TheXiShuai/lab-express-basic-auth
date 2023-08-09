const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const router = require("express").Router();



/* GET home page */
router.get("/", (req, res, next) => {
  res.render("auth/signup");

});

//signup

/* GET home page */
router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
  });
  
  
  //POST PAGE
  router.post('/signup', (req, res, next) => {
      console.log('The form data: ', req.body);
  
      const { username, password } = req.body;
  
      bcryptjs
      .genSalt(saltRounds)
      .then(salt => bcryptjs.hash(password, salt))
      .then(hashedPassword => {
        return User.create({
              username,
              // if our variable name is different from the one in the model we can do this
              passwordHash : hashedPassword
        })
        .then(userFromDB => {
            res.redirect("/");
          console.log('Newly created user is: ', userFromDB);
        })
      })
      .catch(error => next(error));
  
  
    });



module.exports = router;


