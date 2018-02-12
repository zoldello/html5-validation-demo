const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
      "title": "Packback",
      "appName": "Packback Case Study",
      "questionAsked": "2000",
      "responsesShared":"5700",
      "studentsJoined":"400",
      "postsFeatured":"30",
      "questions": "85",
      "emailRequest": "Please enter your email address"
   });
});

module.exports = router;
