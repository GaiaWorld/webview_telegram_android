_$define("app/view/mine/addressManage/messagebox", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
// ======================================导入
var qrcode_1 = require("../../../../pi/browser/qrcode");
var widget_1 = require("../../../../pi/widget/widget");
// ============================================导出

var MessageBox = function (_widget_1$Widget) {
    _inherits(MessageBox, _widget_1$Widget);

    function MessageBox() {
        _classCallCheck(this, MessageBox);

        return _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this));
    }

    _createClass(MessageBox, [{
        key: "create",
        value: function create() {
            _get(MessageBox.prototype.__proto__ || Object.getPrototypeOf(MessageBox.prototype), "create", this).call(this);
            this.config = { value: { group: 'top' } };
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(MessageBox.prototype.__proto__ || Object.getPrototypeOf(MessageBox.prototype), "setProps", this).call(this, props, oldProps);
            var input1Value = '';
            var input2Value = '';
            if (this.props.input1DefaultValue) {
                input1Value = this.props.input1DefaultValue;
            }
            if (this.props.input2DefaultValue) {
                input2Value = this.props.input2DefaultValue;
            }
            this.state = { isShow: false, tags: '', input1Value: input1Value, input2Value: input2Value };
            this.init();
        }
        /**
         * 点击确认
         */

    }, {
        key: "doClickSure",
        value: function doClickSure() {
            this.ok && this.ok({ addresse: this.state.input1Value, tags: this.state.input2Value });
        }
        /**
         * 点击取消
         */

    }, {
        key: "doClickCancel",
        value: function doClickCancel() {
            this.cancel && this.cancel();
        }
        /**
         * 标签名输入框数据改变
         */

    }, {
        key: "tagsChange",
        value: function tagsChange(e) {
            this.state.input2Value = e.value;
        }
        /**
         * 地址输入框数据改变
         */

    }, {
        key: "addresseChange",
        value: function addresseChange(e) {
            this.state.input1Value = e.value;
        }
        /**
         * 点击扫码按钮
         */

    }, {
        key: "scanClicked",
        value: function scanClicked() {
            var _this2 = this;

            // TODO 扫描二维码
            var qrcode = new qrcode_1.QRCode();
            qrcode.init();
            qrcode.scan({
                success: function success(addr) {
                    _this2.state.input1Value = addr;
                    _this2.paint();
                },
                fail: function fail(r) {
                    alert(r);
                }
            });
        }
    }, {
        key: "init",
        value: function init() {
            var _this3 = this;

            setTimeout(function () {
                _this3.state.isShow = true;
                _this3.paint();
            }, 100);
        }
    }]);

    return MessageBox;
}(widget_1.Widget);

exports.MessageBox = MessageBox;
})