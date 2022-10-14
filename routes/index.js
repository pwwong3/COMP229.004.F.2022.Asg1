var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact', function(req, res, next) {
    let contact = {
        "last_name": req.body.last_name,
        "first_name": req.body.first_name,
        "contact_number": req.body.contact_number,
        "email": req.body.email,
        "message": req.body.message,
    };
    console.log(req);
    console.table(contact);
    res.send('<script>alert("Email sent.");window.location.href = \'/\';</script>');
});

module.exports = router;
