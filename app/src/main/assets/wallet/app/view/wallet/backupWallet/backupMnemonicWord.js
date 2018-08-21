_$define("app/view/wallet/backupWallet/backupMnemonicWord", function (require, exports, module){
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
 * Mnemonic backup
 */
var root_1 = require("../../../../pi/ui/root");
var base64_1 = require("../../../../pi/util/base64");
var widget_1 = require("../../../../pi/widget/widget");
var dataCenter_1 = require("../../../store/dataCenter");
var store_1 = require("../../../store/store");
var secretsBase_1 = require("../../../utils/secretsBase");
var tools_1 = require("../../../utils/tools");

var BackupMnemonicWord = function (_widget_1$Widget) {
    _inherits(BackupMnemonicWord, _widget_1$Widget);

    function BackupMnemonicWord() {
        _classCallCheck(this, BackupMnemonicWord);

        return _possibleConstructorReturn(this, (BackupMnemonicWord.__proto__ || Object.getPrototypeOf(BackupMnemonicWord)).call(this));
    }

    _createClass(BackupMnemonicWord, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(BackupMnemonicWord.prototype.__proto__ || Object.getPrototypeOf(BackupMnemonicWord.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            // 初始化数据
        }
    }, {
        key: "jumpOver",
        value: function jumpOver() {
            var _this2 = this;

            root_1.popNew('app-components-message-messagebox', {
                itype: 'confirm',
                title: '提示',
                content: '为了确保您的资产安全，建议不要跳过验证！',
                okButton: '取消',
                cancelButton: '跳过',
                okButtonStyle: 'color:rgba(26,112,221,1);',
                cancelButtonStyle: 'color:#8E96AB'
            }, null, function () {
                _this2.ok && _this2.ok();
            });
        }
    }, {
        key: "next",
        value: function next() {
            this.ok && this.ok();
            root_1.popNew('app-view-wallet-backupWallet-backupMnemonicWordConfirm', { mnemonic: this.props.mnemonic, walletId: this.props.walletId });
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "shareClick",
        value: function shareClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var close, wallet, mnemonicHexstr, shares;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                close = root_1.popNew('pi-components-loading-loading', { text: '处理中...' });
                                wallet = store_1.find('curWallet');
                                _context.next = 4;
                                return tools_1.getMnemonicHexstr(wallet, this.props.passwd);

                            case 4:
                                mnemonicHexstr = _context.sent;
                                shares = secretsBase_1.shareSecret(mnemonicHexstr, dataCenter_1.DataCenter.MAX_SHARE_LEN, dataCenter_1.DataCenter.MIN_SHARE_LEN).map(function (v) {
                                    return base64_1.arrayBufferToBase64(tools_1.hexstrToU8Array(v).buffer);
                                });

                                this.ok && this.ok();
                                root_1.popNew('app-view-wallet-backupWallet-share', { shares: shares });
                                close.callback(close.widget);

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return BackupMnemonicWord;
}(widget_1.Widget);

exports.BackupMnemonicWord = BackupMnemonicWord;
})