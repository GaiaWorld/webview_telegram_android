_$define("app/view/mine/dividend/dividendHistory", function (require, exports, module){
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
var res_mgr_1 = require("../../../../pi/util/res_mgr");
var forelet_1 = require("../../../../pi/widget/forelet");
var widget_1 = require("../../../../pi/widget/widget");
var store_1 = require("../../../store/store");
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');

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
            this.state = {};
            this.initData();
        }
        /**
         * 获取更新数据
         */

    }, {
        key: "initData",
        value: function initData() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data, _data;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.props === 2) {
                                    // 挖矿记录列表
                                    data = store_1.find('miningHistory');

                                    this.state.data = data;
                                } else {
                                    // 分红记录列表
                                    _data = store_1.find('dividHistory');

                                    this.state.data = _data;
                                }
                                this.paint();

                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
    }]);

    return Dividend;
}(widget_1.Widget);

exports.Dividend = Dividend;
res_mgr_1.register('dividHistory', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
res_mgr_1.register('miningHistory', function () {
    var w = exports.forelet.getWidget(exports.WIDGET_NAME);
    if (w) {
        w.initData();
    }
});
})