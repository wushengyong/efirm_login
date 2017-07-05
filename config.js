/**
 * Created by wushengyong on 2017/7/5.
 */

var config = {
    session : {
        cookie : {
            maxAge : 6 * 1E3 // 有效期，60s，60s内无操作徐哟呵重新登录
        },
        resave : true,
        rolling : true,
        saveUninitialized : false,
        secret : 'wushengyong_session_key'
    }
};

module.exports = config;
