_$define("app/view/mine/aboutus/aboutus", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * about us
 */
// =======================================导入
var shareToPlatforms_1 = require("../../../../pi/browser/shareToPlatforms");
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
// =========================================导出

var Aboutus = function (_widget_1$Widget) {
    _inherits(Aboutus, _widget_1$Widget);

    function Aboutus() {
        _classCallCheck(this, Aboutus);

        var _this = _possibleConstructorReturn(this, (Aboutus.__proto__ || Object.getPrototypeOf(Aboutus)).call(this));

        _this.state = {
            data: [{ value: '隐私条款', components: 'app-view-mine-aboutus-privacypolicy' }, { value: '用户协议', components: 'app-view-mine-aboutus-useragreement' }, { value: '版本更新', components: '' }, { value: '分享下载链接', components: '' }]
        };
        return _this;
    }

    _createClass(Aboutus, [{
        key: "itemClick",
        value: function itemClick(e, index) {
            if (index < 2 && this.state.data[index].components !== '') {
                root_1.popNew(this.state.data[index].components);
            } else if (index === 2) {
                root_1.popNew('app-view-mine-aboutus-message', { type: 'success', content: '当前已是最新版本', center: true });
            } else {
                // TODO 分享下载
                root_1.popNew('app-components-share-share', { text: 'This is a test QRCode', shareType: shareToPlatforms_1.ShareToPlatforms.TYPE_IMG }, function (result) {
                    // alert(result);
                }, function (result) {
                    // alert(result);
                });
            }
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return Aboutus;
}(widget_1.Widget);

exports.Aboutus = Aboutus;
})