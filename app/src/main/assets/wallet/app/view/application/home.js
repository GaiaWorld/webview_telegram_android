_$define("app/view/application/home", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * application home page
 */
var widget_1 = require("../../../pi/widget/widget");

var App = function (_widget_1$Widget) {
    _inherits(App, _widget_1$Widget);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            activeIndex: 0,
            data: [{
                type: '1',
                img: '../../res/image/img_dapp_1.png',
                title: '建筑队传奇',
                mess: '建造大楼，挑战高度',
                islike: false
            }, {
                type: '1',
                img: '../../res/image/img_dapp_2.png',
                title: '天天来挖矿',
                mess: '看你能挖到什么',
                islike: true
            }, {
                type: '1',
                img: '../../res/image/img_dapp_3.png',
                title: '鱼市',
                mess: '今天出现一只怪鱼',
                islike: true
            }, {
                type: '1',
                img: '../../res/image/img_dapp_4.png',
                title: '每日一氪',
                mess: '试试今天的手气',
                islike: false
            }, {
                type: '2',
                img: '../../res/image/img_dapp_5.png',
                title: '换币',
                mess: '币换币',
                islike: false
            }, {
                type: '1',
                img: '../../res/image/img_dapp_6.png',
                title: '幸运蛋',
                mess: '天啦！买的鸡蛋孵出了恐龙',
                islike: false
            }]
        };
        return _this;
    }

    _createClass(App, [{
        key: "create",
        value: function create() {
            window.localStorage.alldata = JSON.stringify(this.state.data);
        }
    }, {
        key: "tabClick",
        value: function tabClick(ind) {
            this.state.activeIndex = ind;
            var thisdata = JSON.parse(window.localStorage.alldata);
            if (ind === 0) {
                this.state.data = thisdata;
            }
            if (ind === 1) {
                var data = [];
                for (var i in thisdata) {
                    if (thisdata[i].type === '1') {
                        data.push(thisdata[i]);
                    }
                }
                this.state.data = data;
            }
            if (ind === 2) {
                var _data = [];
                for (var _i in thisdata) {
                    if (thisdata[_i].type === '2') {
                        _data.push(thisdata[_i]);
                    }
                }
                this.state.data = _data;
            }
            if (ind === 3) {
                var _data2 = [];
                for (var _i2 in thisdata) {
                    if (thisdata[_i2].islike) {
                        _data2.push(thisdata[_i2]);
                    }
                }
                this.state.data = _data2;
            }
            this.paint();
        }
    }]);

    return App;
}(widget_1.Widget);

exports.App = App;
})