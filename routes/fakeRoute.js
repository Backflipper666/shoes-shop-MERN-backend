var express = require('express');
var router = express.Router();
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Fake route it is');
});

module.exports = router;
