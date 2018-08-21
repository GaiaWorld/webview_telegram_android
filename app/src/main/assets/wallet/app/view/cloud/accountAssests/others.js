_$define("app/view/cloud/accountAssests/others", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 其他操作记录
 */
// ===================================================== 导入
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");
var store_1 = require("../../../store/store");
var tools_1 = require("../../../utils/tools");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

var Others = function (_widget_1$Widget) {
    _inherits(Others, _widget_1$Widget);

    function Others() {
        _classCallCheck(this, Others);

        return _possibleConstructorReturn(this, (Others.__proto__ || Object.getPrototypeOf(Others)).call(this));
    }

    _createClass(Others, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Others.prototype.__proto__ || Object.getPrototypeOf(Others.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = { infoList: [] };
            this.initData();
            this.initEvent();
        }
    }, {
        key: "initData",
        value: function initData() {
            var list = store_1.find('accountDetail', interface_1.CurrencyType[this.props.coinType]) || [];
            this.state.infoList = list.map(function (v) {
                v.time = tools_1.timestampFormat(v.time);
                v.behaviorIcon = getIconByType(v.itype);
                return v;
            });
            this.paint();
        }
    }, {
        key: "initEvent",
        value: function initEvent() {
            pull_1.getAccountDetail(interface_1.CurrencyType[this.props.coinType]);
        }
    }]);

    return Others;
}(widget_1.Widget);

exports.Others = Others;
// ===================================================== 本地
/**
 * 通过类型获取图标
 */
var getIconByType = function getIconByType(iType) {
    var img = void 0;
    switch (iType) {
        case interface_1.TaskSid.mines:
            img = 'cloud_others_drag.png';
            break;
        case interface_1.TaskSid.redEnvelope:
            img = 'cloud_others_pockets.png';
            break;
        case interface_1.TaskSid.recharge:
            img = 'cloud_charge_icon.png';
            break;
        case interface_1.TaskSid.withdraw:
            img = 'cloud_withdraw_icon.png';
            break;
        default:
    }
    return img;
};
// ===================================================== 立即执行
store_1.register('accountDetail', function (info) {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
})