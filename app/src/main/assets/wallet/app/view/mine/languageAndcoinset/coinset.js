_$define("app/view/mine/languageAndcoinset/coinset", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * coin set
 */
var widget_1 = require("../../../../pi/widget/widget");

var CoinSet = function (_widget_1$Widget) {
    _inherits(CoinSet, _widget_1$Widget);

    function CoinSet() {
        _classCallCheck(this, CoinSet);

        return _possibleConstructorReturn(this, (CoinSet.__proto__ || Object.getPrototypeOf(CoinSet)).call(this));
    }

    _createClass(CoinSet, [{
        key: "create",
        value: function create() {
            _get(CoinSet.prototype.__proto__ || Object.getPrototypeOf(CoinSet.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                checkedIndex: 0,
                data: [{ index: 0, lan: 'CNY', checked: true }, { index: 1, lan: 'USD' }]
            };
        }
    }, {
        key: "radioChangeListener",
        value: function radioChangeListener(event) {
            for (var i in this.state.data) {
                if (event.index !== this.state.data[i].index) {
                    this.state.data[i].checked = false;
                }
            }
            this.paint();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return CoinSet;
}(widget_1.Widget);

exports.CoinSet = CoinSet;
})