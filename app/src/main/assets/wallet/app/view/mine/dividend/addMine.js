_$define("app/view/mine/dividend/addMine", function (require, exports, module){
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
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var store_1 = require("../../../store/store");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Dividend = function (_widget_1$Widget) {
    _inherits(Dividend, _widget_1$Widget);

    function Dividend() {
        _classCallCheck(this, Dividend);

        return _possibleConstructorReturn(this, (Dividend.__proto__ || Object.getPrototypeOf(Dividend)).call(this));
    }

    _createClass(Dividend, [{
        key: "create",
        value: function create() {
            _get(Dividend.prototype.__proto__ || Object.getPrototypeOf(Dividend.prototype), "create", this).call(this);
            this.state = {};
            this.initData();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 挖矿项目跳转
         * @param ind 挖矿项目参数
         */

    }, {
        key: "goDetail",
        value: function goDetail(ind) {
            if (!this.state.data[ind].isComplete) {
                var itemJump = this.state.data[ind].itemJump;
                pull_1.getMineItemJump(itemJump);
                if (itemJump === 'buyFinancial') {
                    this.backPrePage();
                }
            }
        }
        /**
         * 获取更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var detail, AllDetail;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                detail = store_1.find('addMine');
                                AllDetail = [{
                                    isComplete: detail[0].isComplete,
                                    itemImg: '../../../res/image/icon_bonus_new.png',
                                    itemName: '创建钱包',
                                    itemNum: detail[0].itemNum,
                                    itemDetail: "<div>1\u3001\u521B\u5EFA\u94B1\u5305\u9001300KT\uFF0C\u6BCF\u4E2AAPP\u6700\u591A\u521B\u5EFA10\u4E2A\u94B1\u5305\u3002</div>",
                                    itemJump: 'walletCreate'
                                }, {
                                    isComplete: detail[1].isComplete,
                                    itemImg: '../../../res/image/icon_bonus_phone.png',
                                    itemName: '验证手机号',
                                    itemNum: detail[1].itemNum,
                                    itemDetail: "<div>1\u3001\u9A8C\u8BC1\u624B\u673A\u53F7\uFF0C\u90012500KT\u3002</div>\n                        <div>2\u3001\u4E00\u4E2A\u94B1\u5305\u53EA\u80FD\u9A8C\u8BC1\u4E00\u4E2A\u624B\u673A\u53F7\u3002</div>",
                                    itemJump: 'bindPhone'
                                }, {
                                    isComplete: detail[2].isComplete,
                                    itemImg: '../../../res/image/icon_bonus_saves.png',
                                    itemName: '存币送ETH',
                                    itemNum: detail[2].itemNum,
                                    itemDetail: "<div>1\u3001\u5B58\u5E01\u5230\u81EA\u5DF1\u7684\u94B1\u5305\u5730\u5740\u4E0A\uFF0C\u5B58\u4E00\u4E2AETH\u90012000KT\u3002</div>\n                        <div>2\u3001\u9996\u6B21\u5B58\u5E01\u989D\u5916\u8D60\u90011000KT\u3002</div>\n                        <div>3\u30011\u4E2ABTC\u7B49\u4E8E10\u4E2AETH\u3002</div>",
                                    itemJump: 'storeCoin'
                                }, {
                                    isComplete: detail[3].isComplete,
                                    itemImg: '../../../res/image/icon_bonus_share.png',
                                    itemName: '与好友分享',
                                    itemNum: detail[3].itemNum,
                                    itemDetail: "<div>1\u3001\u7CFB\u7EDF\u8D60\u9001\u9080\u8BF7\u7EA2\u5305\u9650\u91CF1\u4E2A\uFF0C\u5185\u542B0.5ETH\uFF0C\u5206\u6210\u5355\u4E2A0.015ETH\u7B49\u989D\u7EA2\u5305\u3002</div>\n                        <div>2\u3001\u6BCF\u6210\u529F\u9080\u8BF7\u4E00\u4EBA\u83B7\u5F97500KT\u548C0.01ETH\u3002</div>\n                        <div>3\u3001\u6210\u529F\u9080\u8BF7\u7684\u6807\u51C6\u662F\u5BF9\u65B9\u66FE\u7ECF\u8FBE\u52301000KT</div>",
                                    itemJump: 'shareFriend'
                                }, {
                                    isComplete: detail[4].isComplete,
                                    itemImg: '../../../res/image/icon_bonus_buy.png',
                                    itemName: '购买理财',
                                    itemNum: detail[4].itemNum,
                                    itemDetail: "<div>1\u3001\u6BCF\u8D2D\u4E701ETH\u7B49\u4EF7\u7684\u7406\u8D22\u4EA7\u54C1\u6BCF\u5929\u9001100KT\u3002</div>\n                        <div>2\u3001\u8D2D\u4E70\u5F53\u65E5\u989D\u5916\u8D60\u9001500KT\u3002</div>\n                        <div>3\u3001\u9996\u6B21\u8D2D\u4E70\u989D\u5916\u8D60\u90011500KT\u3002</div>\n                        <div>4\u3001\u8D2D\u4E70\u7406\u8D22\u4E0D\u4F1A\u964D\u4F4E\u77FF\u5C71</div>",
                                    itemJump: 'buyFinancial'
                                }, {
                                    isComplete: detail[5].isComplete,
                                    itemImg: '../../../res/image/icon_bonus_chat.png',
                                    itemName: '聊天',
                                    itemNum: detail[5].itemNum,
                                    itemDetail: "<div>1\u3001\u9996\u6B21\u53C2\u4E0E\u804A\u5929\u8D60\u9001700\u3002</div>",
                                    itemJump: 'toChat'
                                }];

                                this.state = {
                                    data: AllDetail
                                };
                                this.paint();

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return Dividend;
}(widget_1.Widget);

exports.Dividend = Dividend;
store_1.register('addMine', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
})