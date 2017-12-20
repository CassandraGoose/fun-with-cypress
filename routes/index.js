var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get-a-gif', function(req, res, next) {
  res.json("https://media.giphy.com/media/zPyAAJKoD3YE8/giphy.gif")
});

module.exports = router;
