_$define("app/view/mine/contanctUs/contanctUs", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 联系我们
 */
// ===============================================导入
var widget_1 = require("../../../../pi/widget/widget");
// ==================================================导出

var Aboutus = function (_widget_1$Widget) {
    _inherits(Aboutus, _widget_1$Widget);

    function Aboutus() {
        _classCallCheck(this, Aboutus);

        return _possibleConstructorReturn(this, (Aboutus.__proto__ || Object.getPrototypeOf(Aboutus)).apply(this, arguments));
    }

    _createClass(Aboutus, [{
        key: "create",
        value: function create() {
            _get(Aboutus.prototype.__proto__ || Object.getPrototypeOf(Aboutus.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                data: [{ value: '官方网站', desc: 'www.Kupay.io' }, { value: '微信客服', desc: 'KuPay小助手' }, { value: '微信公众号', desc: 'KuPay' }]
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "itemClick",
        value: function itemClick(e, ind) {
            switch (ind) {
                // 点击KuPay官网
                case 0:
                    window.open('http://www.KuPay.io');
                    break;
                // KuPay小助手
                case 1:
                    window.open('weixin://dl/officialaccounts');
                    break;
                // KuPay公众号
                case 2:
                    window.open('weixin://dl/officialaccounts');
                    break;
                default:
                    console.log('服务器异常请稍后重试');
            }
        }
    }]);

    return Aboutus;
}(widget_1.Widget);

exports.Aboutus = Aboutus;
})