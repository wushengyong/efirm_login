/**
 * Created by Administrator on 2017/7/4.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Login', welcome_message : 'Login'});
});

module.exports = router;
