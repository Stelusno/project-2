var express = require('express');
var router = express.Router();

const contactCtrl = require('../controllers/contacts');

router.get('/', function(req, res, next) {
    res.render('contacts/new', { title: `Beyond the Glo'` });
  });

router.get('/new', contactCtrl.new); 
router.post('/', contactCtrl.create); 


module.exports = router;