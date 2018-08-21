_$define("app/view/mine/walletManagement/walletList", function (require, exports, module){
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
 * 钱包列表页面展示所有钱包
 */
// ======================================================导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var store_1 = require("../../../store/store");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var WalletList = function (_widget_1$Widget) {
    _inherits(WalletList, _widget_1$Widget);

    function WalletList() {
        _classCallCheck(this, WalletList);

        return _possibleConstructorReturn(this, (WalletList.__proto__ || Object.getPrototypeOf(WalletList)).call(this));
    }

    _createClass(WalletList, [{
        key: "create",
        value: function create() {
            _get(WalletList.prototype.__proto__ || Object.getPrototypeOf(WalletList.prototype), "create", this).call(this);
            store_1.register('walletList', registerWalletsFun);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            // 获取钱包显示头像
            var walletList = store_1.find('walletList');
            console.log('-------walletList---------');
            console.log(walletList);
            var fromJSON = globalWallet_1.GlobalWallet.fromJSON;
            var curWallet = store_1.find('curWallet');
            this.state = {
                walletList: walletList,
                fromJSON: fromJSON,
                curWalletId: curWallet && curWallet.walletId
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "listItemClicked",
        value: function listItemClicked(walletId) {
            root_1.popNew('app-view-mine-walletManagement-walletManagement', { walletId: walletId });
        }
    }, {
        key: "backupClicked",
        value: function backupClicked(walletId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var close, walletList, wallet, passwd, mnemonic;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                close = root_1.popNew('pi-components-loading-loading', { text: '导出中...' });
                                walletList = store_1.find('walletList');
                                wallet = tools_1.getWalletByWalletId(walletList, walletId);
                                passwd = void 0;

                                if (store_1.find('hashMap', wallet.walletId)) {
                                    _context.next = 10;
                                    break;
                                }

                                _context.next = 7;
                                return tools_1.popPswBox();

                            case 7:
                                passwd = _context.sent;

                                if (passwd) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 10:
                                _context.prev = 10;
                                _context.next = 13;
                                return tools_1.getMnemonic(wallet, passwd);

                            case 13:
                                mnemonic = _context.sent;

                                if (mnemonic) {
                                    root_1.popNew('app-view-wallet-backupWallet-backupMnemonicWord', { mnemonic: mnemonic, passwd: passwd, walletId: walletId });
                                } else {
                                    root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误,请重新输入', center: true });
                                }
                                _context.next = 21;
                                break;

                            case 17:
                                _context.prev = 17;
                                _context.t0 = _context["catch"](10);

                                console.log(_context.t0);
                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误,请重新输入', center: true });

                            case 21:
                                close.callback(close.widget);

                            case 22:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[10, 17]]);
            }));
        }
    }]);

    return WalletList;
}(widget_1.Widget);

exports.WalletList = WalletList;
// ===========================================================本地
var registerWalletsFun = function registerWalletsFun() {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
        w.paint();
    }
};
})