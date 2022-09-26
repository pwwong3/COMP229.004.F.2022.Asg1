var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WONG Pak Wah | Bulid your own personality' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

module.exports = router;
