var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('contacts', { title: `Beyond the Glo'` });
  });

module.exports = router;