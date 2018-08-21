_$define("app/view/wallet/transaction/currency_details", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
 * 货币详情
 */
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var tokens_1 = require("../../../core/eth/tokens");
var dataCenter_1 = require("../../../store/dataCenter");
var store_1 = require("../../../store/store");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var AddAsset = function (_widget_1$Widget) {
    _inherits(AddAsset, _widget_1$Widget);

    function AddAsset() {
        _classCallCheck(this, AddAsset);

        var _this = _possibleConstructorReturn(this, (AddAsset.__proto__ || Object.getPrototypeOf(AddAsset)).call(this));

        _this.timerRef = 0;
        /**
         * 钱包数据改变
         */
        _this.registerWalletsFun = function () {
            var wallet = store_1.find('curWallet');
            if (!wallet) return;
            _this.resetCurrentAddr(wallet, _this.props.currencyName);
            _this.parseBalance();
            _this.parseTransactionDetails();
            _this.paint();
        };
        /**
         * 地址数据改变
         */
        _this.registerAddrsFun = function (addrs) {
            if (addrs.length === 0) return;
            _this.parseTransactionDetails();
            _this.paint();
        };
        return _this;
    }

    _createClass(AddAsset, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(AddAsset.prototype.__proto__ || Object.getPrototypeOf(AddAsset.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var data = tools_1.currencyExchangeAvailable();
            var dataList = [];
            data.forEach(function (element) {
                dataList.push(element.symbol);
            });
            var wallet = store_1.find('curWallet');
            this.state = {
                list: [],
                currentAddr: '',
                balance: 0,
                showBalance: "0 " + this.props.currencyName,
                showBalanceConversion: '≈0.00 CNY',
                canCurrencyExchange: dataList.indexOf(this.props.currencyName) >= 0
            };
            this.resetCurrentAddr(wallet, this.props.currencyName);
            this.parseBalance();
            this.parseTransactionDetails();
            // 启动定时器，每10秒更新一次记录
            this.openCheck();
        }
    }, {
        key: "attach",
        value: function attach() {
            _get(AddAsset.prototype.__proto__ || Object.getPrototypeOf(AddAsset.prototype), "attach", this).call(this);
            // this.kLineInit();
            console.log('');
        }
        /**
         * 处理关闭
         */

    }, {
        key: "doClose",
        value: function doClose() {
            if (this.timerRef) {
                clearTimeout(this.timerRef);
                this.timerRef = 0;
            }
            this.ok && this.ok();
        }
        /**
         * 处理选择地址
         */

    }, {
        key: "doSearch",
        value: function doSearch() {
            if (!this.state.currentAddr) {
                root_1.popNew('app-components-message-message', { itype: 'notice', content: '敬请期待', center: true });
                return;
            }
            root_1.popNew('app-view-wallet-transaction-choose_address', { currencyName: this.props.currencyName });
        }
        /**
         * 显示交易详情
         */

    }, {
        key: "showTransactionDetails",
        value: function showTransactionDetails(e, index) {
            root_1.popNew('app-view-wallet-transaction-transaction_details', this.state.list[index]);
        }
        /**
         * 显示简介
         */

    }, {
        key: "currencyExchangeClick",
        value: function currencyExchangeClick() {
            // console.log("onSwitchChange", e, index)
            // this.state.list[index].isChoose = e.newType;
            // // todo 这里处理数据变化
            // 这里暂时作为币币兑换的入口
            root_1.popNew('app-view-currencyExchange-currencyExchange', { currencyName: this.props.currencyName });
        }
        /**
         * 处理转账
         */

    }, {
        key: "doTransfer",
        value: function doTransfer() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.state.currentAddr) {
                                    _context.next = 3;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'notice', content: '敬请期待', center: true });
                                return _context.abrupt("return");

                            case 3:
                                root_1.popNew('app-view-wallet-transaction-transfer', {
                                    currencyBalance: this.state.balance,
                                    fromAddr: this.state.currentAddr,
                                    currencyName: this.props.currencyName
                                });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 处理收款
         */

    }, {
        key: "doReceipt",
        value: function doReceipt() {
            // todo 这里获取地址
            if (!this.state.currentAddr) {
                root_1.popNew('app-components-message-message', { itype: 'notice', content: '敬请期待', center: true });
                return;
            }
            root_1.popNew('app-view-wallet-transaction-receipt', {
                currencyName: this.props.currencyName,
                currencyBalance: this.state.balance,
                addr: this.state.currentAddr
            });
        }
        /**
         * 解析交易详情
         */

    }, {
        key: "parseTransactionDetails",
        value: function parseTransactionDetails() {
            var _this2 = this;

            if (!this.state.currentAddr) return;
            var list = dataCenter_1.dataCenter.getAllTransactionsByAddr(this.state.currentAddr, this.props.currencyName);
            list = list.map(function (v) {
                var pay = tools_1.effectiveCurrencyNoConversion(v.value, _this2.props.currencyName, true);
                // tslint:disable-next-line:max-line-length
                var fees = tools_1.effectiveCurrencyNoConversion(v.fees, tokens_1.ERC20Tokens[_this2.props.currencyName] ? 'ETH' : _this2.props.currencyName, true);
                var isFromMe = v.from.toLowerCase() === _this2.state.currentAddr.toLowerCase();
                var isToMe = v.to.toLowerCase() === _this2.state.currentAddr.toLowerCase();
                return {
                    id: v.hash,
                    type: isFromMe ? isToMe ? '自己' : '转账' : '收款',
                    fromAddr: v.from,
                    to: v.to,
                    pay: pay.num,
                    tip: fees.show,
                    time: v.time,
                    showTime: tools_1.parseDate(new Date(v.time)),
                    result: '已完成',
                    info: v.info,
                    account: tools_1.parseAccount(isFromMe ? isToMe ? v.from : v.to : v.from).toLowerCase(),
                    showPay: pay.show,
                    currencyName: _this2.props.currencyName
                };
            });
            var addr = tools_1.getAddrById(this.state.currentAddr, this.props.currencyName);
            var recordList = [];
            if (addr) {
                recordList = addr.record.map(function (v) {
                    var pay = tools_1.effectiveCurrencyNoConversion(v.pay, _this2.props.currencyName, false);
                    v.account = tools_1.parseAccount(v.to).toLowerCase();
                    v.showPay = pay.show;
                    return v;
                });
            }
            this.state.list = list.concat(recordList).sort(function (a, b) {
                return b.time - a.time;
            });
        }
        /**
         * 解析余额
         */

    }, {
        key: "parseBalance",
        value: function parseBalance() {
            if (!this.state.currentAddr) return;
            var info = dataCenter_1.dataCenter.getAddrInfoByAddr(this.state.currentAddr, this.props.currencyName);
            // console.log('parseBalance',info);
            var r = tools_1.effectiveCurrency(info.balance, this.props.currencyName, 'CNY', false);
            this.state.balance = r.num;
            this.state.showBalance = r.show;
            this.state.showBalanceConversion = r.conversionShow;
        }
    }, {
        key: "resetCurrentAddr",
        value: function resetCurrentAddr(wallet, currencyName) {
            if (!wallet.currencyRecords || !currencyName) return [];
            var currencyRecord = wallet.currencyRecords.filter(function (v) {
                return v.currencyName === currencyName;
            })[0];
            if (!currencyRecord) return [];
            this.state.currentAddr = currencyRecord.currentAddr || wallet.walletId;
        }
    }, {
        key: "openCheck",
        value: function openCheck() {
            var _this3 = this;

            this.timerRef = setTimeout(function () {
                _this3.timerRef = 0;
                _this3.openCheck();
            }, 10 * 1000);
            this.parseTransactionDetails();
            this.parseBalance();
            this.paint();
            dataCenter_1.dataCenter.updatetTransaction(this.state.currentAddr, this.props.currencyName);
        }
    }]);

    return AddAsset;
}(widget_1.Widget);

exports.AddAsset = AddAsset;
// ============================== 本地
// ===================================================== 立即执行
store_1.register('curWallet', function (resp) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.registerWalletsFun(resp);
    }
});
store_1.register('addrs', function (resp) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.registerAddrsFun(resp);
    }
});
})