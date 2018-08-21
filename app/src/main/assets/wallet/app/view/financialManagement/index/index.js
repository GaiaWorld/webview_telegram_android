_$define("app/view/financialManagement/index/index", function (require, exports, module){
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
 * 理财产品首页
 */
// ==================================================导入
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
// ====================================================导出

var Index = function (_widget_1$Widget) {
    _inherits(Index, _widget_1$Widget);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));
    }

    _createClass(Index, [{
        key: "create",
        value: function create() {
            _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "attach",
        value: function attach() {
            _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "attach", this).call(this);
            for (var i = 0; i < this.state.productList.length; i++) {
                var canvasId = "canvas" + i;
                this.drawCircle(canvasId, 0);
            }
        }
    }, {
        key: "init",
        value: function init() {
            var _this2 = this;

            this.state = {
                record: [{
                    title: 'ETH资管第1期',
                    amount: '1',
                    bonus: '0.002',
                    days: '2'
                }],
                productList: [{
                    title: '优选理财-随存随取',
                    surplus: '0%',
                    profit: '5%',
                    productName: 'ETH资管第1期',
                    productDescribe: ' 赎回T+0到账 | 0.1 ETH/份',
                    isSoldOut: true
                }, {
                    title: '优选理财-随存随取',
                    surplus: '0%',
                    profit: '5%',
                    productName: 'ETH资管第1期',
                    productDescribe: ' 赎回T+0到账 | 0.1 ETH/份',
                    isSoldOut: true
                }]
            };
            setTimeout(function () {
                _this2.getProductList();
            }, 5000);
        }
    }, {
        key: "getProductList",
        value: function getProductList() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var productList;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return pull_1.getProductList();

                            case 2:
                                productList = _context.sent;

                                console.log('---------getProductList-------------');
                                return _context.abrupt("return", productList);

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "toDetail",
        value: function toDetail(i) {
            console.log('---------i-----------');
            console.log(i);
            var item = this.state.productList[i];
            root_1.popNew('app-view-financialManagement-productDetail-productDetail', { i: i, item: item });
        }
    }, {
        key: "toRecord",
        value: function toRecord() {
            root_1.popNew('app-view-financialManagement-purchaseRecord-purchaseRecord');
        }
    }, {
        key: "drawCircle",
        value: function drawCircle(canvasId, t) {
            var oC = document.getElementById(canvasId);
            var oGC = oC.getContext('2d');
            var pi = Math.PI;
            var percent = t / 100;
            var oB = pi * 1.5 - percent * 2 * pi;
            var oR = Math.PI * 1.5;
            var x = 60;
            var y = 60;
            var r = 50;
            oGC.strokeStyle = '#E5E5EE';
            oGC.lineWidth = '15';
            oGC.beginPath();
            oGC.arc(x, y, r, 0, pi * 2, true);
            oGC.stroke();
            oGC.closePath();
            oGC.beginPath();
            oGC.strokeStyle = '#A0ACC0';
            oGC.lineWidth = '15';
            oGC.beginPath();
            oGC.arc(x, y, r, oB, oR, false);
            oGC.stroke();
            oGC.font = '28px Arial';
            oGC.fillStyle = '#111';
            oGC.textAlign = 'center';
            if (t <= 0) {
                oGC.fillText("\u552E\u7F44", x, y + 10);
            } else {
                oGC.fillText(t + "%", x, y + 10);
            }
        }
    }]);

    return Index;
}(widget_1.Widget);

exports.Index = Index;
})