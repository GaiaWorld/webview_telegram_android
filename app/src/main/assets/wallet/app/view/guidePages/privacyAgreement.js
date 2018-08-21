_$define("app/view/guidePages/privacyAgreement", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * privacy agreement
 */
var root_1 = require("../../../pi/ui/root");
var widget_1 = require("../../../pi/widget/widget");
var store_1 = require("../../store/store");
var config_1 = require("../base/config");

var PrivacyAgreement = function (_widget_1$Widget) {
    _inherits(PrivacyAgreement, _widget_1$Widget);

    function PrivacyAgreement() {
        _classCallCheck(this, PrivacyAgreement);

        return _possibleConstructorReturn(this, (PrivacyAgreement.__proto__ || Object.getPrototypeOf(PrivacyAgreement)).call(this));
    }

    _createClass(PrivacyAgreement, [{
        key: "create",
        value: function create() {
            _get(PrivacyAgreement.prototype.__proto__ || Object.getPrototypeOf(PrivacyAgreement.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                userProtocolReaded: false,
                agreement: config_1.Config.userAgreement
            };
        }
    }, {
        key: "checkBoxClick",
        value: function checkBoxClick(e) {
            this.state.userProtocolReaded = e.newType === 'true' ? true : false;
            this.paint();
        }
    }, {
        key: "readedClick",
        value: function readedClick() {
            if (!this.state.userProtocolReaded) {
                return;
            }
            store_1.updateStore('readedPriAgr', true);
            root_1.popNew('app-view-guidePages-displayPage');
            this.ok && this.ok();
        }
    }]);

    return PrivacyAgreement;
}(widget_1.Widget);

exports.PrivacyAgreement = PrivacyAgreement;
})