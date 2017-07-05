/**
 * Created by wushengyong on 2017/7/5.
 */
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var config = {
    session : {
        cookie : {
            maxAge : 3600 * 1E3 // ��Ч�ڣ�60s��60s���޲�����Ҫ���µ�¼
        },
        name :'sid',
        resave : false,
        saveUninitialized : false,
        secret : 'wushengyong_session_key',
        host : '127.0.0.1',
        port : 6379,
        db : 0,
        redis_pass : 'wushengyong'
    }
};

module.exports = config;
