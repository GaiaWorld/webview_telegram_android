_$define("app/shareView/redEnvelope/redEnvelopeDetails", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * red-envelope details
 */
var root_1 = require("../../../pi/ui/root");
var widget_1 = require("../../../pi/widget/widget");
var pull_1 = require("../net/pull");
var tools_1 = require("../utils/tools");
// 枚举货币类型
var CurrencyType = {
    100: 'KT',
    101: 'ETH'
};

var RedEnvelopeDetails = function (_widget_1$Widget) {
    _inherits(RedEnvelopeDetails, _widget_1$Widget);

    function RedEnvelopeDetails() {
        _classCallCheck(this, RedEnvelopeDetails);

        return _possibleConstructorReturn(this, (RedEnvelopeDetails.__proto__ || Object.getPrototypeOf(RedEnvelopeDetails)).apply(this, arguments));
    }

    _createClass(RedEnvelopeDetails, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(RedEnvelopeDetails.prototype.__proto__ || Object.getPrototypeOf(RedEnvelopeDetails.prototype), "setProps", this).call(this, props, oldProps);
            this.state = {
                currencyName: CurrencyType[props.ctype],
                totalNumber: 0,
                convertedNumber: 0,
                totalAmount: 0,
                redBagList: [],
                showConverted: props.rtype !== 99,
                rules: ['1.安装KuPay，创建钱包', '2.在钱包里点击发现-发红包', '3.输入收到的红包码，红包金额将自动到账', '4.同一个红包，每人只能领取一次']
            };
            if (props.rtype !== 99) {
                this.querydetail(props.uid, props.rid);
            }
        }
    }, {
        key: "querydetail",
        value: function querydetail(uid, rid) {
            var _this2 = this;

            var msg = {
                type: 'query_detail_log',
                param: {
                    uid: uid,
                    rid: rid
                }
            };
            // tslint:disable-next-line:no-unnecessary-local-variable
            pull_1.requestAsync(msg).then(function (res) {
                if (res.result !== 1) {
                    root_1.popNew('app-shareView-components-message', { itype: 'error', center: true, content: '出错啦' });
                }
                console.log('query_detail_log', res);
                var l = res.value[1];
                var redBagList = [];
                var totalAmount = 0;
                for (var i = 0; i < l.length; i++) {
                    var amount = tools_1.smallUnit2LargeUnitString(_this2.state.currencyName, l[i][4]);
                    totalAmount += amount;
                    if (l[i][1] !== 0 && l[i][5] !== 0) {
                        var redBag = {
                            suid: l[i][0],
                            uid: l[i][1],
                            rtype: l[i][2],
                            ctype: l[i][3],
                            amount: amount,
                            time: l[i][5],
                            timeShow: tools_1.timestampFormat(l[i][5])
                        };
                        redBagList.push(redBag);
                    }
                }
                _this2.state.totalNumber = l.length;
                _this2.state.convertedNumber = redBagList.length;
                _this2.state.totalAmount = totalAmount;
                _this2.state.redBagList = redBagList;
                _this2.paint();
            }).catch(function (r) {
                console.error(r);
            });
        }
    }, {
        key: "receiveClick",
        value: function receiveClick() {
            root_1.popNew('app-shareView-redEnvelope-downloadApp');
            this.ok && this.ok();
        }
    }, {
        key: "copyBtnClick",
        value: function copyBtnClick() {
            tools_1.copyToClipboard(this.props.cidShow);
            root_1.popNew('app-shareView-components-message', { itype: 'success', center: true, content: '复制成功' });
        }
    }]);

    return RedEnvelopeDetails;
}(widget_1.Widget);

exports.RedEnvelopeDetails = RedEnvelopeDetails;
})