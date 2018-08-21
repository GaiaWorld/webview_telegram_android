_$define("app/view/redEnvelope/send/inviteRedEnvelope", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * invite red envelope
 */
var shareToPlatforms_1 = require("../../../../pi/browser/shareToPlatforms");
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var pull_1 = require("../../../net/pull");
var interface_1 = require("../../../store/interface");

var InviteRedEnvelope = function (_widget_1$Widget) {
    _inherits(InviteRedEnvelope, _widget_1$Widget);

    function InviteRedEnvelope() {
        _classCallCheck(this, InviteRedEnvelope);

        return _possibleConstructorReturn(this, (InviteRedEnvelope.__proto__ || Object.getPrototypeOf(InviteRedEnvelope)).apply(this, arguments));
    }

    _createClass(InviteRedEnvelope, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(InviteRedEnvelope.prototype.__proto__ || Object.getPrototypeOf(InviteRedEnvelope.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
        // 发送给好友

    }, {
        key: "shareToFriends",
        value: function shareToFriends() {
            root_1.popNew('app-components-share-share', {
                shareType: shareToPlatforms_1.ShareToPlatforms.TYPE_LINK,
                url: pull_1.sharePerUrl + "?cid=" + this.props.inviteCode + "&type=" + interface_1.RedEnvelopeType.Invite,
                title: '邀请红包',
                content: this.state.shareContent
            });
            console.log('invitedRed cid', pull_1.sharePerUrl + "?cid=" + this.props.inviteCode + "&type=" + interface_1.RedEnvelopeType.Invite);
        }
    }, {
        key: "backClick",
        value: function backClick() {
            this.ok && this.ok();
        }
        // 初始化

    }, {
        key: "init",
        value: function init() {
            this.state = {
                allCurrency: '0.5 ETH',
                eachCurrency: '0.015 ETH',
                eachInviteCurrency1: '500 KT',
                eachInviteCurrency2: '0.01 ETH',
                inviteOkCount: 0,
                inviteAllCount: 20,
                inviteCurrency1: '0 KT',
                inviteCurrency2: '0 ETH',
                inviteLimitCurrency: '1000 KT',
                lastTime: '9月10日',
                shareContent: '我是邀请红包'
            };
            console.log(this.props.inviteCode, this.props.inviteCodeDetailInfo);
            this.state.inviteOkCount = this.props.inviteCodeDetailInfo[0];
            if (this.props.inviteCodeDetailInfo[1].length > 0) {
                var currency1 = 0;
                var currency2 = 0;
                this.props.inviteCodeDetailInfo[1].forEach(function (v) {
                    currency1 += v[0];
                    currency2 += v[1];
                });
                this.state.inviteCurrency1 = currency1 + " KT";
                this.state.inviteCurrency2 = currency2 + " ETH";
            }
        }
    }]);

    return InviteRedEnvelope;
}(widget_1.Widget);

exports.InviteRedEnvelope = InviteRedEnvelope;
})