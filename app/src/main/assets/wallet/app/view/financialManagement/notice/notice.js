_$define("app/view/financialManagement/notice/notice", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 理财产品首页
 */
var widget_1 = require("../../../../pi/widget/widget");
var config_1 = require("../../base/config");

var Notice = function (_widget_1$Widget) {
    _inherits(Notice, _widget_1$Widget);

    function Notice() {
        _classCallCheck(this, Notice);

        return _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).call(this));
    }

    _createClass(Notice, [{
        key: "create",
        value: function create() {
            _get(Notice.prototype.__proto__ || Object.getPrototypeOf(Notice.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                notice: config_1.Config.notice,
                isAgree: false
            };
        }
    }, {
        key: "checkBoxClick",
        value: function checkBoxClick() {
            this.state.isAgree = !this.state.isAgree;
            this.paint();
        }
    }, {
        key: "agreeClicked",
        value: function agreeClicked() {
            if (!this.state.isAgree) {
                return;
            }
            this.ok && this.ok(this.state.isAgree);
        }
    }]);

    return Notice;
}(widget_1.Widget);

exports.Notice = Notice;
})