_$define("app/view/mine/addressManage/addressManage", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 地址管理
 */
// ================================================导入
var root_1 = require("../../../../pi/ui/root");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var dataCenter_1 = require("../../../store/dataCenter");
var store_1 = require("../../../store/store");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var AddressManage = function (_widget_1$Widget) {
    _inherits(AddressManage, _widget_1$Widget);

    function AddressManage() {
        _classCallCheck(this, AddressManage);

        return _possibleConstructorReturn(this, (AddressManage.__proto__ || Object.getPrototypeOf(AddressManage)).call(this));
    }

    _createClass(AddressManage, [{
        key: "create",
        value: function create() {
            _get(AddressManage.prototype.__proto__ || Object.getPrototypeOf(AddressManage.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                selectnum: 0,
                coins: [{ name: 'BTC' }, { name: 'ETH' }],
                content: []
            };
            this.state.content = dataCenter_1.dataCenter.getTopContacts('BTC').map(function (v) {
                return {
                    currencyName: 'BTC',
                    name: v.tags,
                    address: v.addresse
                };
            });
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "coinchange",
        value: function coinchange(event, index) {
            this.state.selectnum = index;
            var selectName = this.state.coins[this.state.selectnum].name;
            var list = dataCenter_1.dataCenter.getTopContacts(selectName);
            this.state.content = list.map(function (v) {
                return {
                    currencyName: selectName,
                    name: v.tags,
                    address: v.addresse
                };
            });
            this.paint();
        }
    }, {
        key: "addNewaddr",
        value: function addNewaddr() {
            var _this2 = this;

            var defaultTag = this.getDefaultTags(this.state.coins[this.state.selectnum].name);
            var title = "\u6DFB\u52A0\u5730\u5740-" + this.state.coins[this.state.selectnum].name;
            root_1.popNew('app-view-mine-addressManage-messagebox', {
                mType: 'prompt', title: title, input2DefaultValue: defaultTag
            }, function (data) {
                var addresse = data.addresse;
                var tags = data.tags;
                if (!addresse) {
                    return;
                }
                if (!tags) {
                    // TODO 自动生成地址名称
                    tags = '默认地址';
                }
                dataCenter_1.dataCenter.addTopContacts(_this2.state.coins[_this2.state.selectnum].name, addresse, tags);
                _this2.coinchange(null, _this2.state.selectnum);
                root_1.popNew('app-components-message-message', { itype: 'success', content: '添加常用联系人成功！', center: true });
            });
        }
        // 获取默认地址标签名

    }, {
        key: "getDefaultTags",
        value: function getDefaultTags(currencyName) {
            var contacts = dataCenter_1.dataCenter.getTopContacts(currencyName);
            var length = contacts.length + 1;
            return currencyName + " " + length;
        }
    }]);

    return AddressManage;
}(widget_1.Widget);

exports.AddressManage = AddressManage;
// ======================================= 本地
store_1.register('TopContacts', function (TopContacts) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.init();
        w.paint();
    }
});
})