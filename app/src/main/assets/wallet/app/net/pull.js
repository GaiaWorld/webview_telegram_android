_$define("app/net/pull", function (require, exports, module){
"use strict";

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
 * 主动向后端通讯
 */
var con_mgr_1 = require("../../pi/net/ui/con_mgr");
var root_1 = require("../../pi/ui/root");
var genmnemonic_1 = require("../core/genmnemonic");
var globalWallet_1 = require("../core/globalWallet");
var dataCenter_1 = require("../store/dataCenter");
var interface_1 = require("../store/interface");
var parse_1 = require("../store/parse");
var store_1 = require("../store/store");
var constants_1 = require("../utils/constants");
var toolMessages_1 = require("../utils/toolMessages");
var tools_1 = require("../utils/tools");
exports.conIp = pi_modules.store.exports.severIp || '127.0.0.1';
// export const conPort = '8080';
exports.conPort = pi_modules.store.exports.severPort || '80';
// 分享链接前缀
// export const sharePerUrl = `http://share.kupay.io:8080/wallet/app/boot/share.html`;
exports.sharePerUrl = "http://127.0.0.1:80/wallet/app/boot/share.html";
/**
 * 通用的异步通信
 */
exports.requestAsync = function (msg) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", new Promise(function (resolve, reject) {
                            con_mgr_1.request(msg, function (resp) {
                                if (resp.type) {
                                    console.log("\u9519\u8BEF\u4FE1\u606F\u4E3A" + resp.type);
                                    reject(resp);
                                } else if (resp.result !== 1) {
                                    toolMessages_1.showError(resp.result);
                                    reject(resp);
                                } else {
                                    resolve(resp);
                                }
                            });
                        }));

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
/**
 * 验证登录的异步通信
 */
exports.requestLogined = function (msg) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var wallet, passwd, wlt, signStr, msgLogin, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (!(store_1.find('loginState') === interface_1.LoginState.logined)) {
                            _context2.next = 4;
                            break;
                        }

                        return _context2.abrupt("return", exports.requestAsync(msg));

                    case 4:
                        wallet = store_1.find('curWallet');
                        passwd = '';

                        if (store_1.find('hashMap', wallet.walletId)) {
                            _context2.next = 12;
                            break;
                        }

                        _context2.next = 9;
                        return tools_1.popPswBox();

                    case 9:
                        passwd = _context2.sent;

                        if (passwd) {
                            _context2.next = 12;
                            break;
                        }

                        return _context2.abrupt("return");

                    case 12:
                        _context2.next = 14;
                        return globalWallet_1.GlobalWallet.createWlt('ETH', passwd, wallet, 0);

                    case 14:
                        wlt = _context2.sent;
                        signStr = genmnemonic_1.sign(dataCenter_1.dataCenter.getConRandom(), wlt.exportPrivateKey());
                        msgLogin = { type: 'login', param: { sign: signStr } };

                        store_1.updateStore('loginState', interface_1.LoginState.logining);
                        _context2.next = 20;
                        return exports.requestAsync(msgLogin);

                    case 20:
                        res = _context2.sent;

                        if (!(res.result === 1)) {
                            _context2.next = 24;
                            break;
                        }

                        store_1.updateStore('loginState', interface_1.LoginState.logined);
                        return _context2.abrupt("return", exports.requestAsync(msg));

                    case 24:
                        store_1.updateStore('loginState', interface_1.LoginState.logerror);
                        return _context2.abrupt("return");

                    case 26:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
};
/**
 * 开启连接并获取验证随机数
 */
exports.openAndGetRandom = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var wallet, oldUser, gwlt;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        wallet = store_1.find('curWallet');

                        if (wallet) {
                            _context3.next = 3;
                            break;
                        }

                        return _context3.abrupt("return");

                    case 3:
                        oldUser = dataCenter_1.dataCenter.getUser();

                        if (!(oldUser === wallet.walletId)) {
                            _context3.next = 6;
                            break;
                        }

                        return _context3.abrupt("return");

                    case 6:
                        gwlt = globalWallet_1.GlobalWallet.fromJSON(wallet.gwlt);

                        if (!oldUser) {
                            _context3.next = 12;
                            break;
                        }

                        con_mgr_1.closeCon();
                        dataCenter_1.dataCenter.setUser(wallet.walletId);
                        dataCenter_1.dataCenter.setUserPublicKey(gwlt.publicKey);
                        return _context3.abrupt("return");

                    case 12:
                        con_mgr_1.setUrl("ws://" + exports.conIp + ":2081");
                        dataCenter_1.dataCenter.setUser(wallet.walletId);
                        dataCenter_1.dataCenter.setUserPublicKey(gwlt.publicKey);
                        return _context3.abrupt("return", doOpen());

                    case 16:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
};
var doOpen = function doOpen() {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        return _context6.abrupt("return", new Promise(function (resolve, reject) {
                            con_mgr_1.open(function (con) {
                                return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                        while (1) {
                                            switch (_context4.prev = _context4.next) {
                                                case 0:
                                                    console.log('----------------------', con);
                                                    _context4.prev = 1;
                                                    _context4.next = 4;
                                                    return exports.getRandom();

                                                case 4:
                                                    resolve(true);
                                                    _context4.next = 10;
                                                    break;

                                                case 7:
                                                    _context4.prev = 7;
                                                    _context4.t0 = _context4["catch"](1);

                                                    reject(false);

                                                case 10:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }
                                    }, _callee4, this, [[1, 7]]);
                                }));
                            }, function (result) {
                                console.log("open\u9519\u8BEF\u4FE1\u606F\u4E3A" + result);
                                reject(result);
                            }, function () {
                                return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                        while (1) {
                                            switch (_context5.prev = _context5.next) {
                                                case 0:
                                                    store_1.updateStore('loginState', interface_1.LoginState.init);
                                                    _context5.prev = 1;
                                                    _context5.next = 4;
                                                    return doOpen();

                                                case 4:
                                                    resolve(true);
                                                    _context5.next = 10;
                                                    break;

                                                case 7:
                                                    _context5.prev = 7;
                                                    _context5.t0 = _context5["catch"](1);

                                                    reject(false);

                                                case 10:
                                                case "end":
                                                    return _context5.stop();
                                            }
                                        }
                                    }, _callee5, this, [[1, 7]]);
                                }));
                            });
                        }));

                    case 1:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));
};
/**
 * 获取随机数
 */
exports.getRandom = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var msg, resp;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        msg = { type: 'get_random', param: { account: dataCenter_1.dataCenter.getUser().slice(2), pk: "04" + dataCenter_1.dataCenter.getUserPublicKey() } };
                        _context7.next = 3;
                        return exports.requestAsync(msg);

                    case 3:
                        resp = _context7.sent;

                        dataCenter_1.dataCenter.setConRandom(resp.rand);
                        dataCenter_1.dataCenter.setConUid(resp.uid);
                        exports.getCloudBalance();

                    case 7:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));
};
/**
 * 获取所有的货币余额
 */
exports.getCloudBalance = function () {
    var msg = { type: 'wallet/account@get', param: { list: "[" + interface_1.CurrencyType.KT + ", " + interface_1.CurrencyType.ETH + "]" } };
    exports.requestAsync(msg).then(function (balanceInfo) {
        // console.log('balanceInfo', balanceInfo);
        store_1.updateStore('cloudBalance', parse_1.parseCloudBalance(balanceInfo));
    });
};
/**
 * 获取指定类型的货币余额
 */
exports.getBalance = function (currencyType) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var msg;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        msg = { type: 'wallet/account@get', param: { list: "[" + currencyType + "]" } };

                        exports.requestAsync(msg).then(function (r) {
                            // todo 这里更新余额
                        });

                    case 2:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));
};
/**
 * 获取分红汇总信息
 */
exports.getDividend = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var msg, data, num, yearIncome;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_bonus_total', param: {} };
                        _context9.next = 3;
                        return exports.getBonusHistory();

                    case 3:
                        data = _context9.sent;
                        num = data.value !== '' ? globalWallet_1.wei2Eth(data.value[0][1]) : 0;
                        yearIncome = (num * 365 / 7).toFixed(4);

                        exports.requestAsync(msg).then(function (data) {
                            var dividend = {
                                totalDivid: globalWallet_1.wei2Eth(data.value[0]),
                                totalDays: data.value[1],
                                thisDivid: globalWallet_1.wei2Eth(data.value[2]),
                                yearIncome: yearIncome
                            };
                            store_1.updateStore('dividTotal', dividend);
                        });

                    case 7:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));
};
/**
 * 获取后台发起分红历史记录
 */
exports.getBonusHistory = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var msg;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_bonus_history', param: {} };
                        return _context10.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, this);
    }));
};
/**
 * 获取挖矿汇总信息
 */
exports.getMining = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var msg;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_mine_total', param: {} };

                        exports.requestAsync(msg).then(function (data) {
                            var totalNum = tools_1.kpt2kt(data.mine_total);
                            var holdNum = tools_1.kpt2kt(data.mines);
                            var today = tools_1.kpt2kt(data.today);
                            var nowNum = (totalNum - holdNum + today) * 0.25 - today; // 今日可挖数量为矿山剩余量的0.25减去今日已挖
                            if (nowNum <= 0) {
                                nowNum = 0; // 如果今日可挖小于等于0，表示现在不能挖
                            } else if (totalNum - holdNum > 100) {
                                nowNum = nowNum < 100 && totalNum - holdNum > 100 ? 100 : nowNum; // 如果今日可挖小于100，且矿山剩余量大于100，则今日可挖100
                            } else {
                                nowNum = totalNum - holdNum; // 如果矿山剩余量小于100，则本次挖完所有剩余量
                            }
                            var mining = {
                                totalNum: totalNum,
                                thisNum: nowNum,
                                holdNum: holdNum
                            };
                            store_1.updateStore('miningTotal', mining);
                        });

                    case 2:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, this);
    }));
};
/**
 * 获取挖矿历史记录
 */
exports.getMiningHistory = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var msg;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_pool_detail', param: {} };

                        exports.requestAsync(msg).then(function (data) {
                            var list = [];
                            for (var i = 0; i < data.value.length; i++) {
                                list.push({
                                    num: tools_1.kpt2kt(data.value[i][0]),
                                    total: tools_1.kpt2kt(data.value[i][1]),
                                    time: tools_1.transDate(new Date(data.value[i][2]))
                                });
                            }
                            store_1.updateStore('miningHistory', list);
                        });

                    case 2:
                    case "end":
                        return _context12.stop();
                }
            }
        }, _callee12, this);
    }));
};
// ==========================================红包start
/**
 * 获取邀请红包码
 */
exports.getInviteCode = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var msg;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
                switch (_context13.prev = _context13.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_invite_code', param: {} };
                        return _context13.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context13.stop();
                }
            }
        }, _callee13, this);
    }));
};
/**
 * 兑换邀请红包
 */
exports.inputInviteCdKey = function (code) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var msg;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
                switch (_context14.prev = _context14.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@input_cd_key', param: { code: code } };
                        _context14.prev = 1;
                        _context14.next = 4;
                        return exports.requestLogined(msg);

                    case 4:
                        return _context14.abrupt("return", []);

                    case 7:
                        _context14.prev = 7;
                        _context14.t0 = _context14["catch"](1);

                        if (_context14.t0 && _context14.t0.result) {
                            toolMessages_1.showError(_context14.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context14.t0);
                        }
                        return _context14.abrupt("return");

                    case 11:
                    case "end":
                        return _context14.stop();
                }
            }
        }, _callee14, this, [[1, 7]]);
    }));
};
/**
 * 获取邀请红包领取明细
 */
exports.getInviteCodeDetail = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
        var msg;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
                switch (_context15.prev = _context15.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_invite_code_detail', param: {} };
                        return _context15.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context15.stop();
                }
            }
        }, _callee15, this);
    }));
};
/**
 * 发送红包
 * @param rtype 红包类型
 * @param ctype 货币类型
 * @param totalAmount 总金额
 * @param count 红包数量
 * @param lm 留言
 */
exports.sendRedEnvlope = function (rtype, ctype, totalAmount, redEnvelopeNumber, lm) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
                switch (_context16.prev = _context16.next) {
                    case 0:
                        msg = {
                            type: 'emit_red_bag',
                            param: {
                                type: rtype,
                                priceType: ctype,
                                totalPrice: tools_1.largeUnit2SmallUnitString(interface_1.CurrencyTypeReverse[ctype], totalAmount),
                                count: redEnvelopeNumber,
                                desc: lm
                            }
                        };
                        _context16.prev = 1;
                        _context16.next = 4;
                        return exports.requestLogined(msg);

                    case 4:
                        res = _context16.sent;
                        return _context16.abrupt("return", res.value);

                    case 8:
                        _context16.prev = 8;
                        _context16.t0 = _context16["catch"](1);

                        if (_context16.t0 && _context16.t0.result) {
                            toolMessages_1.showError(_context16.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context16.t0);
                        }
                        return _context16.abrupt("return");

                    case 12:
                    case "end":
                        return _context16.stop();
                }
            }
        }, _callee16, this, [[1, 8]]);
    }));
};
/**
 * 兑换红包
 */
exports.convertRedBag = function (cid) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
                switch (_context17.prev = _context17.next) {
                    case 0:
                        msg = { type: 'convert_red_bag', param: { cid: cid } };
                        _context17.prev = 1;
                        _context17.next = 4;
                        return exports.requestLogined(msg);

                    case 4:
                        res = _context17.sent;
                        return _context17.abrupt("return", res.value);

                    case 8:
                        _context17.prev = 8;
                        _context17.t0 = _context17["catch"](1);

                        if (_context17.t0 && _context17.t0.result) {
                            toolMessages_1.showError(_context17.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context17.t0);
                        }
                        return _context17.abrupt("return");

                    case 12:
                    case "end":
                        return _context17.stop();
                }
            }
        }, _callee17, this, [[1, 8]]);
    }));
};
/**
 * 获取红包留言
 * @param cid 兑换码
 */
exports.queryRedBagDesc = function (cid) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        var msg;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
                switch (_context18.prev = _context18.next) {
                    case 0:
                        msg = {
                            type: 'query_red_bag_desc',
                            param: {
                                cid: cid
                            }
                        };
                        return _context18.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context18.stop();
                }
            }
        }, _callee18, this);
    }));
};
/**
 * 查询发送红包记录
 */
exports.querySendRedEnvelopeRecord = function (start) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
                switch (_context19.prev = _context19.next) {
                    case 0:
                        msg = void 0;

                        if (start) {
                            msg = {
                                type: 'query_emit_log',
                                param: {
                                    start: start,
                                    count: constants_1.recordNumber
                                }
                            };
                        } else {
                            msg = {
                                type: 'query_emit_log',
                                param: {
                                    count: constants_1.recordNumber
                                }
                            };
                        }
                        _context19.prev = 2;
                        _context19.next = 5;
                        return exports.requestAsync(msg);

                    case 5:
                        res = _context19.sent;
                        return _context19.abrupt("return", res.value);

                    case 9:
                        _context19.prev = 9;
                        _context19.t0 = _context19["catch"](2);

                        if (_context19.t0 && _context19.t0.result) {
                            toolMessages_1.showError(_context19.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context19.t0);
                        }
                        return _context19.abrupt("return");

                    case 13:
                    case "end":
                        return _context19.stop();
                }
            }
        }, _callee19, this, [[2, 9]]);
    }));
};
/**
 * 查询红包兑换记录
 */
exports.queryConvertLog = function (start) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
                switch (_context20.prev = _context20.next) {
                    case 0:
                        msg = void 0;

                        if (start) {
                            msg = {
                                type: 'query_convert_log',
                                param: {
                                    start: start,
                                    count: constants_1.recordNumber
                                }
                            };
                        } else {
                            msg = {
                                type: 'query_convert_log',
                                param: {
                                    count: constants_1.recordNumber
                                }
                            };
                        }
                        _context20.prev = 2;
                        _context20.next = 5;
                        return exports.requestAsync(msg);

                    case 5:
                        res = _context20.sent;
                        return _context20.abrupt("return", res.value);

                    case 9:
                        _context20.prev = 9;
                        _context20.t0 = _context20["catch"](2);

                        if (_context20.t0 && _context20.t0.result) {
                            toolMessages_1.showError(_context20.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context20.t0);
                        }
                        return _context20.abrupt("return");

                    case 13:
                    case "end":
                        return _context20.stop();
                }
            }
        }, _callee20, this, [[2, 9]]);
    }));
};
/**
 * 查询某个红包兑换详情
 */
exports.queryDetailLog = function (rid) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
                switch (_context21.prev = _context21.next) {
                    case 0:
                        msg = {
                            type: 'query_detail_log',
                            param: {
                                uid: dataCenter_1.dataCenter.getConUid(),
                                rid: rid
                            }
                        };
                        _context21.prev = 1;
                        _context21.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context21.sent;
                        return _context21.abrupt("return", res.value);

                    case 8:
                        _context21.prev = 8;
                        _context21.t0 = _context21["catch"](1);

                        if (_context21.t0 && _context21.t0.result) {
                            toolMessages_1.showError(_context21.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context21.t0);
                        }
                        return _context21.abrupt("return");

                    case 12:
                    case "end":
                        return _context21.stop();
                }
            }
        }, _callee21, this, [[1, 8]]);
    }));
};
// ==========================================红包end
/**
 * 挖矿
 */
exports.getAward = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
        var msg;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
                switch (_context22.prev = _context22.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_award', param: {} };
                        return _context22.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context22.stop();
                }
            }
        }, _callee22, this);
    }));
};
/**
 * 矿山增加记录
 */
exports.getMineDetail = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
        var msg;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
                switch (_context23.prev = _context23.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@grant_detail', param: {} };

                        exports.requestAsync(msg).then(function (detail) {
                            var list = parse_1.parseMineDetail(detail);
                            store_1.updateStore('addMine', list);
                        });

                    case 2:
                    case "end":
                        return _context23.stop();
                }
            }
        }, _callee23, this);
    }));
};
/**
 * 获取分红历史记录
 */
exports.getDividHistory = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
        var msg;
        return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
                switch (_context24.prev = _context24.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_bonus_info', param: {} };

                        exports.requestAsync(msg).then(function (data) {
                            var list = [];
                            for (var i = 0; i < data.value.length; i++) {
                                list.push({
                                    num: globalWallet_1.wei2Eth(data.value[i][1][0]),
                                    total: globalWallet_1.wei2Eth(data.value[i][1][1]),
                                    time: tools_1.transDate(new Date(data.value[i][0]))
                                });
                            }
                            store_1.updateStore('dividHistory', list);
                        });

                    case 2:
                    case "end":
                        return _context24.stop();
                }
            }
        }, _callee24, this);
    }));
};
/**
 * 设置客户端数据
 */
exports.setData = function (param) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
        var msg;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
                switch (_context25.prev = _context25.next) {
                    case 0:
                        msg = { type: 'wallet/data@set', param: param };
                        return _context25.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context25.stop();
                }
            }
        }, _callee25, this);
    }));
};
/**
 * 获取客户端数据
 */
exports.getData = function (key) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
        var msg;
        return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
                switch (_context26.prev = _context26.next) {
                    case 0:
                        msg = { type: 'wallet/data@get', param: { key: key } };
                        return _context26.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context26.stop();
                }
            }
        }, _callee26, this);
    }));
};
/**
 * 设置用户基础信息
 */
exports.setUserInfo = function (value) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
        var msg;
        return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
                switch (_context27.prev = _context27.next) {
                    case 0:
                        msg = { type: 'wallet/user@set_info', param: { value: value } };
                        return _context27.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context27.stop();
                }
            }
        }, _callee27, this);
    }));
};
/**
 * 批量获取用户信息
 */
exports.getUserInfo = function (uids) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
        var msg;
        return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) {
                switch (_context28.prev = _context28.next) {
                    case 0:
                        msg = { type: 'wallet/user@get_infos', param: { list: "[" + uids.toString() + "]" } };
                        return _context28.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context28.stop();
                }
            }
        }, _callee28, this);
    }));
};
/**
 * 处理聊天
 */
exports.doChat = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
        var msg;
        return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
                switch (_context29.prev = _context29.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@chat', param: {} };

                        exports.requestAsync(msg).then(function (r) {
                            // 通信成功
                        });

                    case 2:
                    case "end":
                        return _context29.stop();
                }
            }
        }, _callee29, this);
    }));
};
/**
 * 获取指定货币流水
 */
exports.getAccountDetail = function (coin) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
        var msg;
        return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
                switch (_context30.prev = _context30.next) {
                    case 0:
                        msg = { type: 'wallet/account@get_detail', param: { coin: coin } };

                        exports.requestAsync(msg).then(function (r) {
                            if (!r.value || r.value.length <= 0) return;
                            console.log('accountDetail', r.value);
                            var detail = parse_1.parseCloudAccountDetail(coin, r.value);
                            store_1.updateStore('accountDetail', store_1.getBorn('accountDetail').set(coin, detail));
                        });

                    case 2:
                    case "end":
                        return _context30.stop();
                }
            }
        }, _callee30, this);
    }));
};
/**
 * 获取矿山排名列表
 */
exports.getMineRank = function (num) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
        var msg;
        return regeneratorRuntime.wrap(function _callee31$(_context31) {
            while (1) {
                switch (_context31.prev = _context31.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@mine_top', param: { num: num } };

                        exports.requestAsync(msg).then(function (data) {
                            var mineData = parse_1.parseMineRank(data);
                            store_1.updateStore('mineRank', mineData);
                        });

                    case 2:
                    case "end":
                        return _context31.stop();
                }
            }
        }, _callee31, this);
    }));
};
/**
 * 获取挖矿排名列表
 */
exports.getMiningRank = function (num) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
        var msg;
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) {
                switch (_context32.prev = _context32.next) {
                    case 0:
                        msg = { type: 'wallet/cloud@get_mine_top', param: { num: num } };

                        exports.requestAsync(msg).then(function (data) {
                            var miningData = parse_1.parseMiningRank(data);
                            store_1.updateStore('miningRank', miningData);
                        });

                    case 2:
                    case "end":
                        return _context32.stop();
                }
            }
        }, _callee32, this);
    }));
};
/**
 * 发送验证码
 */
exports.sendCode = function (phone, num) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
        var msg;
        return regeneratorRuntime.wrap(function _callee33$(_context33) {
            while (1) {
                switch (_context33.prev = _context33.next) {
                    case 0:
                        msg = { type: 'wallet/sms@send_sms_code', param: { phone: phone, num: num, name: '钱包' } };
                        return _context33.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context33.stop();
                }
            }
        }, _callee33, this);
    }));
};
/**
 * 注册手机
 */
exports.regPhone = function (phone, code) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
        var msg;
        return regeneratorRuntime.wrap(function _callee34$(_context34) {
            while (1) {
                switch (_context34.prev = _context34.next) {
                    case 0:
                        msg = { type: 'wallet/user@reg_phone', param: { phone: phone, code: code } };
                        return _context34.abrupt("return", exports.requestAsync(msg).catch(function (error) {
                            console.log(error);
                            if (error.type === -300) {
                                root_1.popNew('app-components-message-message', { itype: 'error', center: true, content: "\u9A8C\u8BC1\u7801\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6" });
                            } else {
                                root_1.popNew('app-components-message-message', { itype: 'error', center: true, content: "\u9519\u8BEF" + error.type });
                            }
                        }));

                    case 2:
                    case "end":
                        return _context34.stop();
                }
            }
        }, _callee34, this);
    }));
};
/**
 * 获取代理
 */
exports.getProxy = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
        var msg;
        return regeneratorRuntime.wrap(function _callee35$(_context35) {
            while (1) {
                switch (_context35.prev = _context35.next) {
                    case 0:
                        msg = { type: 'wallet/proxy@get_proxy', param: {} };
                        return _context35.abrupt("return", exports.requestAsync(msg));

                    case 2:
                    case "end":
                        return _context35.stop();
                }
            }
        }, _callee35, this);
    }));
};
/**
 * 矿山增加项目跳转详情
 */
exports.getMineItemJump = function (itemJump) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
        return regeneratorRuntime.wrap(function _callee36$(_context36) {
            while (1) {
                switch (_context36.prev = _context36.next) {
                    case 0:
                        store_1.updateStore('mineItemJump', itemJump);

                    case 1:
                    case "end":
                        return _context36.stop();
                }
            }
        }, _callee36, this);
    }));
};
// ===============================充值提现
/**
 * 获取服务端钱包地址
 */
exports.getBankAddr = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee37$(_context37) {
            while (1) {
                switch (_context37.prev = _context37.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@get_bank_addr',
                            param: {}
                        };
                        _context37.prev = 1;
                        _context37.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context37.sent;
                        return _context37.abrupt("return", res.value);

                    case 8:
                        _context37.prev = 8;
                        _context37.t0 = _context37["catch"](1);

                        if (_context37.t0 && _context37.t0.result) {
                            toolMessages_1.showError(_context37.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context37.t0);
                        }
                        return _context37.abrupt("return");

                    case 12:
                    case "end":
                        return _context37.stop();
                }
            }
        }, _callee37, this, [[1, 8]]);
    }));
};
/**
 * 向服务器发起充值请求
 */
exports.rechargeToServer = function (fromAddr, toAddr, tx, nonce, gas, value) {
    var coin = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 101;
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee38$(_context38) {
            while (1) {
                switch (_context38.prev = _context38.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@pay',
                            param: {
                                from: fromAddr,
                                to: toAddr,
                                tx: tx,
                                nonce: nonce,
                                gas: gas,
                                value: value,
                                coin: coin
                            }
                        };
                        _context38.prev = 1;
                        _context38.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context38.sent;

                        console.log('rechargeToServer', res);
                        return _context38.abrupt("return", true);

                    case 9:
                        _context38.prev = 9;
                        _context38.t0 = _context38["catch"](1);

                        if (_context38.t0 && _context38.t0.result) {
                            toolMessages_1.showError(_context38.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context38.t0);
                        }
                        return _context38.abrupt("return", false);

                    case 13:
                    case "end":
                        return _context38.stop();
                }
            }
        }, _callee38, this, [[1, 9]]);
    }));
};
/**
 * 提现
 */
exports.withdrawFromServer = function (toAddr, coin, value) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee39$(_context39) {
            while (1) {
                switch (_context39.prev = _context39.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@to_cash',
                            param: {
                                to: toAddr,
                                coin: coin,
                                value: value
                            }
                        };
                        _context39.prev = 1;
                        _context39.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context39.sent;

                        console.log('withdrawFromServer', res);
                        return _context39.abrupt("return", true);

                    case 9:
                        _context39.prev = 9;
                        _context39.t0 = _context39["catch"](1);

                        if (_context39.t0 && _context39.t0.result) {
                            toolMessages_1.showError(_context39.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context39.t0);
                        }
                        return _context39.abrupt("return", false);

                    case 13:
                    case "end":
                        return _context39.stop();
                }
            }
        }, _callee39, this, [[1, 9]]);
    }));
};
/**
 * 充值历史记录
 */
exports.getRechargeLogs = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee40$(_context40) {
            while (1) {
                switch (_context40.prev = _context40.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@pay_log',
                            param: {}
                        };
                        _context40.prev = 1;
                        _context40.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context40.sent;

                        store_1.updateStore('rechargeLogs', parse_1.parseRechargeWithdrawalLog(res.value));
                        _context40.next = 12;
                        break;

                    case 8:
                        _context40.prev = 8;
                        _context40.t0 = _context40["catch"](1);

                        if (_context40.t0 && _context40.t0.result) {
                            toolMessages_1.showError(_context40.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context40.t0);
                        }
                        return _context40.abrupt("return");

                    case 12:
                    case "end":
                        return _context40.stop();
                }
            }
        }, _callee40, this, [[1, 8]]);
    }));
};
/**
 * 提现历史记录
 */
exports.getWithdrawLogs = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee41$(_context41) {
            while (1) {
                switch (_context41.prev = _context41.next) {
                    case 0:
                        msg = {
                            type: 'wallet/bank@to_cash_log',
                            param: {}
                        };
                        _context41.prev = 1;
                        _context41.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context41.sent;

                        store_1.updateStore('withdrawLogs', parse_1.parseRechargeWithdrawalLog(res.value));
                        _context41.next = 12;
                        break;

                    case 8:
                        _context41.prev = 8;
                        _context41.t0 = _context41["catch"](1);

                        if (_context41.t0 && _context41.t0.result) {
                            toolMessages_1.showError(_context41.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context41.t0);
                        }
                        return _context41.abrupt("return");

                    case 12:
                    case "end":
                        return _context41.stop();
                }
            }
        }, _callee41, this, [[1, 8]]);
    }));
};
/**
 * 获取理财列表
 */
exports.getProductList = function () {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee42$(_context42) {
            while (1) {
                switch (_context42.prev = _context42.next) {
                    case 0:
                        msg = {
                            type: 'wallet/manage_money@get_product_list',
                            param: {}
                        };
                        _context42.prev = 1;
                        _context42.next = 4;
                        return exports.requestAsync(msg);

                    case 4:
                        res = _context42.sent;

                        console.log('getProductList', res);
                        return _context42.abrupt("return", res);

                    case 9:
                        _context42.prev = 9;
                        _context42.t0 = _context42["catch"](1);

                        if (_context42.t0 && _context42.t0.result) {
                            toolMessages_1.showError(_context42.t0.result);
                        } else {
                            toolMessages_1.doErrorShow(_context42.t0);
                        }
                        return _context42.abrupt("return", []);

                    case 13:
                    case "end":
                        return _context42.stop();
                }
            }
        }, _callee42, this, [[1, 9]]);
    }));
};
})