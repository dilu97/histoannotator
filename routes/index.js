var express = require('express');
var router = express.Router();
var controller = require('../routes/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/prova', controller.getProve);

module.exports = router;
