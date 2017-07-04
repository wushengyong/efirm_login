/**
 * Created by Administrator on 2017/7/4.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var context = {
        title : 'login',
        welcome_message : 'Login',
        fields : [
            {name:'username',type : 'text', placeholder : 'username'},
            {name:'password',type : 'password', placeholder : 'password'}
        ],
        default_value : [{name:'username',value :''}, {name : 'password', value : ''}]
    }
    res.render('login', context);
});

module.exports = router;
