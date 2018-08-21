_$define("app/view/wallet/walletCreate/createWalletEnter", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * create a wallet
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
// tslint:disable-next-line:max-line-length

var CreateWalletEnter = function (_widget_1$Widget) {
    _inherits(CreateWalletEnter, _widget_1$Widget);

    function CreateWalletEnter() {
        _classCallCheck(this, CreateWalletEnter);

        return _possibleConstructorReturn(this, (CreateWalletEnter.__proto__ || Object.getPrototypeOf(CreateWalletEnter)).call(this));
    }

    _createClass(CreateWalletEnter, [{
        key: "create",
        value: function create() {
            _get(CreateWalletEnter.prototype.__proto__ || Object.getPrototypeOf(CreateWalletEnter.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {};
        }
    }, {
        key: "toCreateWallet",
        value: function toCreateWallet() {
            this.ok && this.ok();
            root_1.popNew('app-view-wallet-walletCreate-walletCreate');
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "toCreateByImg",
        value: function toCreateByImg() {
            this.ok && this.ok();
            root_1.popNew('app-view-wallet-walletCreate-createByImg-createByImg');
        }
    }, {
        key: "importByImtokenClicked",
        value: function importByImtokenClicked() {
            this.ok && this.ok();
            root_1.popNew('app-view-wallet-walletImport-walletImport', { title: '导入imtoken' });
        }
    }, {
        key: "walletImportClicked",
        value: function walletImportClicked() {
            this.ok && this.ok();
            root_1.popNew('app-view-wallet-walletImport-walletImport', { title: '导入助记词' });
        }
    }, {
        key: "importByKuPayClicked",
        value: function importByKuPayClicked() {
            this.ok && this.ok();
            root_1.popNew('app-view-wallet-walletImport-importByKuPay');
        }
    }]);

    return CreateWalletEnter;
}(widget_1.Widget);

exports.CreateWalletEnter = CreateWalletEnter;
})