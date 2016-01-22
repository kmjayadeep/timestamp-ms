var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/:dString', function(req, res, next) {
    var dString = req.params.dString
    if (isNaN(+dString)) {
        var date = new Date(dString)
        if (date.getTime()) {
            var data = {
                unix: date.getTime(),
                natural: date.toDateString()
            }
        } else
            var data = {
                unix: null,
                natural: null
            }
    } else {
        var date = new Date(+dString)
        if (date.getTime()) {
            var data = {
                unix: +dString,
                natural: date.toDateString() //date.getMonth()+' '+date.getDate()+', '+date.getFullYear()
            }
        } else
            var data = {
                unix: null,
                natural: null
            }
    }


    res.json(data)
});


module.exports = router;
