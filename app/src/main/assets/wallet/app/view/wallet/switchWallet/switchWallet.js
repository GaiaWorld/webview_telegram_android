_$define("app/view/wallet/switchWallet/switchWallet", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * switch wallet
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var pull_1 = require("../../../net/pull");
var store_1 = require("../../../store/store");
var account_1 = require("../../../utils/account");

var SwitchWallet = function (_widget_1$Widget) {
    _inherits(SwitchWallet, _widget_1$Widget);

    function SwitchWallet() {
        _classCallCheck(this, SwitchWallet);

        return _possibleConstructorReturn(this, (SwitchWallet.__proto__ || Object.getPrototypeOf(SwitchWallet)).call(this));
    }

    _createClass(SwitchWallet, [{
        key: "create",
        value: function create() {
            _get(SwitchWallet.prototype.__proto__ || Object.getPrototypeOf(SwitchWallet.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var walletList = store_1.find('walletList').map(function (v) {
                v.gwlt = globalWallet_1.GlobalWallet.fromJSON(v.gwlt);
                return v;
            });
            var curWallet = store_1.find('curWallet');
            this.state = {
                close: false,
                walletList: walletList,
                curWalletId: curWallet && curWallet.walletId,
                nickNameInterception: account_1.nickNameInterception
            };
        }
    }, {
        key: "importWalletClick",
        value: function importWalletClick() {
            this.ok && this.ok();
            root_1.popNew('app-view-wallet-walletCreate-createWalletEnter');
        }
    }, {
        key: "switchWalletClick",
        value: function switchWalletClick(e, index, isCurWallet) {
            if (isCurWallet) {
                return;
            }
            store_1.updateStore('curWallet', this.state.walletList[index]);
            pull_1.openAndGetRandom();
            root_1.popNew('app-components-message-message', { itype: 'success', content: '切换成功', center: true });
            this.ok && this.ok();
        }
    }, {
        key: "closePageClick",
        value: function closePageClick() {
            var _this2 = this;

            this.state.close = true;
            this.paint();
            setTimeout(function () {
                _this2.ok && _this2.ok();
            }, 300);
        }
    }]);

    return SwitchWallet;
}(widget_1.Widget);

exports.SwitchWallet = SwitchWallet;
})