var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('report', { title: 'Report' });
});

router.get('/cost', (req, res, next) => {
  var cost = req.query.cost.split('\n'), sum = 0;
  Object.keys(cost).forEach(i => {
    if (i === 0 || i % 2 === 0) {
      var row = cost[i].split('\t');
      sum += parseInt(row[3].replace(/,/g, ""));
    }
  });
  res.json({ "sum": sum });
});

module.exports = router;
