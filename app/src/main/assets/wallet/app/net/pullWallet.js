_$define("app/net/pullWallet", function (require, exports, module){
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
 * 主动向钱包通讯
 */
// ===================================================== 导入
var api_1 = require("../core/btc/api");
var api_2 = require("../core/eth/api");
var tokens_1 = require("../core/eth/tokens");
var wallet_1 = require("../core/eth/wallet");
var globalWallet_1 = require("../core/globalWallet");
var shapeshift_1 = require("../exchange/shapeshift/shapeshift");
var store_1 = require("../store/store");
var constants_1 = require("../utils/constants");
var toolMessages_1 = require("../utils/toolMessages");
var tools_1 = require("../utils/tools");
// ===================================================== 导出
/**
 * 交易
 */
// tslint:disable-next-line:max-line-length
exports.transfer = function (psw, fromAddr, toAddr, gasPrice, gasLimit, pay, currencyName, info) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var wallet, hash, addrIndex, wlt, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        wallet = store_1.find('curWallet');
                        hash = void 0;
                        _context.prev = 2;
                        addrIndex = globalWallet_1.GlobalWallet.getWltAddrIndex(wallet, fromAddr, currencyName);

                        if (!(addrIndex >= 0)) {
                            _context.next = 25;
                            break;
                        }

                        _context.next = 7;
                        return globalWallet_1.GlobalWallet.createWlt(currencyName, psw, wallet, addrIndex);

                    case 7:
                        wlt = _context.sent;

                        if (!(currencyName === 'ETH')) {
                            _context.next = 14;
                            break;
                        }

                        _context.next = 11;
                        return doEthTransfer(wlt, fromAddr, toAddr, gasPrice, gasLimit, pay, info);

                    case 11:
                        hash = _context.sent;
                        _context.next = 25;
                        break;

                    case 14:
                        if (!(currencyName === 'BTC')) {
                            _context.next = 21;
                            break;
                        }

                        _context.next = 17;
                        return doBtcTransfer(wlt, fromAddr, toAddr, pay, info);

                    case 17:
                        res = _context.sent;

                        hash = res.txid;
                        _context.next = 25;
                        break;

                    case 21:
                        if (!tokens_1.ERC20Tokens[currencyName]) {
                            _context.next = 25;
                            break;
                        }

                        _context.next = 24;
                        return doERC20TokenTransfer(wlt, fromAddr, toAddr, gasPrice, gasLimit, pay, currencyName);

                    case 24:
                        hash = _context.sent;

                    case 25:
                        console.log('transfer hash', hash);
                        _context.next = 32;
                        break;

                    case 28:
                        _context.prev = 28;
                        _context.t0 = _context["catch"](2);

                        console.log(_context.t0.message);
                        toolMessages_1.doErrorShow(_context.t0);

                    case 32:
                        return _context.abrupt("return", hash);

                    case 33:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[2, 28]]);
    }));
};
/**
 * 预估矿工费
 * @param currencyName 货币名称
 * @param options 可选项,货币为ETH或ERC20时必传
 */
exports.estimateMinerFee = function (currencyName, options) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var gasLimit, fee, nbBlocks, feeObj;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log('options', options);
                        gasLimit = 21000;
                        fee = 0;

                        if (!(currencyName === 'ETH')) {
                            _context2.next = 10;
                            break;
                        }

                        _context2.next = 6;
                        return exports.estimateGasETH(options.toAddr);

                    case 6:
                        gasLimit = _context2.sent;

                        fee = gasLimit * globalWallet_1.wei2Eth(options.gasPrice);
                        _context2.next = 25;
                        break;

                    case 10:
                        if (!(currencyName === 'BTC')) {
                            _context2.next = 19;
                            break;
                        }

                        // todo 获取BTC矿工费估值
                        nbBlocks = 2;
                        _context2.next = 14;
                        return exports.estimateMinerFeeBTC(nbBlocks);

                    case 14:
                        feeObj = _context2.sent;

                        gasLimit = 0;
                        fee = feeObj[nbBlocks];
                        _context2.next = 25;
                        break;

                    case 19:
                        if (!tokens_1.ERC20Tokens[currencyName]) {
                            _context2.next = 25;
                            break;
                        }

                        _context2.next = 22;
                        return exports.estimateGasERC20(currencyName, options.toAddr, options.pay);

                    case 22:
                        gasLimit = _context2.sent;

                        // 临时解决方案
                        gasLimit = gasLimit * 2;
                        fee = gasLimit * globalWallet_1.wei2Eth(options.gasPrice);

                    case 25:
                        return _context2.abrupt("return", {
                            minerFee: fee,
                            gasLimit: gasLimit
                        });

                    case 26:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
};
// =====================================================ETH
/**
 * 预估ETH的gas limit
 */
exports.estimateGasETH = function (toAddr, data) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var api;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        api = new api_2.Api();
                        return _context3.abrupt("return", api.estimateGas({ to: toAddr, data: data }));

                    case 2:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
};
/**
 * 处理ETH转账
 */
var doEthTransfer = function doEthTransfer(wlt, fromAddr, toAddr, gasPrice, gasLimit, value, info) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var api, localNonce, chainNonce, nonce, txObj, tx;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        api = new api_2.Api();
                        localNonce = store_1.find('nonce');
                        _context4.next = 4;
                        return api.getTransactionCount(fromAddr);

                    case 4:
                        chainNonce = _context4.sent;
                        nonce = localNonce > chainNonce ? localNonce : chainNonce;

                        store_1.updateStore('nonce', nonce + 1);
                        txObj = {
                            to: toAddr,
                            nonce: nonce,
                            gasPrice: gasPrice,
                            gasLimit: gasLimit,
                            value: globalWallet_1.eth2Wei(value),
                            data: info
                        };

                        console.log('txObj', txObj);
                        tx = wlt.signRawTransaction(txObj);
                        return _context4.abrupt("return", api.sendRawTransaction(tx));

                    case 11:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));
};
/**
 * ETH交易签名
 */
exports.signRawTransactionETH = function (psw, fromAddr, toAddr, gasPrice, gasLimit, pay, info) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var wallet, addrIndex, wlt, api, localNonce, chainNonce, nonce, txObj;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        wallet = store_1.find('curWallet');
                        _context5.prev = 1;
                        addrIndex = globalWallet_1.GlobalWallet.getWltAddrIndex(wallet, fromAddr, 'ETH');

                        if (!(addrIndex >= 0)) {
                            _context5.next = 16;
                            break;
                        }

                        _context5.next = 6;
                        return globalWallet_1.GlobalWallet.createWlt('ETH', psw, wallet, addrIndex);

                    case 6:
                        wlt = _context5.sent;
                        api = new api_2.Api();
                        localNonce = store_1.find('nonce');
                        _context5.next = 11;
                        return api.getTransactionCount(fromAddr);

                    case 11:
                        chainNonce = _context5.sent;
                        nonce = localNonce > chainNonce ? localNonce : chainNonce;

                        store_1.updateStore('nonce', nonce + 1);
                        txObj = {
                            to: toAddr,
                            nonce: nonce,
                            gasPrice: gasPrice,
                            gasLimit: gasLimit,
                            value: globalWallet_1.eth2Wei(pay),
                            data: info
                        };
                        return _context5.abrupt("return", wlt.signRawTransactionHash(txObj));

                    case 16:
                        _context5.next = 21;
                        break;

                    case 18:
                        _context5.prev = 18;
                        _context5.t0 = _context5["catch"](1);

                        toolMessages_1.doErrorShow(_context5.t0);

                    case 21:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[1, 18]]);
    }));
};
/**
 * 发送ETH交易
 * @param signedTx 签名交易
 */
exports.sendRawTransactionETH = function (signedTx) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var api;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        api = new api_2.Api();
                        return _context6.abrupt("return", api.sendRawTransaction(signedTx));

                    case 2:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));
};
// ==============================================ERC20
// 预估ETH ERC20Token的gas limit
exports.estimateGasERC20 = function (currencyName, toAddr, amount) {
    var api = new api_2.Api();
    var transferCode = wallet_1.EthWallet.tokenOperations('transfer', currencyName, toAddr, tools_1.ethTokenMultiplyDecimals(amount, currencyName));
    return api.estimateGas({ to: tokens_1.ERC20Tokens[currencyName], data: transferCode });
};
/**
 * 处理eth代币转账
 */
var doERC20TokenTransfer = function doERC20TokenTransfer(wlt, fromAddr, toAddr, gasPrice, gasLimit, value, currencyName) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var api, localNonce, chainNonce, nonce, transferCode, txObj, tx;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        api = new api_2.Api();
                        localNonce = store_1.find('nonce');
                        _context7.next = 4;
                        return api.getTransactionCount(fromAddr);

                    case 4:
                        chainNonce = _context7.sent;
                        nonce = localNonce > chainNonce ? localNonce : chainNonce;

                        store_1.updateStore('nonce', nonce + 1);
                        transferCode = wallet_1.EthWallet.tokenOperations('transfer', currencyName, toAddr, tools_1.ethTokenMultiplyDecimals(value, currencyName));
                        txObj = {
                            to: tokens_1.ERC20Tokens[currencyName],
                            nonce: nonce,
                            gasPrice: gasPrice,
                            gasLimit: gasLimit,
                            value: 0,
                            data: transferCode
                        };
                        tx = wlt.signRawTransaction(txObj);
                        return _context7.abrupt("return", api.sendRawTransaction(tx));

                    case 11:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));
};
// ==================================================BTC
// 预估BTC矿工费
exports.estimateMinerFeeBTC = function () {
    var nbBlocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        return _context8.abrupt("return", api_1.BtcApi.estimateFee(nbBlocks));

                    case 1:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));
};
/**
 * 处理BTC转账
 */
var doBtcTransfer = function doBtcTransfer(wlt, acct1, acct2, value, info) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var output, retArr, rawHexString;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        output = {
                            toAddr: acct2,
                            amount: value,
                            chgAddr: acct1
                        };

                        wlt.unlock();
                        _context9.next = 4;
                        return wlt.init();

                    case 4:
                        _context9.next = 6;
                        return wlt.buildRawTransaction(output, 'medium');

                    case 6:
                        retArr = _context9.sent;

                        wlt.lock();
                        rawHexString = retArr[0];
                        return _context9.abrupt("return", api_1.BtcApi.sendRawTransaction(rawHexString));

                    case 10:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));
};
// ===================================================shapeShift相关start
/**
 * 获取shapeShift所支持的币种
 */
exports.getShapeShiftCoins = function () {
    shapeshift_1.shapeshift.coins(function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        var list = [];
        for (var k in data) {
            list.push(data[k]);
        }
        store_1.updateStore('shapeShiftCoins', list);
    });
};
/**
 *
 * @param pair 交易对
 */
exports.getMarketInfo = function (pair) {
    shapeshift_1.shapeshift.marketInfo(pair, function (err, marketInfo) {
        if (err) {
            console.error(err);
            return;
        }
        store_1.updateStore('shapeShiftMarketInfo', marketInfo);
    });
};
/**
 * 开始进行币币兑换
 * @param withdrawalAddress 入账币种的地址
 * @param returnAddress 失败后的退款地址
 * @param pair 交易对
 */
exports.beginShift = function (withdrawalAddress, returnAddress, pair, success, fail) {
    var options = {
        returnAddress: returnAddress,
        apiKey: constants_1.shapeshiftApiPublicKey
    };
    shapeshift_1.shapeshift.shift(withdrawalAddress, pair, options, function (err, returnData) {
        return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            console.log('returnData', returnData);

                            if (!err) {
                                _context10.next = 4;
                                break;
                            }

                            fail && fail(err);
                            return _context10.abrupt("return");

                        case 4:
                            // ShapeShift owned BTC address that you send your BTC to
                            // const depositAddress = returnData.deposit;
                            // NOTE: `depositAmount`, `expiration`, and `quotedRate` are only returned if
                            // you set `options.amount`
                            // amount to send to ShapeShift (type string)
                            // const shiftAmount = returnData.depositAmount;
                            // Time before rate expires (type number, time from epoch in seconds)
                            // const expiration = new Date(returnData.expiration * 1000);
                            // rate of exchange, 1 BTC for ??? LTC (type string)
                            // const rate = returnData.quotedRate;
                            // you need to actually then send your BTC to ShapeShift
                            // you could use module `spend`: https://www.npmjs.com/package/spend
                            // CONVERT AMOUNT TO SATOSHIS IF YOU USED `spend`
                            // spend(SS_BTC_WIF, depositAddress, shiftAmountSatoshis, function (err, txId) { /.. ../ })
                            // later, you can then check the deposit status
                            success && success(returnData);

                        case 5:
                        case "end":
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));
    });
};
/**
 * 获取币币交易记录
 * @param addr 要获取交易记录的地址
 */
exports.getTransactionsByAddr = function (addr) {
    return __awaiter(undefined, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var addrLowerCase, transactions, getTxByHash, shapeShiftTxsMap, shapeShiftTxs, count, txs;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        addrLowerCase = addr.toLowerCase();

                        transactions = function transactions(addr) {
                            return new Promise(function (resolve, reject) {
                                shapeshift_1.shapeshift.transactions(constants_1.shapeshiftApiPrivateKey, addr, function (err, transactions) {
                                    if (err || transactions.length === 0) {
                                        reject(err || new Error('null array'));
                                    }
                                    resolve(transactions);
                                });
                            });
                        };

                        getTxByHash = function getTxByHash(txs, hash) {
                            for (var i = 0; i < txs.length; i++) {
                                // tslint:disable-next-line:possible-timing-attack
                                if (txs[i].inputTXID === hash) {
                                    return i;
                                }
                            }
                            return -1;
                        };

                        shapeShiftTxsMap = store_1.getBorn('shapeShiftTxsMap');
                        shapeShiftTxs = shapeShiftTxsMap.get(addrLowerCase) || { addr: addrLowerCase, list: [] };
                        count = constants_1.shapeshiftTransactionRequestNumber;

                    case 6:
                        if (!(count >= 0)) {
                            _context11.next = 26;
                            break;
                        }

                        txs = void 0;
                        _context11.prev = 8;
                        _context11.next = 11;
                        return transactions(addrLowerCase);

                    case 11:
                        txs = _context11.sent;
                        _context11.next = 16;
                        break;

                    case 14:
                        _context11.prev = 14;
                        _context11.t0 = _context11["catch"](8);

                    case 16:
                        if (!txs) {
                            _context11.next = 22;
                            break;
                        }

                        console.log('shapeshifttx', txs);
                        txs.forEach(function (tx) {
                            var index = getTxByHash(shapeShiftTxs.list || [], tx.inputTXID);
                            if (index >= 0) {
                                shapeShiftTxs.list[index] = tx;
                            } else {
                                shapeShiftTxs.list.push(tx);
                            }
                        });
                        shapeShiftTxsMap.set(addrLowerCase, shapeShiftTxs);
                        store_1.updateStore('shapeShiftTxsMap', shapeShiftTxsMap);
                        return _context11.abrupt("return");

                    case 22:
                        count--;
                        console.log(count);
                        _context11.next = 6;
                        break;

                    case 26:
                        store_1.updateStore('shapeShiftTxsMap', shapeShiftTxsMap);

                    case 27:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, this, [[8, 14]]);
    }));
};
// ===================================================shapeShift相关end
// ===================================================== 本地
})