_$define("app/view/cloud/assestsManage/charge", function (require, exports, module){
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
 * 充值页面
 */
// ==============================================导入
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var pull_1 = require("../../../net/pull");
var pullWallet_1 = require("../../../net/pullWallet");
var store_1 = require("../../../store/store");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");

var Charge = function (_widget_1$Widget) {
    _inherits(Charge, _widget_1$Widget);

    function Charge() {
        _classCallCheck(this, Charge);

        return _possibleConstructorReturn(this, (Charge.__proto__ || Object.getPrototypeOf(Charge)).call(this));
    }

    _createClass(Charge, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Charge.prototype.__proto__ || Object.getPrototypeOf(Charge.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                amount: 0,
                serviceCharge: globalWallet_1.wei2Eth(constants_1.gasLimit * constants_1.gasPrice),
                localBalance: tools_1.getCurrentAddrBalanceByCurrencyName(this.props.currencyName),
                isFeeEnough: false
            };
            this.judgeFeeEnough();
        }
    }, {
        key: "backClick",
        value: function backClick() {
            this.ok && this.ok();
        }
    }, {
        key: "chargeChange",
        value: function chargeChange(e) {
            this.state.amount = Number(e.value);
            this.judgeFeeEnough();
            this.paint();
        }
    }, {
        key: "judgeFeeEnough",
        value: function judgeFeeEnough() {
            var amount = this.state.amount;
            var serviceCharge = this.state.serviceCharge;
            var localBalance = this.state.localBalance;
            if (amount + serviceCharge > localBalance || serviceCharge === localBalance) {
                this.state.isFeeEnough = false;
            } else {
                this.state.isFeeEnough = true;
            }
        }
        // 充值

    }, {
        key: "rechargeClick",
        value: function rechargeClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var wallet, passwd, close, toAddr, fromAddr, obj, signedTX, hash, nonce, pay, canTransfer, h, t, record;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.state.amount <= 0)) {
                                    _context.next = 3;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '请输入充值数量', center: true });
                                return _context.abrupt("return");

                            case 3:
                                if (this.state.isFeeEnough) {
                                    _context.next = 6;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '余额不足', center: true });
                                return _context.abrupt("return");

                            case 6:
                                wallet = store_1.find('curWallet');
                                passwd = void 0;

                                if (store_1.find('hashMap', wallet.walletId)) {
                                    _context.next = 14;
                                    break;
                                }

                                _context.next = 11;
                                return tools_1.popPswBox();

                            case 11:
                                passwd = _context.sent;

                                if (passwd) {
                                    _context.next = 14;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 14:
                                console.time('recharge');
                                close = root_1.popNew('pi-components-loading-loading', { text: '正在充值...' });
                                _context.next = 18;
                                return pull_1.getBankAddr();

                            case 18:
                                toAddr = _context.sent;

                                if (toAddr) {
                                    _context.next = 22;
                                    break;
                                }

                                close.callback(close.widget);
                                return _context.abrupt("return");

                            case 22:
                                fromAddr = tools_1.getCurrentAddrByCurrencyName(this.props.currencyName);
                                _context.next = 25;
                                return pullWallet_1.signRawTransactionETH(passwd, fromAddr, toAddr, constants_1.gasPrice, constants_1.gasLimit, this.state.amount);

                            case 25:
                                obj = _context.sent;

                                if (obj) {
                                    _context.next = 29;
                                    break;
                                }

                                close.callback(close.widget);
                                return _context.abrupt("return");

                            case 29:
                                signedTX = obj.signedTx;
                                hash = "0x" + obj.hash;
                                nonce = Number(obj.nonce);
                                pay = globalWallet_1.eth2Wei(this.state.amount);
                                _context.next = 35;
                                return pull_1.rechargeToServer(fromAddr, toAddr, hash, nonce, constants_1.gasPrice, pay);

                            case 35:
                                canTransfer = _context.sent;

                                if (canTransfer) {
                                    _context.next = 39;
                                    break;
                                }

                                close.callback(close.widget);
                                return _context.abrupt("return");

                            case 39:
                                _context.next = 41;
                                return pullWallet_1.sendRawTransactionETH(signedTX);

                            case 41:
                                h = _context.sent;

                                if (h) {
                                    _context.next = 45;
                                    break;
                                }

                                close.callback(close.widget);
                                return _context.abrupt("return");

                            case 45:
                                close.callback(close.widget);
                                root_1.popNew('app-components-message-message', { itype: 'success', content: '充值成功', center: true });
                                this.state.amount = 0;
                                this.paint();
                                console.timeEnd('recharge');
                                // 维护本地交易记录
                                t = new Date();
                                record = {
                                    id: h,
                                    type: '转账',
                                    fromAddr: fromAddr,
                                    to: toAddr,
                                    pay: globalWallet_1.wei2Eth(pay),
                                    time: t.getTime(),
                                    showTime: tools_1.parseDate(t),
                                    result: '交易中',
                                    info: '兑换',
                                    currencyName: this.props.currencyName,
                                    tip: constants_1.gasLimit * globalWallet_1.wei2Eth(constants_1.gasPrice)
                                };

                                tools_1.addRecord(this.props.currencyName, fromAddr, record);
                                pull_1.getRechargeLogs();
                                this.ok && this.ok();
                                // this.popToTxDetail(h);

                            case 55:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "popToTxDetail",
        value: function popToTxDetail(hash) {
            var curAddrInfo = tools_1.getCurrentAddrInfo(this.props.currencyName);
            var record = void 0;
            for (var i = 0; i < curAddrInfo.record.length; i++) {
                // tslint:disable-next-line:possible-timing-attack
                if (curAddrInfo.record[i].id === hash) {
                    record = Object.assign({}, curAddrInfo.record[i]);
                    break;
                }
            }
            root_1.popNew('app-view-wallet-transaction-transaction_details', Object.assign({}, record));
        }
    }]);

    return Charge;
}(widget_1.Widget);

exports.Charge = Charge;
})