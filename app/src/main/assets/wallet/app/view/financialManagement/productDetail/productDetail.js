_$define("app/view/financialManagement/productDetail/productDetail", function (require, exports, module){
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
 * 理财产品详情页面
 */
// ==================================================导入
var widget_1 = require("../../../../pi/widget/widget");
var tools_1 = require("../../../utils/tools");
// =====================================================导出

var ProductDetail = function (_widget_1$Widget) {
    _inherits(ProductDetail, _widget_1$Widget);

    function ProductDetail() {
        _classCallCheck(this, ProductDetail);

        return _possibleConstructorReturn(this, (ProductDetail.__proto__ || Object.getPrototypeOf(ProductDetail)).call(this));
    }

    _createClass(ProductDetail, [{
        key: "create",
        value: function create() {
            _get(ProductDetail.prototype.__proto__ || Object.getPrototypeOf(ProductDetail.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ProductDetail.prototype.__proto__ || Object.getPrototypeOf(ProductDetail.prototype), "setProps", this).call(this, props, oldProps);
            this.state.isSoldOut = props.item.isSoldOut;
            console.log(props);
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                isReadedDeclare: false,
                showStep: true,
                productName: 'ETH1期',
                expectedEarnings: '+8%',
                unitPrice: '0.1',
                days: 'T+0',
                surplus: '0',
                purchaseDate: '2018-08-02',
                interestDate: '2018-08-02',
                endDate: '2018-08-02',
                productIntroduction: 'ETH资管第1期是KuPay退出的一种固定收益类，回报稳定、无风险定期产品。',
                limit: '5',
                amount: 1,
                lockday: '无',
                isSoldOut: false
            };
        }
    }, {
        key: "goBackPage",
        value: function goBackPage() {
            this.ok && this.ok();
        }
        // 阅读声明

    }, {
        key: "readNotice",
        value: function readNotice() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.hideStep();
                                _context.next = 3;
                                return tools_1.openBasePage('app-view-financialManagement-notice-notice').then(function (r) {
                                    _this2.state.isReadedDeclare = r;
                                    _this2.showStep();
                                });

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        // 点击购买

    }, {
        key: "purchaseClicked",
        value: function purchaseClicked() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this3 = this;

                var props, readPromice;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.hideStep(); // 隐藏步骤条，应为步骤条样式应用了z-index，不隐藏的话影响后续弹出的页面
                                props = {
                                    money: this.state.amount * Number(this.state.unitPrice),
                                    unitPrice: this.state.unitPrice,
                                    productName: this.state.productName,
                                    amount: this.state.amount,
                                    expectedEarnings: this.state.expectedEarnings,
                                    lockday: this.state.lockday
                                };

                                props.money = strip(props.money);

                                if (this.state.isReadedDeclare) {
                                    _context2.next = 9;
                                    break;
                                }

                                readPromice = this.readNotice();
                                _context2.next = 7;
                                return readPromice.then(function (r) {
                                    _this3.hideStep();
                                    tools_1.openBasePage('app-view-financialManagement-purchase-purchase', props).then(function (r) {
                                        // TODO 购买
                                        // 返回值r是输入的密码
                                        _this3.showStep();
                                    });
                                });

                            case 7:
                                _context2.next = 10;
                                break;

                            case 9:
                                tools_1.openBasePage('app-view-financialManagement-purchase-purchase', props).then(function (r) {
                                    // TODO 购买
                                    // 返回值r是输入的密码
                                    _this3.showStep();
                                });

                            case 10:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "hideStep",
        value: function hideStep() {
            this.state.showStep = false;
            this.paint();
        }
    }, {
        key: "showStep",
        value: function showStep() {
            this.state.showStep = true;
            this.paint();
        }
    }, {
        key: "minus",
        value: function minus() {
            if (this.state.amount === 1) {
                return;
            }
            this.state.amount -= 1;
            this.paint();
        }
    }, {
        key: "add",
        value: function add() {
            var limit = Number(this.state.limit);
            if (this.state.amount === limit) {
                return;
            }
            this.state.amount += 1;
            this.paint();
        }
    }]);

    return ProductDetail;
}(widget_1.Widget);

exports.ProductDetail = ProductDetail;
// ===========================================本地
// 解决js浮点数运算误差 3*0.1=0.3000000000004
var strip = function strip(num) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

    return +parseFloat(num.toPrecision(precision));
};
})