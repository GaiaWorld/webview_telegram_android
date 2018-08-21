_$define("app/view/mine/dividend/dividendRank", function (require, exports, module){
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
 * 挖矿及矿山排名
 */
// ============================== 导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var store_1 = require("../../../store/store");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var DividendItem = function (_widget_1$Widget) {
    _inherits(DividendItem, _widget_1$Widget);

    function DividendItem() {
        _classCallCheck(this, DividendItem);

        return _possibleConstructorReturn(this, (DividendItem.__proto__ || Object.getPrototypeOf(DividendItem)).call(this));
    }

    _createClass(DividendItem, [{
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "create",
        value: function create() {
            _get(DividendItem.prototype.__proto__ || Object.getPrototypeOf(DividendItem.prototype), "create", this).call(this);
            this.state = {};
            this.initData();
        }
        /**
         * 查看排名详情列表
         * @param ind 1 为矿山排名，2 为挖矿排名
         */

    }, {
        key: "gotoMore",
        value: function gotoMore(ind) {
            if (ind === 1) {
                root_1.popNew('app-view-mine-dividend-rankList', { data: this.state.mineList, ind: ind });
            } else {
                root_1.popNew('app-view-mine-dividend-rankList', { data: this.state.miningList, ind: ind });
            }
        }
        /**
         * 当前页面加载更多排名数据
         * @param ind 1 为矿山排名，2 为挖矿排名
         */

    }, {
        key: "getMore",
        value: function getMore(ind) {
            if (ind === 1) {
                var msg = this.state.mineList;
                for (var i = this.state.minePage * 10; i < msg.length && i < (this.state.minePage + 1) * 10; i++) {
                    this.state.mineRank.push({
                        index: i + 1,
                        name: msg[i][1] === '' ? '昵称未设置' : msg[i][1],
                        num: tools_1.kpt2kt(msg[i][2])
                    });
                }
                this.state.minePage += 1;
                if ((this.state.minePage + 1) * 10 < msg.length) {
                    this.state.mineMore = true;
                } else {
                    this.state.mineMore = false;
                }
            } else {
                var _msg = this.state.miningList;
                for (var _i = this.state.miningPage * 10; _i < _msg.length && _i < (this.state.miningPage + 1) * 10; _i++) {
                    this.state.miningRank.push({
                        index: _i + 1,
                        name: _msg[_i][1] === '' ? '昵称未设置' : _msg[_i][1],
                        num: tools_1.kpt2kt(_msg[_i][2])
                    });
                }
                this.state.miningPage += 1;
                if ((this.state.miningPage + 1) * 10 < _msg.length) {
                    this.state.miningMore = true;
                } else {
                    this.state.miningMore = false;
                }
            }
            this.paint();
        }
        /**
         * 获取更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var msg1, msg2;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                msg1 = store_1.find('mineRank');
                                msg2 = store_1.find('miningRank');

                                this.state = {
                                    mineSecond: msg1.mineSecond,
                                    mineThird: msg1.mineThird,
                                    minePage: msg1.minePage,
                                    mineMore: msg1.mineMore,
                                    mineList: msg1.mineList,
                                    mineRank: msg1.mineRank,
                                    miningFirst: msg2.miningFirst,
                                    miningSecond: msg2.miningSecond,
                                    miningThird: msg2.miningThird,
                                    miningPage: msg2.miningPage,
                                    miningMore: msg2.miningMore,
                                    miningList: msg2.miningList,
                                    miningRank: msg2.miningRank
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

    return DividendItem;
}(widget_1.Widget);

exports.DividendItem = DividendItem;
store_1.register('mineRank', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
store_1.register('miningRank', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
})