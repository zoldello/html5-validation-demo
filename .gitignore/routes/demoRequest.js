const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('demoRequest', {
      "title": "Request Demo"
    });
});

module.exports = router;
