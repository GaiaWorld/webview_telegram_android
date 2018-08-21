_$define("app/components/topBar/topBar", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * topbar
 */
var event_1 = require("../../../pi/widget/event");
var widget_1 = require("../../../pi/widget/widget");

var TopBar = function (_widget_1$Widget) {
    _inherits(TopBar, _widget_1$Widget);

    function TopBar() {
        _classCallCheck(this, TopBar);

        return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this));
    }

    _createClass(TopBar, [{
        key: "create",
        value: function create() {
            _get(TopBar.prototype.__proto__ || Object.getPrototypeOf(TopBar.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                backIcon: {
                    default: 'btn_back.png',
                    white: 'btn_back_white.png'
                }
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage(event) {
            event_1.notify(event.node, 'ev-back-click', {});
        }
    }]);

    return TopBar;
}(widget_1.Widget);

exports.TopBar = TopBar;
})