_$define("app/view/messageList/messagenotice", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * message notice
 */
var widget_1 = require("../../../pi/widget/widget");

var MessageNotice = function (_widget_1$Widget) {
    _inherits(MessageNotice, _widget_1$Widget);

    function MessageNotice() {
        _classCallCheck(this, MessageNotice);

        var _this = _possibleConstructorReturn(this, (MessageNotice.__proto__ || Object.getPrototypeOf(MessageNotice)).call(this));

        _this.props = {
            type: '公告',
            title: '标题标题标题标题标题标题标题标题标题标题',
            content: "KuPay\u53D1\u5E03\u5185\u6D4B\u7248\u672C\uFF0C\u8BE5\u7248\u672C\u5B9E\u73B0\u4E86\n            \xB7\u52A9\u8BB0\u8BCD\u5BFC\u5165\u94B1\u5305\n            \xB7\u57FA\u4E8E\u52A9\u8BB0\u8BCD\u548CBIP44\u89C4\u8303\u521B\u5EFA\u94B1\u5305\n            \xB7\u652F\u6301\u94B1\u5305\u57FA\u672C\u529F\u80FD\uFF0C\u5305\u62EC\uFF1A\u8F6C\u8D26\u3001\u6536\u6B3E\u3001\u4EA4\u6613\u8BB0\u5F55\n            \xB7\u652F\u6301\u6DFB\u52A0\u4EE5\u592A\u574A\u8D27\u5E01\u8D44\u4EA7\n            \u66F4\u591A\u529F\u80FD\u7A0D\u540E\u9000\u51FA",
            time: '4-5'
        };
        return _this;
    }

    _createClass(MessageNotice, [{
        key: "create",
        value: function create() {
            _get(MessageNotice.prototype.__proto__ || Object.getPrototypeOf(MessageNotice.prototype), "create", this).call(this);
            this.props = JSON.parse(window.sessionStorage.item);
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return MessageNotice;
}(widget_1.Widget);

exports.MessageNotice = MessageNotice;
})