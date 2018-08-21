_$define("app/exchange/binance/restApi", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
var httpClient_1 = require("./httpClient");
var BASE_URL = 'https://api.binance.com';
var orderbook = {};
/**
 * 获取订阅数据
 */
exports.getOrderBook = function () {
    return orderbook;
};
/**
 * 初始启动
 */
exports.init = function () {
    run();
};
var cmpAsk = function cmpAsk(a, b) {
    return a[0] - b[0];
};
var cmpBid = function cmpBid(a, b) {
    return b[0] - a[0];
};
var handle = function handle(coin, asks, bids, currency) {
    var a = asks.sort(cmpAsk);
    var b = bids.sort(cmpBid);
    var mySymbol = (coin + currency).toLowerCase();
    orderbook[mySymbol] = {
        asks: a,
        bids: b
    };
    // console.log(orderbook[symbol]);
    // TODO 根据数据生成你想要的K线 or whatever...
    // TODO 记录数据到你的数据库或者Redis
};
var getDepth = function getDepth(coin, currency) {
    return new Promise(function (resolve) {
        var url = BASE_URL + "/api/v1/depth?symbol=" + coin + currency;
        httpClient_1.get(url, {
            timeout: 1000,
            gzip: true
        }).then(function (data) {
            console.log(data);
            var json = JSON.parse(data);
            var asks = json.tick.asks;
            var bids = json.tick.bids;
            handle(coin, asks, bids, currency);
            resolve(null);
        }).catch(function (ex) {
            console.log(coin, currency, ex);
            resolve(null);
        });
    });
};
var run = function run() {
    // console.log(`run ${moment()}`);
    // let list_btc = ['ltc-btc', 'eth-btc', 'etc-btc', 'bcc-btc', 'dash-btc', 'omg-btc', 'eos-btc', 'xrp-btc', 'zec-btc', 'qtum-btc'];
    // let list_usdt = ['btc-usdt', 'ltc-usdt', 'eth-usdt', 'etc-usdt', 'bcc-usdt', 'dash-usdt', 'xrp-usdt'
    // , 'eos-usdt', 'omg-usdt', 'zec-usdt', 'qtum-usdt'];
    // let list_eth = ['omg-eth', 'eos-eth', 'qtum-eth'];
    // let list = list_btc.concat(list_usdt).concat(list_eth);
    var list = ['BNB-BTC'];
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var coin = item.split('-')[0];
        var currency = item.split('-')[1];
        getDepth(coin, currency);
    }
    setTimeout(run, 10000);
    // Promise.map(list, item => {
    //     const coin = item.split('-')[0];
    //     const currency = item.split('-')[1];
    //     return getDepth(coin, currency);
    // }).then(() => {
    //     setTimeout(run, 100);
    // });
};
})