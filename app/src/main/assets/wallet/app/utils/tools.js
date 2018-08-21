_$define("app/utils/tools", function (require, exports, module){
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * common tools
 */
var argonHash_1 = require("../../pi/browser/argonHash");
var root_1 = require("../../pi/ui/root");
var util_1 = require("../../pi/util/util");
var wallet_1 = require("../core/btc/wallet");
var cipher_1 = require("../core/crypto/cipher");
var helper_1 = require("../core/eth/helper");
var tokens_1 = require("../core/eth/tokens");
var wallet_2 = require("../core/eth/wallet");
var genmnemonic_1 = require("../core/genmnemonic");
var globalWallet_1 = require("../core/globalWallet");
var dataCenter_1 = require("../store/dataCenter");
var store_1 = require("../store/store");
var constants_1 = require("./constants");
exports.depCopy = function (v) {
    return JSON.parse(JSON.stringify(v));
};
// 这需要移除
exports.setLocalStorage = function (key, data, notified) {
    store_1.updateStore(key, data, notified);
};
// 这需要移除
exports.getLocalStorage = function (key) {
    return store_1.find(key);
};
// 这需要移除
exports.removeLocalStorage = function (key) {
    localStorage.removeItem(key);
};
exports.sleep = function (delay) {
    var startTime = new Date().getTime();
    var loop = true;
    while (loop) {
        var endTime = new Date().getTime();
        if (endTime - startTime > delay) {
            loop = false;
        }
    }
};
/**
 * 获取指定id的钱包
 */
exports.getWalletByWalletId = function (wallets, walletId) {
    if (!(wallets && wallets.length > 0)) return null;
    for (var i = 0; i < wallets.length; i++) {
        if (wallets[i].walletId === walletId) return wallets[i];
    }
    return null;
};
/**
 * 获取指定id钱包的index
 */
exports.getWalletIndexByWalletId = function (wallets, walletId) {
    if (!(wallets && wallets.length > 0)) {
        return -1;
    }
    for (var i = 0; i < wallets.length; i++) {
        if (wallets[i].walletId === walletId) return i;
    }
    return -1;
};
/**
 * 获取当前钱包对应货币正在使用的地址信息
 * @param currencyName 货币类型
 */
exports.getCurrentAddrInfo = function (currencyName) {
    var addrs = store_1.find('addrs');
    var wallet = store_1.find('curWallet');
    var currencyRecord = wallet.currencyRecords.filter(function (item) {
        return item.currencyName === currencyName;
    })[0];
    // tslint:disable-next-line:no-unnecessary-local-variable
    var addrInfo = addrs.filter(function (item) {
        return item.addr === currencyRecord.currentAddr && item.currencyName === currencyName;
    })[0];
    return addrInfo;
};
/**
 * 通过地址id获取地址信息
 * @param addrId  address id
 */
exports.getAddrById = function (addrId, currencyName) {
    var list = store_1.find('addrs') || [];
    return list.filter(function (v) {
        return v.addr === addrId && v.currencyName === currencyName;
    })[0];
};
/**
 * 通过地址id重置地址
 * @param addrId address id
 * @param data  新地址
 * @param notified 是否通知数据发生改变
 */
exports.resetAddrById = function (addrId, currencyName, data, notified) {
    var list = store_1.find('addrs') || [];
    list = list.map(function (v) {
        if (v.addr === addrId && v.currencyName === currencyName) return data;
        return v;
    });
    store_1.updateStore('addrs', list);
};
/**
 * 获取钱包下的所有地址
 * @param wallet wallet obj
 */
exports.getAddrsAll = function (wallet) {
    var currencyRecords = wallet.currencyRecords;
    var retAddrs = [];
    currencyRecords.forEach(function (item) {
        retAddrs.push.apply(retAddrs, _toConsumableArray(item.addrs));
    });
    // 去除数组中重复的地址
    return [].concat(_toConsumableArray(new Set(retAddrs)));
};
/**
 * 获取钱包下指定货币类型的所有地址
 * @param wallet wallet obj
 */
exports.getAddrsByCurrencyName = function (wallet, currencyName) {
    var currencyRecords = wallet.currencyRecords;
    var retAddrs = [];
    var len = currencyRecords.length;
    for (var i = 0; i < len; i++) {
        if (currencyRecords[i].currencyName === currencyName) {
            retAddrs.push.apply(retAddrs, _toConsumableArray(currencyRecords[i].addrs));
            break;
        }
    }
    return retAddrs;
};
// Password used to encrypt the plainText
var passwd = 'gaia';
/**
 * 密码加密
 * @param plainText 需要加密的文本
 */
exports.encrypt = function (plainText) {
    var cipher = new cipher_1.Cipher();
    return cipher.encrypt(passwd, plainText);
};
/**
 * 密码解密
 * @param cipherText 需要解密的文本
 */
exports.decrypt = function (cipherText) {
    var cipher = new cipher_1.Cipher();
    return cipher.decrypt(passwd, cipherText);
};
// hash256
exports.sha256 = function (data) {
    var cipher = new cipher_1.Cipher();
    return cipher.sha256(data);
};
exports.randomRgbColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")"; // 返回rgb(r,g,b)格式颜色
};
/**
 * 解析显示的账号信息
 * @param str 需要解析的字符串
 */
exports.parseAccount = function (str) {
    if (str.length <= 29) return str;
    return str.slice(0, 8) + "..." + str.slice(str.length - 8, str.length);
};
exports.getDefaultAddr = function (addr) {
    var addrStr = addr.toString();
    return addrStr.slice(0, 3) + "..." + addrStr.slice(-3);
};
/**
 * sat转btc
 */
exports.sat2Btc = function (num) {
    if (!num) return 0;
    return num / Math.pow(10, 8);
};
/**
 * btc转sat
 */
exports.btc2Sat = function (num) {
    if (!num) return 0;
    return num * Math.pow(10, 8);
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
 * 根据货币类型小单位转大单位
 */
exports.smallUnit2LargeUnit = function (currencyName, amount) {
    if (currencyName === 'ETH') {
        return globalWallet_1.wei2Eth(amount);
    } else if (currencyName === 'KT') {
        return exports.kpt2kt(amount);
    }
};
/**
 * 根据货币类型大单位转小单位
 */
exports.largeUnit2SmallUnit = function (currencyName, amount) {
    if (currencyName === 'ETH') {
        return globalWallet_1.eth2Wei(amount);
    } else if (currencyName === 'KT') {
        return Math.floor(exports.kt2kpt(amount));
    }
};
/**
 * 根据货币类型小单位转大单位
 */
exports.smallUnit2LargeUnitString = function (currencyName, amount) {
    if (currencyName === 'ETH') {
        var pow = amount.length - 15;
        var num = Number(amount.slice(0, 15));
        num = globalWallet_1.wei2Eth(num);
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
        return Number(globalWallet_1.eth2Wei(amount)).toString(10);
    } else if (currencyName === 'KT') {
        return exports.kt2kpt(amount).toLocaleString().replace(/,/g, '');
    }
};
/**
 * eth 代币除以精度计算
 */
exports.ethTokenDivideDecimals = function (num, tokenName) {
    var ERC20TokenDecimals = exports.getLocalStorage('ERC20TokenDecimals') || {};
    var decimals = ERC20TokenDecimals[tokenName] ? ERC20TokenDecimals[tokenName] : Math.pow(10, 18);
    return num / decimals;
};
/**
 * eth 代币乘以精度计算
 */
exports.ethTokenMultiplyDecimals = function (num, tokenName) {
    var ERC20TokenDecimals = exports.getLocalStorage('ERC20TokenDecimals') || {};
    var decimals = ERC20TokenDecimals[tokenName] ? ERC20TokenDecimals[tokenName] : Math.pow(10, 18);
    return num * decimals;
};
/**
 * 获取有效的货币
 *
 * @param perNum 转化前数据
 * @param currencyName  当前货币类型
 * @param conversionType 转化类型
 * @param isWei 是否wei转化
 */
exports.effectiveCurrency = function (perNum, currencyName, conversionType, isMinUnit) {
    var r = { num: 0, show: '', conversionShow: '' };
    var rate = dataCenter_1.dataCenter.getExchangeRate(currencyName);
    var num = void 0;
    if (currencyName === 'ETH') {
        num = isMinUnit ? globalWallet_1.wei2Eth(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum) : perNum;
    } else if (currencyName === 'BTC') {
        num = isMinUnit ? exports.sat2Btc(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum) : perNum;
    } else if (tokens_1.ERC20Tokens[currencyName]) {
        num = isMinUnit ? exports.ethTokenDivideDecimals(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum, currencyName) : perNum;
    }
    num = exports.formatBalance(num);
    r.num = num;
    r.show = num + " " + currencyName;
    r.conversionShow = "\u2248" + (num * rate[conversionType]).toFixed(2) + " " + conversionType;
    return r;
};
/**
 * 获取有效的货币不需要转化
 *
 * @param perNum 转化前数据
 * @param currencyName  当前货币类型
 * @param isWei 是否wei转化effectiveCurrencyNoConversion
 */
exports.effectiveCurrencyNoConversion = function (perNum, currencyName, isMinUnit) {
    var r = { num: 0, show: '', conversionShow: '' };
    var num = void 0;
    if (currencyName === 'ETH') {
        num = isMinUnit ? globalWallet_1.wei2Eth(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum) : perNum;
    } else if (currencyName === 'BTC') {
        num = isMinUnit ? exports.sat2Btc(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum) : perNum;
    } else if (tokens_1.ERC20Tokens[currencyName]) {
        num = isMinUnit ? exports.ethTokenDivideDecimals(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum, currencyName) : perNum;
    }
    r.num = num;
    r.show = exports.formatBalance(num) + " " + currencyName;
    return r;
};
/**
 * 获取有效的货币不需要转化
 *
 * @param perNum 转化前数据
 * @param currencyName  当前货币类型
 * @param isMinUnit 是否是最小单位
 *
 */
exports.effectiveCurrencyStableConversion = function (perNum, currencyName, conversionType, isMinUnit) {
    var rate = dataCenter_1.dataCenter.getExchangeRate(currencyName);
    var r = { num: 0, conversionShow: '' };
    var num = void 0;
    if (currencyName === 'ETH') {
        num = isMinUnit ? globalWallet_1.wei2Eth(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum) : perNum;
    } else if (currencyName === 'BTC') {
        num = isMinUnit ? exports.sat2Btc(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum) : perNum;
    } else if (tokens_1.ERC20Tokens[currencyName]) {
        num = isMinUnit ? exports.ethTokenDivideDecimals(!util_1.isNumber(perNum) ? perNum.toNumber() : perNum, currencyName) : perNum;
    }
    r.num = num;
    r.conversionShow = (num * rate[conversionType]).toFixed(2);
    return r;
};
/**
 * 转化显示时间
 * @param t date
 */
exports.parseDate = function (t) {
    // tslint:disable-next-line:max-line-length
    return t.getUTCFullYear() + "-" + addPerZero(t.getUTCMonth() + 1, 2) + "-" + addPerZero(t.getUTCDate(), 2) + " " + addPerZero(t.getHours(), 2) + ":" + addPerZero(t.getMinutes(), 2);
};
/**
 * 转化显示时间格式为‘04-30 14:32:00’
 */
exports.transDate = function (t) {
    // tslint:disable-next-line:max-line-length
    return addPerZero(t.getUTCMonth() + 1, 2) + "-" + addPerZero(t.getUTCDate(), 2) + " " + addPerZero(t.getHours(), 2) + ":" + addPerZero(t.getMinutes(), 2) + ":" + addPerZero(t.getSeconds(), 2);
};
/**
 * 数字前边加0
 */
var addPerZero = function addPerZero(num, len) {
    var numStr = num.toString();
    var perLen = len - numStr.length;
    if (perLen <= 0) return numStr;
    var list = [];
    list.length = perLen;
    return list.fill('0').join('') + numStr;
};
// 数组乱序
exports.shuffle = function (arr) {
    var length = arr.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
        rand = ~~(Math.random() * (index + 1));
        if (rand !== index) {
            shuffled[index] = shuffled[rand];
        }
        shuffled[rand] = arr[index];
    }
    return shuffled;
};
/**
 * 获取字符串有效长度
 * @param str 字符串
 *
 * 中文字符算2个字符
 */
exports.getStrLen = function (str) {
    if (str === null) return 0;
    if (typeof str !== 'string') {
        str += '';
    }
    return str.replace(/[^\x00-\xff]/g, '01').length;
};
/**
 * 截取字符串
 * @param str 字符串
 * @param start 开始位置
 * @param len 截取长度
 */
exports.sliceStr = function (str, start, len) {
    if (str === null) return '';
    if (typeof str !== 'string') str += '';
    var r = '';
    for (var i = start; i < str.length; i++) {
        len--;
        if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
            len--;
        }
        if (len < 0) break;
        r += str[i];
    }
    return r;
};
/**
 * 获取新的地址信息
 * @param currencyName 货币类型
 */
exports.getNewAddrInfo = function (currencyName, mnemonic, wallet) {
    var currencyRecord = wallet.currencyRecords.filter(function (v) {
        return v.currencyName === currencyName;
    })[0];
    if (!currencyRecord) return;
    var addrs = store_1.find('addrs');
    var firstAddr = addrs.filter(function (v) {
        return v.addr === currencyRecord.addrs[0];
    })[0];
    var address = void 0;
    if (currencyName === 'ETH' || tokens_1.ERC20Tokens[currencyName]) {
        var wlt = wallet_2.EthWallet.fromJSON(firstAddr.wlt);
        var newWlt = wlt.selectAddressWlt(currencyRecord.addrs.length);
        address = newWlt.address;
    } else if (currencyName === 'BTC') {
        var _wlt = wallet_1.BTCWallet.fromJSON(firstAddr.wlt);
        _wlt.unlock();
        address = _wlt.derive(currencyRecord.addrs.length);
        _wlt.lock();
    }
    return address;
};
/**
 * 添加新的地址
 * @param currencyName 货币类型
 * @param address 新的地址
 * @param addrName 新的地址名
 * @param wltJson 新的地址钱包对象
 */
exports.addNewAddr = function (currencyName, address, addrName) {
    var wallet = store_1.find('curWallet');
    var currencyRecord = wallet.currencyRecords.filter(function (v) {
        return v.currencyName === currencyName;
    })[0];
    if (!currencyRecord) return;
    currencyRecord.addrs.push(address);
    var addrs = store_1.find('addrs') || [];
    var newAddrInfo = dataCenter_1.dataCenter.initAddr(address, currencyName, addrName);
    addrs.push(newAddrInfo);
    currencyRecord.currentAddr = address;
    dataCenter_1.dataCenter.addAddr(address, addrName, currencyName);
    store_1.updateStore('addrs', addrs);
    store_1.updateStore('curWallet', wallet);
    return newAddrInfo;
};
// 函数防抖
exports.debounce = function (fn) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    var timer = null;
    return function () {
        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
        }

        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(undefined, rest);
        }, wait);
    };
};
/**
 * 是否是有效地址
 * @param currencyName 货币类型
 * @param addr 地址
 */
exports.effectiveAddr = function (currencyName, addr) {
    var flag = false;
    if (currencyName === 'ETH') {
        // 0xa6e83b630bf8af41a9278427b6f2a35dbc5f20e3
        // alert(addr);
        var per = 'iban:';
        if (addr.indexOf(per) === 0) {
            var lastIndex = addr.indexOf('?');
            addr = lastIndex >= 0 ? addr.slice(per.length, lastIndex) : addr.slice(per.length);
            if (helper_1.isValidIban(addr)) {
                addr = helper_1.ibanToAddress(addr);
            }
        }
        flag = addr.indexOf('0x') === 0 && addr.length === 42;
    } else if (currencyName === 'BTC') {
        // alert(addr);
        var _per = 'bitcoin:';
        if (addr.indexOf(_per) === 0) {
            var _lastIndex = addr.indexOf('?');
            addr = _lastIndex >= 0 ? addr.slice(_per.length, _lastIndex) : addr.slice(_per.length);
        }
        // alert(addr.length);
        // mw8VtNKY81RjLz52BqxUkJx57pcsQe4eNB
        flag = addr.length === 34;
    }
    return [flag, addr];
};
/**
 * 解析url中指定key的值
 * @param url url地址
 * @param key 键
 */
exports.urlParams = function (url, key) {
    var ret = url.match(new RegExp("(\\?|&)" + key + "=(.*?)(&|$)"));
    return ret && decodeURIComponent(ret[2]);
};
/**
 * 金额格式化
 * @param banlance 金额
 */
exports.formatBalance = function (banlance) {
    if (!banlance) return 0;
    return Number(banlance.toFixed(6));
};
/**
 * 字符串转u8Arr
 *
 * @param str 输入字符串
 */
exports.str2arr = function (str) {
    var len = str.length;
    var arr = [];
    var arr32 = void 0;
    var i = void 0;
    var offset = 0;
    if (len >= 32) {
        for (i = 0; i < 8; i++) {
            arr[i] = (str.charCodeAt(i * 4) & 0xff) << 24 | (str.charCodeAt(i * 4 + 1) & 0xff) << 16 | (str.charCodeAt(i * 4 + 2) & 0xff) << 8 | str.charCodeAt(i * 4 + 3) & 0xff;
        }
    }
    arr32 = new Uint32Array(new ArrayBuffer(32));
    for (i = 0; i < 8; i++) {
        arr32[i] = arr[offset++];
    }
    return new Uint8Array(arr32.buffer, 0, 32);
};
/**
 * u16Arr转字符串
 *
 * @param buf 输入buff
 */
exports.ab2str = function (buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
};
/**
 * 字符串转u16Arr
 *
 * @param str 输入字符串
 */
exports.str2ab = function (str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};
/**
 * 字节数组转十六进制字符串
 * @param arr 传入数组
 */
exports.bytes2Str = function (arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i].toString(16);
        if (tmp.length === 1) {
            tmp = "0" + tmp;
        }
        str += tmp;
    }
    return str;
};
/**
 * 十六进制字符串转字节数组
 * @param str 传入字符串
 */
exports.str2Bytes = function (str) {
    var pos = 0;
    var len = str.length;
    if (len % 2 !== 0) return null;
    len /= 2;
    var hexA = [];
    for (var i = 0; i < len; i++) {
        var s = str.substr(pos, 2);
        var v = parseInt(s, 16);
        hexA.push(v);
        pos += 2;
    }
    return hexA;
};
/**
 * 十六进制字符串转u8数组
 *
 * @param str 输入字符串
 */
exports.hexstrToU8Array = function (str) {
    if (str.length % 2 > 0) str = "0" + str;
    var r = new Uint8Array(str.length / 2);
    for (var i = 0; i < str.length; i += 2) {
        var high = parseInt(str.charAt(i), 16);
        var low = parseInt(str.charAt(i + 1), 16);
        r[i / 2] = high * 16 + low;
    }
    return r;
};
/**
 * u8数组转十六进制字符串
 *
 * @param u8Array 输入数组
 */
exports.u8ArrayToHexstr = function (u8Array) {
    var str = '';
    for (var i = 0; i < u8Array.length; i++) {
        str += Math.floor(u8Array[i] / 16).toString(16);
        str += (u8Array[i] % 16).toString(16);
        // str += u8Array[i].toString(16);
    }
    if (str[0] === '0') str = str.slice(1);
    return str;
};
/**
 * 简化加密助记词
 *
 * @param cipherMnemonic 加密助记词
 */
exports.simplifyCipherMnemonic = function (cipherMnemonic) {
    var r = JSON.parse(cipherMnemonic);
    var newJson = { iv: r.iv, ct: r.ct, salt: r.salt };
    return JSON.stringify(newJson);
};
/**
 * 还原加密助记词
 *
 * @param cipherMnemonic 加密助记词
 */
exports.reductionCipherMnemonic = function (cipherMnemonic) {
    var r = JSON.parse(cipherMnemonic);
    var newJson = {
        iv: r.iv, ct: r.ct, salt: r.salt, v: 1, iter: 10000, ks: 128, ts: 64,
        mode: 'ccm', adata: '', cipher: 'aes', keySize: 128, tagSize: 64
    };
    return JSON.stringify(newJson);
};
/**
 * 余额格式化
 */
exports.formatBalanceValue = function (value) {
    return value.toFixed(2);
};
/**
 * 获取总资产
 */
exports.fetchTotalAssets = function () {
    var wallet = store_1.find('curWallet');
    if (!wallet) return;
    var totalAssets = 0;
    wallet.currencyRecords.forEach(function (item) {
        var balance = exports.fetchBalanceOfCurrency(item.addrs, item.currencyName);
        totalAssets += balance * dataCenter_1.dataCenter.getExchangeRate(item.currencyName).CNY;
    });
    return totalAssets;
};
/**
 * 获取指定货币下余额总数
 * @param addrs 指定货币下的地址
 * @param currencyName 货币名称
 */
exports.fetchBalanceOfCurrency = function (addrs, currencyName) {
    var localAddrs = store_1.find('addrs');
    var balance = 0;
    localAddrs.forEach(function (item) {
        if (addrs.indexOf(item.addr) >= 0 && item.currencyName === currencyName) {
            balance += item.balance;
        }
    });
    return balance;
};
/**
 * 获取异或值
 * @param first 前段
 * @param second 后段
 */
exports.getXOR = function (first, second) {
    if (first.length !== second.length) return '';
    var arr = [];
    for (var i = 0; i < first.length; i++) {
        var m = parseInt(first.substr(i, 1), 16);
        var k = parseInt(second.substr(i, 1), 16);
        arr.push((m ^ k).toString(16));
    }
    return arr.join('');
};
/**
 * 验证身份
 */
exports.VerifyIdentidy = function (wallet, passwd) {
    var useCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var hash, gwlt, cipher, r;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return exports.calcHashValuePromise(passwd, store_1.find('salt'), wallet.walletId, useCache);

                    case 2:
                        hash = _context.sent;
                        gwlt = globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt);
                        _context.prev = 4;
                        cipher = new cipher_1.Cipher();
                        r = cipher.decrypt(hash, gwlt.vault);
                        // console.log('VerifyIdentidy hash', hash, gwlt.vault, passwd, r);

                        dataCenter_1.dataCenter.setHash(wallet.walletId, hash);
                        return _context.abrupt("return", true);

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context["catch"](4);

                        console.log(_context.t0);
                        return _context.abrupt("return", false);

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[4, 11]]);
    }));
};
/**
 * 获取助记词
 */
exports.getMnemonic = function (wallet, passwd) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var hash, gwlt, cipher, r;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return exports.calcHashValuePromise(passwd, store_1.find('salt'), wallet.walletId);

                    case 2:
                        hash = _context2.sent;
                        gwlt = globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt);
                        _context2.prev = 4;
                        cipher = new cipher_1.Cipher();
                        r = cipher.decrypt(hash, gwlt.vault);

                        dataCenter_1.dataCenter.setHash(wallet.walletId, hash);
                        return _context2.abrupt("return", genmnemonic_1.toMnemonic(constants_1.lang, exports.hexstrToU8Array(r)));

                    case 11:
                        _context2.prev = 11;
                        _context2.t0 = _context2["catch"](4);

                        console.log(_context2.t0);
                        return _context2.abrupt("return", '');

                    case 15:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[4, 11]]);
    }));
};
/**
 * 获取助记词16进制字符串
 */
exports.getMnemonicHexstr = function (wallet, passwd) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var hash, gwlt, cipher, r;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return exports.calcHashValuePromise(passwd, store_1.find('salt'), wallet.walletId);

                    case 2:
                        hash = _context3.sent;
                        gwlt = globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt);
                        _context3.prev = 4;
                        cipher = new cipher_1.Cipher();
                        r = cipher.decrypt(hash, gwlt.vault);

                        dataCenter_1.dataCenter.setHash(wallet.walletId, hash);
                        return _context3.abrupt("return", r);

                    case 11:
                        _context3.prev = 11;
                        _context3.t0 = _context3["catch"](4);

                        console.log(_context3.t0);
                        return _context3.abrupt("return", '');

                    case 15:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[4, 11]]);
    }));
};
// 锁屏密码验证
exports.lockScreenVerify = function (psw) {
    var hash256 = exports.sha256(psw + store_1.find('salt'));
    var localHash256 = store_1.find('lockScreen').psw;
    return hash256 === localHash256;
};
// 锁屏密码hash算法
exports.lockScreenHash = function (psw) {
    return exports.sha256(psw + store_1.find('salt'));
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
/**
 * 获取memery hash
 */
exports.calcHashValuePromise = function (pwd, salt, walletId) {
    var useCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var hash, argonHash;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        hash = void 0;

                        if (!(useCache && walletId)) {
                            _context4.next = 5;
                            break;
                        }

                        hash = store_1.find('hashMap', walletId);

                        if (!hash) {
                            _context4.next = 5;
                            break;
                        }

                        return _context4.abrupt("return", hash);

                    case 5:
                        argonHash = new argonHash_1.ArgonHash();

                        argonHash.init();
                        // tslint:disable-next-line:no-unnecessary-local-variable
                        _context4.next = 9;
                        return argonHash.calcHashValuePromise({ pwd: pwd, salt: salt });

                    case 9:
                        hash = _context4.sent;
                        return _context4.abrupt("return", hash);

                    case 11:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));
};
/**
 * 基础打开弹窗界面封装
 */
exports.openBasePage = function (foreletName) {
    var foreletParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // this.windowConfig = windowconfig || this.windowConfig;
    // if (!foreletName || foreletName === '') {
    //     console.warn(`openModal foreletName is fail:${foreletName}`);
    //     return;
    // }
    // // 单例模式
    // if (this.windowConfig && this.windowConfig.model === 'single' && this.windowSet.has(foreletName)) {
    //     console.info(`窗口${foreletName}已经创建，阻止重复创建`);
    //     return;
    // }  else {
    //     this.windowSet.add(foreletName);
    // }
    // tslint:disable-next-line:typedef
    return new Promise(function (resolve, reject) {
        root_1.popNew(foreletName, foreletParams, function (ok) {
            // this.windowSet.delete(foreletName);
            resolve(ok);
        }, function (cancel) {
            // this.windowSet.delete(foreletName);
            reject(cancel);
        });
    });
};
exports.popPswBox = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var psw;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return openMessageboxPsw();

                    case 3:
                        psw = _context5.sent;
                        return _context5.abrupt("return", psw);

                    case 7:
                        _context5.prev = 7;
                        _context5.t0 = _context5["catch"](0);
                        return _context5.abrupt("return");

                    case 10:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 7]]);
    }));
};
/**
 * 打开密码输入框
 */
var openMessageboxPsw = function openMessageboxPsw() {
    // tslint:disable-next-line:typedef
    return new Promise(function (resolve, reject) {
        root_1.popNew('app-components-message-messageboxPrompt', { title: '输入密码', content: '', inputType: 'password' }, function (ok) {
            // this.windowSet.delete(foreletName);
            resolve(ok);
        }, function (cancel) {
            // this.windowSet.delete(foreletName);
            reject(cancel);
        });
    });
};
// 计算字符串长度包含中文 中文长度加2 英文加1
exports.getByteLen = function (val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) !== null) {
            len += 2;
        } else {
            len += 1;
        }
    }
    return len;
};
// 计算支持的币币兑换的币种
exports.currencyExchangeAvailable = function () {
    var shapeshiftCoins = store_1.find('shapeShiftCoins');
    var currencyArr = [];
    for (var i = 0; i < constants_1.supportCurrencyList.length; i++) {
        currencyArr.push(constants_1.supportCurrencyList[i].name);
    }
    return shapeshiftCoins.filter(function (item) {
        return item.status === 'available' && currencyArr.indexOf(item.symbol) >= 0;
    });
};
// 根据货币名获取当前正在使用的地址
exports.getCurrentAddrByCurrencyName = function (currencyName) {
    var wallet = store_1.find('curWallet');
    var currencyRecords = wallet.currencyRecords;
    var curAddr = '';
    for (var i = 0; i < currencyRecords.length; i++) {
        if (currencyRecords[i].currencyName === currencyName) {
            curAddr = currencyRecords[i].currentAddr;
            break;
        }
    }
    return curAddr;
};
// 根据货币名获取当前正在使用的地址的余额
exports.getCurrentAddrBalanceByCurrencyName = function (currencyName) {
    var curAddr = exports.getCurrentAddrByCurrencyName(currencyName);
    console.log('curAddr', curAddr);
    var addrs = store_1.find('addrs');
    for (var i = 0; i < addrs.length; i++) {
        if (addrs[i].currencyName === currencyName && addrs[i].addr === curAddr) {
            return addrs[i].balance;
        }
    }
};
// 时间戳格式化 毫秒为单位
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
// 获取当前钱包第一个ETH地址
exports.getFirstEthAddr = function () {
    var wallet = store_1.find('curWallet');
    if (!wallet) return;
    var currencyRecords = wallet.currencyRecords;
    for (var i = 0; i < currencyRecords.length; i++) {
        if (currencyRecords[i].currencyName === 'ETH') {
            return currencyRecords[i].addrs[0];
        }
    }
};
// unicode数组转字符串
exports.unicodeArray2Str = function (arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += String.fromCharCode(arr[i]);
    }
    return str;
};
/**
 * 添加交易记录到本地
 */
exports.addRecord = function (currencyName, currentAddr, record) {
    var addr = exports.getAddrById(currentAddr, currencyName);
    if (!addr) return;
    addr.record.push(record);
    exports.resetAddrById(currentAddr, currencyName, addr, true);
};
})