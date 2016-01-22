var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:dString', function(req, res, next) {
	console.log(req.params.dString)
    res.render('index', {
        title: 'Express'
    });
});


module.exports = router;
