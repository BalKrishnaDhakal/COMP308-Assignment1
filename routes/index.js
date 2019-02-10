let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About' });
});

/* GET about page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});


module.exports = router;