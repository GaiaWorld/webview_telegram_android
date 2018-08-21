_$define("app/shareView/redEnvelope/openRedEnvelope", function (require, exports, module){
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
 * open red-envelope
 */
var root_1 = require("../../../pi/ui/root");
var widget_1 = require("../../../pi/widget/widget");
var conMgr_1 = require("../store/conMgr");
var tools_1 = require("../utils/tools");

var OpenRedEnvelope = function (_widget_1$Widget) {
    _inherits(OpenRedEnvelope, _widget_1$Widget);

    function OpenRedEnvelope() {
        _classCallCheck(this, OpenRedEnvelope);

        return _possibleConstructorReturn(this, (OpenRedEnvelope.__proto__ || Object.getPrototypeOf(OpenRedEnvelope)).apply(this, arguments));
    }

    _createClass(OpenRedEnvelope, [{
        key: "create",
        value: function create() {
            var _this2 = this;

            var _super = function _super(name) {
                return _get(OpenRedEnvelope.prototype.__proto__ || Object.getPrototypeOf(OpenRedEnvelope.prototype), name, _this2);
            };
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var search, itype;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _super("create").call(this);
                                search = window.location.search;
                                itype = tools_1.parseUrlParams(search, 'type');
                                _context.t0 = itype;
                                _context.next = _context.t0 === conMgr_1.RedEnvelopeType.Normal ? 6 : _context.t0 === conMgr_1.RedEnvelopeType.Random ? 8 : _context.t0 === conMgr_1.RedEnvelopeType.Invite ? 10 : 12;
                                break;

                            case 6:
                                this.state = {
                                    type: itype,
                                    rid: tools_1.parseUrlParams(search, 'rid'),
                                    lm: window.decodeURIComponent(tools_1.parseUrlParams(search, 'lm')),
                                    desc: '您收到一个红包',
                                    openClick: false
                                };
                                return _context.abrupt("break", 12);

                            case 8:
                                this.state = {
                                    type: itype,
                                    rid: tools_1.parseUrlParams(search, 'rid'),
                                    lm: window.decodeURIComponent(tools_1.parseUrlParams(search, 'lm')),
                                    desc: '金额随机，试试手气',
                                    openClick: false
                                };
                                return _context.abrupt("break", 12);

                            case 10:
                                this.state = {
                                    type: itype,
                                    cid: tools_1.parseUrlParams(search, 'cid'),
                                    lm: 'KuPay大礼包',
                                    desc: '您收到一个邀请红包',
                                    openClick: false
                                };
                                return _context.abrupt("break", 12);

                            case 12:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "openRedEnvelopeClick",
        value: function openRedEnvelopeClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.state.openClick = true;
                                this.paint();
                                _context2.t0 = this.state.type;
                                _context2.next = _context2.t0 === conMgr_1.RedEnvelopeType.Normal ? 5 : _context2.t0 === conMgr_1.RedEnvelopeType.Random ? 5 : _context2.t0 === conMgr_1.RedEnvelopeType.Invite ? 7 : 9;
                                break;

                            case 5:
                                this.openNormalRedEnvelope();
                                return _context2.abrupt("break", 9);

                            case 7:
                                this.openInviteRedEnvelope();
                                return _context2.abrupt("break", 9);

                            case 9:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
        // 开邀请红包

    }, {
        key: "openInviteRedEnvelope",
        value: function openInviteRedEnvelope() {
            var _this3 = this;

            setTimeout(function () {
                var redEnvelope = {
                    rid: '0',
                    uid: 0,
                    rtype: 99,
                    ctype: conMgr_1.CurrencyType.ETH,
                    cid: _this3.state.cid,
                    cidShow: "" + conMgr_1.RedEnvelopeType.Invite + _this3.state.cid,
                    amount: 0.015,
                    leaveMsg: 'KuPay大礼包'
                };
                tools_1.setLocalStorage('takeRedBag', redEnvelope);
                root_1.popNew('app-shareView-redEnvelope-redEnvelopeDetails', Object.assign({}, redEnvelope));
            }, 500);
        }
        // 开普通红包

    }, {
        key: "openNormalRedEnvelope",
        value: function openNormalRedEnvelope() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this4 = this;

                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return conMgr_1.takeRedEnvelope(this.state.rid);

                            case 2:
                                res = _context4.sent;

                                setTimeout(function () {
                                    return __awaiter(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                        var v, redEnvelope;
                                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                            while (1) {
                                                switch (_context3.prev = _context3.next) {
                                                    case 0:
                                                        _context3.t0 = res.result;
                                                        _context3.next = _context3.t0 === 1 ? 3 : _context3.t0 === 701 ? 9 : _context3.t0 === 702 ? 11 : _context3.t0 === 703 ? 13 : _context3.t0 === 704 ? 15 : 17;
                                                        break;

                                                    case 3:
                                                        v = res.value;
                                                        redEnvelope = {
                                                            rid: this.state.rid,
                                                            uid: v[0],
                                                            rtype: v[1],
                                                            ctype: v[2],
                                                            cid: v[3],
                                                            cidShow: "" + conMgr_1.RedEnvelopeType.Normal + v[3],
                                                            amount: tools_1.smallUnit2LargeUnitString(conMgr_1.CurrencyTypeReverse[v[2]], v[4]),
                                                            leaveMsg: tools_1.unicodeArray2Str(v[5])
                                                        };

                                                        tools_1.setLocalStorage('takeRedBag', redEnvelope);
                                                        root_1.popNew('app-shareView-redEnvelope-redEnvelopeDetails', Object.assign({}, redEnvelope));
                                                        this.ok && this.ok();
                                                        return _context3.abrupt("break", 18);

                                                    case 9:
                                                        root_1.popNew('app-shareView-components-message', { itype: 'error', center: true, content: '红包不存在' });
                                                        return _context3.abrupt("break", 18);

                                                    case 11:
                                                        root_1.popNew('app-shareView-components-message', { itype: 'error', center: true, content: '红包已领完' });
                                                        return _context3.abrupt("break", 18);

                                                    case 13:
                                                        root_1.popNew('app-shareView-components-message', { itype: 'error', center: true, content: '红包已过期' });
                                                        return _context3.abrupt("break", 18);

                                                    case 15:
                                                        root_1.popNew('app-shareView-components-message', { itype: 'error', center: true, content: '红包已领取过' });
                                                        return _context3.abrupt("break", 18);

                                                    case 17:
                                                        root_1.popNew('app-shareView-components-message', { itype: 'error', center: true, content: '出错啦' });

                                                    case 18:
                                                        this.state.openClick = false;
                                                        this.paint();

                                                    case 20:
                                                    case "end":
                                                        return _context3.stop();
                                                }
                                            }
                                        }, _callee3, this);
                                    }));
                                }, 500);

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
    }]);

    return OpenRedEnvelope;
}(widget_1.Widget);

exports.OpenRedEnvelope = OpenRedEnvelope;
})