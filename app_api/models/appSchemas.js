const mongoose = require('mongoose');

const firstSchema = new mongoose.Schema ({name:String, ranking:String});
const secondSchema = new mongoose.Schema ({name:String, ranking:String});

mongoose.model('2016', firstSchema, 'firstSchema');
mongoose.model('2017', secondSchema, 'secondSchema');