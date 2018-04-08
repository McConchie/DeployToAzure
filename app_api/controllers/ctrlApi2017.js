const mongoose = require('mongoose');

const secondModel = mongoose.model('secondYear');

const list = function (req, res) {
    res

        .status(200)
        .json({"name" : "ranking"});

};

const addChar = function (req, res) {
    res.status(201).json({"Add character" : "Work in progress"});
};

module.exports = {
    list,
    addChar
};
