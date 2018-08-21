_$define("app/view/mine/changePassword/changePassword", function (require, exports, module){
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
// ==============================================导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var store_1 = require("../../../store/store");
var account_1 = require("../../../utils/account");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var ChangePassword = function (_widget_1$Widget) {
    _inherits(ChangePassword, _widget_1$Widget);

    function ChangePassword() {
        _classCallCheck(this, ChangePassword);

        return _possibleConstructorReturn(this, (ChangePassword.__proto__ || Object.getPrototypeOf(ChangePassword)).call(this));
    }

    _createClass(ChangePassword, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(ChangePassword.prototype.__proto__ || Object.getPrototypeOf(ChangePassword.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                style: 'backgroundColor: #FFF;fontSize: 24px;color: #8E96AB;lineHeight: 33px;borderBottom: 1px solid #c0c4cc;',
                newPassword: '',
                rePassword: '',
                strength: account_1.getWalletPswStrength('')
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "newPasswordChange",
        value: function newPasswordChange(e) {
            this.state.newPassword = e.value;
            this.state.strength = account_1.getWalletPswStrength(this.state.newPassword);
            this.paint();
        }
    }, {
        key: "rePasswordChange",
        value: function rePasswordChange(e) {
            this.state.rePassword = e.value;
        }
    }, {
        key: "btnClicked",
        value: function btnClicked() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var newPassword, rePassword, walletList, wallet, loading, gwlt;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                newPassword = this.state.newPassword;
                                rePassword = this.state.rePassword;
                                walletList = store_1.find('walletList');
                                wallet = tools_1.getWalletByWalletId(walletList, this.props.walletId);

                                if (!(!newPassword || !rePassword)) {
                                    _context.next = 6;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 6:
                                if (account_1.pswEqualed(newPassword, rePassword)) {
                                    _context.next = 9;
                                    break;
                                }

                                root_1.popNew('app-components-message-messagebox', { itype: 'alert', title: '提示！', content: '两次输入的密码不一致！' });
                                return _context.abrupt("return");

                            case 9:
                                if (account_1.walletPswAvailable(newPassword)) {
                                    _context.next = 12;
                                    break;
                                }

                                root_1.popNew('app-components-message-messagebox', { itype: 'alert', title: '提示！', content: '密码不符合规则！密码至少8位字符，可包含英文、数字、特殊字符！' });
                                return _context.abrupt("return");

                            case 12:
                                // 验证全部通过，开始设置新密码
                                loading = root_1.popNew('pi-components-loading-loading', { text: '修改中...' });
                                gwlt = globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt);
                                _context.next = 16;
                                return gwlt.passwordChange(this.props.passwd, newPassword, this.props.walletId);

                            case 16:
                                wallet.gwlt = gwlt.toJSON();
                                store_1.updateStore('walletList', walletList);
                                loading.callback(loading.widget);
                                this.backPrePage();

                            case 20:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return ChangePassword;
}(widget_1.Widget);

exports.ChangePassword = ChangePassword;
})