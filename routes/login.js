/**
 * Created by Administrator on 2017/7/4.
 */
var express = require('express');
var router = express.Router();
var auth = require('./auth');

/* GET home page. */
router.get('/', function(req, res, next) {
    var isLogin = req.session.username;
    if (isLogin){
        res.redirect('/');
        return ;
    }
    res.render('login', { title : 'login' , info : req.session.info});
});
router.post('/',function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if (auth.isUserCanLogin(username,password)){
        req.session.username = username;
        req.session.password = password;
        res.redirect('/');
    } else {
        req.session.info = 'Login Failed';
        res.redirect('/login');
    }
});
module.exports = router;
