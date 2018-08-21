_$define("app/exchange/huobi/hbsdk", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var md5_1 = require("../../../pi/util/md5");
var httpClient_1 = require("./httpClient");
// let config = require('config');
// let CryptoJS = require('crypto-js');
// let Promise = require('bluebird');
// let moment = require('moment');
// let HmacSHA256 = require('crypto-js/hmac-sha256');
/**
 * http协议
 */
var URL_HUOBI_PRO = 'api.huobipro.com';
// const URL_HUOBI_PRO = 'api.huobi.pro'; //备用地址
var DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',
    AuthData: null
};
var getAuth = function getAuth(config) {
    var sign = config.huobi.trade_password + "hello, moto";
    // todo md5处理
    var md5 = md5_1.str_md5(sign).toString().toLowerCase();
    return encodeURIComponent(JSON.stringify({
        assetPwd: md5
    }));
};
var signSha = function signSha(method, baseurl, path, data, config) {
    var pars = [];
    for (var item in data) {
        pars.push(item + "=" + encodeURIComponent(data[item]));
    }
    var p = pars.sort().join('&');
    var meta = [method, baseurl, path, p].join('\n');
    // console.log(meta);
    // // todo HmacSHA256处理
    // const hash = HmacSHA256(meta, config.huobi.secretkey);
    // // todo Base64处理
    // const Signature = encodeURIComponent(CryptoJS.enc.Base64.stringify(hash));
    var Signature = '';
    // console.log(`Signature: ${Signature}`);
    p += "&Signature=" + Signature;
    // console.log(p);
    return p;
};
var getBody = function getBody(config) {
    return {
        AccessKeyId: config.huobi.access_key,
        SignatureMethod: 'HmacSHA256',
        SignatureVersion: 2,
        // todo 时间格式化
        // Timestamp: moment.utc().format('YYYY-MM-DDTHH:mm:ss')
        Timestamp: ''
    };
};
var callApi = function callApi(method, path, payload, body, config) {
    return new Promise(function (resolve) {
        var accountId = config.huobi.account_id_pro;
        var url = "https://" + URL_HUOBI_PRO + path + "?" + payload;
        console.log(url);
        var headers = DEFAULT_HEADERS;
        headers.AuthData = getAuth(config);
        if (method === 'GET') {
            httpClient_1.get(url, {
                timeout: 1000,
                headers: headers
            }).then(function (data) {
                var json = JSON.parse(data);
                if (json.status === 'ok') {
                    console.log(json.data);
                    resolve(json.data);
                } else {
                    console.log('调用错误', json);
                    resolve(null);
                }
            }).catch(function (ex) {
                console.log(method, path, '异常', ex);
                resolve(null);
            });
        } else if (method === 'POST') {
            httpClient_1.post(url, body, {
                timeout: 1000,
                headers: headers
            }).then(function (data) {
                var json = JSON.parse(data);
                if (json.status === 'ok') {
                    console.log(json.data);
                    resolve(json.data);
                } else {
                    console.log('调用错误', json);
                    resolve(null);
                }
            }).catch(function (ex) {
                console.log(method, path, '异常', ex);
                resolve(null);
            });
        }
    });
};
exports.getAccount = function (config) {
    var path = "/v1/account/accounts";
    var body = getBody(config);
    var payload = signSha('GET', URL_HUOBI_PRO, path, body, config);
    return callApi('GET', path, payload, body, config);
};
exports.getBalance = function (config) {
    var accountId = config.huobi.account_id_pro;
    var path = "/v1/account/accounts/" + accountId + "/balance";
    var body = getBody(config);
    var payload = signSha('GET', URL_HUOBI_PRO, path, body, config);
    return callApi('GET', path, payload, body, config);
};
exports.getOpenOrders = function (mySymbol, config) {
    var path = "/v1/order/orders";
    var body = getBody(config);
    body.symbol = mySymbol;
    body.states = 'submitted,partial-filled';
    var payload = signSha('GET', URL_HUOBI_PRO, path, body, config);
    return callApi('GET', path, payload, body, config);
};
exports.getOrder = function (orderId, config) {
    var path = "/v1/order/orders/" + orderId;
    var body = getBody(config);
    var payload = signSha('GET', URL_HUOBI_PRO, path, body, config);
    return callApi('GET', path, payload, body, config);
};
exports.buyLimit = function (mySymbol, amount, price, config) {
    var path = '/v1/order/orders/place';
    var body = getBody(config);
    var payload = signSha('GET', URL_HUOBI_PRO, path, body, config);
    body['account-id'] = config.huobi.account_id_pro;
    body.type = 'buy-limit';
    body.amount = amount;
    body.symbol = mySymbol;
    body.price = price;
    return callApi('GET', path, payload, body, config);
};
exports.sellLimit = function (mySymbol, amount, price, config) {
    var path = '/v1/order/orders/place';
    var body = getBody(config);
    var payload = signSha('GET', URL_HUOBI_PRO, path, body, config);
    body['account-id'] = config.huobi.account_id_pro;
    body.type = 'sell-limit';
    body.amount = amount;
    body.symbol = mySymbol;
    body.price = price;
    return callApi('GET', path, payload, body, config);
};
exports.withdrawal = function (address, coin, amount, paymentId, config) {
    var path = "/v1/dw/withdraw/api/create";
    var body = getBody(config);
    var payload = signSha('GET', URL_HUOBI_PRO, path, body, config);
    body.address = address;
    body.amount = amount;
    body.currency = coin;
    if (coin.toLowerCase() === 'xrp') {
        if (paymentId) {
            body['addr-tag'] = paymentId;
        } else {
            console.log('huobi withdrawal', coin, 'no payment id provided, cancel withdrawal');
            return Promise.resolve(null);
        }
    }
    return callApi('GET', path, payload, body, config);
};
})