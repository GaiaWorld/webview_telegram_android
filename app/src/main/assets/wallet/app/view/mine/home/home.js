_$define("app/view/mine/home/home", function (require, exports, module){
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
var root_1 = require("../../../../pi/ui/root");
var event_1 = require("../../../../pi/widget/event");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var store_1 = require("../../../store/store");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Home = function (_widget_1$Widget) {
    _inherits(Home, _widget_1$Widget);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
    }

    _createClass(Home, [{
        key: "create",
        value: function create() {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            // 获取钱包显示头像
            var walletList = store_1.find('walletList');
            var wallet = store_1.find('curWallet');
            var gwlt = null;
            var avatar = null;
            var walletName = null;
            var mnemonicBackup = null;
            if (wallet) {
                gwlt = globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt);
                avatar = wallet.avatar;
                walletName = gwlt.nickName;
                mnemonicBackup = gwlt.mnemonicBackup;
            }
            this.state = {
                walletList: walletList,
                wallet: wallet,
                avatar: avatar,
                walletName: walletName,
                mnemonicBackup: mnemonicBackup,
                hasNews: true,
                mineList: [{
                    icon: 'icon_mine_wallet.png',
                    text: '管理钱包',
                    components: 'app-view-mine-walletManagement-walletList'
                }, {
                    icon: 'icon_mine_address.png',
                    text: '常用地址',
                    components: 'app-view-mine-addressManage-addressManage'
                },
                // {
                //     icon: 'icon_mine_Language.png',
                //     text: '语言设置',
                //     components: 'app-view-mine-languageAndcoinset-language'
                // }, 
                {
                    icon: 'icon_mine_lock.png',
                    text: '锁屏密码',
                    components: 'app-view-mine-lockScreen-lockScreenSetting'
                },
                // {
                //     icon: 'icon_mine_money.png',
                //     text: '货币设置',
                //     components: 'app-view-mine-languageAndcoinset-coinset'
                // }, 
                {
                    icon: 'icon_mine_problem.png',
                    text: '常见问题',
                    components: 'app-view-mine-FAQ-FAQ'
                }, {
                    icon: 'icon_mine_about.png',
                    text: '关于我们',
                    components: 'app-view-mine-aboutus-aboutus'
                }, {
                    icon: 'icon_mine_phone.png',
                    text: '联系我们',
                    components: 'app-view-mine-contanctUs-contanctUs'
                    // ,
                    //  {
                    //     icon: 'icon_mine_share.png',
                    //     text: '分享下载链接',
                    //     components: 'app-view-financialManagement-fund-share'
                    // }
                }]
            };
        }
        // 处理菜单点击事件

    }, {
        key: "itemClick",
        value: function itemClick(e, index) {
            var _this2 = this;

            if (index <= 2) {
                var walletList = store_1.find('walletList');
                if (!walletList || walletList.length === 0) {
                    root_1.popNew('app-components-linkMessage-linkMessage', {
                        tip: '还没有钱包',
                        linkTxt: '去创建',
                        linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                    });
                    return;
                }
                if (!store_1.find('curWallet')) {
                    root_1.popNew('app-view-wallet-switchWallet-switchWallet');
                    return;
                }
            }
            root_1.popNew(this.state.mineList[index].components, {}, function (home) {
                if (home) {
                    event_1.notify(_this2.tree, 'ev-change-tab', { index: 0 });
                }
            });
        }
        // public goNotice(event: any) {
        //     popNew('app-view-messageList-messageList', { hasNews: this.state.hasNews }, (r) => {
        //         if (r) {
        //             this.state.hasNews = false;
        //             this.paint();
        //         }
        //     });
        // }
        // public share() {
        //     popNew('app-components-share-share', { text: 'This is a test QRCode', shareType: ShareToPlatforms.TYPE_IMG }, (result) => {
        //         alert(result);
        //     }, (result) => {
        //         alert(result);
        //     });
        // }
        // 跳转到钱包管理页面

    }, {
        key: "walletManagementClick",
        value: function walletManagementClick() {
            if (!this.state.wallet || this.state.walletList.length === 0) {
                root_1.popNew('app-components-linkMessage-linkMessage', {
                    tip: '还没有钱包',
                    linkTxt: '去创建',
                    linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                });
                return;
            }
            root_1.popNew('app-view-mine-walletManagement-walletManagement', { walletId: this.state.wallet.walletId });
        }
        // 点击备份钱包

    }, {
        key: "backupClick",
        value: function backupClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var close, wallet, passwd, mnemonic;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(!this.state.wallet || this.state.walletList.length === 0)) {
                                    _context.next = 3;
                                    break;
                                }

                                // popNew('app-components-message-message', { itype: 'error', content: '请创建钱包', center: true });
                                root_1.popNew('app-components-linkMessage-linkMessage', {
                                    tip: '还没有钱包',
                                    linkTxt: '去创建',
                                    linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                                });
                                return _context.abrupt("return");

                            case 3:
                                close = root_1.popNew('pi-components-loading-loading', { text: '导出中...' });
                                wallet = store_1.find('curWallet');
                                passwd = void 0;

                                if (store_1.find('hashMap', wallet.walletId)) {
                                    _context.next = 12;
                                    break;
                                }

                                _context.next = 9;
                                return tools_1.popPswBox();

                            case 9:
                                passwd = _context.sent;

                                if (passwd) {
                                    _context.next = 12;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 12:
                                _context.prev = 12;
                                _context.next = 15;
                                return tools_1.getMnemonic(wallet, passwd);

                            case 15:
                                mnemonic = _context.sent;

                                if (mnemonic) {
                                    root_1.popNew('app-view-wallet-backupWallet-backupMnemonicWord', { mnemonic: mnemonic, passwd: passwd, walletId: wallet.walletId });
                                } else {
                                    root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误,请重新输入', center: true });
                                }
                                _context.next = 23;
                                break;

                            case 19:
                                _context.prev = 19;
                                _context.t0 = _context["catch"](12);

                                console.log(_context.t0);
                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误,请重新输入', center: true });

                            case 23:
                                close.callback(close.widget);

                            case 24:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[12, 19]]);
            }));
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
// ================================ 本地
store_1.register('walletList', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
        w.paint();
    }
});
store_1.register('curWallet', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
        w.paint();
    }
});
})