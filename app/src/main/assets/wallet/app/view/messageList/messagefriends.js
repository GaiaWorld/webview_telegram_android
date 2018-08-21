_$define("app/view/messageList/messagefriends", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * message friend
 */
var widget_1 = require("../../../pi/widget/widget");

var Messagefriends = function (_widget_1$Widget) {
    _inherits(Messagefriends, _widget_1$Widget);

    function Messagefriends() {
        _classCallCheck(this, Messagefriends);

        var _this = _possibleConstructorReturn(this, (Messagefriends.__proto__ || Object.getPrototypeOf(Messagefriends)).call(this));

        _this.state = {
            data1: [{ type: '1', content: '今天天气真好' }, { type: '2', content: '对呀对呀！' }, { type: '1', content: '要不要出门' }, { type: '2', content: '不要' }, { type: '1', content: '准备在家里了解了解市场行情' }, { type: '2', content: '是的' }, { type: '1', content: '你用的什么软件' }, { type: '2', content: '还没找到' }, { type: '1', content: '转给你的两个以太坊收到了嘛？' }, { type: '2', content: '收到了，好快呀', time: '5-23 10:53' }, { type: '1', content: '嗯，推荐大家都来用KuPay吧！' }, { type: '2', content: '好呀好呀！' }],
            data2: [{ type: '1', content: '我买的币又涨价了！！！我买的币又涨价了！！！我买的币又涨价了！！！' }, { type: '2', content: '恭喜恭喜呀' }, { type: '1', content: '我买的币又涨价了！！！' }, { type: '2', content: '恭喜恭喜呀' }, { type: '1', content: '我买的币又涨价了！！！' }, { type: '2', content: '恭喜恭喜呀' }, { type: '1', content: '我买的币又涨价了！！！' }, { type: '2', content: '恭喜恭喜呀' }, { type: '1', content: '我买的币又涨价了！！！' }, { type: '2', content: '恭喜恭喜呀' }, { type: '1', content: '我买的币又涨价了！！！' }, { type: '2', content: '恭喜恭喜呀' }, { type: '1', content: '我买的币又涨价了！！！' }, { type: '2', content: '恭喜恭喜呀' }, { type: '1', content: '我买的币又涨价了！！！' }, { type: '2', content: '恭喜恭喜呀' }, { type: '2', content: '最近行情如何？' }]
        };
        return _this;
    }

    _createClass(Messagefriends, [{
        key: "create",
        value: function create() {
            _get(Messagefriends.prototype.__proto__ || Object.getPrototypeOf(Messagefriends.prototype), "create", this).call(this);
            this.props = JSON.parse(window.sessionStorage.item);
        }
    }, {
        key: "attach",
        value: function attach() {
            var talkcontent = document.getElementById('talkcontent');
            talkcontent.scrollTop = talkcontent.scrollHeight;
            talkcontent.style.height = talkcontent.scrollHeight.toString();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return Messagefriends;
}(widget_1.Widget);

exports.Messagefriends = Messagefriends;
})