_$define("app/view/currencyExchange/exchangeConfirm", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * exchange confirm
 */
var widget_1 = require("../../../pi/widget/widget");
var tokens_1 = require("../../core/eth/tokens");

var ExchangeConfirm = function (_widget_1$Widget) {
    _inherits(ExchangeConfirm, _widget_1$Widget);

    function ExchangeConfirm() {
        _classCallCheck(this, ExchangeConfirm);

        return _possibleConstructorReturn(this, (ExchangeConfirm.__proto__ || Object.getPrototypeOf(ExchangeConfirm)).apply(this, arguments));
    }

    _createClass(ExchangeConfirm, [{
        key: "setProps",
        value: function setProps(props, oldPros) {
            _get(ExchangeConfirm.prototype.__proto__ || Object.getPrototypeOf(ExchangeConfirm.prototype), "setProps", this).call(this, props, oldPros);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var outCurrency = this.props.outCurrency;
            var feeUnit = 'ETH';
            if (outCurrency === 'BTC') {
                feeUnit = 'BTC';
            } else if (outCurrency === 'ETH' || tokens_1.ERC20Tokens[outCurrency]) {
                feeUnit = 'ETH';
            }
            this.state = {
                feeUnit: feeUnit
            };
        }
    }, {
        key: "cancelClick",
        value: function cancelClick() {
            this.cancel && this.cancel();
        }
    }, {
        key: "okClick",
        value: function okClick() {
            this.ok && this.ok();
        }
    }]);

    return ExchangeConfirm;
}(widget_1.Widget);

exports.ExchangeConfirm = ExchangeConfirm;
})