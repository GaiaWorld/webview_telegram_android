_$define("app/view/messageList/messageList", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("../../../pi/ui/root");
var event_1 = require("../../../pi/widget/event");
var widget_1 = require("../../../pi/widget/widget");

var MessageList = function (_widget_1$Widget) {
    _inherits(MessageList, _widget_1$Widget);

    function MessageList() {
        _classCallCheck(this, MessageList);

        return _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this));
    }

    _createClass(MessageList, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(MessageList.prototype.__proto__ || Object.getPrototypeOf(MessageList.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                data: [{ type: '1', typename: '好友', title: '好呀好呀！', content: '1', time: '2018-5-23', noread: true && this.props.hasNews, name: '小王' }, { type: '2', typename: '公告', title: '发布通知', content: "KuPay\u53D1\u5E03\u5185\u6D4B\u7248\u672C\uFF0C\u8BE5\u7248\u672C\u5B9E\u73B0\u4E86\n                \xB7\u52A9\u8BB0\u8BCD\u5BFC\u5165\u94B1\u5305\n                \xB7\u57FA\u4E8E\u52A9\u8BB0\u8BCD\u548CBIP44\u89C4\u8303\u521B\u5EFA\u94B1\u5305\n                \xB7\u652F\u6301\u94B1\u5305\u57FA\u672C\u529F\u80FD\uFF0C\u5305\u62EC\uFF1A\u8F6C\u8D26\u3001\u6536\u6B3E\u3001\u4EA4\u6613\u8BB0\u5F55\n                \xB7\u652F\u6301\u6DFB\u52A0\u4EE5\u592A\u574A\u8D27\u5E01\u8D44\u4EA7\n                \u66F4\u591A\u529F\u80FD\u7A0D\u540E\u9000\u51FA", time: '2018-05-27 17:24:00' }, { type: '3', typename: '交易通知', title: '交易完成', content: '', time: '2018-5-23' }],
                clearPoint: false
            };
        }
    }, {
        key: "goback",
        value: function goback(event) {
            event_1.notify(event.node, 'ev-back-click', {});
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok(this.state.clearPoint);
        }
    }, {
        key: "messDetail",
        value: function messDetail(event, index) {
            if (this.state.data[index].noread) {
                this.state.clearPoint = true;
                this.state.data[index].noread = false;
                this.paint();
            }
            window.sessionStorage.item = JSON.stringify(this.state.data[index]);
            if (this.state.data[index].type === '1') {
                root_1.popNew('app-view-messageList-messagefriends');
            } else if (this.state.data[index].type === '2') {
                root_1.popNew('app-view-messageList-messagenotice');
            } else {
                root_1.popNew('app-view-messageList-messagetrans');
            }
        }
    }]);

    return MessageList;
}(widget_1.Widget);

exports.MessageList = MessageList;
})