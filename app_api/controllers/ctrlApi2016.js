const mongoose = require('mongoose');

const firstModel = mongoose.model('firstYear');

const winnerlist = function (req, res) {
	res
	
		.status(200)
		.json({"name" : "ranking"});
		
};

const addChar = function (req, res) {
	res.status(201).json({"Add character" : "Work in progress"});
};

module.exports = {
    winnerlist,
	addChar
};
