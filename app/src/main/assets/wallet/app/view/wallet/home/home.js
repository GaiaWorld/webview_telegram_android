_$define("app/view/wallet/home/home", function (require, exports, module){
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
 * wallet home page
 */
// ============================== 导入
var root_1 = require("../../../../pi/ui/root");
var util_1 = require("../../../../pi/util/util");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var pull_1 = require("../../../net/pull");
var dataCenter_1 = require("../../../store/dataCenter");
var store_1 = require("../../../store/store");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');
var OFFSET_COMPALET_VALUE = 430; // 规定滑动距离为该值时两个头部的变化完成
// const HEAD_HEIGHT:number = 580;// 首页头部高度，滑动时隐藏该头部
// const HIDEHEAD_HEIGHT:number = 140;// 隐藏头部的高度
// const EDGE_VALUE:number = 50;// 边缘值，小于相差小于此值认为滑动变化完成

var Home = function (_widget_1$Widget) {
    _inherits(Home, _widget_1$Widget);

    function Home() {
        _classCallCheck(this, Home);

        // private pageHeight:number = null;
        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.offset = 0;
        _this.startY = null;
        _this.distance = 0;
        _this.maxVal = 0;
        _this.gaHeader = null;
        _this.hideHead = null;
        _this.currencyHeight = null;
        _this.registerWalletsFun = function () {
            // 创建完钱包之后修改floatBoxTip提示信息
            var wallets = store_1.find('walletList');
            var wallet = store_1.find('curWallet');
            if (wallet) {
                _this.state.floatBoxTip = '为了您的资产安全，请及时备份助记词';
            }
            _this.state.gwlt = wallet ? globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt) : null;
            _this.state.otherWallets = wallets && wallets.length > 0;
            _this.state.wallet = wallet;
            _this.state.currencyList = parseCurrencyList(wallet);
            _this.registerAddrsFun();
            _this.paint();
        };
        return _this;
    }

    _createClass(Home, [{
        key: "create",
        value: function create() {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "attach",
        value: function attach() {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "attach", this).call(this);
            if (!this.hideHead) {
                this.hideHead = document.getElementById('hideHead');
            }
            if (!this.gaHeader) {
                this.gaHeader = document.getElementById('gaHeader');
            }
            if (!this.currencyHeight) {
                this.currencyHeight = document.getElementById('currencyList').offsetHeight;
            }
            var pageHeight = root_1.getHeight() - 120;
            var contentHeight = this.currencyHeight + 150;
            var overflowHeight = contentHeight - pageHeight < 0 ? 0 : contentHeight - pageHeight;
            this.maxVal = OFFSET_COMPALET_VALUE + overflowHeight;
        }
    }, {
        key: "init",
        value: function init() {
            var wallet = store_1.find('curWallet');
            var gwlt = wallet ? globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt) : null;
            var otherWallets = !!wallet;
            this.state = {
                wallet: wallet,
                gwlt: gwlt,
                otherWallets: otherWallets,
                totalAssets: 0.00,
                currencyList: parseCurrencyList(wallet),
                floatBoxTip: '',
                hiddenAssets: false
            };
            // 如果没有创建钱包提示创建钱包
            if (!store_1.find('walletList') || store_1.find('walletList').length === 0) {
                this.state.floatBoxTip = '您还没有钱包，请先创建钱包';
            } else {
                this.state.floatBoxTip = '为了您的资产安全，请及时备份助记词';
            }
            this.registerAddrsFun();
            // 登录云端账号
            pull_1.openAndGetRandom();
        }
    }, {
        key: "clickCurrencyItemListener",
        value: function clickCurrencyItemListener(e, index) {
            var wallets = store_1.find('walletList');
            if (!wallets || wallets.length === 0) {
                // this.createWalletClick();
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
            var currency = this.state.currencyList[index];
            root_1.popNew('app-view-wallet-transaction-currency_details', {
                currencyName: currency.currencyName, currencyBalance: currency.balance + " " + currency.currencyName,
                currencyBalanceConversion: currency.balanceValue
            });
        }
    }, {
        key: "clickAddCurrencyListener",
        value: function clickAddCurrencyListener() {
            root_1.popNew('app-view-wallet-assets-add_asset');
        }
    }, {
        key: "createWalletClick",
        value: function createWalletClick() {
            if (this.state.otherWallets) {
                root_1.popNew('app-view-wallet-switchWallet-switchWallet');
                return;
            }
            root_1.popNew('app-view-wallet-walletCreate-createWalletEnter');
        }
    }, {
        key: "switchWalletClick",
        value: function switchWalletClick() {
            root_1.popNew('app-view-wallet-switchWallet-switchWallet');
        }
        // 点击备份钱包

    }, {
        key: "backupWalletClick",
        value: function backupWalletClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var wallet, walletId, passwd, close, mnemonic;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wallet = store_1.find('curWallet');

                                if (wallet) {
                                    _context.next = 4;
                                    break;
                                }

                                this.createWalletClick();
                                return _context.abrupt("return");

                            case 4:
                                walletId = wallet.walletId;
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
                                close = root_1.popNew('pi-components-loading-loading', { text: '导出中...' });
                                _context.prev = 13;
                                _context.next = 16;
                                return tools_1.getMnemonic(wallet, passwd);

                            case 16:
                                mnemonic = _context.sent;

                                if (mnemonic) {
                                    root_1.popNew('app-view-wallet-backupWallet-backupMnemonicWord', { mnemonic: mnemonic, passwd: passwd, walletId: walletId });
                                } else {
                                    root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误,请重新输入', center: true });
                                }
                                _context.next = 24;
                                break;

                            case 20:
                                _context.prev = 20;
                                _context.t0 = _context["catch"](13);

                                console.log(_context.t0);
                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误,请重新输入', center: true });

                            case 24:
                                close.callback(close.widget);

                            case 25:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[13, 20]]);
            }));
        }
    }, {
        key: "hiddenAssetsClick",
        value: function hiddenAssetsClick() {
            this.state.hiddenAssets = !this.state.hiddenAssets;
            this.paint();
        }
    }, {
        key: "pageScroll",
        value: function pageScroll(e) {
            var offset = this.handleScroll(e.x, e.y, this.maxVal, e.subType === 'start', e.subType === 'over');
            var ratio = offset / OFFSET_COMPALET_VALUE;
            document.getElementById('page').style.transform = "translateY(" + -offset + "px)";
            if (offset >= OFFSET_COMPALET_VALUE) {
                this.hideHead.style.display = 'block';
            } else {
                this.hideHead.style.display = 'none';
            }
        }
        /**
         * 余额更新
         */

    }, {
        key: "registerAddrsFun",
        value: function registerAddrsFun() {
            var _this2 = this;

            console.log('余额更新');
            var wallet = store_1.find('curWallet');
            if (!wallet) return;
            wallet.currencyRecords.forEach(function (item) {
                var balance = tools_1.fetchBalanceOfCurrency(item.addrs, item.currencyName);
                setCurrencyListBalance(_this2.state.currencyList, balance, item.currencyName);
            });
            this.state.totalAssets = tools_1.formatBalanceValue(tools_1.fetchTotalAssets());
            this.paint();
        }
        // 处理滑动，返回滑动距离，需要依赖本类中的几个成员变量

    }, {
        key: "handleScroll",
        value: function handleScroll(x, y, maxVal, isStart, isEnd) {
            if (isStart) {
                this.startY = y;
            }
            this.distance = this.startY - y;
            var offset = this.offset + this.distance;
            if (offset < 0) {
                offset = 0;
            }
            if (offset > maxVal) {
                offset = maxVal;
            }
            if (isEnd) {
                this.offset = offset;
                this.distance = 0;
            }
            return offset;
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
// ============================== 本地
/**
 * 解析钱包货币
 *
 * @param wallet 钱包
 */
var parseCurrencyList = function parseCurrencyList(wallet) {
    var list = [];
    // todo 测试代码  不处理没有的情况
    // if (!wallet.showCurrencys) return list;
    var showCurrencys = wallet && wallet.showCurrencys || constants_1.defalutShowCurrencys;
    // todo  这里需要正确的处理钱包货币
    store_1.find('currencyList').forEach(function (v) {
        if (showCurrencys.indexOf(v.name) < 0) return;
        list.push({
            currencyName: v.name,
            currencyFullName: v.description,
            balance: 0,
            balanceValue: 0.00
        });
    });
    return list;
};
var setCurrencyListBalance = function setCurrencyListBalance(currencyList, balance, currencyName) {
    return currencyList.map(function (item) {
        if (item.currencyName === currencyName) {
            var rate = dataCenter_1.dataCenter.getExchangeRate(currencyName);
            item.balance = tools_1.formatBalance(balance);
            item.balanceValue = tools_1.formatBalanceValue(+(balance * rate.CNY));
        }
        return item;
    });
};
store_1.register('curWallet', function (resp) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.registerWalletsFun(resp);
    }
});
store_1.register('addrs', function (resp) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.registerAddrsFun();
    }
});
store_1.register('curWallet', function (curWallet) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        var wallet = curWallet;
        var gwlt = wallet ? util_1.isString(wallet.gwlt) ? globalWallet_1.GlobalWallet.fromJSON : wallet.gwlt : null;
        w.state.wallet = wallet;
        w.state.gwlt = gwlt;
        w.paint();
    }
});
/**
 * 矿山增加项目进入创建钱包页面
 */
store_1.register('mineItemJump', function (arg) {
    if (arg === 'walletCreate') {
        root_1.popNew('app-view-wallet-walletCreate-createWalletEnter');
    }
});
})