_$define("app/store/store", function (require, exports, module){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Object.defineProperty(exports, "__esModule", { value: true });
// ============================================ 导入
var event_1 = require("../../pi/util/event");
var math_1 = require("../../pi/util/math");
var config_1 = require("../core/config");
// tslint:disable-next-line:max-line-length
var constants_1 = require("../utils/constants");
var tools_1 = require("../utils/tools");
// tslint:disable-next-line:max-line-length
var interface_1 = require("./interface");
// ============================================ 导出
/**
 * 根据keyName返回相应的数据，map数据会被转换为数组
 * 若传入id参数,则会取相应map的值
 */
// tslint:disable-next-line:no-any
exports.find = function (keyName, id) {
    if (!id) {
        var _value = store[keyName];
        if (!(_value instanceof Map)) {
            return _value instanceof Object ? tools_1.depCopy(_value) : _value;
        }
        var arr = [];
        for (var _iterator = _value, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var _ref2 = _ref,
                _ref3 = _slicedToArray(_ref2, 2),
                v = _ref3[1];

            arr.push(v);
        }
        return tools_1.depCopy(arr);
    }
    var value = store[keyName].get(id);
    if (value instanceof Map) {
        var result = value.get(id);
        return result && tools_1.depCopy(result);
    } else {
        return value && tools_1.depCopy(value);
    }
};
/**
 * 返回原始数据结构
 */
exports.getBorn = function (keyname) {
    return store[keyname];
};
/**
 * 更新store并通知
 */
// tslint:disable-next-line:no-any
exports.updateStore = function (keyName, data) {
    var notified = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    store[keyName] = data;
    if (notified) handlerMap.notify(keyName, [data]);
};
/**
 * 更新store---后续考虑移除
 */
exports.notify = function (keyName, data) {
    handlerMap.notify(keyName, [data]);
};
/**
 * 消息处理器
 */
exports.register = function (keyName, cb) {
    handlerMap.add(keyName, cb);
};
exports.unregister = function (keyName, cb) {
    handlerMap.remove(keyName, cb);
};
exports.initStore = function () {
    // 从localStorage中取wallets
    var wallets = findByLoc('wallets');
    store.walletList = wallets && wallets.walletList || [];
    // 从localStorage中取addrs
    store.addrs = findByLoc('addrs') || [];
    // 从localStorage中取transactions
    store.transactions = findByLoc('transactions') || [];
    // 从localStorage中的wallets中初始化salt
    store.salt = wallets && wallets.salt || math_1.cryptoRandomInt().toString();
    // 从localStorage中的wallets中初始化curWallet
    store.curWallet = wallets && wallets.walletList.length > 0 && wallets.walletList.filter(function (v) {
        return v.walletId === wallets.curWalletId;
    })[0];
    // 从localStorage中取readedPriAgr
    store.readedPriAgr = findByLoc('readedPriAgr');
    // 从localStorage中取lockScreen
    store.lockScreen = findByLoc('lockScreen') || {};
    store.ERC20TokenDecimals = findByLoc('ERC20TokenDecimals') || {};
    // 从localStorage中取sHisRecMap
    var sHisRecMap = new Map(findByLoc('sHisRecMap'));
    store.sHisRec = sHisRecMap.get(tools_1.getFirstEthAddr());
    // 从localStorage中取cHisRecMap
    var cHisRecMap = new Map(findByLoc('cHisRecMap'));
    store.cHisRec = cHisRecMap.get(tools_1.getFirstEthAddr());
    // 从localStorage中取inviteRedBagRecMap
    var inviteRedBagRecMap = new Map(findByLoc('inviteRedBagRecMap'));
    store.inviteRedBagRec = inviteRedBagRecMap.get(tools_1.getFirstEthAddr());
    // 从localStorage中取inviteRedBagRecMap
    store.shapeShiftTxsMap = new Map(findByLoc('shapeShiftTxsMap'));
    // 从localStorage中取常用联系人列表
    store.TopContacts = findByLoc('TopContacts') || [];
    // 初始化默认兑换汇率列表
    var rateJson = config_1.config.dev_mode === 'dev' ? constants_1.defaultExchangeRateJsonTest : constants_1.defaultExchangeRateJsonMain;
    var m = new Map();
    for (var key in rateJson) {
        if (rateJson.hasOwnProperty(key)) {
            m.set(key, rateJson[key]);
        }
    }
    store.exchangeRateJson = m;
    // 初始化货币信息列表
    store.currencyList = config_1.config.dev_mode === 'dev' ? constants_1.supportCurrencyListTest : constants_1.supportCurrencyListMain;
};
var findByLoc = function findByLoc(keyName) {
    var value = JSON.parse(localStorage.getItem(keyName));
    return value instanceof Object ? tools_1.depCopy(value) : value;
};
// ============================================ 立即执行
/**
 * 消息处理列表
 */
var handlerMap = new event_1.HandlerMap();
// tslint:disable-next-line:no-object-literal-type-assertion
var store = {
    // 基础数据
    hashMap: new Map(),
    salt: '',
    conUser: '',
    conUserPublicKey: '',
    conRandom: '',
    conUid: 0,
    readedPriAgr: false,
    loginState: interface_1.LoginState.init,
    // 本地钱包
    walletList: [],
    curWallet: null,
    addrs: [],
    transactions: [],
    exchangeRateJson: new Map(),
    currencyList: [],
    ERC20TokenDecimals: null,
    lockScreen: null,
    nonce: 0,
    // 云端数据
    cloudBalance: new Map(),
    accountDetail: new Map(),
    sHisRec: null,
    cHisRec: null,
    inviteRedBagRec: null,
    miningTotal: null,
    dividTotal: null,
    miningHistory: [],
    dividHistory: [],
    addMine: [],
    mineRank: null,
    miningRank: null,
    mineItemJump: '',
    rechargeLogs: [],
    withdrawLogs: [],
    // shapeshift
    shapeShiftCoins: [],
    shapeShiftMarketInfo: null,
    shapeShiftTxs: null,
    shapeShiftTxsMap: new Map(),
    // 地址管理
    TopContacts: [] // 常用联系人列表   
};
})