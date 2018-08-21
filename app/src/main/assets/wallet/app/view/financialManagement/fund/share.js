_$define("app/view/financialManagement/fund/share", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * fund share Page
 */
var shareToPlatforms_1 = require("../../../../pi/browser/shareToPlatforms");
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");

var FundShare = function (_widget_1$Widget) {
    _inherits(FundShare, _widget_1$Widget);

    function FundShare() {
        _classCallCheck(this, FundShare);

        return _possibleConstructorReturn(this, (FundShare.__proto__ || Object.getPrototypeOf(FundShare)).call(this));
    }

    _createClass(FundShare, [{
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "cancelShareClick",
        value: function cancelShareClick() {
            this.ok && this.ok();
            // this.testShare();
        }
    }, {
        key: "testShare",
        value: function testShare() {
            root_1.popNew('app-components-share-share', { text: 'This is a test QRCode', shareType: shareToPlatforms_1.ShareToPlatforms.TYPE_IMG }, function (result) {
                alert(result);
            }, function (result) {
                alert(result);
            });
        }
    }]);

    return FundShare;
}(widget_1.Widget);

exports.FundShare = FundShare;
})