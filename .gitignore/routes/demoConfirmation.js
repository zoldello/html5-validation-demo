const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('demoConfirmation', {
      "title": "Demo Confirmation"
    });
});

module.exports = router;
