const mongoose = require('mongoose');

const firstSchema = new mongoose.Schema ({name:String, ranking:String});
const secondSchema = new mongoose.Schema ({name:String, ranking:String});

mongoose.model('first', firstSchema, 'firstYear');
mongoose.model('second', secondSchema, 'secondYear');