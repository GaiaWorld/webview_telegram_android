_$define("app/view/redEnvelope/receive/openRedEnvelope", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * open red-envelope
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var interface_1 = require("../../../store/interface");

var OpenRedEnvelope = function (_widget_1$Widget) {
    _inherits(OpenRedEnvelope, _widget_1$Widget);

    function OpenRedEnvelope() {
        _classCallCheck(this, OpenRedEnvelope);

        return _possibleConstructorReturn(this, (OpenRedEnvelope.__proto__ || Object.getPrototypeOf(OpenRedEnvelope)).apply(this, arguments));
    }

    _createClass(OpenRedEnvelope, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(OpenRedEnvelope.prototype.__proto__ || Object.getPrototypeOf(OpenRedEnvelope.prototype), "setProps", this).call(this, props, oldProps);
            var tag = '';
            if (props.rtype === interface_1.RedEnvelopeType.Normal) {
                tag = '您收到一个红包';
            } else if (props.rtype === interface_1.RedEnvelopeType.Random) {
                tag = '金额随机，试试手气';
            } else if (props.rtype === interface_1.RedEnvelopeType.Invite) {
                tag = '您收到一个邀请红包';
            }
            this.state = {
                tag: tag,
                openClick: false
            };
        }
    }, {
        key: "openRedEnvelopeClick",
        value: function openRedEnvelopeClick() {
            var _this2 = this;

            this.state.openClick = true;
            this.paint();
            setTimeout(function () {
                root_1.popNew('app-components-message-message', { itype: 'success', content: '兑换成功', center: true });
                root_1.popNew('app-view-redEnvelope-receive-redEnvelopeDetails', Object.assign({}, _this2.props));
                _this2.ok && _this2.ok();
            }, 500);
        }
    }]);

    return OpenRedEnvelope;
}(widget_1.Widget);

exports.OpenRedEnvelope = OpenRedEnvelope;
})