_$define("app/view/cloud/cloudAccount/cloudAccount", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
// ===============================================导入
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var dataCenter_1 = require("../../../store/dataCenter");
var tools_1 = require("../../../utils/tools");
// ====================================================导出

var CloudAccount = function (_widget_1$Widget) {
    _inherits(CloudAccount, _widget_1$Widget);

    function CloudAccount() {
        _classCallCheck(this, CloudAccount);

        return _possibleConstructorReturn(this, (CloudAccount.__proto__ || Object.getPrototypeOf(CloudAccount)).call(this));
    }

    _createClass(CloudAccount, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(CloudAccount.prototype.__proto__ || Object.getPrototypeOf(CloudAccount.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                isNameUpdated: false,
                accoutNickName: '昵称未设置',
                accoutHeadImg: 'img_avatar1.png',
                accountAssets: '',
                coinList: [{
                    coinIcon: 'cloud_cointype_btc.png',
                    coinType: 'KT',
                    coinBalance: this.props.ktBalance // 代币余额
                }, {
                    coinIcon: 'cloud_cointype_eth.png',
                    coinType: 'ETH',
                    coinBalance: this.props.ethBalance
                }]
            };
            var all = dataCenter_1.dataCenter.getExchangeRate('KT').CNY * this.props.ktBalance + dataCenter_1.dataCenter.getExchangeRate('ETH').CNY * this.props.ethBalance;
            this.state.accountAssets = "\u2248" + tools_1.formatBalanceValue(all) + " CNY";
        }
    }, {
        key: "backClick",
        value: function backClick() {
            this.ok && this.ok();
        }
    }, {
        key: "itemClicked",
        value: function itemClicked(e, coinType) {
            var coinBalance = this.state.coinList.filter(function (v) {
                return v.coinType === coinType;
            })[0].coinBalance;
            root_1.popNew('app-view-cloud-accountAssests-accountAssests', { coinType: coinType, coinBalance: coinBalance });
        }
    }, {
        key: "nickNameChanged",
        value: function nickNameChanged(e) {
            if (!this.state.isNameUpdated) {
                this.state.isNameUpdated = true;
            }
            var value = e.currentTarget.value;
            this.state.accoutNickName = value;
            this.paint();
        }
    }, {
        key: "pageClicked",
        value: function pageClicked(e) {
            if (!this.state.isNameUpdated) {
                return;
            }
            // 判断点击的对象是否是昵称输入框
            var clickedNode = e.native.target;
            var targetNode = document.getElementById('nicknameInput');
            if (!(targetNode.children.length < 1 && clickedNode === targetNode)) {
                // 点击空白处修改云账户昵称
            }
        }
    }]);

    return CloudAccount;
}(widget_1.Widget);

exports.CloudAccount = CloudAccount;
})