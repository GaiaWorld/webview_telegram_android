_$define("app/view/redEnvelope/send/sendRedEnvelope", function (require, exports, module){
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
 * send red-envelope
 */
// ============================== 导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var store_1 = require("../../../store/store");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var SendRedEnvelope = function (_widget_1$Widget) {
    _inherits(SendRedEnvelope, _widget_1$Widget);

    function SendRedEnvelope() {
        _classCallCheck(this, SendRedEnvelope);

        return _possibleConstructorReturn(this, (SendRedEnvelope.__proto__ || Object.getPrototypeOf(SendRedEnvelope)).apply(this, arguments));
    }

    _createClass(SendRedEnvelope, [{
        key: "create",
        value: function create() {
            _get(SendRedEnvelope.prototype.__proto__ || Object.getPrototypeOf(SendRedEnvelope.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                itype: 0,
                balance: 0,
                currencyName: constants_1.redEnvelopeSupportCurrency[0],
                singleAmount: '',
                redEnvelopeNumber: 0,
                totalAmount: '',
                leaveMessage: '',
                lmPlaceHolder: '恭喜发财  万事如意',
                leaveMessageMaxLen: 20
            };
            this.updateBalance();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        // 更新余额

    }, {
        key: "updateBalance",
        value: function updateBalance() {
            this.state.balance = store_1.find('cloudBalance', interface_1.CurrencyType[this.state.currencyName]) || 0;
            this.paint();
        }
        // 单个金额改变

    }, {
        key: "singleAmountInputChange",
        value: function singleAmountInputChange(e) {
            this.state.singleAmount = e.value;
            this.state.totalAmount = String(Number(e.value) * this.state.redEnvelopeNumber);
            this.paint();
        }
        // 红包个数改变

    }, {
        key: "redEnvelopeNumberChange",
        value: function redEnvelopeNumberChange(e) {
            var num = Number(e.value);
            this.state.redEnvelopeNumber = num;
            if (this.state.itype === 0) {
                this.state.totalAmount = String(num * Number(this.state.singleAmount));
            }
            this.paint();
        }
        // 总金额改变

    }, {
        key: "totalAmountInputChange",
        value: function totalAmountInputChange(e) {
            this.state.totalAmount = e.value;
            this.paint();
        }
        // 红包类型切换

    }, {
        key: "redEnvelopeTypeSwitchClick",
        value: function redEnvelopeTypeSwitchClick() {
            this.state.itype = this.state.itype === 0 ? 1 : 0;
            this.state.singleAmount = '';
            this.state.redEnvelopeNumber = 0;
            this.state.totalAmount = '';
            this.paint();
        }
    }, {
        key: "leaveMessageChange",
        value: function leaveMessageChange(e) {
            this.state.leaveMessage = e.value;
            this.paint();
        }
        // 发送

    }, {
        key: "sendRedEnvelopeClick",
        value: function sendRedEnvelopeClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var close, lm, rtype, ctype, totalAmount, redEnvelopeNumber, rid;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.state.itype === 0 && Number(this.state.singleAmount) <= 0)) {
                                    _context.next = 3;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '请输入要发送的单个红包金额', center: true });
                                return _context.abrupt("return");

                            case 3:
                                if (!(this.state.itype !== 0 && Number(this.state.totalAmount) <= 0)) {
                                    _context.next = 6;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '请输入要发送的红包总金额', center: true });
                                return _context.abrupt("return");

                            case 6:
                                if (!(this.state.redEnvelopeNumber <= 0)) {
                                    _context.next = 9;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '请输入要发送红包数量', center: true });
                                return _context.abrupt("return");

                            case 9:
                                if (!(Number(this.state.totalAmount) > this.state.balance)) {
                                    _context.next = 12;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '余额不足', center: true });
                                return _context.abrupt("return");

                            case 12:
                                if (!(tools_1.getByteLen(this.state.leaveMessage) > this.state.leaveMessageMaxLen * 2)) {
                                    _context.next = 17;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: "\u7559\u8A00\u6700\u591A" + this.state.leaveMessageMaxLen + "\u4E2A\u5B57", center: true });
                                this.state.leaveMessage = '';
                                this.paint();
                                return _context.abrupt("return");

                            case 17:
                                close = root_1.popNew('pi-components-loading-loading', { text: '加载中...' });
                                lm = this.state.leaveMessage || this.state.lmPlaceHolder;
                                rtype = this.state.itype;
                                ctype = Number(interface_1.CurrencyType[this.state.currencyName]);
                                totalAmount = Number(this.state.totalAmount);
                                redEnvelopeNumber = this.state.redEnvelopeNumber;
                                _context.next = 25;
                                return pull_1.sendRedEnvlope(rtype, ctype, totalAmount, redEnvelopeNumber, lm);

                            case 25:
                                rid = _context.sent;

                                close.callback(close.widget);

                                if (rid) {
                                    _context.next = 29;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 29:
                                root_1.popNew('app-view-redEnvelope-send-shareRedEnvelope', {
                                    rid: rid,
                                    rtype: this.state.itype,
                                    leaveMessage: this.state.leaveMessage || this.state.lmPlaceHolder,
                                    currencyName: this.state.currencyName
                                });
                                this.state.singleAmount = '';
                                this.state.redEnvelopeNumber = 0;
                                this.state.totalAmount = '';
                                this.state.leaveMessage = '';
                                this.paint();
                                store_1.updateStore('sHisRec', undefined); // 更新红包记录
                                pull_1.getCloudBalance(); // 更新余额
                                if (this.state.itype === 0) {
                                    // tslint:disable-next-line:max-line-length
                                    console.log('url', pull_1.sharePerUrl + "?type=" + interface_1.RedEnvelopeType.Normal + "&rid=" + rid + "&lm=" + window.encodeURIComponent(lm));
                                } else {
                                    // tslint:disable-next-line:max-line-length
                                    console.log('url', pull_1.sharePerUrl + "?type=" + interface_1.RedEnvelopeType.Random + "&rid=" + rid + "&lm=" + window.encodeURIComponent(lm));
                                }

                            case 38:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        // 红包记录

    }, {
        key: "redEnvelopeRecordsClick",
        value: function redEnvelopeRecordsClick() {
            this.inputBlur();
            root_1.popNew('app-view-redEnvelope-send-redEnvelopeRecord');
        }
        // 选择要发红包的货币

    }, {
        key: "chooseCurrencyClick",
        value: function chooseCurrencyClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return tools_1.openBasePage('app-components-chooseCurrency-chooseCurrency', { currencyList: constants_1.redEnvelopeSupportCurrency, isLocal: false });

                            case 2:
                                index = _context2.sent;

                                this.state.currencyName = constants_1.redEnvelopeSupportCurrency[index];
                                this.updateBalance();
                                this.paint();

                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "inputBlur",
        value: function inputBlur() {
            var inputs = document.querySelectorAll('.pi-input-simple__inner');
            inputs.forEach(function (input) {
                input.blur();
            });
        }
    }]);

    return SendRedEnvelope;
}(widget_1.Widget);

exports.SendRedEnvelope = SendRedEnvelope;
// =====================================本地
store_1.register('cloudBalance', function (cloudBalance) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.updateBalance();
    }
});
})