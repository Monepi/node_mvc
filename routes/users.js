var express = require('express');
var router = express.Router();

var users = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var choose = ['boys', 'girls'];
  var boyOrGirl = Math.floor(Math.random() * choose.length);

  res.render('users', {title : 'List of Users', users : users.users(choose[boyOrGirl])});

});

module.exports = router;
