_$define("app/view/base/app", function (require, exports, module){
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
 * 首页
 */
// ================================ 导入
var sendMessage_1 = require("../../../pi/browser/sendMessage");
var forelet_1 = require("../../../pi/widget/forelet");
var widget_1 = require("../../../pi/widget/widget");
var pull_1 = require("../../net/pull");
var store_1 = require("../../store/store");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var App = function (_widget_1$Widget) {
    _inherits(App, _widget_1$Widget);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));

        _this.old = {};
        return _this;
    }

    _createClass(App, [{
        key: "create",
        value: function create() {
            _get(App.prototype.__proto__ || Object.getPrototypeOf(App.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var isActive = 0;
            this.old[isActive] = true;
            this.state = {
                type: 2,
                isActive: isActive,
                old: this.old,
                tabBarList: [{
                    text: '钱包',
                    icon: 'wallet_icon.png',
                    iconActive: 'wallet_icon_active.png',
                    components: 'app-view-wallet-home-home'
                }, {
                    text: '云端',
                    name: 'cloud',
                    icon: 'remote_icon.png',
                    iconActive: 'remote_icon_active.png',
                    components: 'app-view-cloud-home-home'
                }, {
                    text: '',
                    name: 'chat',
                    icon: 'chatIcon.png',
                    iconActive: 'chatIcon.png',
                    components: ''
                    // components: 'app-view-financialManagement-home'
                }, {
                    text: '理财',
                    icon: 'financialManagement_icon.png',
                    iconActive: 'financialManagement_icon_active.png',
                    components: 'app-view-financialManagement-index-index'
                    // components: 'app-view-financialManagement-home'
                },
                // {
                //     text: '交易所',
                //     icon: 'exchange_icon.png',
                //     iconActive: 'exchange_icon_active.png',
                //     components: 'app-view-exchange-home'
                // }, {
                //     text: '应用',
                //     icon: 'application_icon.png',
                //     iconActive: 'application_icon_active.png',
                //     components: 'app-view-application-home'
                // }, 
                {
                    text: '我的',
                    icon: 'mine_icon.png',
                    iconActive: 'mine_icon_active.png',
                    components: 'app-view-mine-home-home'
                }]
            };
        }
    }, {
        key: "tabBarChangeListener",
        value: function tabBarChangeListener(event, index) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.state.isActive === index)) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 2:
                                if (!(this.state.tabBarList[index].name === 'chat')) {
                                    _context.next = 5;
                                    break;
                                }

                                this.openChat();
                                return _context.abrupt("return");

                            case 5:
                                // if (this.state.tabBarList[index].name === 'cloud') {
                                //     const walletList = find('walletList');
                                //     if (!walletList || walletList.length === 0) {
                                //         popNew('app-components-message-message', { itype: 'error', content: '请创建钱包', center: true });
                                //         return;
                                //     }
                                // }
                                this.state.isActive = index;
                                this.old[index] = true;
                                this.paint();

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "tabChangeTo",
        value: function tabChangeTo(e) {
            var index = e.index;
            if (this.state.isActive === index) return;
            this.state.isActive = index;
            this.paint();
        }
        /**
         * 打开聊天界面
         */

    }, {
        key: "sendMessage",
        value: function sendMessage() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var chat;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                // todo 进入聊天界面时，标记聊天任务完成
                                pull_1.doChat();
                                chat = new sendMessage_1.SendChatMessage();

                                chat.init();
                                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                                    chat.prepareChat({
                                        success: function success(result) {
                                            resolve(result);
                                        },
                                        fail: function fail(result) {
                                            reject(result);
                                        }
                                    });
                                }));

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
        /**
         * 设置代理
         */

    }, {
        key: "setProxy",
        value: function setProxy() {
            var chat = new sendMessage_1.SendChatMessage();
            chat.init();
            // 这里需要向服务器通信获取代理地址，且区分国内外的情况
            return new Promise(function (resolve, reject) {
                pull_1.getProxy().then(function (r) {
                    if (r.result !== 1) {
                        reject(r.result);
                        return;
                    }
                    var proxy = JSON.parse(r.proxy);
                    if (proxy.protocol === 'socks5') {
                        chat.setProxy({
                            success: function success(result) {
                                resolve(result);
                            },
                            fail: function fail(result) {
                                reject(result);
                            },
                            proxyIp: proxy.ip, proxyPort: proxy.prot, userName: '', password: ''
                        });
                    } else {
                        reject('no support');
                    }
                });
            });
        }
        /**
         * 执行打开聊天界面
         */

    }, {
        key: "openChat",
        value: function openChat() {
            this.setProxy().then(this.sendMessage);
        }
    }]);

    return App;
}(widget_1.Widget);

exports.App = App;
// ===================================================== 本地
// ===================================================== 立即执行
/**
 * 矿山增加项目进入聊天页面和理财页面
 */
store_1.register('mineItemJump', function (arg) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        if (arg === 'toChat') {
            w.openChat();
        }
        if (arg === 'buyFinancial') {
            w.tabBarChangeListener('', 3);
        }
    }
});
})