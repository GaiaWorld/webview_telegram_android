_$define("app/view/financialManagement/purchase/purchase", function (require, exports, module){
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
 * 确认购买
 */
// ===============================================导入
var widget_1 = require("../../../../pi/widget/widget");
var tools_1 = require("../../../utils/tools");
// ==================================================导出

var ProductDetail = function (_widget_1$Widget) {
    _inherits(ProductDetail, _widget_1$Widget);

    function ProductDetail() {
        _classCallCheck(this, ProductDetail);

        return _possibleConstructorReturn(this, (ProductDetail.__proto__ || Object.getPrototypeOf(ProductDetail)).call(this));
    }

    _createClass(ProductDetail, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ProductDetail.prototype.__proto__ || Object.getPrototypeOf(ProductDetail.prototype), "setProps", this).call(this, props, oldProps);
            console.log(props);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {};
        }
    }, {
        key: "close",
        value: function close() {
            this.ok && this.ok('');
        }
    }, {
        key: "purchaseClicked",
        value: function purchaseClicked() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var passwd;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return tools_1.openBasePage('app-components-message-messageboxPrompt', {
                                    title: '输入密码', content: '您的云账户余额不够，将从本地钱包中扣除差款。', inputType: 'password'
                                }).then(function (r) {
                                    _this2.ok && _this2.ok(r);
                                });

                            case 2:
                                passwd = _context.sent;

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return ProductDetail;
}(widget_1.Widget);

exports.ProductDetail = ProductDetail;
})