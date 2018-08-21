_$define("app/view/redEnvelope/send/redEnvelopeRecord", function (require, exports, module){
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
 * red-envelope record
 */
// ============================== 导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var store_1 = require("../../../store/store");
var constants_1 = require("../../../utils/constants");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var RedEnvelopeRecord = function (_widget_1$Widget) {
    _inherits(RedEnvelopeRecord, _widget_1$Widget);

    function RedEnvelopeRecord() {
        _classCallCheck(this, RedEnvelopeRecord);

        return _possibleConstructorReturn(this, (RedEnvelopeRecord.__proto__ || Object.getPrototypeOf(RedEnvelopeRecord)).apply(this, arguments));
    }

    _createClass(RedEnvelopeRecord, [{
        key: "create",
        value: function create() {
            _get(RedEnvelopeRecord.prototype.__proto__ || Object.getPrototypeOf(RedEnvelopeRecord.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.state = {
                                    sendNumber: 0,
                                    recordList: [],
                                    start: undefined,
                                    refresh: true,
                                    hasMore: false,
                                    showMoreTips: false // 是否显示底部加载更多提示
                                };
                                this.loadMore();

                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "redEnvelopeItemClick",
        value: function redEnvelopeItemClick(e, index) {
            root_1.popNew('app-view-redEnvelope-send-redEnvelopeDetails', Object.assign({}, this.state.recordList[index]));
        }
    }, {
        key: "loadMore",
        value: function loadMore() {
            var sHisRec = store_1.find('sHisRec');
            if (sHisRec) {
                var hList = sHisRec.list;
                if (hList && hList.length > this.state.recordList.length) {
                    this.loadMoreFromLocal();
                } else {
                    this.loadMoreFromServer(this.state.start);
                }
            } else {
                this.loadMoreFromServer(this.state.start);
            }
        }
        // 从本地缓存加载更多

    }, {
        key: "loadMoreFromLocal",
        value: function loadMoreFromLocal() {
            console.log('load more from local');
            var sHisRec = store_1.find('sHisRec');
            var hList = sHisRec.list;
            var start = this.state.recordList.length;
            this.state.recordList = this.state.recordList.concat(hList.slice(start, start + constants_1.recordNumber));
            this.state.sendNumber = sHisRec.sendNumber;
            this.state.start = sHisRec.start;
            this.state.hasMore = this.state.sendNumber > this.state.recordList.length;
            this.state.showMoreTips = this.state.sendNumber >= constants_1.recordNumber;
            this.paint();
        }
        // 向服务器请求更多记录

    }, {
        key: "loadMoreFromServer",
        value: function loadMoreFromServer(bStart) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var sHisRec, rList, value, sendNumber, start, recordList, r, i, currencyName, record, sHisRecNew;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log('load more from server');
                                sHisRec = store_1.find('sHisRec');
                                rList = sHisRec && sHisRec.list || [];
                                _context2.next = 5;
                                return pull_1.querySendRedEnvelopeRecord(bStart);

                            case 5:
                                value = _context2.sent;

                                if (value) {
                                    _context2.next = 8;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 8:
                                sendNumber = value[0];
                                start = value[1];
                                recordList = [];
                                r = value[2];

                                for (i = 0; i < r.length; i++) {
                                    currencyName = interface_1.CurrencyTypeReverse[r[i][2]];
                                    record = {
                                        rid: r[i][0].toString(),
                                        rtype: r[i][1],
                                        ctype: r[i][2],
                                        ctypeShow: currencyName,
                                        amount: tools_1.smallUnit2LargeUnitString(currencyName, r[i][3]),
                                        time: r[i][4],
                                        timeShow: tools_1.timestampFormat(r[i][4]),
                                        codes: r[i][5]
                                    };

                                    recordList.push(record);
                                }
                                this.state.sendNumber = sendNumber;
                                this.state.recordList = this.state.recordList.concat(recordList);
                                this.state.start = start;
                                this.state.hasMore = sendNumber > this.state.recordList.length;
                                this.state.showMoreTips = sendNumber >= constants_1.recordNumber;
                                sHisRecNew = {
                                    start: start,
                                    sendNumber: sendNumber,
                                    list: rList.concat(recordList)
                                };

                                if (sendNumber > 0) {
                                    store_1.updateStore('sHisRec', sHisRecNew);
                                }
                                this.paint();

                            case 21:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "getMoreList",
        value: function getMoreList() {
            var _this2 = this;

            var oh1 = document.getElementById('records-container').offsetHeight;
            var oh2 = document.getElementById('records').offsetHeight;
            var scrollTop = document.getElementById('records-container').scrollTop;
            if (this.state.hasMore && this.state.refresh && oh2 - oh1 - scrollTop < 20) {
                this.state.refresh = false;
                console.log('加载中，请稍后~~~');
                setTimeout(function () {
                    _this2.loadMore();
                    _this2.state.refresh = true;
                }, 500);
            }
        }
    }]);

    return RedEnvelopeRecord;
}(widget_1.Widget);

exports.RedEnvelopeRecord = RedEnvelopeRecord;
})