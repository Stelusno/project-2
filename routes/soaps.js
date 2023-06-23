var express = require('express');
var router = express.Router();

const soapsCtrl = require('../controllers/soaps'); 


router.get('/', soapsCtrl.index);
router.get('/new', soapsCtrl.new);
router.get('/:name', soapsCtrl.show); 
router.post('/', soapsCtrl.create); 


module.exports = router;
