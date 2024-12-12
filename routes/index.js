var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render the index view with a custom title
  res.render('index', { title: 'Gunratan Kaur - Personal Portfolio' });
});

module.exports = router;
