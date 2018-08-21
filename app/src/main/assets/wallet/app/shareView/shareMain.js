_$define("app/shareView/shareMain", function (require, exports, module){
"use strict";
/**
 * @file 入口文件，用于登录，唤起hall界面
 * @author henk<speoth@163.com>
 */

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
var con_mgr_1 = require("../../pi/net/ui/con_mgr");
var root_1 = require("../../pi/ui/root");
var forelet_1 = require("../../pi/widget/forelet");
var util_1 = require("../../pi/widget/util");
var conMgr_1 = require("./store/conMgr");
var tools_1 = require("./utils/tools");
// ============================== 导出
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');
exports.run = function (cb) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        util_1.addWidget(document.body, 'pi-ui-root');
                        _context.next = 3;
                        return openSocket();

                    case 3:
                        popNewPage();
                        // eth代币精度初始化
                        if (cb) cb();
                        // test();

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
var openSocket = function openSocket() {
    return new Promise(function (resolve, reject) {
        con_mgr_1.setUrl("ws://127.0.0.1:2081");
        con_mgr_1.open(function () {
            resolve();
        }, function () {
            reject();
        });
    });
};
var popNewPage = function popNewPage() {
    var takeRedBag = tools_1.getLocalStorage('takeRedBag');
    if (!takeRedBag) {
        root_1.popNew('app-shareView-redEnvelope-openRedEnvelope');
        return;
    }
    var itype = parseUrlParams(window.location.search, 'type');
    // 普通红包
    if (itype !== conMgr_1.RedEnvelopeType.Invite) {
        var rid = parseUrlParams(window.location.search, 'rid');
        if (takeRedBag.rid === rid) {
            root_1.popNew('app-shareView-redEnvelope-redEnvelopeDetails', Object.assign({}, takeRedBag));
        } else {
            root_1.popNew('app-shareView-redEnvelope-openRedEnvelope');
        }
    } else {
        var cid = parseUrlParams(window.location.search, 'cid');
        if (takeRedBag.cid === cid) {
            root_1.popNew('app-shareView-redEnvelope-redEnvelopeDetails', Object.assign({}, takeRedBag));
        } else {
            root_1.popNew('app-shareView-redEnvelope-openRedEnvelope');
        }
    }
};
var parseUrlParams = function parseUrlParams(search, key) {
    var ret = search.match(new RegExp("(\\?|&)" + key + "=(.*?)(&|$)"));
    return ret && decodeURIComponent(ret[2]);
};
})