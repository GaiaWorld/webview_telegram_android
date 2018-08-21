_$define("app/view/financialManagement/fund/home", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");

var FundHome = function (_widget_1$Widget) {
    _inherits(FundHome, _widget_1$Widget);

    function FundHome() {
        _classCallCheck(this, FundHome);

        return _possibleConstructorReturn(this, (FundHome.__proto__ || Object.getPrototypeOf(FundHome)).call(this));
    }

    _createClass(FundHome, [{
        key: "create",
        value: function create() {
            _get(FundHome.prototype.__proto__ || Object.getPrototypeOf(FundHome.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(FundHome.prototype.__proto__ || Object.getPrototypeOf(FundHome.prototype), "setProps", this).call(this, props, oldProps);
            console.log(props);
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                chartsImgs: ['p1.jpg', 'p3.jpg', 'p6.jpg', 'p12.jpg'],
                showChartsIndex: 0,
                historyPerformances: [{
                    date: '近一月',
                    change: '+2.75%'
                }, {
                    date: '近三月',
                    change: '+4.16%'
                }, {
                    date: '近半年',
                    change: '+8.66%'
                }, {
                    date: '近一年',
                    change: '+31.41%'
                }, {
                    date: '成立以来',
                    change: '+30.53%'
                }],
                historicalNetValue: [{
                    date: '20180525',
                    unitNetValue: '0.9743',
                    cumulativeNetValue: '0.9743',
                    changeDay: 0.06
                }, {
                    date: '20180524',
                    unitNetValue: '0.9737',
                    cumulativeNetValue: '0.9737',
                    changeDay: -0.6
                }, {
                    date: '20180523',
                    unitNetValue: '0.9796',
                    cumulativeNetValue: '0.9796',
                    changeDay: -1.13
                }, {
                    date: '20180522',
                    unitNetValue: '0.9908',
                    cumulativeNetValue: '0.9908',
                    changeDay: 0.04
                }, {
                    date: '20180521',
                    unitNetValue: '0.9986',
                    cumulativeNetValue: '0.9986',
                    changeDay: 1.22
                }],
                showHistoryPerformances: true,
                otherFundItem: ['基金概况', '基金公告', '基金经理', '基金公司', '费率结构', '基金问答']
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "chartsSwitchClick",
        value: function chartsSwitchClick(e, index) {
            this.state.showChartsIndex = index;
            this.paint();
        }
    }, {
        key: "fundShareClick",
        value: function fundShareClick() {
            root_1.popNew('app-view-financialManagement-fund-share');
        }
    }, {
        key: "historyPerformanceClick",
        value: function historyPerformanceClick() {
            this.state.showHistoryPerformances = true;
            this.paint();
        }
    }, {
        key: "historyNetValueClick",
        value: function historyNetValueClick() {
            this.state.showHistoryPerformances = false;
            this.paint();
        }
    }]);

    return FundHome;
}(widget_1.Widget);

exports.FundHome = FundHome;
})