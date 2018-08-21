_$define("app/view/mine/aboutus/useragreement", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * user agreement
 */
var widget_1 = require("../../../../pi/widget/widget");
var config_1 = require("../../base/config");

var UserAgreement = function (_widget_1$Widget) {
    _inherits(UserAgreement, _widget_1$Widget);

    function UserAgreement() {
        _classCallCheck(this, UserAgreement);

        return _possibleConstructorReturn(this, (UserAgreement.__proto__ || Object.getPrototypeOf(UserAgreement)).call(this));
    }

    _createClass(UserAgreement, [{
        key: "create",
        value: function create() {
            _get(UserAgreement.prototype.__proto__ || Object.getPrototypeOf(UserAgreement.prototype), "create", this).call(this);
            this.state = { userAgreement: config_1.Config.userAgreement };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return UserAgreement;
}(widget_1.Widget);

exports.UserAgreement = UserAgreement;
})