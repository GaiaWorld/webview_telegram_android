_$define("app/view/redEnvelope/receive/redEnvelopeRecord", function (require, exports, module){
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
                                    convertNumber: 0,
                                    convertNumberShow: 0,
                                    recordList: [],
                                    recordListShow: [],
                                    start: undefined,
                                    refresh: true,
                                    hasMore: false,
                                    showMoreTips: false,
                                    inviteObj: null // 邀请红包对象
                                };
                                this.loadMore();
                                this.getInviteRedEnvelope();

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        // 获取邀请红包记录

    }, {
        key: "getInviteRedEnvelope",
        value: function getInviteRedEnvelope() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var inviteRedBagRec, data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                inviteRedBagRec = store_1.find('inviteRedBagRec');

                                if (!inviteRedBagRec) {
                                    _context2.next = 6;
                                    break;
                                }

                                console.log('inviteRedBagRec from local');
                                this.state.inviteObj = inviteRedBagRec;
                                this.innerPaint();
                                return _context2.abrupt("return");

                            case 6:
                                _context2.next = 8;
                                return pull_1.getData('convertRedEnvelope');

                            case 8:
                                data = _context2.sent;

                                if (data.value && data.value !== '$nil') {
                                    this.state.inviteObj = {
                                        uid: 0,
                                        rid: 0,
                                        rtype: 99,
                                        rtypeShow: parseRtype(99),
                                        ctype: interface_1.CurrencyType.ETH,
                                        ctypeShow: 'ETH',
                                        amount: 0.15,
                                        time: data.value,
                                        timeShow: tools_1.timestampFormat(data.value)
                                    };
                                    store_1.updateStore('inviteRedBagRec', this.state.inviteObj);
                                    this.innerPaint();
                                }

                            case 10:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
        // 每次paint前对邀请红包做处理

    }, {
        key: "innerPaint",
        value: function innerPaint() {
            if (!this.state.inviteObj) {
                this.state.convertNumberShow = this.state.convertNumber;
                this.state.recordListShow = this.state.recordList;
                this.paint();
                return;
            }
            this.state.convertNumberShow = this.state.convertNumber + 1;
            var rList = this.state.recordList.slice(0);
            rList.push(this.state.inviteObj);
            rList.sort(function (i1, i2) {
                return i2.time - i1.time;
            });
            this.state.recordListShow = rList;
            this.paint();
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "loadMore",
        value: function loadMore() {
            var cHisRec = store_1.find('cHisRec');
            if (cHisRec) {
                var hList = cHisRec.list;
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
            var cHisRec = store_1.find('cHisRec');
            var hList = cHisRec.list;
            var start = this.state.recordList.length;
            this.state.recordList = this.state.recordList.concat(hList.slice(start, start + constants_1.recordNumber));
            this.state.convertNumber = cHisRec.convertNumber;
            this.state.start = cHisRec.start;
            this.state.hasMore = this.state.convertNumber > this.state.recordList.length;
            this.state.showMoreTips = this.state.convertNumber >= constants_1.recordNumber;
            this.innerPaint();
        }
        // 向服务器请求更多记录

    }, {
        key: "loadMoreFromServer",
        value: function loadMoreFromServer(start) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var value, cHisRec, rList, convertNumber, startNext, recordList, r, i, currencyName, record, cHisRecNew;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                console.log('load more from server');
                                _context3.next = 3;
                                return pull_1.queryConvertLog(start);

                            case 3:
                                value = _context3.sent;

                                if (value) {
                                    _context3.next = 6;
                                    break;
                                }

                                return _context3.abrupt("return");

                            case 6:
                                cHisRec = store_1.find('cHisRec');
                                rList = cHisRec && cHisRec.list || [];
                                convertNumber = value[0];
                                startNext = value[1];
                                recordList = [];
                                r = value[2];

                                for (i = 0; i < r.length; i++) {
                                    currencyName = interface_1.CurrencyTypeReverse[r[i][3]];
                                    record = {
                                        suid: r[i][0],
                                        rid: r[i][1],
                                        rtype: r[i][2],
                                        rtypeShow: parseRtype(r[i][2]),
                                        ctype: r[i][3],
                                        ctypeShow: currencyName,
                                        amount: tools_1.smallUnit2LargeUnitString(currencyName, r[i][4]),
                                        time: r[i][5],
                                        timeShow: tools_1.timestampFormat(r[i][5])
                                    };

                                    recordList.push(record);
                                }
                                this.state.convertNumber = convertNumber;
                                this.state.recordList = this.state.recordList.concat(recordList);
                                this.state.start = startNext;
                                this.state.hasMore = convertNumber > this.state.recordList.length;
                                this.state.showMoreTips = convertNumber >= constants_1.recordNumber;
                                cHisRecNew = {
                                    start: startNext,
                                    convertNumber: convertNumber,
                                    list: rList.concat(recordList)
                                };

                                if (convertNumber > 0) {
                                    store_1.updateStore('cHisRec', cHisRecNew);
                                }
                                this.innerPaint();

                            case 21:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
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
/**
 * 转化rtype
 */
var parseRtype = function parseRtype(rType) {
    if (rType === 0) return '等额红包';
    if (rType === 1) return '随机红包';
    if (rType === 99) return '邀请红包';
    return '';
};
})