_$define("app/view/cloud/home/home", function (require, exports, module){
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
 * 云端首页
 */
// ===================================================== 导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
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
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                ktBalance: 0.00,
                ethBalance: 0.00,
                bonus: 0.00,
                mines: 0,
                isAbleBtn: false,
                hasWallet: true // 是否已经创建钱包
            };
            this.initDate();
            if (this.props.isActive) {
                this.initEvent();
            }
        }
        /**
         * 点击eth跳转充值提现
         */

    }, {
        key: "ethHoldingsClicked",
        value: function ethHoldingsClicked() {
            if (!this.state.hasWallet) {
                root_1.popNew('app-components-linkMessage-linkMessage', {
                    tip: '还没有钱包',
                    linkTxt: '去创建',
                    linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                });
            } else {
                root_1.popNew('app-view-cloud-accountAssests-accountAssests', { coinType: 'ETH', coinBalance: 0 });
            }
        }
        /**
         * 点击云端账户
         */

    }, {
        key: "cloudAccountClicked",
        value: function cloudAccountClicked() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.state.hasWallet) {
                                    root_1.popNew('app-components-linkMessage-linkMessage', {
                                        tip: '还没有钱包',
                                        linkTxt: '去创建',
                                        linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                                    });
                                } else {
                                    root_1.popNew('app-view-cloud-cloudAccount-cloudAccount', { ktBalance: this.state.ktBalance, ethBalance: this.state.ethBalance });
                                }

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 点击发红包
         */

    }, {
        key: "packetsClicked",
        value: function packetsClicked() {
            // TODO
            if (!this.state.hasWallet) {
                root_1.popNew('app-components-linkMessage-linkMessage', {
                    tip: '还没有钱包',
                    linkTxt: '去创建',
                    linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                });
            } else {
                root_1.popNew('app-view-redEnvelope-send-sendRedEnvelope');
            }
        }
        /**
         * 点击兑换领奖
         */

    }, {
        key: "awardsClicked",
        value: function awardsClicked() {
            // TODO
            if (!this.state.hasWallet) {
                root_1.popNew('app-components-linkMessage-linkMessage', {
                    tip: '还没有钱包',
                    linkTxt: '去创建',
                    linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                });
            } else {
                root_1.popNew('app-view-redEnvelope-receive-convertRedEnvelope');
            }
        }
        /**
         * 领分红
         */

    }, {
        key: "bonusClicked",
        value: function bonusClicked() {
            // TODO
            if (!this.state.hasWallet) {
                root_1.popNew('app-components-linkMessage-linkMessage', {
                    tip: '还没有钱包',
                    linkTxt: '去创建',
                    linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                });
            } else {
                root_1.popNew('app-view-mine-dividend-dividend', { totalHold: this.state.ktBalance });
            }
        }
        /**
         * 点击邀请好友
         */

    }, {
        key: "friendsClicked",
        value: function friendsClicked() {
            // TODO
        }
    }, {
        key: "toTradingPlaces",
        value: function toTradingPlaces() {}
        // TODO

        /**
         * 显示挖矿详情
         */

    }, {
        key: "mining",
        value: function mining() {
            if (!this.state.hasWallet) {
                root_1.popNew('app-components-linkMessage-linkMessage', {
                    tip: '还没有钱包',
                    linkTxt: '去创建',
                    linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                });
            } else {
                root_1.popNew('app-view-mine-dividend-mining');
            }
        }
        /**
         * 挖矿
         */

    }, {
        key: "doPadding",
        value: function doPadding() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var r;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return pull_1.getAward();

                            case 2:
                                r = _context2.sent;

                                if (!(r.result !== 1)) {
                                    _context2.next = 6;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'outer', center: true, content: "\u6316\u77FF\u5931\u8D25(" + r.result + ")" });
                                return _context2.abrupt("return");

                            case 6:
                                pull_1.getCloudBalance();
                                root_1.popNew('app-components-message-message', { itype: 'outer', center: true, content: '挖矿成功' });
                                this.state.isAbleBtn = false;
                                pull_1.getMining();
                                this.paint();

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
        /**
         * 邀请红包
         */

    }, {
        key: "inviteRedEnvelopeClick",
        value: function inviteRedEnvelopeClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var inviteCodeInfo, inviteCodeDetailInfo;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (this.state.hasWallet) {
                                    _context3.next = 4;
                                    break;
                                }

                                root_1.popNew('app-components-linkMessage-linkMessage', {
                                    tip: '还没有钱包',
                                    linkTxt: '去创建',
                                    linkCom: 'app-view-wallet-walletCreate-createWalletEnter'
                                });
                                _context3.next = 13;
                                break;

                            case 4:
                                _context3.next = 6;
                                return pull_1.getInviteCode();

                            case 6:
                                inviteCodeInfo = _context3.sent;
                                _context3.next = 9;
                                return pull_1.getInviteCodeDetail();

                            case 9:
                                inviteCodeDetailInfo = _context3.sent;

                                if (!(inviteCodeInfo.result !== 1 || inviteCodeDetailInfo.result !== 1)) {
                                    _context3.next = 12;
                                    break;
                                }

                                return _context3.abrupt("return");

                            case 12:
                                root_1.popNew('app-view-redEnvelope-send-inviteRedEnvelope', {
                                    inviteCode: inviteCodeInfo.cid, inviteCodeDetailInfo: inviteCodeDetailInfo.value
                                });

                            case 13:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
        /**
         * 刷新云端余额
         */

    }, {
        key: "refreshCloudBalance",
        value: function refreshCloudBalance() {
            var cloudBalance = store_1.getBorn('cloudBalance');
            this.state.ktBalance = tools_1.formatBalance(cloudBalance.get(interface_1.CurrencyType.KT));
            this.state.ethBalance = tools_1.formatBalance(cloudBalance.get(interface_1.CurrencyType.ETH));
        }
        /**
         * 获取更新数据
         */

    }, {
        key: "initDate",
        value: function initDate() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var walletList, mining, divid;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                this.refreshCloudBalance();
                                walletList = store_1.find('walletList');

                                if (!walletList || walletList.length === 0) {
                                    this.state.hasWallet = false;
                                }
                                mining = store_1.find('miningTotal');

                                if (mining !== null && mining.thisNum > 0) {
                                    this.state.isAbleBtn = true;
                                    this.state.mines = mining.thisNum;
                                } else {
                                    this.state.isAbleBtn = false;
                                }
                                divid = store_1.find('dividTotal');

                                this.state.bonus = divid ? divid.totalDivid : 0;
                                this.paint();

                            case 8:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
        /**
         * 初始化事件
         */

    }, {
        key: "initEvent",
        value: function initEvent() {
            // 这里发起通信
            pull_1.getMining();
            pull_1.getDividend();
            pull_1.getMineRank(100);
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
// ===================================================== 本地
// ===================================================== 立即执行
store_1.register('cloudBalance', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.refreshCloudBalance();
    }
});
store_1.register('miningTotal', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initDate();
    }
});
store_1.register('dividTotal', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initDate();
    }
});
/**
 * 矿山增加项目进入分享好友页面
 */
store_1.register('mineItemJump', function (arg) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        if (arg === 'shareFriend') {
            w.inviteRedEnvelopeClick();
        }
    }
});
})