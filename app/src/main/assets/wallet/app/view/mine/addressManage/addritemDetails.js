_$define("app/view/mine/addressManage/addritemDetails", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 地址详情
 */
// ======================================导入
var widget_1 = require("../../../../pi/widget/widget");
// ===========================================导出

var AddritemDetails = function (_widget_1$Widget) {
    _inherits(AddritemDetails, _widget_1$Widget);

    function AddritemDetails() {
        _classCallCheck(this, AddritemDetails);

        var _this = _possibleConstructorReturn(this, (AddritemDetails.__proto__ || Object.getPrototypeOf(AddritemDetails)).call(this));

        _this.state = {
            name: 'BTC 001',
            money: '2.00',
            address: 'Kye4gFqsnotKvjoVxNy1xoe2CRiC9GdZ8UdtXMcksgUWVFTmam2f'
        };
        return _this;
    }

    _createClass(AddritemDetails, [{
        key: "goback",
        value: function goback() {
            this.ok && this.ok();
        }
    }]);

    return AddritemDetails;
}(widget_1.Widget);

exports.AddritemDetails = AddritemDetails;
})