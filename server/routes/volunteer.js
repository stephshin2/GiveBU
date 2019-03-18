var express = require('express');
var router = express.Router();

/* GET volunteer page. */
router.get('/', function(req, res, next) {
    res.send('volunteer');
});

module.exports = router;
