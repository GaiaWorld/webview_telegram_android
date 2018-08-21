_$define("app/view/wallet/assets/add_asset", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 货币添加
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var store_1 = require("../../../store/store");

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
            var wallet = store_1.find('curWallet');
            var currencyList = store_1.find('currencyList');
            var showCurrencys = wallet && wallet.showCurrencys || [];
            this.state = {
                title: '添加资产',
                currencyList: currencyList,
                list: currencyList.map(function (v) {
                    v.isChoose = showCurrencys.indexOf(v.name) >= 0;
                    return v;
                })
            };
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
         * 处理查找
         */

    }, {
        key: "doSearch",
        value: function doSearch() {
            root_1.popNew('app-view-wallet-assets-search_asset', { list: this.state.list });
        }
        /**
         * 处理滑块改变
         */

    }, {
        key: "onSwitchChange",
        value: function onSwitchChange(e, index) {
            var currencys = this.state.list[index];
            var newType = !currencys.isChoose;
            currencys.isChoose = newType;
            this.paint();
            // 处理search数据
            var wallet = store_1.find('curWallet');
            var showCurrencys = wallet.showCurrencys || [];
            var oldIndex = showCurrencys.indexOf(currencys.name);
            if (newType && oldIndex < 0) {
                showCurrencys.push(currencys.name);
            } else if (!newType && oldIndex >= 0) {
                showCurrencys.splice(oldIndex, 1);
            }
            wallet.showCurrencys = showCurrencys;
            store_1.updateStore('curWallet', wallet);
        }
    }]);

    return AddAsset;
}(widget_1.Widget);

exports.AddAsset = AddAsset;
})