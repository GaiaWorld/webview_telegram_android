_$define("app/view/financialManagement/loan/billDetails", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * bill details
 */
var widget_1 = require("../../../../pi/widget/widget");

var BillDetails = function (_widget_1$Widget) {
    _inherits(BillDetails, _widget_1$Widget);

    function BillDetails() {
        _classCallCheck(this, BillDetails);

        return _possibleConstructorReturn(this, (BillDetails.__proto__ || Object.getPrototypeOf(BillDetails)).call(this));
    }

    _createClass(BillDetails, [{
        key: "create",
        value: function create() {
            _get(BillDetails.prototype.__proto__ || Object.getPrototypeOf(BillDetails.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "goBackClick",
        value: function goBackClick() {
            this.ok && this.ok();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                billDetailsList: [{}]
            };
        }
    }]);

    return BillDetails;
}(widget_1.Widget);

exports.BillDetails = BillDetails;
})