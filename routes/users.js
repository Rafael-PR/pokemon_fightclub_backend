const express = require('express');
const router = express.Router();
const data = require('../dummyData.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
console.log(data)
module.exports = router;
