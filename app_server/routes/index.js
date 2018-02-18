const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrl2016 = require('../controllers/ctrl2016'); // ... for the list of World Cup winners (countries)
const ctrl2017 = require('../controllers/ctrl2017'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/2016', ctrl2016.winnerlist);  // List of World Cup winners (countries)
router.get('/2017', ctrl2017.winnerlist);  // List of Golden ball winners (players)

module.exports = router;
