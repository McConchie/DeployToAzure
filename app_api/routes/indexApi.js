const express = require('express');
const router = express.Router();

const ctrlApiFirst = require('../controllers/ctrlApiFirst');
const ctrlApiSecond = require('../controllers/ctrlApiSecond');

router
	.route('/first')
	.get(ctrlApiFirst.list)
	.post(ctrlApiSecond.addChar);
	
router
	.route('/second')
	.get(ctrlApiFirst.list)
	.post(ctrlApiSecond.addChar);
	
module.exports = router;