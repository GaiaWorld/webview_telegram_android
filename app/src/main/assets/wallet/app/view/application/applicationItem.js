_$define("app/view/application/applicationItem", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * application item
 */
var root_1 = require("../../../pi/ui/root");
var widget_1 = require("../../../pi/widget/widget");

var ASpplicationItem = function (_widget_1$Widget) {
    _inherits(ASpplicationItem, _widget_1$Widget);

    function ASpplicationItem() {
        _classCallCheck(this, ASpplicationItem);

        var _this = _possibleConstructorReturn(this, (ASpplicationItem.__proto__ || Object.getPrototypeOf(ASpplicationItem)).call(this));

        _this.props = {
            type: '1',
            img: '../../res/image/img_dapp_4.png',
            title: '每日一氪',
            mess: '试试今天的手气',
            islike: false
        };
        return _this;
    }

    _createClass(ASpplicationItem, [{
        key: "likeit",
        value: function likeit(event) {
            this.props.islike = !this.props.islike;
            this.paint();
        }
    }, {
        key: "showDetails",
        value: function showDetails(event) {
            root_1.popNew('app-view-application-applDetails', { imgsrc: this.props.img });
        }
    }]);

    return ASpplicationItem;
}(widget_1.Widget);

exports.ASpplicationItem = ASpplicationItem;
})