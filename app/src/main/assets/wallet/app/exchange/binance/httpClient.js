_$define("app/exchange/binance/httpClient", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * http协议
 */
var mod_1 = require("../../../pi/lang/mod");
var logger = console;
var defaultPostHeaders = {
    'content-type': 'application/json;charset=utf-8'
};
var agentOptions = {
    keepAlive: true,
    maxSockets: 256
};
// tslint:disable-next-line:no-reserved-keywords
exports.get = function (url, options) {
    // console.log(`${moment().format()} HttpGet: ${url}`)
    return new Promise(function (resolve, reject) {
        options = options || {};
        var httpOptions = {
            url: url,
            method: 'get',
            timeout: options.timeout || 3000,
            headers: options.headers || defaultPostHeaders,
            proxy: options.proxy || '',
            agentOptions: agentOptions
        };
        mod_1.ajax.get(url, options.headers || defaultPostHeaders, null, mod_1.ajax.RESP_TYPE_TEXT, options.timeout || 3000, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                if (res.statusCode === 200) {
                    resolve(body);
                } else {
                    reject(res.statusCode);
                }
            }
        }, function (err) {
            reject(err);
        });
    });
};
exports.post = function (url, postdata, options) {
    // console.log(`${moment().format()} HttpPost: ${url}`)
    return new Promise(function (resolve, reject) {
        options = options || {};
        var httpOptions = {
            url: url,
            body: JSON.stringify(postdata),
            method: 'post',
            timeout: options.timeout || 3000,
            headers: options.headers || defaultPostHeaders,
            proxy: options.proxy || '',
            agentOptions: agentOptions
        };
        mod_1.ajax.get(url, options.headers || defaultPostHeaders, httpOptions, mod_1.ajax.RESP_TYPE_TEXT, options.timeout || 3000, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                if (res.statusCode === 200) {
                    resolve(body);
                } else {
                    reject(res.statusCode);
                }
            }
        }, function (err) {
            reject(err);
        });
    });
};
exports.formPost = function (url, postdata, options) {
    // console.log(`${moment().format()} HttpFormPost: ${url}`)
    return new Promise(function (resolve, reject) {
        options = options || {};
        var httpOptions = {
            url: url,
            form: postdata,
            method: 'post',
            timeout: options.timeout || 3000,
            headers: options.headers || defaultPostHeaders,
            proxy: options.proxy || '',
            agentOptions: agentOptions
        };
        mod_1.ajax.get(url, options.headers || defaultPostHeaders, httpOptions, mod_1.ajax.RESP_TYPE_TEXT, options.timeout || 3000, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                if (res.statusCode === 200) {
                    resolve(body);
                } else {
                    reject(res.statusCode);
                }
            }
        }, function (err) {
            reject(err);
        });
    });
};
})