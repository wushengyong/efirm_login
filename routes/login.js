/**
 * Created by Administrator on 2017/7/4.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title : 'login'});
});
router.post('/',function (req, res, next) {
    res.send("username : " + req.body.username + " password : " + req.body.password);
});
module.exports = router;
