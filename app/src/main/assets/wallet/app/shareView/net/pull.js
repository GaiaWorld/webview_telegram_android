_$define("app/shareView/net/pull", function (require, exports, module){
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
var root_1 = require("../../../pi/ui/root");
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
                                    var str = void 0;
                                    if (!str) {
                                        switch (resp.result) {
                                            case 600:
                                                str = '数据库错误';
                                                break;
                                            case 705:
                                                str = '红包余额必须大于1000';
                                                break;
                                            case 711:
                                                str = '兑换码不存在';
                                                break;
                                            case 712:
                                                str = '兑换码已兑换';
                                                break;
                                            case 713:
                                                str = '兑换码已过期';
                                                break;
                                            case 714:
                                                str = '已兑换该红包';
                                                break;
                                            case 2010:
                                                str = '无法兑换自己的兑换码';
                                                break;
                                            case -1:
                                                str = '无效的兑换码';
                                                break;
                                            case -2:
                                                str = '你已经兑换了同类型的兑换码';
                                                break;
                                            default:
                                                str = '出错啦';
                                        }
                                    }
                                    root_1.popNew('app-shareView-components-message', { itype: 'error', center: true, content: str });
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
})