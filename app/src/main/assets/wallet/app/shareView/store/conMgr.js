_$define("app/shareView/store/conMgr", function (require, exports, module){
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
var con_mgr_1 = require("../../../pi/net/ui/con_mgr");
/**
 * 连接管理
 */
// 货币类型
var CurrencyType;
(function (CurrencyType) {
    CurrencyType[CurrencyType["KT"] = 100] = "KT";
    CurrencyType[CurrencyType["ETH"] = 101] = "ETH";
})(CurrencyType = exports.CurrencyType || (exports.CurrencyType = {}));
// 枚举货币类型
exports.CurrencyTypeReverse = {
    100: 'KT',
    101: 'ETH'
};
// 不同红包类型
var RedEnvelopeType;
(function (RedEnvelopeType) {
    RedEnvelopeType["Normal"] = "00";
    RedEnvelopeType["Random"] = "01";
    RedEnvelopeType["Invite"] = "99";
})(RedEnvelopeType = exports.RedEnvelopeType || (exports.RedEnvelopeType = {}));
var requestAsync = function requestAsync(msg) {
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
                                } else if (resp.result !== undefined) {
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
// 普通红包开红包
exports.takeRedEnvelope = function (rid) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var msg, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        msg = {
                            type: 'take_red_bag',
                            param: {
                                rid: rid
                            }
                        };
                        // tslint:disable-next-line:no-unnecessary-local-variable

                        _context2.next = 3;
                        return requestAsync(msg);

                    case 3:
                        res = _context2.sent;
                        return _context2.abrupt("return", res);

                    case 5:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
};
})