_$define("app/view/redEnvelope/send/shareRedEnvelope", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * send red-envelope to other
 */
var shareToPlatforms_1 = require("../../../../pi/browser/shareToPlatforms");
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");

var ShareRedEnvelope = function (_widget_1$Widget) {
    _inherits(ShareRedEnvelope, _widget_1$Widget);

    function ShareRedEnvelope() {
        _classCallCheck(this, ShareRedEnvelope);

        return _possibleConstructorReturn(this, (ShareRedEnvelope.__proto__ || Object.getPrototypeOf(ShareRedEnvelope)).apply(this, arguments));
    }

    _createClass(ShareRedEnvelope, [{
        key: "shareToFriends",

        // 发送给好友
        value: function shareToFriends() {
            var url = '';
            var title = '';
            if (this.props.rtype === 0) {
                // tslint:disable-next-line:max-line-length
                url = pull_1.sharePerUrl + "?type=" + interface_1.RedEnvelopeType.Normal + "&rid=" + this.props.rid + "&lm=" + window.encodeURIComponent(this.props.leaveMessage);
                title = '等额红包';
            } else {
                // tslint:disable-next-line:max-line-length
                url = pull_1.sharePerUrl + "?type=" + interface_1.RedEnvelopeType.Random + "&rid=" + this.props.rid + "&lm=" + window.encodeURIComponent(this.props.leaveMessage);
                title = '拼手气红包';
            }
            root_1.popNew('app-components-share-share', {
                shareType: shareToPlatforms_1.ShareToPlatforms.TYPE_LINK,
                url: url,
                title: title,
                content: this.props.leaveMessage
            });
            this.ok && this.ok();
        }
    }]);

    return ShareRedEnvelope;
}(widget_1.Widget);

exports.ShareRedEnvelope = ShareRedEnvelope;
})