_$define("app/components/passwordScreen/passwordScreen", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * pasword screen
 */
var event_1 = require("../../../pi/widget/event");
var widget_1 = require("../../../pi/widget/widget");

var PasswordScreen = function (_widget_1$Widget) {
    _inherits(PasswordScreen, _widget_1$Widget);

    function PasswordScreen() {
        _classCallCheck(this, PasswordScreen);

        return _possibleConstructorReturn(this, (PasswordScreen.__proto__ || Object.getPrototypeOf(PasswordScreen)).call(this));
    }

    _createClass(PasswordScreen, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(PasswordScreen.prototype.__proto__ || Object.getPrototypeOf(PasswordScreen.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                // tslint:disable-next-line:prefer-array-literal
                defaultArr: new Array(6),
                pswBoard: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                pswArr: []
            };
        }
    }, {
        key: "boardItemClick",
        value: function boardItemClick(e, index) {
            var _this2 = this;

            if (this.state.pswArr.length > 6) return;
            this.state.pswArr.push(this.state.pswBoard[index]);
            this.paint();
            if (this.state.pswArr.length === 6) {
                setTimeout(function () {
                    event_1.notify(e.node, 'ev-completed-click', { psw: _this2.state.pswArr.join('') });
                }, 100);
                return;
            }
        }
    }, {
        key: "clearClick",
        value: function clearClick() {
            if (this.state.pswArr.length === 0) return;
            this.state.pswArr.pop();
            this.paint();
        }
    }, {
        key: "forgetPswClick",
        value: function forgetPswClick(e) {
            event_1.notify(e.node, 'ev-forgetPassword-click', {});
        }
    }]);

    return PasswordScreen;
}(widget_1.Widget);

exports.PasswordScreen = PasswordScreen;
})