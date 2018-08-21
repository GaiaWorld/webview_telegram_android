_$define("app/view/base/main", function (require, exports, module){
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
var root_1 = require("../../../pi/ui/root");
var forelet_1 = require("../../../pi/widget/forelet");
var util_1 = require("../../../pi/widget/util");
var api_1 = require("../../core/eth/api");
var tokens_1 = require("../../core/eth/tokens");
var wallet_1 = require("../../core/eth/wallet");
var genmnemonic_1 = require("../../core/genmnemonic");
var shapeshift_1 = require("../../exchange/shapeshift/shapeshift");
var dataCenter_1 = require("../../store/dataCenter");
var store_1 = require("../../store/store");
// ============================== 导出
exports.forelet = new forelet_1.Forelet();
exports.WIDGET_NAME = module.id.replace(/\//g, '-');
exports.run = function (cb) {
    util_1.addWidget(document.body, 'pi-ui-root');
    // 设置开发环境
    // eth代币精度初始化
    // 数据检查
    checkUpdate();
    // 初始化数据
    store_1.initStore();
    dataCenter_1.dataCenter.init();
    initEthTokenDecimals();
    // makepayment();
    // exchangeManage.init();
    // 打开界面
    // popNew('app-view-guidePages-privacyAgreement');
    /*  popNew('app-components-share-share', {
         shareType: ShareToPlatforms.TYPE_LINK,
         url:'http://www.kupay.io',
         title:'测试',
         content:'测试'
     }); */
    popNewPage();
    // popNew('app-view-guidePages-unlockScreen');
    // // 后台切前台
    backToFront();
    // popNew('app-view-redEnvelope-send-inviteRedEnvelope',{ amount:100,leaveMessage:'大吉大利',currencyName:'ETH' });
    // popNew('app-view-redEnvelope-receive-redEnvelopeDetails',{ amount:100,leaveMessage:'大吉大利',currencyName:'ETH' });
    // popNew('app-view-redEnvelope-receive-redEnvelopeRecord');
    // popNew('app-view-guidePages-setLockScreenScret',{ jump:true });
    // popNew('app-view-application-home', {}); 
    // popNew('app-view-mine-cloud-mining', {}); 
    // popNew('app-view-mine-FAQ-FAQ', {}); 
    if (cb) cb();
    // test();
};
/**
 * 界面入口
 */
var popNewPage = function popNewPage() {
    var readedPriAgr = store_1.find('readedPriAgr');
    if (readedPriAgr) {
        root_1.popNew('app-view-base-app');
        if (ifNeedUnlockScreen()) {
            root_1.popNew('app-view-guidePages-unlockScreen');
        }
    } else {
        root_1.popNew('app-view-guidePages-privacyAgreement');
    }
};
var checkUpdate = function checkUpdate() {
    // todo
};
// 0xf4750c579799634CBBD1F5EFa662abb828b6EfE7
// 0x940703fD0525f75190F84D62Ea578F1A5beF2172
// 0xDEadcA0CF78Caac23a59FfF4353b3D715e26C367
// 0xFeA9610a4C2fCDF63A1755384B42ff760dB68EFC
// tslint:disable-next-line:only-arrow-functions
/* function  test() {
    
} */
/**
 * 后台切换到前台
 */
var backToFront = function backToFront() {
    window.handle_app_lifecycle_listener = function (iType) {
        if (iType === 'onAppResumed' && ifNeedUnlockScreen()) {
            root_1.popNew('app-view-guidePages-unlockScreen');
        }
    };
};
// ============================== 立即执行
/**
 * eth代币精度初始化
 */
var initEthTokenDecimals = function initEthTokenDecimals() {
    var newTokenNames = checkHasNewTokens();
    if (newTokenNames.length === 0) return;
    newTokenNames.forEach(function (tokenName) {
        var decimalsCode = wallet_1.EthWallet.tokenOperations('decimals', tokenName);
        var api = new api_1.Api();
        api.ethCall(tokens_1.ERC20Tokens[tokenName], decimalsCode).then(function (r) {
            var ERC20TokenDecimals = store_1.find('ERC20TokenDecimals');
            ERC20TokenDecimals[tokenName] = Math.pow(10, parseInt(r, 16));
            store_1.updateStore('ERC20TokenDecimals', ERC20TokenDecimals);
        });
    });
};
/**
 * 检测是否有新增代币
 */
var checkHasNewTokens = function checkHasNewTokens() {
    var localTokenNames = Object.keys(store_1.find('ERC20TokenDecimals'));
    var tokenNames = Object.keys(tokens_1.ERC20Tokens);
    var newTokenNames = [];
    tokenNames.forEach(function (tokenName) {
        if (localTokenNames.indexOf(tokenName) < 0) {
            newTokenNames.push(tokenName);
        }
    });
    return newTokenNames;
};
/**
 * 是否需要解锁屏幕
 */
var ifNeedUnlockScreen = function ifNeedUnlockScreen() {
    var unlockScreen = document.querySelector('#unlock-screen');
    if (unlockScreen) return false;
    var ls = store_1.find('lockScreen');
    var lockScreenPsw = ls.psw;
    var openLockScreen = ls.open !== false;
    return lockScreenPsw && openLockScreen;
};
var test = function test() {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var msg, pubKey, signStr;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        msg = '111';
                        // tslint:disable-next-line:max-line-length

                        pubKey = '42c678868fe222f2acc0b05c93e554fee9b3f7a2a29ded93f6efcdc7b2b3e566353a6a8fa0943965ca906165d026de5d848e776dbaa2ecad632d0f98e7474a6e';
                        signStr = genmnemonic_1.sign(msg, 'ddc495b23b0f559b284e42d96604d6499dd8dc894250a99131529af592c15a4d');

                        console.log(msg, signStr, pubKey);
                        // const m = generate('english', 128);
                        // const r = getRandomValuesByMnemonic('english', m);
                        // console.log(m, r, toMnemonic('english', r));

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};
var testShapeShift = function testShapeShift() {
    var pair = 'btc_ltc';
    shapeshift_1.shapeshift.depositLimit(pair, function (err, limit) {
        console.log(limit); // => '4.41101872'
    });
    // console.log(shapeshift);
};
})