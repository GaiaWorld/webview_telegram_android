_$define("app/view/wallet/walletCreate/createByImg/walletCreate", function (require, exports, module){
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
var root_1 = require("../../../../../pi/ui/root");
var widget_1 = require("../../../../../pi/widget/widget");
var genmnemonic_1 = require("../../../../core/genmnemonic");
var globalWallet_1 = require("../../../../core/globalWallet");
var pull_1 = require("../../../../net/pull");
var store_1 = require("../../../../store/store");
var account_1 = require("../../../../utils/account");
var constants_1 = require("../../../../utils/constants");
var tools_1 = require("../../../../utils/tools");

var WalletCreate = function (_widget_1$Widget) {
    _inherits(WalletCreate, _widget_1$Widget);

    function WalletCreate() {
        _classCallCheck(this, WalletCreate);

        return _possibleConstructorReturn(this, (WalletCreate.__proto__ || Object.getPrototypeOf(WalletCreate)).call(this));
    }

    _createClass(WalletCreate, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(WalletCreate.prototype.__proto__ || Object.getPrototypeOf(WalletCreate.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                walletName: '',
                walletPsw: '',
                walletPswConfirm: '',
                walletPswTips: '',
                userProtocolReaded: false,
                curWalletPswStrength: account_1.getWalletPswStrength(),
                showPswTips: false
            };
            var wallets = store_1.find('walletList');
            var len = wallets ? wallets.walletList.length : 0;
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
                var close, hash;
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

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码格式不正确,请重新输入', center: true });
                                return _context.abrupt("return");

                            case 8:
                                if (account_1.pswEqualed(this.state.walletPsw, this.state.walletPswConfirm)) {
                                    _context.next = 11;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码不一致，请重新输入', center: true });
                                return _context.abrupt("return");

                            case 11:
                                if (account_1.walletCountAvailable()) {
                                    _context.next = 15;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '钱包数量已达上限', center: true });
                                this.ok && this.ok();
                                return _context.abrupt("return");

                            case 15:
                                close = root_1.popNew('pi-components-loading-loading', { text: '创建中...' });
                                _context.prev = 16;
                                _context.next = 19;
                                return imgToHash(this.props.choosedImg, this.props.inputWords);

                            case 19:
                                hash = _context.sent;
                                _context.next = 22;
                                return this.createWallet(hash);

                            case 22:
                                root_1.popNew('app-view-wallet-walletCreate-createComplete');
                                this.ok && this.ok();
                                _context.next = 29;
                                break;

                            case 26:
                                _context.prev = 26;
                                _context.t0 = _context["catch"](16);

                                if (!_context.t0) {
                                    this.ok && this.ok();
                                }

                            case 29:
                                close.callback(close.widget);

                            case 30:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[16, 26]]);
            }));
        }
    }, {
        key: "createWallet",
        value: function createWallet(hash) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _wallet$currencyRecor, _addrs;

                var walletList, addrs, salt, gwlt, len, i, _ret, wallet;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                walletList = store_1.find('walletList');
                                addrs = store_1.find('addrs');
                                salt = store_1.find('salt');
                                _context2.next = 5;
                                return globalWallet_1.GlobalWallet.generate(this.state.walletPsw, this.state.walletName, salt, hash);

                            case 5:
                                gwlt = _context2.sent;

                                // 判断钱包是否存在
                                len = walletList.length;

                                if (!walletList.some(function (v) {
                                    return v.walletId === gwlt.glwtId;
                                })) {
                                    _context2.next = 20;
                                    break;
                                }

                                _context2.next = 10;
                                return tools_1.openBasePage('app-components-message-messagebox', { itype: 'confirm', title: '提示', content: '该钱包已存在，是否使用新密码' });

                            case 10:
                                i = len - 1;

                            case 11:
                                if (!(i >= 0)) {
                                    _context2.next = 19;
                                    break;
                                }

                                if (!(gwlt.glwtId === walletList[i].walletId)) {
                                    _context2.next = 16;
                                    break;
                                }

                                _ret = function () {
                                    var wallet0 = walletList.splice(i, 1)[0]; // 删除已存在钱包
                                    var retAddrs = tools_1.getAddrsAll(wallet0);
                                    addrs = addrs.filter(function (addr) {
                                        return retAddrs.indexOf(addr.addr) === -1;
                                    });
                                    return "break";
                                }();

                                if (!(_ret === "break")) {
                                    _context2.next = 16;
                                    break;
                                }

                                return _context2.abrupt("break", 19);

                            case 16:
                                i--;
                                _context2.next = 11;
                                break;

                            case 19:
                                len--;

                            case 20:
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
                                (_addrs = addrs).push.apply(_addrs, _toConsumableArray(gwlt.addrs));
                                store_1.updateStore('addrs', addrs);
                                walletList.push(wallet);
                                store_1.updateStore('walletList', walletList);
                                store_1.updateStore('curWallet', wallet);
                                store_1.updateStore('salt', salt);
                                pull_1.openAndGetRandom();

                            case 30:
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
var imgToHash = function imgToHash(choosedImg, inputWords) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var sha3Hash, hash, sha3Hash1, len, sha3Hash2;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        sha3Hash = genmnemonic_1.sha3(choosedImg + inputWords, false);
                        _context3.next = 3;
                        return tools_1.calcHashValuePromise(sha3Hash, store_1.find('salt'), null);

                    case 3:
                        hash = _context3.sent;
                        sha3Hash1 = genmnemonic_1.sha3(hash, true);
                        len = sha3Hash1.length;
                        // 生成助记词的随机数仅需要128位即可，这里对256位随机数进行折半取异或的处理

                        sha3Hash2 = tools_1.getXOR(sha3Hash1.slice(0, len / 2), sha3Hash1.slice(len / 2));
                        // console.log(choosedImg, inputWords, sha3Hash, hash, sha3Hash1, sha3Hash2);

                        return _context3.abrupt("return", genmnemonic_1.generateByHash(sha3Hash2));

                    case 8:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
};
})