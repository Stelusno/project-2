var express = require('express');
var router = express.Router();

const soapsCtrl = require('../controllers/soaps'); 


router.get('/', soapsCtrl.index);
router.get('/new', soapsCtrl.new);
router.get('/:name', soapsCtrl.show); 
router.get('/:name/edit', soapsCtrl.edit); 

router.post('/', soapsCtrl.create); 
router.delete('/:name', soapsCtrl.delete);
router.put('/:name', soapsCtrl.update); 


module.exports = router;
