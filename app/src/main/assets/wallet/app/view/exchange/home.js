_$define("app/view/exchange/home", function (require, exports, module){
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
 * 交易所
 */
var con_mgr_1 = require("../../../pi/net/ui/con_mgr");
var root_1 = require("../../../pi/ui/root");
var widget_1 = require("../../../pi/widget/widget");
var pull_1 = require("../../net/pull");

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
            var currency1 = 'KT';
            var currency2 = 'KT';
            this.state = {
                currency1: currency1,
                currency2: currency2,
                isSelect: 'buy',
                price: 0,
                priceConversion: '≈0 CNY',
                count: 0,
                all: 0,
                average: '0',
                averagePrice: '≈0 CNY',
                buyList: [{ price: 919.23, count: 0.010, schedule: 0.2 }, { price: 919.16, count: 0.550, schedule: 0.8 }, { price: 919.23, count: 0.010, schedule: 0.5 }, { price: 919.16, count: 0.550, schedule: 0.6 }, { price: 919.23, count: 0.010, schedule: 0.1 }],
                saleList: [{ price: 919.23, count: 0.010, schedule: 0.2 }, { price: 919.16, count: 0.550, schedule: 0.8 }, { price: 919.23, count: 0.010, schedule: 0.5 }, { price: 919.16, count: 0.550, schedule: 0.6 }, { price: 919.23, count: 0.010, schedule: 0.1 }],
                transferList: [{ time: '2018/7/30 7:05', price: 0.00000056, count: 25 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 2.4909 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 2.18524 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 19 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 1200 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 19 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 1200 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 1200 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 19 }, { time: '2018/7/30 7:05', price: 0.00000056, count: 1200 }],
                list: ['买入', '卖出', '当前委托', '历史委托'],
                activeNum: 0,
                usePercent: 0,
                countHolder: "\u6570\u91CF(" + currency1 + ")",
                allCountHolder: "\u603B\u989D(" + currency2 + ")",
                entrustList: [{
                    id: 1, type: 1, currency1: 'KT', currency2: 'ETH', time: '07-24 12:55:24', price: 0.0012,
                    currencyCount1: 0.00123052, currencyCount2: 0.00002354
                }, {
                    id: 1, type: 1, currency1: 'KT', currency2: 'ETH', time: '07-24 12:55:24', price: 0.0012,
                    currencyCount1: 0.00123052, currencyCount2: 0.00002354
                }, {
                    id: 1, type: 1, currency1: 'KT', currency2: 'ETH', time: '07-24 12:55:24', price: 0.0012,
                    currencyCount1: 0.00123052, currencyCount2: 0.00002354
                }, {
                    id: 1, type: 1, currency1: 'KT', currency2: 'ETH', time: '07-24 12:55:24', price: 0.0012,
                    currencyCount1: 0.00123052, currencyCount2: 0.00002354
                }, {
                    id: 1, type: 1, currency1: 'KT', currency2: 'ETH', time: '07-24 12:55:24', price: 0.0012,
                    currencyCount1: 0.00123052, currencyCount2: 0.00002354
                }]
            };
        }
    }, {
        key: "clkBuy",
        value: function clkBuy(e, index) {
            this.state.isSelect = 'buy';
            this.paint();
        }
    }, {
        key: "clkSale",
        value: function clkSale(event) {
            this.state.isSelect = 'sale';
            this.paint();
            // popNew("app-view-messageList-messageList");
        }
        /**
         * 显示K线图
         */

    }, {
        key: "showKLine",
        value: function showKLine() {
            root_1.popNew('app-view-exchange-kline');
        }
        /**
         * 更换货币信息
         */

    }, {
        key: "changeCurrency",
        value: function changeCurrency() {
            var _this2 = this;

            root_1.popNew('app-view-exchange-choose', {}, function (r) {
                if (r) {
                    _this2.state.currency1 = r.currency1;
                    _this2.state.currency2 = r.currency2;
                    _this2.paint();
                }
            });
        }
        /**
         * 滑动改变
         */

    }, {
        key: "onSlicerChange",
        value: function onSlicerChange(e) {
            this.state.usePercent = e.value;
            this.paint();
        }
        /**
         * 目录切换
         */

    }, {
        key: "onMenuChange",
        value: function onMenuChange(e) {
            console.log(e.value);
            testNet();
            this.state.activeNum = e.value;
            this.paint();
        }
    }]);

    return Home;
}(widget_1.Widget);

exports.Home = Home;
var testNet = function testNet() {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        // setUrl(`ws://${location.hostname}:2081`);
                        con_mgr_1.setUrl("ws://" + pull_1.conIp + ":2081");
                        con_mgr_1.open(function () {
                            // todo 需要在登录后才能发起正式的通信
                            // query_all_order：查询所有订单数据
                            var msgQueryAllOrder = {
                                type: 'query_all_order',
                                param: {
                                    type: 100,
                                    page: 0,
                                    count: 20
                                }
                            };
                            // query_user_order:查询我的订单数据
                            var msgQueryUserOrder = {
                                type: 'query_user_order',
                                param: {
                                    type: 100,
                                    page: 0,
                                    count: 20,
                                    status: 0
                                }
                            };
                            // pending_order：发起订单
                            var msgPendingOrder = {
                                type: 'pending_order',
                                param: {
                                    type: 100,
                                    amount: Math.pow(10, 9) * 1000,
                                    price: 1
                                }
                            };
                            // undo_order：撤销订单
                            var msgUndoOrder = {
                                type: 'undo_order',
                                param: {
                                    type: 100,
                                    sid: 1
                                }
                            };
                            // 发红包
                            var sendRedEnvelope = {
                                type: 'emit_red_bag',
                                param: {
                                    type: 0,
                                    priceType: 100,
                                    totalPrice: 1000,
                                    count: 10,
                                    desc: '大吉大利 今晚吃鸡'
                                }
                            };
                            var msg = sendRedEnvelope;
                            con_mgr_1.request(msg, function (resp) {
                                if (resp.type) {
                                    console.log("\u9519\u8BEF\u4FE1\u606F\u4E3A" + resp.type);
                                } else if (resp.result !== undefined) {
                                    console.log(resp.result);
                                }
                            });
                        }, function (result) {
                            console.log("open\u9519\u8BEF\u4FE1\u606F\u4E3A" + result);
                        });

                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
})