_$define("app/shareView/utils/tools", function (require, exports, module){
"use strict";
/**
 * 常用工具
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.setLocalStorage = function (keyName, data) {
    localStorage.setItem(keyName, JSON.stringify(data));
};
exports.getLocalStorage = function (keyName) {
    return JSON.parse(localStorage.getItem(keyName));
};
// 解析url参数
exports.parseUrlParams = function (search, key) {
    var ret = search.match(new RegExp("(\\?|&)" + key + "=(.*?)(&|$)"));
    return ret && decodeURIComponent(ret[2]);
};
// unicode数组转字符串
exports.unicodeArray2Str = function (arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += String.fromCharCode(arr[i]);
    }
    return str;
};
// 复制到剪切板
exports.copyToClipboard = function (copyText) {
    var input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', copyText);
    input.setAttribute('style', 'position:absolute;top:-9999px;');
    document.body.appendChild(input);
    input.setSelectionRange(0, 9999);
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    document.body.removeChild(input);
};
// 时间戳格式化
exports.timestampFormat = function (timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    var day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    var hour = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
    var minutes = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
    var seconds = date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
    return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
};
/**
 * kpt转kt
 */
exports.kpt2kt = function (num) {
    if (!num) return 0;
    return num / Math.pow(10, 9);
};
/**
 * kt转kpt
 */
exports.kt2kpt = function (num) {
    if (!num) return 0;
    return num * Math.pow(10, 9);
};
/**
 * kpt转kt
 */
exports.wei2Eth = function (num) {
    if (!num) return 0;
    return num / Math.pow(10, 18);
};
/**
 * kt转kpt
 */
exports.eth2Wei = function (num) {
    if (!num) return 0;
    return num * Math.pow(10, 18);
};
/**
 * 根据货币类型小单位转大单位
 */
exports.smallUnit2LargeUnitString = function (currencyName, amount) {
    if (currencyName === 'ETH') {
        var pow = amount.length - 15;
        var num = Number(amount.slice(0, 15));
        num = exports.wei2Eth(num);
        num = num * Math.pow(10, pow);
        return exports.formatBalance(num);
    } else if (currencyName === 'KT') {
        return exports.formatBalance(exports.kpt2kt(Number(amount)));
    }
};
/**
 * 根据货币类型大单位转小单位
 */
exports.largeUnit2SmallUnitString = function (currencyName, amount) {
    if (currencyName === 'ETH') {
        return exports.eth2Wei(amount).toLocaleString().replace(/,/g, '');
    } else if (currencyName === 'KT') {
        return exports.kt2kpt(amount).toLocaleString().replace(/,/g, '');
    }
};
/**
 * 金额格式化
 * @param banlance 金额
 */
exports.formatBalance = function (banlance) {
    return Number(banlance.toFixed(6));
};
})