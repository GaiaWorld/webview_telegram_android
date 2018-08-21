_$define("app/view/currencyExchange/currencyExchange", function (require, exports, module){
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
 * currency exchange
 */
// ============================== 导入
var root_1 = require("../../../pi/ui/root");
var forelet_1 = require("../../../pi/widget/forelet");
var widget_1 = require("../../../pi/widget/widget");
var tokens_1 = require("../../core/eth/tokens");
var globalWallet_1 = require("../../core/globalWallet");
var pullWallet_1 = require("../../net/pullWallet");
var store_1 = require("../../store/store");
// tslint:disable-next-line:max-line-length
var tools_1 = require("../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var CurrencyExchange = function (_widget_1$Widget) {
    _inherits(CurrencyExchange, _widget_1$Widget);

    function CurrencyExchange() {
        _classCallCheck(this, CurrencyExchange);

        return _possibleConstructorReturn(this, (CurrencyExchange.__proto__ || Object.getPrototypeOf(CurrencyExchange)).apply(this, arguments));
    }

    _createClass(CurrencyExchange, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(CurrencyExchange.prototype.__proto__ || Object.getPrototypeOf(CurrencyExchange.prototype), "setProps", this).call(this, props, oldProps);
            var outCurrency = this.props.currencyName;
            var inCurrency = outCurrency === 'BTC' || tokens_1.ERC20Tokens[outCurrency] ? 'ETH' : 'BTC';
            // ZRX   BAT
            this.state = {
                outCurrency: outCurrency,
                inCurrency: inCurrency,
                gasPrice: 5000000000,
                pair: '',
                maxLimit: 0,
                minimum: 0,
                rate: 0,
                minerFee: 0,
                timer: 0,
                outBalance: 0,
                outAmount: 0,
                receiveAmount: 0,
                curOutAddr: '',
                curInAddr: ''
            };
            this.init();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            clearTimeout(this.state.timer);
            return _get(CurrencyExchange.prototype.__proto__ || Object.getPrototypeOf(CurrencyExchange.prototype), "destroy", this).call(this);
        }
    }, {
        key: "init",
        value: function init() {
            this.state.outAmount = 0;
            this.state.receiveAmount = 0;
            this.setPair();
            // 获取出币币种的余额和当前使用地址
            this.state.curOutAddr = tools_1.getCurrentAddrByCurrencyName(this.state.outCurrency);
            this.state.outBalance = tools_1.getCurrentAddrBalanceByCurrencyName(this.state.outCurrency);
            // 获取入币币种的当前使用地址
            this.state.curInAddr = tools_1.getCurrentAddrByCurrencyName(this.state.inCurrency);
            this.marketInfoUpdated();
        }
    }, {
        key: "backClick",
        value: function backClick() {
            this.ok && this.ok();
        }
        // 设置币币兑换的pair  如btc_eth

    }, {
        key: "setPair",
        value: function setPair() {
            this.state.pair = this.state.outCurrency.toLowerCase() + "_" + this.state.inCurrency.toLowerCase();
        }
        // 重置汇率相关显示

    }, {
        key: "resetMarketInfo",
        value: function resetMarketInfo(marketInfo) {
            this.state.maxLimit = marketInfo.maxLimit;
            this.state.minimum = marketInfo.minimum;
            this.state.rate = marketInfo.rate;
            this.state.minerFee = marketInfo.minerFee;
            this.paint();
        }
        // 定时获取兑率等信息 30s更新一次

    }, {
        key: "marketInfoUpdated",
        value: function marketInfoUpdated() {
            var _this2 = this;

            pullWallet_1.getMarketInfo(this.state.pair);
            this.state.timer = setTimeout(function () {
                _this2.marketInfoUpdated();
            }, 30 * 1000);
        }
        // 出币数量变化

    }, {
        key: "outAmountChange",
        value: function outAmountChange(e) {
            var outAmount = Number(e.value);
            this.state.outAmount = outAmount;
            this.state.receiveAmount = outAmount * this.state.rate;
            this.paint();
        }
        // 选择出币币种 如果出币币种和入币币种一样时,入币币种顺延一种

    }, {
        key: "outCurrencySelectClick",
        value: function outCurrencySelectClick() {
            var _this3 = this;

            var data = tools_1.currencyExchangeAvailable();
            var dataList = [];
            data.forEach(function (element) {
                dataList.push(element.symbol);
            });
            root_1.popNew('app-components-chooseCurrency-chooseCurrency', { currencyList: dataList }, function (r) {
                var currencyName = dataList[r];
                if (_this3.state.outCurrency === currencyName) return;
                if (_this3.state.inCurrency === currencyName) {
                    var index = dataList.indexOf(currencyName);
                    _this3.state.inCurrency = dataList[(index + 1) % dataList.length];
                }
                _this3.state.outCurrency = dataList[r];
                _this3.state.outAmount = 0;
                _this3.state.receiveAmount = 0;
                _this3.init();
                _this3.paint();
            });
        }
        // 选择入币币种 如果入币币种和出币币种一样时,出币币种顺延一种

    }, {
        key: "inCurrencySelectClick",
        value: function inCurrencySelectClick() {
            var _this4 = this;

            var data = tools_1.currencyExchangeAvailable();
            var dataList = [];
            data.forEach(function (element) {
                dataList.push(element.symbol);
            });
            root_1.popNew('app-components-chooseCurrency-chooseCurrency', { currencyList: dataList }, function (r) {
                var currencyName = dataList[r];
                if (_this4.state.inCurrency === currencyName) return;
                if (_this4.state.outCurrency === currencyName) {
                    var index = dataList.indexOf(currencyName);
                    _this4.state.outCurrency = dataList[(index + 1) % dataList.length];
                }
                _this4.state.inCurrency = dataList[r];
                _this4.state.outAmount = 0;
                _this4.state.receiveAmount = 0;
                _this4.init();
                _this4.paint();
            });
        }
        // 出币币种和入币币种切换

    }, {
        key: "switchInOutClick",
        value: function switchInOutClick() {
            var outCurrency = this.state.outCurrency;
            this.state.outCurrency = this.state.inCurrency;
            this.state.inCurrency = outCurrency;
            this.state.outAmount = 0;
            this.state.receiveAmount = 0;
            this.init();
            this.paint();
        }
    }, {
        key: "exchangeRecordClick",
        value: function exchangeRecordClick() {
            root_1.popNew('app-view-currencyExchange-currencyExchangeRecord', { currencyName: this.state.outCurrency });
        }
    }, {
        key: "rateDescClick",
        value: function rateDescClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                root_1.popNew('app-view-currencyExchange-rateDescription', { currencyName: this.state.outCurrency,
                                    toAddr: this.state.curOutAddr, gasPrice: this.state.gasPrice, pay: this.state.outAmount });

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        // tslint:disable-next-line:max-func-body-length

    }, {
        key: "sureClick",
        value: function sureClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this5 = this;

                var outAmount, outCurrency, loading, gasLimit, fee, obj, wallet, passwd, close, withdrawalAddress, returnAddress, pair;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                outAmount = this.state.outAmount;
                                outCurrency = this.state.outCurrency;

                                if (!(outAmount <= 0)) {
                                    _context3.next = 5;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '输入发出数量', center: true });
                                return _context3.abrupt("return");

                            case 5:
                                if (!(outAmount >= this.state.outBalance)) {
                                    _context3.next = 8;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '余额不足', center: true });
                                return _context3.abrupt("return");

                            case 8:
                                if (!(outAmount > this.state.maxLimit || outAmount < this.state.minimum)) {
                                    _context3.next = 11;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '换币数量必须在最小数量和最大数量之间', center: true });
                                return _context3.abrupt("return");

                            case 11:
                                loading = root_1.popNew('pi-components-loading-loading', { text: '矿工费预估中...' });
                                gasLimit = 0;
                                fee = 0;
                                _context3.prev = 14;
                                _context3.next = 17;
                                return pullWallet_1.estimateMinerFee(outCurrency, { toAddr: this.state.curOutAddr, gasPrice: this.state.gasPrice, pay: this.state.outAmount });

                            case 17:
                                obj = _context3.sent;

                                fee = obj.minerFee;
                                gasLimit = obj.gasLimit;
                                _context3.next = 25;
                                break;

                            case 22:
                                _context3.prev = 22;
                                _context3.t0 = _context3["catch"](14);

                                console.error(_context3.t0);

                            case 25:
                                _context3.prev = 25;

                                console.log('gasLimit', gasLimit);
                                loading.callback(loading.widget);
                                return _context3.finish(25);

                            case 29:
                                _context3.next = 31;
                                return tools_1.openBasePage('app-view-currencyExchange-exchangeConfirm', {
                                    outCurrency: outCurrency,
                                    outAmount: outAmount,
                                    inCurrency: this.state.inCurrency,
                                    inAmount: outAmount * this.state.rate,
                                    fee: fee
                                });

                            case 31:
                                wallet = store_1.find('curWallet');
                                passwd = void 0;

                                if (store_1.find('hashMap', wallet.walletId)) {
                                    _context3.next = 39;
                                    break;
                                }

                                _context3.next = 36;
                                return tools_1.popPswBox();

                            case 36:
                                passwd = _context3.sent;

                                if (passwd) {
                                    _context3.next = 39;
                                    break;
                                }

                                return _context3.abrupt("return");

                            case 39:
                                close = root_1.popNew('pi-components-loading-loading', { text: '交易中...' });
                                withdrawalAddress = this.state.curInAddr; // 入账币种的地址

                                returnAddress = this.state.curOutAddr; // 失败后的退款地址

                                pair = this.state.pair; // 交易对

                                pullWallet_1.beginShift(withdrawalAddress, returnAddress, pair, function (returnData) {
                                    return __awaiter(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                        var depositAddress, hash;
                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        if (!returnData.error) {
                                                            _context2.next = 6;
                                                            break;
                                                        }

                                                        root_1.popNew('app-components-message-message', { itype: 'error', content: '出错啦,请重试！', center: true });
                                                        close.callback(close.widget);
                                                        this.init();
                                                        this.paint();
                                                        return _context2.abrupt("return");

                                                    case 6:
                                                        depositAddress = returnData.deposit;
                                                        // tslint:disable-next-line:max-line-length

                                                        _context2.next = 9;
                                                        return pullWallet_1.transfer(passwd, this.state.curOutAddr, depositAddress, this.state.gasPrice, gasLimit, outAmount, outCurrency);

                                                    case 9:
                                                        hash = _context2.sent;

                                                        close.callback(close.widget);

                                                        if (hash) {
                                                            _context2.next = 13;
                                                            break;
                                                        }

                                                        return _context2.abrupt("return");

                                                    case 13:
                                                        // tslint:disable-next-line:max-line-length
                                                        this.setTemRecord(hash, this.state.curOutAddr, depositAddress, this.state.gasPrice, gasLimit, outAmount, outCurrency, this.state.inCurrency, this.state.rate);
                                                        root_1.popNew('app-view-currencyExchange-currencyExchangeRecord', { currencyName: outCurrency });
                                                        this.init();
                                                        this.paint();

                                                    case 17:
                                                    case "end":
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _callee2, this);
                                    }));
                                }, function (err) {
                                    console.error(err);
                                    root_1.popNew('app-components-message-message', { itype: 'error', content: '出错啦,请重试！', center: true });
                                    close.callback(close.widget);
                                    _this5.init();
                                    _this5.paint();
                                    return;
                                });

                            case 44:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[14, 22, 25, 29]]);
            }));
        }
        // 临时记录
        // tslint:disable-next-line:max-line-length

    }, {
        key: "setTemRecord",
        value: function setTemRecord(hash, fromAddr, toAddr, gasPrice, gasLimit, pay, outCurrency, inCurrency, rate) {
            var t = new Date();
            // 币币兑换交易记录
            var tx = {
                hasConfirmations: 'false',
                inputAddress: fromAddr,
                inputAmount: pay,
                inputCurrency: outCurrency,
                inputTXID: hash,
                outputAddress: '',
                outputAmount: '',
                outputCurrency: inCurrency,
                outputTXID: '',
                shiftRate: rate,
                status: 'pending',
                timestamp: t.getTime() / 1000
            };
            console.log('tx', tx);
            var addrLowerCase = this.state.curOutAddr.toLowerCase();
            var shapeShiftTxsMap = store_1.getBorn('shapeShiftTxsMap');
            var shapeShiftTxs = shapeShiftTxsMap.get(addrLowerCase) || { addr: addrLowerCase, list: [] };
            shapeShiftTxs.list.push(tx);
            shapeShiftTxsMap.set(addrLowerCase, shapeShiftTxs);
            store_1.updateStore('shapeShiftTxsMap', shapeShiftTxsMap);
            // 币币兑换出货币种交易记录
            var record = {
                id: hash,
                type: '转账',
                fromAddr: fromAddr,
                to: toAddr,
                pay: pay,
                time: t.getTime(),
                showTime: tools_1.parseDate(t),
                result: '交易中',
                info: '兑换',
                currencyName: outCurrency,
                tip: gasLimit * globalWallet_1.wei2Eth(gasPrice)
            };
            tools_1.addRecord(outCurrency, fromAddr, record);
        }
    }]);

    return CurrencyExchange;
}(widget_1.Widget);

exports.CurrencyExchange = CurrencyExchange;
// =====================================本地
store_1.register('shapeShiftMarketInfo', function (marketInfo) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.resetMarketInfo(marketInfo);
    }
});
})