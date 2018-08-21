_$define("app/view/guidePages/unlockScreen", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * unlock screen
 */
// ============================== 导入
var root_1 = require("../../../pi/ui/root");
var forelet_1 = require("../../../pi/widget/forelet");
var widget_1 = require("../../../pi/widget/widget");
var globalWallet_1 = require("../../core/globalWallet");
var store_1 = require("../../store/store");
var tools_1 = require("../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var UnlockScreen = function (_widget_1$Widget) {
    _inherits(UnlockScreen, _widget_1$Widget);

    function UnlockScreen() {
        _classCallCheck(this, UnlockScreen);

        return _possibleConstructorReturn(this, (UnlockScreen.__proto__ || Object.getPrototypeOf(UnlockScreen)).apply(this, arguments));
    }

    _createClass(UnlockScreen, [{
        key: "create",
        value: function create() {
            _get(UnlockScreen.prototype.__proto__ || Object.getPrototypeOf(UnlockScreen.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                passwordScreenTitle: '解锁屏幕',
                numberOfErrors: 0,
                errorTips: ['解锁屏幕', '已错误1次，还有两次机会', '最后1次，否则密码将会重置']
            };
        }
    }, {
        key: "completedInput",
        value: function completedInput(r) {
            var psw = r.psw;
            if (tools_1.lockScreenVerify(psw)) {
                if (this.props && this.props.updatedPsw) {
                    root_1.popNew('app-components-message-message', { itype: 'success', content: '验证成功,请输入新密码', center: true });
                    root_1.popNew('app-view-guidePages-setLockScreenScret', { title1: '请输入新密码', title2: '请重复新密码', jump: true });
                }
                this.ok && this.ok();
                return;
            }
            this.state.numberOfErrors++;
            if (this.state.numberOfErrors >= 3) {
                var ls = store_1.find('lockScreen');
                ls.locked = true;
                store_1.updateStore('lockScreen', ls); // 更新屏幕锁定
                popMessageboxVerify(this);
                return;
            }
            this.state.passwordScreenTitle = this.state.errorTips[this.state.numberOfErrors];
            this.paint();
        }
    }, {
        key: "forgetPasswordClick",
        value: function forgetPasswordClick() {
            exports.forgetPasswordClick(this);
        }
    }, {
        key: "jumpClick",
        value: function jumpClick() {
            this.ok && this.ok();
        }
    }]);

    return UnlockScreen;
}(widget_1.Widget);

exports.UnlockScreen = UnlockScreen;
// ===========================================本地
// 弹出密码验证框
var popMessageboxVerify = function popMessageboxVerify(that) {
    var wallet = store_1.find('curWallet');
    var gwlt = globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt);
    var messageboxVerifyProps = {
        title: '重置锁屏密码',
        content: '错误次数过多，已被锁定，请验证当前钱包交易密码后重置',
        inputType: 'password',
        tipsTitle: gwlt.nickName,
        tipsImgUrl: wallet.avatar,
        placeHolder: '请输入交易密码'
    };
    root_1.popNew('app-components-message-messageboxVerify', messageboxVerifyProps, function (password) {
        verifyLongPsw(password, that);
    });
};
// 验证密码
var verifyLongPsw = function verifyLongPsw(psw, that) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var close, wallet, ls, isEffective;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        close = root_1.popNew('pi-components-loading-loading', { text: '验证中...' });
                        wallet = store_1.find('curWallet');
                        ls = store_1.find('lockScreen');
                        _context.next = 5;
                        return tools_1.VerifyIdentidy(wallet, psw, false);

                    case 5:
                        isEffective = _context.sent;

                        close.callback(close.widget);
                        if (isEffective) {
                            root_1.popNew('app-components-message-message', { itype: 'success', content: '验证成功,请重新设置锁屏密码', center: true });
                            root_1.popNew('app-view-guidePages-setLockScreenScret', { title1: '请输入新密码', title2: '请重复新密码', jump: true });
                            ls.locked = false;
                            store_1.updateStore('lockScreen', ls); // 更新屏幕锁定
                            that && that.ok && that.ok();
                        } else {
                            root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误', center: true });
                            if (ls.locked) {
                                popMessageboxVerify(that);
                            }
                        }

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
exports.forgetPasswordClick = function (that) {
    var wallet = store_1.find('curWallet');
    var gwlt = globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt);
    var messageboxVerifyProps = {
        title: '忘记密码',
        content: '忘记锁屏密码，请验证当前钱包交易密码后重置',
        inputType: 'password',
        tipsTitle: gwlt.nickName,
        tipsImgUrl: wallet.avatar,
        placeHolder: '请输入交易密码'
    };
    root_1.popNew('app-components-message-messageboxVerify', messageboxVerifyProps, function (psw) {
        verifyLongPsw(psw, that);
    });
};
})