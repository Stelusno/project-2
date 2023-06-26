var express = require('express');
var router = express.Router();

const soapsCtrl = require('../controllers/soaps'); 


router.get('/', soapsCtrl.index);
router.get('/new', soapsCtrl.new);
router.get('/:name', soapsCtrl.show); 
router.post('/', soapsCtrl.create); 
router.post('/:name', soapsCtrl.delete);
router.get('/:name/edit', soapsCtrl.edit); 

module.exports = router;
