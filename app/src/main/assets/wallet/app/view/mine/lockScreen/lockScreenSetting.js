_$define("app/view/mine/lockScreen/lockScreenSetting", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * lockScreen settings
 */
// ============================== 导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var store_1 = require("../../../store/store");
var unlockScreen_1 = require("../../guidePages/unlockScreen");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var LockScreenSetting = function (_widget_1$Widget) {
    _inherits(LockScreenSetting, _widget_1$Widget);

    function LockScreenSetting() {
        _classCallCheck(this, LockScreenSetting);

        return _possibleConstructorReturn(this, (LockScreenSetting.__proto__ || Object.getPrototypeOf(LockScreenSetting)).call(this));
    }

    _createClass(LockScreenSetting, [{
        key: "create",
        value: function create() {
            _get(LockScreenSetting.prototype.__proto__ || Object.getPrototypeOf(LockScreenSetting.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var ls = store_1.find('lockScreen');
            this.state = {
                lockScreenPsw: ls.psw,
                openLockScreen: ls.psw && ls.open !== false,
                lockScreenTitle: '',
                numberOfErrors: 0,
                errorTips: ['请输入原来的密码', '已错误1次，还有两次机会', '最后1次，否则密码将会重置']
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 处理滑块改变
         */

    }, {
        key: "onSwitchChange",
        value: function onSwitchChange() {
            var _this2 = this;

            if (!this.state.lockScreenPsw) {
                root_1.popNew('app-view-guidePages-setLockScreenScret', { jump: true }, function () {
                    _this2.state.lockScreenPsw = store_1.find('lockScreen').psw;
                });
            }
            this.state.openLockScreen = !this.state.openLockScreen;
            var ls = store_1.find('lockScreen');
            ls.open = this.state.openLockScreen;
            store_1.updateStore('lockScreen', ls);
            this.paint();
        }
        // 修改锁屏密码

    }, {
        key: "resetLockScreen",
        value: function resetLockScreen() {
            root_1.popNew('app-view-guidePages-unlockScreen', { updatedPsw: true, jump: true });
        }
    }, {
        key: "forgetPasswordClick",
        value: function forgetPasswordClick() {
            unlockScreen_1.forgetPasswordClick(null);
        }
    }]);

    return LockScreenSetting;
}(widget_1.Widget);

exports.LockScreenSetting = LockScreenSetting;
})