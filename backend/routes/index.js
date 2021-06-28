var express = require('express');
var router = express.Router();

const conversionController = require('../controllers/conversionController');

router.get('/convert', conversionController.convertToWords);

module.exports = router;
