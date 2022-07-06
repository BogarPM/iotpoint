var express = require('express');

var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.status(200).json({
    data: {
      data1: 'asdasdsa'
    }
  });

})

router.post('/', function (req, res) {
  res.status(200).json({ msg: 'From IOT backend' });

})

module.exports = router;