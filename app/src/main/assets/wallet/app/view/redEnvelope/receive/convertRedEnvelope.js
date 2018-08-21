_$define("app/view/redEnvelope/receive/convertRedEnvelope", function (require, exports, module){
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
 * convert red-envelope
 */
// ============================== 导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var store_1 = require("../../../store/store");
var toolMessages_1 = require("../../../utils/toolMessages");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var ConvertRedEnvelope = function (_widget_1$Widget) {
    _inherits(ConvertRedEnvelope, _widget_1$Widget);

    function ConvertRedEnvelope() {
        _classCallCheck(this, ConvertRedEnvelope);

        return _possibleConstructorReturn(this, (ConvertRedEnvelope.__proto__ || Object.getPrototypeOf(ConvertRedEnvelope)).apply(this, arguments));
    }

    _createClass(ConvertRedEnvelope, [{
        key: "create",
        value: function create() {
            _get(ConvertRedEnvelope.prototype.__proto__ || Object.getPrototypeOf(ConvertRedEnvelope.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                cid: '',
                placeHolder: '输入兑换码，领取红包'
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "redemptionCodeChange",
        value: function redemptionCodeChange(e) {
            this.state.cid = e.value;
            this.paint();
        }
        // 兑换

    }, {
        key: "convertClick",
        value: function convertClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var code, close, value, r, redEnvelope;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.inputBlur();
                                code = this.state.cid.trim();

                                if (!(code.length <= 0)) {
                                    _context.next = 5;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '请输入兑换码', center: true });
                                return _context.abrupt("return");

                            case 5:
                                close = root_1.popNew('pi-components-loading-loading', { text: '兑换中...' });
                                _context.next = 8;
                                return this.convertRedEnvelope(code);

                            case 8:
                                value = _context.sent;

                                close.callback(close.widget);

                                if (value) {
                                    _context.next = 12;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 12:
                                store_1.updateStore('cHisRec', undefined);
                                pull_1.getCloudBalance();
                                _context.next = 16;
                                return this.queryDesc(code);

                            case 16:
                                r = _context.sent;
                                redEnvelope = {
                                    leaveMessage: r.value,
                                    ctype: value[0],
                                    amount: tools_1.smallUnit2LargeUnitString(interface_1.CurrencyTypeReverse[value[0]], value[1])
                                };

                                root_1.popNew('app-view-redEnvelope-receive-openRedEnvelope', Object.assign({}, redEnvelope, { rtype: code.slice(0, 2) }));
                                this.state.cid = '';
                                this.paint();

                            case 21:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "redEnvelopeRecordsClick",
        value: function redEnvelopeRecordsClick() {
            root_1.popNew('app-view-redEnvelope-receive-redEnvelopeRecord');
        }
    }, {
        key: "convertRedEnvelope",
        value: function convertRedEnvelope(code) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var perCode, validCode, value, data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                perCode = code.slice(0, 2);
                                validCode = code.slice(2);
                                value = [];

                                if (!(perCode === interface_1.RedEnvelopeType.Normal)) {
                                    _context2.next = 9;
                                    break;
                                }

                                _context2.next = 6;
                                return pull_1.convertRedBag(validCode);

                            case 6:
                                value = _context2.sent;
                                _context2.next = 27;
                                break;

                            case 9:
                                if (!(perCode === interface_1.RedEnvelopeType.Invite)) {
                                    _context2.next = 25;
                                    break;
                                }

                                _context2.next = 12;
                                return pull_1.getData('convertRedEnvelope');

                            case 12:
                                data = _context2.sent;

                                if (!data.value) {
                                    _context2.next = 16;
                                    break;
                                }

                                toolMessages_1.showError(-2);
                                return _context2.abrupt("return");

                            case 16:
                                _context2.next = 18;
                                return pull_1.inputInviteCdKey(validCode);

                            case 18:
                                value = _context2.sent;

                                if (value) {
                                    _context2.next = 21;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 21:
                                value = [interface_1.CurrencyType.ETH, globalWallet_1.eth2Wei(0.015).toString()];
                                pull_1.setData({ key: 'convertRedEnvelope', value: new Date().getTime() });
                                _context2.next = 27;
                                break;

                            case 25:
                                root_1.popNew('app-components-message-message', { itype: 'error', content: '兑换码错误', center: true });
                                return _context2.abrupt("return", null);

                            case 27:
                                return _context2.abrupt("return", value);

                            case 28:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "queryDesc",
        value: function queryDesc(code) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var perCode, validCode, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                perCode = code.slice(0, 2);
                                validCode = code.slice(2);
                                res = { result: -1, value: '' };

                                if (!(perCode === interface_1.RedEnvelopeType.Normal)) {
                                    _context3.next = 9;
                                    break;
                                }

                                _context3.next = 6;
                                return pull_1.queryRedBagDesc(validCode);

                            case 6:
                                res = _context3.sent;
                                _context3.next = 10;
                                break;

                            case 9:
                                if (perCode === interface_1.RedEnvelopeType.Invite) {
                                    res.result = 1;
                                    res.value = 'KuPay大礼包';
                                }

                            case 10:
                                return _context3.abrupt("return", res);

                            case 11:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }, {
        key: "inputBlur",
        value: function inputBlur() {
            var input = document.querySelector('.pi-input-simple__inner');
            input.blur();
        }
    }]);

    return ConvertRedEnvelope;
}(widget_1.Widget);

exports.ConvertRedEnvelope = ConvertRedEnvelope;
})