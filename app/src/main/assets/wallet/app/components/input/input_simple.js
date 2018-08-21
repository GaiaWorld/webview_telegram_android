_$define("app/components/input/input_simple", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 简单的输入框的逻辑处理
 */
var event_1 = require("../../../pi/widget/event");
var painter_1 = require("../../../pi/widget/painter");
var widget_1 = require("../../../pi/widget/widget");

var InputSimple = function (_widget_1$Widget) {
    _inherits(InputSimple, _widget_1$Widget);

    function InputSimple() {
        _classCallCheck(this, InputSimple);

        return _possibleConstructorReturn(this, (InputSimple.__proto__ || Object.getPrototypeOf(InputSimple)).call(this));
    }

    _createClass(InputSimple, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(InputSimple.prototype.__proto__ || Object.getPrototypeOf(InputSimple.prototype), "setProps", this).call(this, props, oldProps);
            var currentValue = '';
            if (props.input) {
                currentValue = props.input;
            }
            this.state = {
                currentValue: currentValue,
                focused: false
            };
            if (oldProps) {
                this.changeInputValue();
            }
        }
    }, {
        key: "change",
        value: function change(event) {
            var currentValue = event.currentTarget.value;
            if (this.props.reg) {
                var regex = new RegExp(this.props.reg, 'g');
                currentValue = currentValue.replace(regex, this.props.replace || '');
            }
            this.state.currentValue = currentValue;
            event_1.notify(event.node, 'ev-input-change', { value: this.state.currentValue });
            this.changeInputValue();
            // this.paint();
        }
    }, {
        key: "blur",
        value: function blur(event) {
            this.state.focused = false;
            event_1.notify(event.node, 'ev-input-blur', {});
            this.paint();
        }
    }, {
        key: "focus",
        value: function focus(event) {
            this.state.focused = true;
            event_1.notify(event.node, 'ev-input-focus', {});
            this.paint();
        }
        // 设置input value

    }, {
        key: "changeInputValue",
        value: function changeInputValue() {
            var child = this.tree.children[0];
            var childNode = painter_1.getRealNode(child);
            childNode.value = this.state.currentValue;
        }
    }]);

    return InputSimple;
}(widget_1.Widget);

exports.InputSimple = InputSimple;
})