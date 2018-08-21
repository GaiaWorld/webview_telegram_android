_$define("app/view/exchange/choose", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 交易所-选择
 */
var widget_1 = require("../../../pi/widget/widget");

var Home = function (_widget_1$Widget) {
    _inherits(Home, _widget_1$Widget);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
    }

    _createClass(Home, [{
        key: "create",
        value: function create() {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                menuList: ['ETH', 'BTC'],
                resultList: [],
                initResultList: [[{ icon: '../../res/image/currency/BTC.png', name: 'BTC/ETH', currency1: 'BTC', currency2: 'ETH' }, { icon: '../../res/image/currency/EOS.png', name: 'EOS/ETH', currency1: 'EOS', currency2: 'ETH' }], [{ icon: '../../res/image/currency/ETH.png', name: 'ETH/BTC', currency1: 'ETH', currency2: 'BTC' }, { icon: '../../res/image/currency/EOS.png', name: 'EOS/BTC', currency1: 'EOS', currency2: 'BTC' }], [{ icon: '../../res/image/currency/ETH.png', name: 'ETH/EOS', currency1: 'ETH', currency2: 'EOS' }, { icon: '../../res/image/currency/BTC.png', name: 'BTC/EOS', currency1: 'BTC', currency2: 'EOS' }]],
                select: null
            };
            this.state.resultList = this.state.initResultList[0];
        }
    }, {
        key: "choose",
        value: function choose(e, index) {
            this.state.select = this.state.resultList[index];
            this.close();
        }
    }, {
        key: "close",
        value: function close() {
            this.ok && this.ok(this.state.select);
        }
    }, {
        key: "onTabsChange",
        value: function onTabsChange(e) {
            this.state.resultList = this.state.initResultList[e.value];
            this.paint();
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
})