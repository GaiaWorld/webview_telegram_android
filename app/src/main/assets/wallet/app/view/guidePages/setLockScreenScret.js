_$define("app/view/guidePages/setLockScreenScret", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * set lock-screen psw
 */
var root_1 = require("../../../pi/ui/root");
var forelet_1 = require("../../../pi/widget/forelet");
var widget_1 = require("../../../pi/widget/widget");
var store_1 = require("../../store/store");
var tools_1 = require("../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var SetLockScreenScret = function (_widget_1$Widget) {
    _inherits(SetLockScreenScret, _widget_1$Widget);

    function SetLockScreenScret() {
        _classCallCheck(this, SetLockScreenScret);

        return _possibleConstructorReturn(this, (SetLockScreenScret.__proto__ || Object.getPrototypeOf(SetLockScreenScret)).call(this));
    }

    _createClass(SetLockScreenScret, [{
        key: "create",
        value: function create() {
            _get(SetLockScreenScret.prototype.__proto__ || Object.getPrototypeOf(SetLockScreenScret.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(SetLockScreenScret.prototype.__proto__ || Object.getPrototypeOf(SetLockScreenScret.prototype), "setProps", this).call(this, props, oldProps);
            if (props.title1) {
                this.state.passwordScreenTitle = props.title1;
            }
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                passwordScreenTitle: "\u4E3A\u4E86\u4FDD\u62A4\u60A8\u7684\u8D44\u4EA7\u5B89\u5168\n\u8BF7\u8BBE\u7F6E\u9501\u5C4F\u5BC6\u7801",
                lockScreenPsw: ''
            };
        }
    }, {
        key: "completedInput",
        value: function completedInput(r) {
            var _this2 = this;

            var psw = r.psw;
            if (this.state.lockScreenPsw.length > 0) {
                if (this.state.lockScreenPsw === psw) {
                    var close = root_1.popNew('pi-components-loading-loading', { text: '验证中...' });
                    setTimeout(function () {
                        close.callback(close.widget);
                        var hash256 = tools_1.lockScreenHash(psw);
                        var ls = store_1.find('lockScreen');
                        ls.psw = hash256;
                        store_1.updateStore('lockScreen', ls);
                        root_1.popNew('app-components-message-message', { itype: 'success', content: '设置成功', center: true });
                        _this2.ok && _this2.ok();
                    }, 1000);
                } else {
                    root_1.popNew('app-components-message-message', { itype: 'error', content: '两次密码输入不一致，请重新输入', center: true });
                    this.init();
                    this.paint();
                }
            } else {
                this.state.lockScreenPsw = psw;
                this.state.passwordScreenTitle = this.props && this.props.title2 || '请重复';
                this.paint();
            }
        }
    }, {
        key: "jumpClick",
        value: function jumpClick() {
            var ls = store_1.find('lockScreen');
            ls.jump = true;
            store_1.updateStore('lockScreen', ls);
            this.ok && this.ok();
        }
    }]);

    return SetLockScreenScret;
}(widget_1.Widget);

exports.SetLockScreenScret = SetLockScreenScret;
})