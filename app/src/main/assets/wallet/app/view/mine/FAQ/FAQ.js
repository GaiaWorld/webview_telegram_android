_$define("app/view/mine/FAQ/FAQ", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * FAQ
 */
// =============================================导入
var widget_1 = require("../../../../pi/widget/widget");
// ================================================导出

var FAQ = function (_widget_1$Widget) {
    _inherits(FAQ, _widget_1$Widget);

    function FAQ() {
        _classCallCheck(this, FAQ);

        var _this = _possibleConstructorReturn(this, (FAQ.__proto__ || Object.getPrototypeOf(FAQ)).call(this));

        _this.state = {
            htmlStrList: [{
                title: '什么是助记词？',
                // tslint:disable-next-line:max-line-length
                htmlStr: "<div>\u52A9\u8BB0\u8BCD\u662F\u79C1\u94A5\u7684\u53E6\u4E00\u79CD\u8868\u73B0\u5F62\u5F0F\uFF0C\u5177\u6709\u548C\u79C1\u94A5\u540C\u6837\u7684\u529F\u80FD\uFF0C\u5728\u5BFC\u5165\u94B1\u5305\u65F6\uFF0C\u8F93\u5165\u52A9\u8BB0\u8BCD\u5E76\u8BBE\u7F6E\u4E00\u4E2A\u5BC6\u7801\uFF08\u4E0D\u7528\u8F93\u5165\u539F\u5BC6\u7801\uFF09\uFF0C\u5C31\u80FD\u8FDB\u5165\u94B1\u5305\u5E76\u62E5\u6709\u8FD9\u4E2A\u94B1\u5305\u7684\u638C\u63A7\u6743\uFF0C\u5C31\u53EF\u4EE5\u628A\u94B1\u5305\u4E2D\u7684\u4EE3\u5E01\u8F6C\u79FB\u8D70\uFF0C\u56E0\u6B64\u52A9\u8BB0\u8BCD\u7684\u4FDD\u5BC6\u975E\u5E38\u91CD\u8981\u3002</div>"
            }, {
                title: 'KuPay现在有哪些币种？',
                htmlStr: "<div>KuPay\u73B0\u5728\u4EC5\u652F\u6301\u4EE5\u592A\u574A\u8D27\u5E01\uFF0C\u7A0D\u540E\u4F1A\u52A0\u5165\u66F4\u591A\u5E01\u79CD</div>"
            }]
        };
        return _this;
    }

    _createClass(FAQ, [{
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return FAQ;
}(widget_1.Widget);

exports.FAQ = FAQ;
})