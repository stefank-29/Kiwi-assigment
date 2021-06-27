var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/convert', function (req, res, next) {
    const number = req.query.number;
    res.send(number);
});

module.exports = router;
