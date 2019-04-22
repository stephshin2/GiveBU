var express = require('express');
var request = require("request");
var router = express.Router();

router.get('/', function(req, res, next) {
    var username = req.query.username;
    var password = req.query.password;

    var options = { method: 'POST',
        url: 'http://weblogin.bu.edu',
        qs: { jsv: '1.5p', br: 'un', fl: '0' },
        json: true,
        headers:
            { 'Postman-Token': '4423a975-ec58-41b3-b290-e37a0eecfa49',
                'cache-control': 'no-cache',
                'Content-Length': '68',
                Connection: 'keep-alive',
                'Accept-Language': 'en-US,en;q=0.9,tr;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3' },
        form:
            { p: '',
                act: 'up',
                js: 'yes',
                jserror: '',
                c2f: '',
                r2f: '',
                user: username,
                pw2: password,
                pw: password,
                undefined: undefined } };


    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        if(response.caseless.dict.etag){
            res.send("INVALID")
        } else {
            res.send("SUCCESS");
        }

    });


});

module.exports = router;
