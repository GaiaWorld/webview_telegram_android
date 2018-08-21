_$define("app/view/cloud/accountAssests/accountAssests", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
// ========================================================导入
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
// =======================================================导出

var AccountAssests = function (_widget_1$Widget) {
    _inherits(AccountAssests, _widget_1$Widget);

    function AccountAssests() {
        _classCallCheck(this, AccountAssests);

        return _possibleConstructorReturn(this, (AccountAssests.__proto__ || Object.getPrototypeOf(AccountAssests)).call(this));
    }

    _createClass(AccountAssests, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(AccountAssests.prototype.__proto__ || Object.getPrototypeOf(AccountAssests.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
            this.dataProcess();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                maskHeight: root_1.getHeight(),
                routePath: 'app-view-cloud-accountAssests-others',
                isActive: 0,
                panelBtns: [{
                    label: '全部',
                    component: 'app-view-cloud-accountAssests-others'
                }, {
                    label: '充值',
                    component: 'app-view-cloud-accountAssests-charge'
                }, {
                    label: '提币',
                    component: 'app-view-cloud-accountAssests-withdraw'
                }],
                showChargeAndWithdraw: this.props.coinType === 'ETH'
            };
        }
    }, {
        key: "backClick",
        value: function backClick() {
            this.ok && this.ok();
        }
        // 点击面板按钮

    }, {
        key: "panelBtnClicked",
        value: function panelBtnClicked(e, index) {
            this.state.isActive = index;
            this.state.routePath = this.state.panelBtns[index].component;
            this.paint();
        }
    }, {
        key: "chargeClicked",
        value: function chargeClicked() {
            root_1.popNew('app-view-cloud-assestsManage-charge', { currencyName: this.props.coinType }, function () {
                console.log('充值---------------');
                // this.isActive =     ; 
            });
        }
    }, {
        key: "withdrawClicked",
        value: function withdrawClicked() {
            root_1.popNew('app-view-cloud-assestsManage-withdraw', { currencyName: this.props.coinType });
        }
    }, {
        key: "dataProcess",
        value: function dataProcess() {
            this.state.coinType = this.props.coinType;
            if (this.props.coinType === 'KT') {
                this.state.coinIcon = 'cloud_cointype_btc.png';
            } else if (this.props.coinType === 'ETH') {
                this.state.coinIcon = 'cloud_cointype_eth.png';
            }
        }
    }]);

    return AccountAssests;
}(widget_1.Widget);

exports.AccountAssests = AccountAssests;
})