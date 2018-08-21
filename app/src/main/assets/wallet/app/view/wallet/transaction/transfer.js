_$define("app/view/wallet/transaction/transfer", function (require, exports, module){
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
 * 处理转账逻辑
 */
var qrcode_1 = require("../../../../pi/browser/qrcode");
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var api_1 = require("../../../core/eth/api");
var tokens_1 = require("../../../core/eth/tokens");
var pullWallet_1 = require("../../../net/pullWallet");
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
                title: '转账',
                to: '',
                pay: 0,
                payConversion: "0.00",
                gasPrice: 4000000000,
                gasLimit: 21000,
                fees: 0,
                feesConversion: '',
                info: '',
                showNote: tokens_1.ERC20Tokens[this.props.currencyName] ? false : true
            };
            // todo 这是测试地址
            if (this.props.currencyName === 'ETH') {
                // this.state.to = '0xa6e83b630BF8AF41A9278427b6F2A35dbC5f20e3';
            } else if (this.props.currencyName === 'BTC') {
                // this.state.to = 'mw8VtNKY81RjLz52BqxUkJx57pcsQe4eNB';
                this.state.gasPrice = 10;
                // const defaultToAddr = 'mw8VtNKY81RjLz52BqxUkJx57pcsQe4eNB';
                // const defaultAmount = 0.001;
                // this.getBtcTransactionFee(defaultToAddr, defaultAmount).then(fee => {
                //     this.state.gasPrice = fee;
                //     this.state.gasLimit = 1;
                //     this.resetFees();
                // });
            } else if (tokens_1.ERC20Tokens[this.props.currencyName]) {
                this.state.gasLimit = 81000;
            }
            this.resetFees();
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
         * 处理下一步
         */

    }, {
        key: "doNext",
        value: function doNext() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var loading, fromAddr, toAddr, gasPrice, gasLimit, pay, info, currencyName, wallet, passwd, hash;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.state.to) {
                                    _context.next = 3;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'warn', content: '请输入收款地址', center: true });
                                return _context.abrupt("return");

                            case 3:
                                if (this.state.pay) {
                                    _context.next = 6;
                                    break;
                                }

                                root_1.popNew('app-components-message-message', { itype: 'warn', content: '请输入转账金额', center: true });
                                return _context.abrupt("return");

                            case 6:
                                loading = root_1.popNew('pi-components-loading-loading', { text: '交易中...' });
                                fromAddr = this.props.fromAddr;
                                toAddr = this.state.to;
                                gasPrice = this.state.gasPrice;
                                gasLimit = this.state.gasLimit;
                                pay = this.state.pay;
                                info = this.state.info;
                                currencyName = this.props.currencyName;
                                wallet = store_1.find('curWallet');
                                passwd = void 0;

                                if (store_1.find('hashMap', wallet.walletId)) {
                                    _context.next = 22;
                                    break;
                                }

                                _context.next = 19;
                                return tools_1.popPswBox();

                            case 19:
                                passwd = _context.sent;

                                if (passwd) {
                                    _context.next = 22;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 22:
                                _context.next = 24;
                                return pullWallet_1.transfer(passwd, fromAddr, toAddr, gasPrice, gasLimit, pay, currencyName, info);

                            case 24:
                                hash = _context.sent;

                                if (hash) {
                                    _context.next = 28;
                                    break;
                                }

                                loading.callback(loading.widget);
                                return _context.abrupt("return");

                            case 28:
                                // 打开交易详情界面
                                this.showTransactionDetails(hash);
                                this.doClose();
                                this.topContactAdd(toAddr, currencyName);
                                loading.callback(loading.widget);

                            case 32:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        /**
         * 收款地址改变
         */

    }, {
        key: "onToChange",
        value: function onToChange(e) {
            this.state.to = e.value;
        }
        /**
         * 收款金额改变
         */

    }, {
        key: "onPayChange",
        value: function onPayChange(e) {
            var num = parseFloat(e.value) || 0;
            this.state.pay = num;
            // tslint:disable-next-line:max-line-length
            var r = tools_1.effectiveCurrencyStableConversion(num, tokens_1.ERC20Tokens[this.props.currencyName] ? 'ETH' : this.props.currencyName, 'CNY', false);
            this.state.payConversion = r.conversionShow;
            this.paint();
        }
        /**
         * 备注信息改变
         */

    }, {
        key: "onInfoChange",
        value: function onInfoChange(e) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var api, gas;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.state.info = e.value;
                                api = new api_1.Api();
                                _context2.next = 4;
                                return api.estimateGas({ to: '0x9cd1a1031dd7125a80c7d121ae5b17bc39a77ef7', data: '0x123456' });

                            case 4:
                                gas = _context2.sent;

                                console.log(gas);

                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
        /**
         * gas费用改变
         */

    }, {
        key: "onGasFeeChange",
        value: function onGasFeeChange(e) {
            var val = Number(e.value);
            this.state.fees = val;
            // tslint:disable-next-line:max-line-length
            var r = tools_1.effectiveCurrencyStableConversion(val, tokens_1.ERC20Tokens[this.props.currencyName] ? 'ETH' : this.props.currencyName, 'CNY', false);
            this.state.feesConversion = r.conversionShow;
            this.paint();
        }
        /**
         * 显示交易详情
         */

    }, {
        key: "showTransactionDetails",
        value: function showTransactionDetails(id) {
            var t = new Date();
            var record = {
                id: id,
                type: '转账',
                fromAddr: this.props.fromAddr,
                to: this.state.to,
                pay: this.state.pay,
                time: t.getTime(),
                showTime: tools_1.parseDate(t),
                result: '交易中',
                info: this.state.info || '无',
                currencyName: this.props.currencyName,
                tip: this.state.fees
            };
            root_1.popNew('app-view-wallet-transaction-transaction_details', record);
            addRecord(this.props.currencyName, this.props.fromAddr, record);
        }
        /**
         * 处理扫描
         */

    }, {
        key: "doScan",
        value: function doScan() {
            var _this2 = this;

            var qrcode = new qrcode_1.QRCode();
            qrcode.init();
            qrcode.scan({
                success: function success(addr) {
                    var r = tools_1.effectiveAddr(_this2.props.currencyName, addr);
                    if (r[0]) {
                        var amount = tools_1.urlParams(addr, 'amount');
                        if (amount) {
                            var num = parseFloat(amount);
                            _this2.state.pay = num;
                            // tslint:disable-next-line:max-line-length
                            var t = tools_1.effectiveCurrencyStableConversion(num, tokens_1.ERC20Tokens[_this2.props.currencyName] ? 'ETH' : _this2.props.currencyName, 'CNY', false);
                            _this2.state.payConversion = t.conversionShow;
                        }
                        _this2.state.to = r[1];
                        _this2.paint();
                    } else {
                        root_1.popNew('app-components-message-message', { itype: 'error', content: '无效的地址', center: true });
                    }
                    // alert(`scan result:${r}`);
                },
                fail: function fail(r) {
                    // alert(`scan fail:${r}`);
                    console.log("scan fail:" + r);
                }
            });
            qrcode.close({
                success: function success(r) {
                    // alert(`close result:${r}`);
                    console.log("close result:" + r);
                }
            });
        }
        /**
         * 判断收款地址是否为常用联系人,不是则提示加入常用联系人
         */

    }, {
        key: "topContactAdd",
        value: function topContactAdd(addresse, currencyName) {
            if (!currencyName) {
                return;
            }
            var isExist = false;
            var topContacts = dataCenter_1.dataCenter.getTopContacts(this.props.currencyName);
            for (var i = 0; i < topContacts.length; i++) {
                var v = topContacts[i];
                if (v.addresse === addresse && v.currencyName === currencyName) {
                    isExist = true;
                    break;
                } else {
                    isExist = false;
                }
            }
            if (isExist) {
                return;
            } else {
                // 不存在常用联系人，提示是否添加
                root_1.popNew('app-view-mine-addressManage-messagebox', {
                    mType: 'confirm', title: '是否添加联系人', text: '是否将此收币地址添加为常用地址', input1DefaultValue: addresse
                }, function (data) {
                    var addresse = data.addresse;
                    var tags = data.tags;
                    if (!tags) {
                        tags = '默认地址';
                    }
                    dataCenter_1.dataCenter.addTopContacts(currencyName, addresse, tags);
                    root_1.popNew('app-components-message-message', { itype: 'success', content: '添加常用联系人成功！', center: true });
                });
            }
        }
    }, {
        key: "resetFees",
        value: function resetFees() {
            var price = this.state.gasPrice;
            // tslint:disable-next-line:max-line-length
            var r = tools_1.effectiveCurrencyStableConversion(price * this.state.gasLimit, tokens_1.ERC20Tokens[this.props.currencyName] ? 'ETH' : this.props.currencyName, 'CNY', true);
            this.state.fees = r.num;
            this.state.feesConversion = r.conversionShow;
            this.paint();
        }
    }]);

    return AddAsset;
}(widget_1.Widget);

exports.AddAsset = AddAsset;
/**
 * 添加记录
 */
var addRecord = function addRecord(currencyName, currentAddr, record) {
    var addr = tools_1.getAddrById(currentAddr, currencyName);
    if (!addr) return;
    addr.record.push(record);
    tools_1.resetAddrById(currentAddr, currencyName, addr, true);
};
})