/**
 * Created by wushengyong on 2017/7/5.
 */

var config = {
    session : {
        cookie : {
            maxAge : 6 * 1E3 // ��Ч�ڣ�60s��60s���޲�����Ӵ�����µ�¼
        },
        resave : true,
        rolling : true,
        saveUninitialized : false,
        secret : 'wushengyong_session_key'
    }
};

module.exports = config;
