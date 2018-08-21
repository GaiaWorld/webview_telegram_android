_$define("app/view/wallet/backupWallet/share", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 分享片段给好友
 */
var shareToPlatforms_1 = require("../../../../pi/browser/shareToPlatforms");
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var dataCenter_1 = require("../../../store/dataCenter");

var WalletCreate = function (_widget_1$Widget) {
    _inherits(WalletCreate, _widget_1$Widget);

    function WalletCreate() {
        _classCallCheck(this, WalletCreate);

        return _possibleConstructorReturn(this, (WalletCreate.__proto__ || Object.getPrototypeOf(WalletCreate)).call(this));
    }

    _createClass(WalletCreate, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(WalletCreate.prototype.__proto__ || Object.getPrototypeOf(WalletCreate.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                totalSteps: dataCenter_1.DataCenter.MAX_SHARE_LEN,
                part: this.props.shares[0],
                step: 1 // 分享第几个人
            };
        }
    }, {
        key: "back",
        value: function back() {
            this.ok && this.ok();
        }
    }, {
        key: "shareBtnClick",
        value: function shareBtnClick() {
            // this.state.step++;
            // this.state.part = this.props.shares[this.state.step - 1];
            // this.paint();
            // // 分享完成
            // if (this.state.step > this.state.totalSteps) {
            //     popNew('app-components-message-message', { itype: 'success', content: '分享成功', center: true });
            //     this.ok && this.ok();
            // }
            // tslint:disable-next-line:no-this-assignment
            var thisObj = this;
            root_1.popNew('app-components-share-share', { text: this.state.part, shareType: shareToPlatforms_1.ShareToPlatforms.TYPE_TEXT }, function () {
                // 分享完成后
                thisObj.state.step++;
                thisObj.state.part = thisObj.props.shares[thisObj.state.step - 1];
                thisObj.paint();
                // 分享完成
                if (thisObj.state.step > thisObj.state.totalSteps) {
                    root_1.popNew('app-components-message-message', { itype: 'success', content: '分享成功', center: true });
                    thisObj.ok && thisObj.ok();
                }
            }, function () {
                root_1.popNew('app-components-message-message', { itype: 'error', content: '分享失败', center: true });
            });
        }
    }]);

    return WalletCreate;
}(widget_1.Widget);

exports.WalletCreate = WalletCreate;
})