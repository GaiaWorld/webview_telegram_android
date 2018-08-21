_$define("app/view/mine/transaction/record", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
// =============================================导入
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var dataCenter_1 = require("../../../store/dataCenter");
var store_1 = require("../../../store/store");
var tools_1 = require("../../../utils/tools");
// =========================================================导出

var AddAsset = function (_widget_1$Widget) {
    _inherits(AddAsset, _widget_1$Widget);

    function AddAsset() {
        _classCallCheck(this, AddAsset);

        return _possibleConstructorReturn(this, (AddAsset.__proto__ || Object.getPrototypeOf(AddAsset)).call(this));
    }

    _createClass(AddAsset, [{
        key: "create",
        value: function create() {
            _get(AddAsset.prototype.__proto__ || Object.getPrototypeOf(AddAsset.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var _this2 = this;

            this.state = { list: [] };
            var wallet = store_1.find('curWallet');
            if (!wallet.currencyRecords) return;
            var list = [];
            wallet.currencyRecords.forEach(function (v) {
                v.addrs.forEach(function (v1) {
                    list = list.concat(_this2.parseTransactionDetails(v1, v.currencyName));
                });
            });
            this.state.list = list.sort(function (a, b) {
                return b.time - a.time;
            });
        }
        /**
         * 处理关闭
         */

    }, {
        key: "doClose",
        value: function doClose() {
            this.ok && this.ok();
        }
        /**
         * 显示交易详情
         */

    }, {
        key: "showTransactionDetails",
        value: function showTransactionDetails(e, index) {
            root_1.popNew('app-view-wallet-transaction-transaction_details', this.state.list[index]);
        }
    }, {
        key: "parseTransactionDetails",
        value: function parseTransactionDetails(currentAddr, currencyName) {
            var list = dataCenter_1.dataCenter.getAllTransactionsByAddr(currentAddr, currencyName);
            list = list.map(function (v) {
                var pay = tools_1.effectiveCurrencyNoConversion(v.value, currencyName, true);
                var fees = tools_1.effectiveCurrencyNoConversion(v.fees, currencyName, true);
                var isFromMe = v.from.toLowerCase() === currentAddr.toLowerCase();
                var isToMe = v.to.toLowerCase() === currentAddr.toLowerCase();
                return {
                    id: v.hash,
                    type: isFromMe ? isToMe ? '自己' : '转账' : '收款',
                    fromAddr: v.from,
                    to: v.to,
                    pay: pay.num,
                    tip: fees.show,
                    time: v.time,
                    showTime: tools_1.parseDate(new Date(v.time)),
                    result: '已完成',
                    info: v.info,
                    account: tools_1.parseAccount(isFromMe ? isToMe ? v.from : v.to : v.from).toLowerCase(),
                    showPay: pay.show,
                    currencyName: currencyName
                };
            });
            var addr = tools_1.getAddrById(currentAddr, currencyName);
            var recordList = [];
            if (addr) {
                recordList = addr.record.map(function (v) {
                    var pay = tools_1.effectiveCurrencyNoConversion(v.pay, currencyName, false);
                    v.account = tools_1.parseAccount(v.to).toLowerCase();
                    v.showPay = pay.show;
                    return v;
                });
            }
            return list.concat(recordList);
        }
    }]);

    return AddAsset;
}(widget_1.Widget);

exports.AddAsset = AddAsset;
})