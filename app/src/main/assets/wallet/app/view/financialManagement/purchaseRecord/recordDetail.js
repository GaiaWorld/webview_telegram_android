_$define("app/view/financialManagement/purchaseRecord/recordDetail", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 购买记录详情
 */
// ===================================================导入
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
// =====================================================导出

var RecordDetail = function (_widget_1$Widget) {
    _inherits(RecordDetail, _widget_1$Widget);

    function RecordDetail() {
        _classCallCheck(this, RecordDetail);

        return _possibleConstructorReturn(this, (RecordDetail.__proto__ || Object.getPrototypeOf(RecordDetail)).call(this));
    }

    _createClass(RecordDetail, [{
        key: "create",
        value: function create() {
            _get(RecordDetail.prototype.__proto__ || Object.getPrototypeOf(RecordDetail.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                yesterdayProfit: '0.002',
                totalProfit: '0.072',
                continuedDay: '3',
                annualIncome: '8%',
                productIntroduction: 'ETH资管第1期是KuPay退出的一种固定收益类，回报稳定、无风险定期产品。',
                dealTime: '2018-8-1 12:12:03',
                unitPrice: '0.1',
                productName: 'ETH资管第1期',
                amount: '2',
                lockday: '无'
            };
        }
    }, {
        key: "goBackPage",
        value: function goBackPage() {
            this.ok && this.ok();
        }
        // 阅读理财声明

    }, {
        key: "redNotice",
        value: function redNotice() {
            root_1.popNew('app-view-financialManagement-notice-notice');
        }
    }]);

    return RecordDetail;
}(widget_1.Widget);

exports.RecordDetail = RecordDetail;
})