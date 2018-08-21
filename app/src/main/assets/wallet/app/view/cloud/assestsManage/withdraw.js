_$define("app/view/cloud/assestsManage/withdraw", function (require, exports, module){
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
 * 提现界面
 */
// ==================================================导入
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var store_1 = require("../../../store/store");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");

var Withdraw = function (_widget_1$Widget) {
    _inherits(Withdraw, _widget_1$Widget);

    function Withdraw() {
        _classCallCheck(this, Withdraw);

        return _possibleConstructorReturn(this, (Withdraw.__proto__ || Object.getPrototypeOf(Withdraw)).call(this));
    }

    _createClass(Withdraw, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Withdraw.prototype.__proto__ || Object.getPrototypeOf(Withdraw.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                amount: 0,
                serviceCharge: 0,
                cloudBalance: store_1.find('cloudBalance', interface_1.CurrencyType[this.props.currencyName]),
                isFeeEnough: true
            };
        }
    }, {
        key: "backClick",
        value: function backClick() {
            this.ok && this.ok();
        }
    }, {
        key: "amountChange",
        value: function amountChange(e) {
            this.state.amount = Number(e.value);
            this.state.serviceCharge = this.state.amount * constants_1.withdrawServiceCharge;
            this.judgeFeeEnough();
            this.paint();
        }
    }, {
        key: "judgeFeeEnough",
        value: function judgeFeeEnough() {
            var amount = this.state.amount;
            var serviceCharge = this.state.serviceCharge;
            var cloudBalance = this.state.cloudBalance;
            if (amount + serviceCharge > cloudBalance) {
                this.state.isFeeEnough = false;
            } else {
                this.state.isFeeEnough = true;
            }
        }
        // 提现

    }, {
        key: "withdrawClick",
        value: function withdrawClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var wallet, passwd, close, verify, toAddr, coin, success;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.state.amount <= 0)) {
                                    _context.next = 3;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '请输入提现金额', center: true });
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
                                close = root_1.popNew('pi-components-loading-loading', { text: '正在提现...' });
                                _context.next = 17;
                                return tools_1.VerifyIdentidy(wallet, passwd);

                            case 17:
                                verify = _context.sent;

                                if (verify) {
                                    _context.next = 22;
                                    break;
                                }

                                close.callback(close.widget);
                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误', center: true });
                                return _context.abrupt("return");

                            case 22:
                                toAddr = tools_1.getCurrentAddrByCurrencyName(this.props.currencyName);
                                coin = Number(interface_1.CurrencyType[this.props.currencyName]);
                                _context.next = 26;
                                return pull_1.withdrawFromServer(toAddr, coin, globalWallet_1.eth2Wei(this.state.amount));

                            case 26:
                                success = _context.sent;

                                close.callback(close.widget);
                                if (success) {
                                    root_1.popNew('app-components-message-message', { itype: 'success', content: '提现成功', center: true });
                                }
                                pull_1.getWithdrawLogs();
                                this.ok && this.ok();

                            case 31:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return Withdraw;
}(widget_1.Widget);

exports.Withdraw = Withdraw;
})