const mongoose = require('mongoose');

const dbURI ='mongodb://ari:ari@ds012178.mlab.com:12178/mcconchie';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
	console.log('Success');
});

require('./appSchemas');