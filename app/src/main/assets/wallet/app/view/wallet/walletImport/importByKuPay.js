_$define("app/view/wallet/walletImport/importByKuPay", function (require, exports, module){
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
 * import wallet
 */
var root_1 = require("../../../../pi/ui/root");
var base64_1 = require("../../../../pi/util/base64");
var widget_1 = require("../../../../pi/widget/widget");
var genmnemonic_1 = require("../../../core/genmnemonic");
// tslint:disable-next-line:max-line-length
var account_1 = require("../../../utils/account");
var basicOperation_1 = require("../../../utils/basicOperation");
var constants_1 = require("../../../utils/constants");
var secretsBase_1 = require("../../../utils/secretsBase");
var tools_1 = require("../../../utils/tools");

var WalletImport = function (_widget_1$Widget) {
    _inherits(WalletImport, _widget_1$Widget);

    function WalletImport() {
        _classCallCheck(this, WalletImport);

        return _possibleConstructorReturn(this, (WalletImport.__proto__ || Object.getPrototypeOf(WalletImport)).call(this));
    }

    _createClass(WalletImport, [{
        key: "create",
        value: function create() {
            _get(WalletImport.prototype.__proto__ || Object.getPrototypeOf(WalletImport.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                walletPart1: '',
                walletPart2: '',
                walletPsw: '',
                walletPswConfirm: '',
                pswSame: true,
                walletPswTips: '',
                userProtocolReaded: false,
                curWalletPswStrength: account_1.getWalletPswStrength(),
                showPswTips: false
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "walletPart1Change",
        value: function walletPart1Change(e) {
            this.state.walletPart1 = e.value;
        }
    }, {
        key: "walletPart2Change",
        value: function walletPart2Change(e) {
            this.state.walletPart2 = e.value;
        }
    }, {
        key: "walletPswChange",
        value: function walletPswChange(e) {
            this.state.walletPsw = e.value;
            this.state.showPswTips = this.state.walletPsw.length > 0;
            this.state.curWalletPswStrength = account_1.getWalletPswStrength(this.state.walletPsw);
            if (!account_1.pswEqualed(this.state.walletPsw, this.state.walletPswConfirm)) {
                this.state.pswSame = false;
            } else {
                this.state.pswSame = true;
            }
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
        key: "importWalletClick",
        value: function importWalletClick() {
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
                                if (account_1.walletPswAvailable(this.state.walletPsw)) {
                                    _context.next = 5;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码格式不正确,请重新输入', center: true });
                                return _context.abrupt("return");

                            case 5:
                                if (account_1.pswEqualed(this.state.walletPsw, this.state.walletPswConfirm)) {
                                    _context.next = 7;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 7:
                                if (account_1.walletCountAvailable()) {
                                    _context.next = 11;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'error', content: '钱包数量已达上限', center: true });
                                this.ok && this.ok();
                                return _context.abrupt("return");

                            case 11:
                                close = root_1.popNew('pi-components-loading-loading', { text: '导入钱包中...' });
                                _context.prev = 12;
                                _context.next = 15;
                                return this.importWallet();

                            case 15:
                                _context.next = 23;
                                break;

                            case 17:
                                _context.prev = 17;
                                _context.t0 = _context["catch"](12);

                                close.callback(close.widget);
                                console.log(_context.t0);
                                root_1.popNew('app-components-message-message', { itype: 'error', content: '导入失败', center: true });
                                return _context.abrupt("return");

                            case 23:
                                this.ok && this.ok();
                                root_1.popNew('app-view-wallet-walletImport-importComplete');
                                close.callback(close.widget);

                            case 26:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[12, 17]]);
            }));
        }
    }, {
        key: "importWallet",
        value: function importWallet() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var shares, comb;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                // todo 
                                shares = [this.state.walletPart1, this.state.walletPart2].map(function (v) {
                                    return tools_1.u8ArrayToHexstr(new Uint8Array(base64_1.base64ToArrayBuffer(v)));
                                });
                                comb = secretsBase_1.restoreSecret(shares);
                                _context2.next = 4;
                                return basicOperation_1.importWalletByMnemonic(genmnemonic_1.toMnemonic(constants_1.lang, tools_1.hexstrToU8Array(comb)), this.state.walletPsw, this.state.walletPswTips);

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }]);

    return WalletImport;
}(widget_1.Widget);

exports.WalletImport = WalletImport;
})