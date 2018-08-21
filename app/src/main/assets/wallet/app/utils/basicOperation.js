_$define("app/utils/basicOperation", function (require, exports, module){
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
 * 基础操作11
 */
var globalWallet_1 = require("../core/globalWallet");
var pull_1 = require("../net/pull");
var store_1 = require("../store/store");
var account_1 = require("./account");
var constants_1 = require("./constants");
var tools_1 = require("./tools");
/**
 * 通过助记词导入钱包
 */
exports.importWalletByMnemonic = function (mnemonic, psw, pswTips) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _wallet$currencyRecor, _addrs;

        var walletList, salt, addrs, gwlt, len, i, _ret, wallet;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        walletList = store_1.find('walletList');
                        salt = store_1.find('salt');
                        addrs = store_1.find('addrs') || [];
                        gwlt = null;

                        console.time('import');
                        _context.next = 7;
                        return globalWallet_1.GlobalWallet.fromMnemonic(mnemonic, psw, salt);

                    case 7:
                        gwlt = _context.sent;

                        console.timeEnd('import');
                        // 判断钱包是否存在
                        len = walletList.length;

                        if (!walletList.some(function (v) {
                            return v.walletId === gwlt.glwtId;
                        })) {
                            _context.next = 23;
                            break;
                        }

                        _context.next = 13;
                        return tools_1.openBasePage('app-components-message-messagebox', { itype: 'confirm', title: '提示', content: '该钱包已存在，是否使用新密码' });

                    case 13:
                        i = len - 1;

                    case 14:
                        if (!(i >= 0)) {
                            _context.next = 22;
                            break;
                        }

                        if (!(gwlt.glwtId === walletList[i].walletId)) {
                            _context.next = 19;
                            break;
                        }

                        _ret = function () {
                            var wallet0 = walletList.splice(i, 1)[0]; // 删除已存在钱包
                            var retAddrs = tools_1.getAddrsAll(wallet0);
                            addrs = addrs.filter(function (addr) {
                                return retAddrs.indexOf(addr.addr) === -1;
                            });
                            return "break";
                        }();

                        if (!(_ret === "break")) {
                            _context.next = 19;
                            break;
                        }

                        return _context.abrupt("break", 22);

                    case 19:
                        i--;
                        _context.next = 14;
                        break;

                    case 22:
                        len--;

                    case 23:
                        gwlt.nickName = "\u6211\u7684\u94B1\u5305" + (len + 1);
                        wallet = {
                            walletId: gwlt.glwtId,
                            avatar: account_1.getAvatarRandom(),
                            gwlt: gwlt.toJSON(),
                            showCurrencys: constants_1.defalutShowCurrencys,
                            currencyRecords: []
                        };

                        (_wallet$currencyRecor = wallet.currencyRecords).push.apply(_wallet$currencyRecor, _toConsumableArray(gwlt.currencyRecords));
                        if (pswTips.trim().length > 0) {
                            wallet.walletPswTips = tools_1.encrypt(pswTips.trim());
                        }
                        (_addrs = addrs).push.apply(_addrs, _toConsumableArray(gwlt.addrs));
                        store_1.updateStore('addrs', addrs);
                        walletList.push(wallet);
                        store_1.updateStore('walletList', walletList);
                        store_1.updateStore('curWallet', wallet);
                        store_1.updateStore('salt', salt);
                        pull_1.openAndGetRandom();

                    case 34:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
})