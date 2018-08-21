_$define("app/view/exchange/kline", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 交易所-k线图
 */
var root_1 = require("../../../pi/ui/root");
var widget_1 = require("../../../pi/widget/widget");

var KLine = function (_widget_1$Widget) {
    _inherits(KLine, _widget_1$Widget);

    function KLine() {
        _classCallCheck(this, KLine);

        return _possibleConstructorReturn(this, (KLine.__proto__ || Object.getPrototypeOf(KLine)).call(this));
    }

    _createClass(KLine, [{
        key: "create",
        value: function create() {
            _get(KLine.prototype.__proto__ || Object.getPrototypeOf(KLine.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                currency1: 'BTC',
                currency2: 'ETH',
                open: 916.10,
                close: 916.10,
                done: 120.981,
                high: 916.10,
                low: 916.10,
                time: '10.24.17 4:00:01 PM',
                blance: '766.1.8991',
                up: '-3.19%',
                list: [{ buyCount: 0.01, buyPrice: 919.23, salePrice: 919.23, saleCount: 0.01 }, { buyCount: 0.55, buyPrice: 919.16, salePrice: 919.16, saleCount: 0.55 }, { buyCount: 0.01, buyPrice: 919.23, salePrice: 919.23, saleCount: 0.01 }, { buyCount: 0.55, buyPrice: 919.16, salePrice: 919.16, saleCount: 0.55 }, { buyCount: 0.01, buyPrice: 919.23, salePrice: 919.23, saleCount: 0.01 }, { buyCount: 0.55, buyPrice: 919.16, salePrice: 919.16, saleCount: 0.55 }, { buyCount: 0.01, buyPrice: 919.23, salePrice: 919.23, saleCount: 0.01 }, { buyCount: 0.55, buyPrice: 919.16, salePrice: 919.16, saleCount: 0.55 }, { buyCount: 0.01, buyPrice: 919.23, salePrice: 919.23, saleCount: 0.01 }, { buyCount: 0.55, buyPrice: 919.16, salePrice: 919.16, saleCount: 0.55 }, { buyCount: 0.01, buyPrice: 916.73, salePrice: 919.23, saleCount: 0.01 }, { buyCount: 0.55, buyPrice: 916.71, salePrice: 919.16, saleCount: 0.55 }, { buyCount: 0.01, buyPrice: 916.73, salePrice: 919.23, saleCount: 0.01 }]
            };
        }
    }, {
        key: "clkBuy",
        value: function clkBuy(e, index) {
            this.state.isSelect = 'buy';
            this.paint();
        }
    }, {
        key: "clkSale",
        value: function clkSale(event) {
            this.state.isSelect = 'sale';
            this.paint();
            // popNew("app-view-messageList-messageList");
        }
        /**
         * 显示K线图
         */

    }, {
        key: "showKLine",
        value: function showKLine() {}
        // todo 详细补充

        /**
         * 更换货币信息
         */

    }, {
        key: "changeCurrency",
        value: function changeCurrency() {
            var _this2 = this;

            root_1.popNew('app-view-exchange-choose', {}, function (r) {
                if (r) {
                    _this2.state.currency1 = r.currency1;
                    _this2.state.currency2 = r.currency2;
                    _this2.paint();
                }
            });
        }
    }, {
        key: "backPrePage",
        value: function backPrePage(event) {
            this.ok && this.ok();
        }
    }]);

    return KLine;
}(widget_1.Widget);

exports.KLine = KLine;
})