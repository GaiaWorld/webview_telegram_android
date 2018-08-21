_$define("app/view/wallet/transaction/choose_address", function (require, exports, module){
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
/**
 * 选择地址
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var dataCenter_1 = require("../../../store/dataCenter");
var store_1 = require("../../../store/store");
var tools_1 = require("../../../utils/tools");

var AddAsset = function (_widget_1$Widget) {
    _inherits(AddAsset, _widget_1$Widget);

    function AddAsset() {
        _classCallCheck(this, AddAsset);

        return _possibleConstructorReturn(this, (AddAsset.__proto__ || Object.getPrototypeOf(AddAsset)).call(this));
    }

    _createClass(AddAsset, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(AddAsset.prototype.__proto__ || Object.getPrototypeOf(AddAsset.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                list: []
            };
            this.getAddrs();
        }
        /**
         * 处理关闭
         */

    }, {
        key: "doClose",
        value: function doClose() {
            this.ok && this.ok();
        }
        /**
         * 处理选择地址
         */

    }, {
        key: "chooseAddr",
        value: function chooseAddr(e, index) {
            var _this2 = this;

            if (!this.state.list[index].isChoose) {
                var wallet = store_1.find('curWallet');
                var currencyRecord = wallet.currencyRecords.filter(function (v) {
                    return v.currencyName === _this2.props.currencyName;
                })[0];
                if (currencyRecord) {
                    currencyRecord.currentAddr = this.state.list[index].addr;
                    store_1.updateStore('curWallet', wallet);
                }
            }
            this.doClose();
        }
        /**
         * 处理添加地址
         */

    }, {
        key: "addAddr",
        value: function addAddr(e, index) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var close;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.doClose();
                                close = root_1.popNew('pi-components-loading-loading', { text: '添加中...' });
                                _context.prev = 2;
                                _context.next = 5;
                                return this.doAddAddr();

                            case 5:
                                _context.next = 9;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context["catch"](2);

                            case 9:
                                close.callback(close.widget);

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 7]]);
            }));
        }
    }, {
        key: "doAddAddr",
        value: function doAddAddr() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this3 = this;

                var wallet, passwd, mnemonic, currencyRecord, address, addrName;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                wallet = store_1.find('curWallet');
                                passwd = void 0;

                                if (store_1.find('hashMap', wallet.walletId)) {
                                    _context2.next = 6;
                                    break;
                                }

                                _context2.next = 5;
                                return tools_1.openBasePage('app-components-message-messageboxPrompt', { title: '输入密码', content: '', inputType: 'password' });

                            case 5:
                                passwd = _context2.sent;

                            case 6:
                                _context2.next = 8;
                                return tools_1.getMnemonic(wallet, passwd);

                            case 8:
                                mnemonic = _context2.sent;

                                if (!mnemonic) {
                                    _context2.next = 23;
                                    break;
                                }

                                currencyRecord = wallet.currencyRecords.filter(function (v) {
                                    return v.currencyName === _this3.props.currencyName;
                                })[0];
                                address = globalWallet_1.GlobalWallet.getWltAddrByMnemonic(mnemonic, this.props.currencyName, currencyRecord.addrs.length);

                                if (address) {
                                    _context2.next = 14;
                                    break;
                                }

                                return _context2.abrupt("return");

                            case 14:
                                _context2.next = 16;
                                return tools_1.openBasePage('app-components-message-messagebox', {
                                    itype: 'prompt', title: '添加地址', content: address, placeHolder: '标签名(限8个字)'
                                });

                            case 16:
                                addrName = _context2.sent;

                                if (!(addrName && addrName.length >= dataCenter_1.DataCenter.MAX_ADDRNAME_LEN)) {
                                    _context2.next = 20;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'notice', content: '地址标签输入过长', center: true });
                                return _context2.abrupt("return");

                            case 20:
                                tools_1.addNewAddr(this.props.currencyName, address, addrName);
                                _context2.next = 24;
                                break;

                            case 23:
                                root_1.popNew('app-components-message-message', { itype: 'error', content: '密码错误,请重新输入', center: true });

                            case 24:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "getAddrs",
        value: function getAddrs() {
            var _this4 = this;

            var wallet = store_1.find('curWallet');
            if (!wallet.currencyRecords || !this.props.currencyName) return [];
            var currencyRecord = wallet.currencyRecords.filter(function (v) {
                return v.currencyName === _this4.props.currencyName;
            })[0];
            if (!currencyRecord) return [];
            var currentAddr = currencyRecord.currentAddr || wallet.walletId;
            this.state.list = currencyRecord.addrs.map(function (v) {
                var r = tools_1.getAddrById(v, _this4.props.currencyName);
                var addrName = r.addrName;
                var len = tools_1.getStrLen(addrName);
                if (len > dataCenter_1.DataCenter.MAX_ADDRNAME_LEN) {
                    addrName = tools_1.sliceStr(addrName, 0, dataCenter_1.DataCenter.MAX_ADDRNAME_LEN) + "...";
                }
                var info = dataCenter_1.dataCenter.getAddrInfoByAddr(r.addr, _this4.props.currencyName);
                return {
                    name: addrName,
                    balance: tools_1.formatBalance(info && info.balance || 0),
                    isChoose: r.addr === currentAddr,
                    addr: r.addr
                };
            });
        }
    }]);

    return AddAsset;
}(widget_1.Widget);

exports.AddAsset = AddAsset;
})