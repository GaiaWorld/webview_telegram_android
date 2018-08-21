_$define("app/view/mine/exportPrivateKey/exportPrivateKey", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
// =========================================导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var wallet_1 = require("../../../core/btc/wallet");
var tokens_1 = require("../../../core/eth/tokens");
var wallet_2 = require("../../../core/eth/wallet");
var store_1 = require("../../../store/store");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var ExportPrivateKey = function (_widget_1$Widget) {
    _inherits(ExportPrivateKey, _widget_1$Widget);

    function ExportPrivateKey() {
        _classCallCheck(this, ExportPrivateKey);

        return _possibleConstructorReturn(this, (ExportPrivateKey.__proto__ || Object.getPrototypeOf(ExportPrivateKey)).apply(this, arguments));
    }

    _createClass(ExportPrivateKey, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            var _this2 = this;

            _get(ExportPrivateKey.prototype.__proto__ || Object.getPrototypeOf(ExportPrivateKey.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                collapseList: []
            };
            var close = root_1.popNew('pi-components-loading-loading', { text: '导出私钥中...' });
            setTimeout(function () {
                _this2.init();
                close.callback(close.widget);
                _this2.paint();
            }, 0);
        }
    }, {
        key: "init",
        value: function init() {
            var _obj$textList, _obj$textList2;

            var walletList = store_1.find('walletList');
            var wallet = tools_1.getWalletByWalletId(walletList, this.props.walletId);
            var showCurrency = wallet.showCurrencys;
            if (!wallet || !showCurrency) {
                showCurrency = [];
            }
            var currencyRecords = wallet.currencyRecords;
            if (!wallet || !wallet.currencyRecords) {
                currencyRecords = [];
            }
            currencyRecords = getChoosedCurrencyRecords(showCurrency, currencyRecords);
            var collapseList = [];
            for (var i = 0; i < currencyRecords.length; i++) {
                var obj = {
                    title: '',
                    icon: '',
                    textList: []
                };
                var currencyName = currencyRecords[i].currencyName;
                obj.title = currencyName;
                obj.icon = "../../res/image/currency/" + currencyName + ".png";
                var addrs = currencyRecords[i].addrs;
                switch (currencyName) {
                    case 'ETH':
                        var ethKeys = this.exportPrivateKeyETH(addrs);
                        (_obj$textList = obj.textList).push.apply(_obj$textList, _toConsumableArray(ethKeys));
                        break;
                    case 'BTC':
                        var btcKeys = this.exportPrivateKeyBTC(addrs);
                        (_obj$textList2 = obj.textList).push.apply(_obj$textList2, _toConsumableArray(btcKeys));
                        break;
                    default:
                }
                if (tokens_1.ERC20Tokens[currencyName]) {
                    var _obj$textList3;

                    var erc20TokenKeys = this.exportPrivateKeyERC20Token(addrs);
                    (_obj$textList3 = obj.textList).push.apply(_obj$textList3, _toConsumableArray(erc20TokenKeys));
                }
                collapseList.push(obj);
            }
            this.state = {
                collapseList: collapseList
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "collapseChange",
        value: function collapseChange(e) {
            var activeIndexs = e.activeIndexs;
        }
    }, {
        key: "collapseItemClick",
        value: function collapseItemClick(e) {
            var privateKey = this.state.collapseList[e.collapseListIndex].textList[e.textListIndex];
            root_1.popNew('app-components-message-messagebox', {
                itype: 'extra',
                title: '导出私钥',
                content: '私钥未经加密，导出存在风险，千万不要丢失、泄露或发送给其他人！',
                extraInfo: privateKey,
                copyBtnText: '复制',
                contentStyle: 'color:#F17835;'
            });
        }
        // 导出以太坊私钥

    }, {
        key: "exportPrivateKeyETH",
        value: function exportPrivateKeyETH(addrs) {
            var keys = [];
            var firstWlt = wallet_2.EthWallet.fromMnemonic(this.props.mnemonic, constants_1.lang);
            for (var j = 0; j < addrs.length; j++) {
                var wlt = firstWlt.selectAddressWlt(j);
                var privateKey = wlt.exportPrivateKey();
                keys.push(privateKey);
            }
            return keys;
        }
        // 导出BTC私钥

    }, {
        key: "exportPrivateKeyBTC",
        value: function exportPrivateKeyBTC(addrs) {
            var keys = [];
            var wlt = wallet_1.BTCWallet.fromMnemonic(this.props.mnemonic, constants_1.btcNetwork, constants_1.lang);
            wlt.unlock();
            for (var j = 0; j < addrs.length; j++) {
                var privateKey = wlt.privateKeyOf(j);
                keys.push(privateKey);
            }
            wlt.lock();
            return keys;
        }
    }, {
        key: "exportPrivateKeyERC20Token",
        value: function exportPrivateKeyERC20Token(addrs) {
            var keys = [];
            var firstWlt = wallet_2.EthWallet.fromMnemonic(this.props.mnemonic, constants_1.lang);
            for (var j = 0; j < addrs.length; j++) {
                var wlt = firstWlt.selectAddressWlt(j);
                var privateKey = wlt.exportPrivateKey();
                keys.push(privateKey);
            }
            return keys;
        }
    }]);

    return ExportPrivateKey;
}(widget_1.Widget);

exports.ExportPrivateKey = ExportPrivateKey;
// ==================================================本地
// 过滤所有私钥，返回用户选择显示币种的私钥
var getChoosedCurrencyRecords = function getChoosedCurrencyRecords(showCurrency, currencyRecords) {
    return currencyRecords.filter(function (item) {
        var result = false;
        for (var i = 0; i < showCurrency.length; i++) {
            result = showCurrency[i] === item.currencyName;
            if (result) break;
        }
        return result;
    });
};
})