_$define("app/view/wallet/walletCreate/walletCreate", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
 * create a wallet
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var pull_1 = require("../../../net/pull");
var store_1 = require("../../../store/store");
var account_1 = require("../../../utils/account");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");

var WalletCreate = function (_widget_1$Widget) {
    _inherits(WalletCreate, _widget_1$Widget);

    function WalletCreate() {
        _classCallCheck(this, WalletCreate);

        return _possibleConstructorReturn(this, (WalletCreate.__proto__ || Object.getPrototypeOf(WalletCreate)).call(this));
    }

    _createClass(WalletCreate, [{
        key: "create",
        value: function create() {
            _get(WalletCreate.prototype.__proto__ || Object.getPrototypeOf(WalletCreate.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                walletName: '',
                walletPsw: '',
                walletPswConfirm: '',
                pswSame: true,
                walletPswTips: '',
                userProtocolReaded: false,
                curWalletPswStrength: account_1.getWalletPswStrength(),
                showPswTips: false
            };
            var wallets = store_1.find('walletList');
            var len = wallets ? wallets.length : 0;
            this.state.walletName = "\u6211\u7684\u94B1\u5305" + (len + 1);
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "walletNameChange",
        value: function walletNameChange(e) {
            this.state.walletName = e.value;
        }
    }, {
        key: "walletPswChange",
        value: function walletPswChange(e) {
            this.state.walletPsw = e.value;
            // 判断两次输入密码是否相同
            if (!account_1.pswEqualed(this.state.walletPsw, this.state.walletPswConfirm)) {
                this.state.pswSame = false;
            } else {
                this.state.pswSame = true;
            }
            this.state.showPswTips = this.state.walletPsw.length > 0;
            this.state.curWalletPswStrength = account_1.getWalletPswStrength(this.state.walletPsw);
            this.paint();
        }
    }, {
        key: "walletPswBlur",
        value: function walletPswBlur() {
            this.state.showPswTips = false;
            this.paint();
        }
    }, {
        key: "walletPswConfirmChange",
        value: function walletPswConfirmChange(e) {
            this.state.walletPswConfirm = e.value;
            if (!account_1.pswEqualed(this.state.walletPsw, this.state.walletPswConfirm)) {
                this.state.pswSame = false;
            } else {
                this.state.pswSame = true;
            }
            this.paint();
        }
    }, {
        key: "walletPswTipsChange",
        value: function walletPswTipsChange(e) {
            this.state.walletPswTips = e.value;
        }
    }, {
        key: "checkBoxClick",
        value: function checkBoxClick(e) {
            this.state.userProtocolReaded = e.newType === 'true' ? true : false;
            this.paint();
        }
    }, {
        key: "agreementClick",
        value: function agreementClick() {
            root_1.popNew('app-view-wallet-agreementInterpretation-agreementInterpretation');
        }
    }, {
        key: "createWalletClick",
        value: function createWalletClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var close;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.state.userProtocolReaded) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 2:
                                if (account_1.walletNameAvailable(this.state.walletName)) {
                                    _context.next = 5;
                                    break;
                                }

                                root_1.popNew('app-components-message-messagebox', { itype: 'alert', title: '钱包名称错误', content: '请输入1-24位钱包名', center: true });
                                return _context.abrupt("return");

                            case 5:
                                if (account_1.walletPswAvailable(this.state.walletPsw)) {
                                    _context.next = 8;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码格式不正确', center: true });
                                return _context.abrupt("return");

                            case 8:
                                if (account_1.pswEqualed(this.state.walletPsw, this.state.walletPswConfirm)) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 10:
                                if (account_1.walletCountAvailable()) {
                                    _context.next = 14;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '钱包数量已达上限', center: true });
                                this.ok && this.ok();
                                return _context.abrupt("return");

                            case 14:
                                close = root_1.popNew('pi-components-loading-loading', { text: '创建中...' });
                                _context.next = 17;
                                return this.createWallet();

                            case 17:
                                close.callback(close.widget);
                                this.ok && this.ok();
                                root_1.popNew('app-view-wallet-walletCreate-createComplete');

                            case 20:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "createWallet",
        value: function createWallet() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _wallet$currencyRecor;

                var salt, gwlt, wallet, walletList, addrs;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                salt = store_1.find('salt');
                                _context2.next = 3;
                                return globalWallet_1.GlobalWallet.generate(this.state.walletPsw, this.state.walletName, salt);

                            case 3:
                                gwlt = _context2.sent;

                                // 创建钱包基础数据
                                wallet = {
                                    walletId: gwlt.glwtId,
                                    avatar: account_1.getAvatarRandom(),
                                    gwlt: gwlt.toJSON(),
                                    showCurrencys: constants_1.defalutShowCurrencys,
                                    currencyRecords: []
                                };

                                (_wallet$currencyRecor = wallet.currencyRecords).push.apply(_wallet$currencyRecor, _toConsumableArray(gwlt.currencyRecords));
                                if (this.state.walletPswTips.trim().length > 0) {
                                    wallet.walletPswTips = tools_1.encrypt(this.state.walletPswTips.trim());
                                }
                                walletList = store_1.find('walletList');
                                addrs = store_1.find('addrs');

                                addrs.push.apply(addrs, _toConsumableArray(gwlt.addrs));
                                store_1.updateStore('addrs', addrs);
                                walletList.push(wallet);
                                store_1.updateStore('walletList', walletList);
                                store_1.updateStore('curWallet', wallet);
                                store_1.updateStore('salt', salt);
                                pull_1.openAndGetRandom();

                            case 16:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "importWalletClick",
        value: function importWalletClick() {
            this.ok && this.ok();
            root_1.popNew('app-view-wallet-walletImport-walletImport');
        }
    }]);

    return WalletCreate;
}(widget_1.Widget);

exports.WalletCreate = WalletCreate;
})