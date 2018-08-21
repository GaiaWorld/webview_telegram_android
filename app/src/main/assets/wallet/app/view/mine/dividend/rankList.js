_$define("app/view/mine/dividend/rankList", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var widget_1 = require("../../../../pi/widget/widget");
var tools_1 = require("../../../shareView/utils/tools");

var Dividend = function (_widget_1$Widget) {
    _inherits(Dividend, _widget_1$Widget);

    function Dividend() {
        _classCallCheck(this, Dividend);

        return _possibleConstructorReturn(this, (Dividend.__proto__ || Object.getPrototypeOf(Dividend)).call(this));
    }

    _createClass(Dividend, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(Dividend.prototype.__proto__ || Object.getPrototypeOf(Dividend.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
            this.initData();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                refresh: true,
                gainRank: [
                    // {
                    //     index:1,
                    //     name:'昵称未设置',
                    //     num:'96,554,000.00'
                    // }
                ]
            };
        }
        /**
         * 滚动加载更多列表数据
         * h1 滚动条高度+滚动模块的可见高度=当前屏幕最底端高度
         * h2 最低端元素的绝对高度
         */
        // public getMoreList() {
        //     const h1 = document.getElementById('ranklist').scrollTop + document.getElementById('ranklist').offsetHeight;  
        //     const h2 = document.getElementById('more').offsetTop; 
        //     if (h2 - h1 < 20 && this.state.refresh) {
        //         this.state.refresh = false;
        //         console.log('加载中，请稍后~~~');
        //         setTimeout(() => {
        //             this.state.gainRank.push({
        //                 index:1,
        //                 name:'昵称未设置',
        //                 num:'96,554,000.00'
        //             },{
        //                 index:2,
        //                 name:'昵称未设置',
        //                 num:'96,554,000.00'
        //             },{
        //                 index:3,
        //                 name:'昵称未设置',
        //                 num:'96,554,000.00'
        //             });
        //             this.state.refresh = true;
        //             this.paint();
        //         }, 1000);
        //     } 
        // }

    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }, {
        key: "initData",
        value: function initData() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var msg, data, i;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                msg = this.props.data;
                                data = [];

                                for (i = 0; i < msg.length; i++) {
                                    data.push({
                                        index: i + 1,
                                        name: msg[i][1] === '' ? '昵称未设置' : msg[i][1],
                                        num: tools_1.kpt2kt(msg[i][2])
                                    });
                                }
                                this.state.gainRank = data;
                                this.paint();

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return Dividend;
}(widget_1.Widget);

exports.Dividend = Dividend;
})