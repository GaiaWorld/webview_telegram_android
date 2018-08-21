_$define("app/view/wallet/walletCreate/createByImg/createByImg", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * creation complete
 */
var imagePicker_1 = require("../../../../../pi/browser/imagePicker");
var root_1 = require("../../../../../pi/ui/root");
var canvas_1 = require("../../../../../pi/util/canvas");
var widget_1 = require("../../../../../pi/widget/widget");
var ahash_1 = require("../../../../utils/ahash");

var CreateComplete = function (_widget_1$Widget) {
    _inherits(CreateComplete, _widget_1$Widget);

    function CreateComplete() {
        _classCallCheck(this, CreateComplete);

        var _this = _possibleConstructorReturn(this, (CreateComplete.__proto__ || Object.getPrototypeOf(CreateComplete)).call(this));

        _this.reader = new FileReader();
        return _this;
    }

    _createClass(CreateComplete, [{
        key: "create",
        value: function create() {
            _get(CreateComplete.prototype.__proto__ || Object.getPrototypeOf(CreateComplete.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                choosedImg: false,
                // tslint:disable-next-line:max-line-length
                imgBase64Data: '',
                inputWords: '',
                imgStr: '',
                imgWidth: 0,
                imgHeight: 0
            };
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "chooseImg",
        value: function chooseImg() {
            var _this2 = this;

            console.log('选择图片');
            var close = root_1.popNew('pi-components-loading-loading', { text: '导入中...' });
            // tslint:disable-next-line:no-this-assignment
            var thisObj = this;
            var image = new imagePicker_1.ImagePicker();
            image.init();
            image.selectFromLocal({
                success: function success(width, height, result) {
                    // alert('成功');
                    thisObj.state.imgWidth = width;
                    thisObj.state.imgHeight = height;
                    thisObj.state.imgBase64Data = result;
                    thisObj.state.choosedImg = true;
                    // tslint:disable-next-line:max-line-length
                    _this2.state.imgStr = "<div style=\"background-image: url(" + _this2.state.imgBase64Data + ");width: 100%;height: 100%;position: absolute;top: 0;background-size: cover;background-position: center;background-repeat: no-repeat;\"></div>";
                    thisObj.paint();
                    close.callback(close.widget);
                },
                fail: function fail(result) {
                    close.callback(close.widget);
                    root_1.popNew('app-components-message-message', { itype: 'notice', content: '导入失败', center: true });
                },
                useCamera: 1,
                single: 1,
                max: 1
            });
        }
    }, {
        key: "inputIng",
        value: function inputIng(event) {
            var currentValue = event.currentTarget.value;
            this.state.inputWords = currentValue;
        }
    }, {
        key: "nextStep",
        value: function nextStep() {
            var _this3 = this;

            if (this.state.choosedImg === false) {
                root_1.popNew('app-components-message-messagebox', { itype: 'message', title: '提示', content: '请选择图片' });
                return;
            }
            if (this.state.inputWords === '') {
                root_1.popNew('app-components-message-messagebox', { itype: 'message', title: '提示', content: '请输入字符' });
                return;
            }
            var img = new Image();
            img.onload = function () {
                var ab = canvas_1.drawImg(img);
                var r = ahash_1.ahash(new Uint8Array(ab), img.width, img.height, 4);
                root_1.popNew('app-view-wallet-walletCreate-createByImg-walletCreate', {
                    choosedImg: r, inputWords: _this3.state.inputWords
                });
                _this3.ok && _this3.ok();
            };
            img.src = this.state.imgBase64Data;
        }
    }, {
        key: "removeImg",
        value: function removeImg() {
            this.state.choosedImg = false;
            this.paint();
        }
    }]);

    return CreateComplete;
}(widget_1.Widget);

exports.CreateComplete = CreateComplete;
})