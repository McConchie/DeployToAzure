const mongoose = require('mongoose');

const firstSchema = new mongoose.Schema ({name:String, ranking:String});
const secondSchema = new mongoose.Schema ({name:String, ranking:String});

mongoose.model('firstYear', firstSchema, 'firstYear');
mongoose.model('secondYear', secondSchema, 'secondYear');
