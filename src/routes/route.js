const express = require('express');
const logger = require('./logger')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The endpoint is :',logger.endpoint)
    
    res.send('My first ever api!')

});

router.get('/test-me2', function (req, res) {
    res.send('My second ever api!')
});

module.exports = router;
// adding this comment for no reason