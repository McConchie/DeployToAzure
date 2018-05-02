const express = require('express');
const router = express.Router();

const ctrlApi2016 = require('../controllers/ctrlApi2016');
const ctrlApi2017 = require('../controllers/ctrlApi2017');

router
	.route('/2016')
	.get(ctrlApi2016.winnerlist)
	.post(ctrlApi2016.addChar);
	
router
	.route('/2017')
	.get(ctrlApi2017.winnerlist)
	.post(ctrlApi2017.addChar);
	
module.exports = router;