_$define("pi/browser/imagePicker", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 图片导入（本地、相机）
 */
var native_1 = require("./native");

var ImagePicker = function (_native_1$NativeObjec) {
    _inherits(ImagePicker, _native_1$NativeObjec);

    function ImagePicker() {
        _classCallCheck(this, ImagePicker);

        return _possibleConstructorReturn(this, (ImagePicker.__proto__ || Object.getPrototypeOf(ImagePicker)).apply(this, arguments));
    }

    _createClass(ImagePicker, [{
        key: "selectFromLocal",

        /**
         * 从本地选择图片
         * @param param 参数
         */
        value: function selectFromLocal(param) {
            this.call('chooseImage', param);
        }
        /**
         * 打开相机拍摄
         * @param param 参数
         */

    }, {
        key: "openCamera",
        value: function openCamera(param) {
            // todo
        }
    }]);

    return ImagePicker;
}(native_1.NativeObject);

exports.ImagePicker = ImagePicker;
native_1.registerSign(ImagePicker, {
    chooseImage: [{
        name: 'useCamera',
        type: native_1.ParamType.Number
    }, {
        name: 'single',
        type: native_1.ParamType.Number
    }, {
        name: 'max',
        type: native_1.ParamType.Number
    }]
});
})