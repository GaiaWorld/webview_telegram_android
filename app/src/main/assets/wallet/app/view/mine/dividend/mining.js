_$define("app/view/mine/dividend/mining", function (require, exports, module){
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
 * 挖矿总信息页面
 *
 */
// ============================== 导入
var root_1 = require("../../../../pi/ui/root");
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
            this.initEvent();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        /**
         * 查看挖矿记录
         */

    }, {
        key: "goHistory",
        value: function goHistory() {
            root_1.popNew('app-view-mine-dividend-dividendHistory', 2);
        }
        /**
         * 查看总排名情况
         */

    }, {
        key: "goRank",
        value: function goRank() {
            root_1.popNew('app-view-mine-dividend-dividendRank');
        }
        /**
         * 获取更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            var data = store_1.find('miningTotal');
            var rank = store_1.find('mineRank');
            this.state = {
                totalNum: data.totalNum,
                thisNum: data.thisNum,
                holdNum: data.holdNum,
                mineRank: rank.myRank,
                doMining: false,
                firstClick: true,
                isAbleBtn: false,
                miningNum: " <div class=\"miningNum\" style=\"animation:{{it1.doMining?'move 0.5s':''}}\">\n            <span>+{{it1.thisNum}}</span>\n        </div>"
            };
            this.paint();
        }
        /**
         * 去增加储备矿
         */

    }, {
        key: "goAddMine",
        value: function goAddMine() {
            root_1.popNew('app-view-mine-dividend-addMine');
        }
        /**
         * 点击挖矿
         */

    }, {
        key: "doMining",
        value: function doMining() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var child;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.state.thisNum > 0 && this.state.firstClick)) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 3;
                                return pull_1.getAward();

                            case 3:
                                this.state.firstClick = false;
                                setTimeout(function () {
                                    pull_1.getMining();
                                    _this2.paint();
                                }, 500);
                                _context.next = 13;
                                break;

                            case 7:
                                // 添加一个新的数字动画效果并移除旧的
                                child = document.createElement('div');

                                child.setAttribute('class', 'miningNum');
                                child.setAttribute('style', 'animation:move 0.5s');
                                // tslint:disable-next-line:no-inner-html
                                child.innerHTML = '<span>+0</span>';
                                document.getElementsByClassName('miningNum').item(0).remove();
                                document.getElementById('miningBtn').appendChild(child);

                            case 13:
                                this.state.doMining = true;
                                this.state.isAbleBtn = true;
                                this.paint();
                                setTimeout(function () {
                                    _this2.state.isAbleBtn = false;
                                    _this2.paint();
                                }, 100);

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 初始化事件
         */

    }, {
        key: "initEvent",
        value: function initEvent() {
            // 这里发起通信
            pull_1.getMiningHistory();
            pull_1.getMineDetail();
            pull_1.getMiningRank(100);
        }
    }]);

    return Dividend;
}(widget_1.Widget);

exports.Dividend = Dividend;
// ===================================================== 本地
// ===================================================== 立即执行
store_1.register('miningTotal', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
store_1.register('mineRank', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
store_1.register('mineItemJump', function (arg) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        if (arg === 'buyFinancial') {
            w.backPrePage();
        }
    }
});
})