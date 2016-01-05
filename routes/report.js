var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('report', { title: 'Report' });
});

router.get('/cost', (req, res, next) => {
  console.log(req.query);
  res.render('report');
});

module.exports = router;
