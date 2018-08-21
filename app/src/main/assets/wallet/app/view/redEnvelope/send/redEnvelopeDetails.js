_$define("app/view/redEnvelope/send/redEnvelopeDetails", function (require, exports, module){
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
 * red-envelope details
 */
// ============================== 导入
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var RedEnvelopeDetails = function (_widget_1$Widget) {
    _inherits(RedEnvelopeDetails, _widget_1$Widget);

    function RedEnvelopeDetails() {
        _classCallCheck(this, RedEnvelopeDetails);

        return _possibleConstructorReturn(this, (RedEnvelopeDetails.__proto__ || Object.getPrototypeOf(RedEnvelopeDetails)).apply(this, arguments));
    }

    _createClass(RedEnvelopeDetails, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(RedEnvelopeDetails.prototype.__proto__ || Object.getPrototypeOf(RedEnvelopeDetails.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                currencyName: interface_1.CurrencyTypeReverse[props.ctype],
                lm: '',
                totalNumber: 0,
                convertedNumber: 0,
                totalAmount: 0,
                redBagList: []
            };
            this.init();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "init",
        value: function init() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var value, l, redBagList, totalAmount, i, amount, redBag;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return pull_1.queryDetailLog(this.props.rid);

                            case 2:
                                value = _context.sent;

                                if (value) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 5:
                                l = value[1];
                                redBagList = [];
                                totalAmount = 0;

                                for (i = 0; i < l.length; i++) {
                                    amount = tools_1.smallUnit2LargeUnitString(this.state.currencyName, l[i][4]);

                                    totalAmount += amount;
                                    if (l[i][1] !== 0 && l[i][5] !== 0) {
                                        redBag = {
                                            suid: l[i][0],
                                            cuid: l[i][1],
                                            rtype: l[i][2],
                                            ctype: l[i][3],
                                            amount: amount,
                                            time: l[i][5],
                                            timeShow: tools_1.timestampFormat(l[i][5])
                                        };

                                        redBagList.push(redBag);
                                    }
                                }
                                this.state.lm = tools_1.unicodeArray2Str(value[0]);
                                this.state.totalNumber = l.length;
                                this.state.convertedNumber = redBagList.length;
                                this.state.totalAmount = totalAmount;
                                this.state.redBagList = redBagList;
                                this.paint();

                            case 15:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return RedEnvelopeDetails;
}(widget_1.Widget);

exports.RedEnvelopeDetails = RedEnvelopeDetails;
})