_$define("app/utils/constants", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../core/config");
/**
 * 一些常用常量
 */
// 钱包数量最大限制
exports.walletNumLimit = 10;
// 记录默认获取数量
exports.recordNumber = 10;
// 钱包所支持的货币列表测试网络
exports.supportCurrencyListTest = [{ name: 'ETH', description: 'Ethereum' }, { name: 'BTC', description: 'Bit coin' }, { name: 'YNC', description: 'YiNeng Ltd' }];
// 钱包所支持的货币列表主网络
exports.supportCurrencyListMain = [{ name: 'ETH', description: 'Ethereum' }, { name: 'BTC', description: 'Bit coin' }, { name: 'BNB', description: 'BNB' }, { name: 'VEN', description: 'VeChain' }, { name: 'OMG', description: 'OmiseGO' }, { name: 'ZRX', description: 'ZRX' }, { name: 'MKR', description: 'Maker' }, { name: 'BAT', description: 'BAT' }, { name: 'XUC', description: 'ExchangeUnion' }, { name: 'REP', description: 'Reputation' }, { name: 'BTM', description: 'Bytom' }, { name: 'GNT', description: 'Golem' }, { name: 'PPT', description: 'Populous' }, { name: 'SNT', description: 'StatusNetwork' }, { name: 'AION', description: 'AION' }, { name: 'FUN', description: 'FunFair' }, { name: 'KNC', description: 'KyberNetwork' }, { name: 'MCO', description: 'Monaco' }, { name: 'POWR', description: 'PowerLedger' }, { name: 'MANA', description: 'Decentraland' }, { name: 'KIN', description: 'Kin' }, { name: 'VERI', description: 'Veritaseum' }, { name: 'HEALP', description: 'HEALP' }];
// 钱包所支持的货币列表
exports.supportCurrencyList = config_1.config.dev_mode === 'dev' ? exports.supportCurrencyListTest : exports.supportCurrencyListMain;
// 默认显示得ETH代币
exports.defaultEthToken = [];
// 默认显示货币列表
exports.defalutShowCurrencys = ['ETH', 'BTC'];
//
exports.strength = 128;
// todo 测试网络与正式网络切换
// btc网络
exports.btcNetwork = config_1.config.dev_mode === 'dev' ? 'testnet' : 'mainnet';
// 语言
exports.lang = 'english';
// 默认货币汇率测试网络
exports.defaultExchangeRateJsonTest = {
    ETH: { CNY: 3337.01, USD: 517.42 },
    BTC: { CNY: 42868.55, USD: 6598.71 },
    YNC: { CNY: 100, USD: 15.2625 },
    KT: { CNY: 0.03, USD: 0.19 }
};
// 默认货币汇率主网络
exports.defaultExchangeRateJsonMain = {
    ETH: { CNY: 3337.01, USD: 517.42 },
    BTC: { CNY: 42868.55, USD: 6598.71 },
    KT: { CNY: 0.03, USD: 0.19 },
    BNB: { CNY: 100, USD: 15.2625 },
    VEN: { CNY: 100, USD: 15.2625 },
    OMG: { CNY: 100, USD: 15.2625 },
    ZRX: { CNY: 100, USD: 15.2625 },
    MKR: { CNY: 100, USD: 15.2625 },
    BAT: { CNY: 100, USD: 15.2625 },
    XUC: { CNY: 100, USD: 15.2625 },
    REP: { CNY: 100, USD: 15.2625 },
    BTM: { CNY: 100, USD: 15.2625 },
    GNT: { CNY: 100, USD: 15.2625 },
    PPT: { CNY: 100, USD: 15.2625 },
    SNT: { CNY: 100, USD: 15.2625 },
    AION: { CNY: 100, USD: 15.2625 },
    FUN: { CNY: 100, USD: 15.2625 },
    KNC: { CNY: 100, USD: 15.2625 },
    MCO: { CNY: 100, USD: 15.2625 },
    POWR: { CNY: 100, USD: 15.2625 },
    MANA: { CNY: 100, USD: 15.2625 },
    KIN: { CNY: 100, USD: 15.2625 },
    VERI: { CNY: 100, USD: 15.2625 },
    HEALP: { CNY: 100, USD: 15.2625 }
};
// 默认货币汇率
exports.defaultExchangeRateJson = config_1.config.dev_mode === 'dev' ? exports.defaultExchangeRateJsonTest : exports.defaultExchangeRateJsonMain;
// eth代币transfer交易编码前缀
exports.ethTokenTransferCode = '0xa9059cbb';
// 导航页广告
exports.guidePages = [{ imgUrl: 'img_security1.png', text: '' }, { imgUrl: 'img_security2.png', text: '' }, { imgUrl: 'img_security3.png', text: '' }];
// 锁屏密码盐值
exports.lockScreenSalt = 'salt';
// shapeshift api public key
// tslint:disable-next-line:max-line-length
exports.shapeshiftApiPublicKey = '339a363550d4490fb4a0efae308440f4386c7d99ecf0f572584adc0400658b5799e3107eb0fe573c438e6d98b68dbe2ade2873aa7ac2fde8f74ab1be0750fdb2';
// shapeshift api private key
// tslint:disable-next-line:max-line-length
exports.shapeshiftApiPrivateKey = 'c98210f4568b04d3f84c5404f8e5be98353849138ed26b3e2723223257d3cbb8bb5cba5060b7c4d44e746342a2eb43e26b9bb5827588d9ed3e712e85d35f054c';
// 如果shapeshift交易记录返回[],请求的最多次数,超过默认没有交易记录
exports.shapeshiftTransactionRequestNumber = 5;
// 发红包所支持的货币
exports.redEnvelopeSupportCurrency = ['KT', 'ETH'];
// 提现服务费比率
exports.withdrawServiceCharge = 0.03;
// 默认ETH gasPrice
exports.gasPrice = 5000000000;
// 默认ETH gasLimit
exports.gasLimit = 21000;
})