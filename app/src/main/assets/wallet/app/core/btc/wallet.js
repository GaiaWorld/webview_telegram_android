_$define("app/core/btc/wallet", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
 * BTC HD wallet implementaion
 */
var bip39_1 = require("../thirdparty/bip39");
var bitcore_lib_1 = require("../thirdparty/bitcore-lib");
var api_1 = require("./api");

var UTXO = function UTXO() {
    _classCallCheck(this, UTXO);
};

exports.UTXO = UTXO;

var Output = function Output() {
    _classCallCheck(this, Output);
};

exports.Output = Output;

var BTCWallet = function () {
    function BTCWallet() {
        _classCallCheck(this, BTCWallet);

        this.usedAdresses = {};
        this.utxos = [];
        this.isLocked = false;
        this.isInitialized = false;
        // todo
    }
    /* tslint:disable:jsdoc-format */
    /* tslint:disable: no-redundant-jsdoc*/
    /**
    * Generate an HD wallet from scratch
    *
    * @static
    * @param {number} strength Default to 128, must be a divided by 32
    * @param {NETWORK} network Network idenitifer
    * @param {LANGUAGE} lang Mnenomic language
    * @param {string} [passphrase] Salt used to provide extra credentials to generate seed, default to null
    * @returns {BTCWallet}
    * @memberof BTCWallet
    */


    _createClass(BTCWallet, [{
        key: "getTotalBlance",
        value: function getTotalBlance() {
            return this.totalBalance;
        }
    }, {
        key: "setTotalBlance",
        value: function setTotalBlance(totalBalance) {
            this.totalBalance = totalBalance;
        }
    }, {
        key: "lock",
        value: function lock() {
            if (this.isLocked === false) {
                this.isLocked = true;
            }
        }
    }, {
        key: "unlock",
        value: function unlock() {
            if (this.isLocked === true) {
                this.isLocked = false;
            }
        }
    }, {
        key: "exportMnemonics",
        value: function exportMnemonics() {
            if (this.isLocked === true) {
                throw new Error('You need to unlock wallet first!');
            }
            return this.mnemonics;
        }
        /**
         * Export WIF format private key for specified index
         *
         * @param {number} index
         * @returns {string}
         * @memberof BTCWallet
         */

    }, {
        key: "exportWIFOf",
        value: function exportWIFOf(index) {
            return this.privateKeyOf(index).toWIF();
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            if (!this.isLocked) {
                throw new Error('You must lock the wallet first and then export the JSON format representation');
            }
            return JSON.stringify({
                rootxpriv: this.rootXpriv,
                rootseed: this.rootSeed,
                mnemonics: this.mnemonics,
                network: this.network,
                language: this.language
            });
        }
        /**
         * Derive address according to `index`
         *
         * @param {number} index Index number
         * @returns {string} Derived address
         * @memberof BTCWallet
         */

    }, {
        key: "derive",
        value: function derive(index) {
            return this.privateKeyOf(index).toAddress().toString();
        }
        /**
         * build raw btc transaction from all available utxos, using index 0 address as the default change address.
         *
         * Our spend policies are:
         *
         * 1. utxo must at least `MIN_CONFIRMATIONS`
         * 2. spend the most matured coins
         *
         * TODO: design a smarter stratagy (http://bitcoinfees.com/)
         *
         * @param {Output} output Specify `toAddr`, `amount` and `chgaddr`
         * @param {PRIORITY} priority How long the user wish to waiting for
         * @returns {Promise<string>} Transaction hash of this transaction
         * @memberof BTCWallet
         */

    }, {
        key: "buildRawTransaction",
        value: function buildRawTransaction(output, priority) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var priorityMap, fee, collected, accumlated, i, keySet, _i, rawTx, serialized;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.isInitialized) {
                                    _context.next = 2;
                                    break;
                                }

                                throw new Error('Wallet uninitialized!');

                            case 2:
                                if (!(output.amount >= this.totalBalance)) {
                                    _context.next = 4;
                                    break;
                                }

                                throw new Error('Insufficient totalBalance!');

                            case 4:
                                // TODO: check error
                                // let fee: any;
                                priorityMap = {
                                    low: 6,
                                    medium: 3,
                                    high: 2
                                };
                                _context.next = 7;
                                return api_1.BtcApi.estimateFee(priorityMap[priority]);

                            case 7:
                                fee = _context.sent;

                                // sort by transaction confirmations
                                this.utxos.sort(function (a, b) {
                                    return a.confirmations - b.confirmations;
                                });
                                collected = [];
                                accumlated = 0;
                                i = 0;

                            case 12:
                                if (!(i < this.utxos.length)) {
                                    _context.next = 20;
                                    break;
                                }

                                accumlated += this.utxos[i].amount;
                                collected.push(this.utxos[i]);

                                if (!(accumlated > output.amount)) {
                                    _context.next = 17;
                                    break;
                                }

                                return _context.abrupt("break", 20);

                            case 17:
                                i++;
                                _context.next = 12;
                                break;

                            case 20:
                                keySet = [];

                                for (_i = 0; _i < collected.length; _i++) {
                                    keySet.push(this.privateKeyOf(this.usedAdresses[collected[_i].address]));
                                }
                                console.log('collected: ', collected);
                                console.log('accumlated: ', accumlated);
                                console.log('keyset length: ', keySet.length);
                                output.amount = bitcore_lib_1.bitcore.Unit.fromBTC(output.amount).toSatoshis();
                                rawTx = new bitcore_lib_1.bitcore.Transaction().feePerKb(bitcore_lib_1.bitcore.Unit.fromBTC(fee[priorityMap[priority]]).toSatoshis()).from(collected).to(output.toAddr, output.amount).change(output.chgAddr === undefined ? this.derive(0) : output.chgAddr).sign(keySet);

                                console.log('rawTx:', rawTx);
                                console.log('txFee:', rawTx.getFee());
                                serialized = rawTx.serialize(true);

                                console.log('serialized:', serialized);
                                return _context.abrupt("return", [serialized, rawTx.getFee()]);

                            case 32:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        // TODO: we should distinguish `confirmed`, `unconfirmed` and `spendable`

    }, {
        key: "calcBalance",
        value: function calcBalance(address) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var sum, i, _i2;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                sum = 0;
                                // TODO: use array.reduce ?

                                if (address === undefined) {
                                    for (i = 0; i < this.utxos.length; i++) {
                                        sum += this.utxos[i].amount;
                                    }
                                } else {
                                    for (_i2 = 0; _i2 < this.utxos.length; _i2++) {
                                        if (this.utxos[_i2].address === address) {
                                            sum += this.utxos[_i2].amount;
                                        }
                                    }
                                }
                                return _context2.abrupt("return", sum);

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "init",
        value: function init() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (this.isInitialized) {
                                    _context3.next = 15;
                                    break;
                                }

                                _context3.prev = 1;
                                _context3.next = 4;
                                return this.scanUsedAddress();

                            case 4:
                                _context3.next = 6;
                                return this.getUnspentOutputs();

                            case 6:
                                _context3.next = 8;
                                return this.calcBalance();

                            case 8:
                                this.totalBalance = _context3.sent;

                                this.isInitialized = true;
                                _context3.next = 15;
                                break;

                            case 12:
                                _context3.prev = 12;
                                _context3.t0 = _context3["catch"](1);
                                throw new Error('Failed to initialize wallet!');

                            case 15:
                                console.log('Wallet initialize successfully!');

                            case 16:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[1, 12]]);
            }));
        }
    }, {
        key: "getUnspentOutputs",
        value: function getUnspentOutputs() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this = this;

                var _loop, i;

                return regeneratorRuntime.wrap(function _callee4$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                this.utxos = [];
                                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
                                    var address, addrUtxo;
                                    return regeneratorRuntime.wrap(function _loop$(_context4) {
                                        while (1) {
                                            switch (_context4.prev = _context4.next) {
                                                case 0:
                                                    address = _this.derive(i);
                                                    _context4.next = 3;
                                                    return api_1.BtcApi.getAddrUnspent(address);

                                                case 3:
                                                    addrUtxo = _context4.sent;

                                                    addrUtxo.forEach(function (utxo) {
                                                        _this.utxos.push({
                                                            txid: utxo.txid,
                                                            vout: utxo.vout,
                                                            address: address,
                                                            scriptPubKey: utxo.scriptPubKey,
                                                            amount: utxo.amount,
                                                            confirmations: utxo.confirmations
                                                        });
                                                    });

                                                case 5:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }
                                    }, _loop, _this);
                                });
                                i = 0;

                            case 3:
                                if (!(i < Object.keys(this.usedAdresses).length)) {
                                    _context5.next = 8;
                                    break;
                                }

                                return _context5.delegateYield(_loop(i), "t0", 5);

                            case 5:
                                i++;
                                _context5.next = 3;
                                break;

                            case 8:
                                return _context5.abrupt("return", this.utxos);

                            case 9:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
        // TODO: consider make this as a server side api

    }, {
        key: "scanUsedAddress",
        value: function scanUsedAddress() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var count, i, addr, res;
                return regeneratorRuntime.wrap(function _callee5$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                count = 0;
                                i = 0;

                                this.usedAdresses = [];
                                i = 0;

                            case 4:
                                addr = this.derive(i);
                                _context6.next = 7;
                                return api_1.BtcApi.getAddrTxHistory(addr);

                            case 7:
                                res = _context6.sent;

                                if (!res || res.txs.length === 0) {
                                    count = count + 1;
                                } else {
                                    this.usedAdresses[addr] = i;
                                    count = 0;
                                }

                                if (!(count > BTCWallet.GAP_LIMIT)) {
                                    _context6.next = 11;
                                    break;
                                }

                                return _context6.abrupt("break", 14);

                            case 11:
                                i++;
                                _context6.next = 4;
                                break;

                            case 14:
                                return _context6.abrupt("return", i - BTCWallet.GAP_LIMIT);

                            case 15:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee5, this);
            }));
        }
    }, {
        key: "privateKeyOf",
        value: function privateKeyOf(index) {
            if (this.isLocked === true) {
                throw new Error('You need to unlock wallet first!');
            }
            var path = void 0;
            var parent = new bitcore_lib_1.bitcore.HDPrivateKey(this.rootXpriv);
            if (parent.network.name === 'testnet') {
                path = BTCWallet.BIP44_BTC_TESTNET_BASE_PATH + index;
            } else if (parent.network.name === 'livenet') {
                path = BTCWallet.BIP44_BTC_MAINNET_BASE_PATH + index;
            } else {
                throw new Error('Unexpected network name!');
            }
            return parent.derive(path).privateKey;
        }
    }], [{
        key: "generate",
        value: function generate(strength, network, lang, passphrase) {
            var mn = new bip39_1.Mnemonic(lang);
            passphrase = passphrase || '';
            strength = strength || 128;
            var mnemonics = mn.generate(strength);
            if (!mn.check(mnemonics)) {
                throw new Error('Invalid Mnemonic words!');
            }
            var seed = mn.toSeed(mnemonics, passphrase);
            var hdpriv = bitcore_lib_1.bitcore.HDPrivateKey.fromSeed(seed, network);
            var btcwallet = new BTCWallet();
            btcwallet.rootXpriv = hdpriv.toString();
            // TODO: encrypt
            btcwallet.mnemonics = mnemonics;
            return btcwallet;
        }
        /**
         * Build HD wallet from mnemonic words
         *
         * @static
         * @param {string} mnemonic Mnemonic words
         * @param {("mainnet" | "testnet")} network Which network to use
         * @param {("english" | "chinese_simplified" | "chinese_traditional")} lang Language
         * @param {string} [passphrase] Passphrase used as salt, don't recommand to use
         * @returns {BTCWallet}
         * @memberof BTCWallet
         */

    }, {
        key: "fromMnemonic",
        value: function fromMnemonic(mnemonic, network, lang, passphrase) {
            var mn = new bip39_1.Mnemonic(lang);
            passphrase = passphrase || '';
            if (!mn.check(mnemonic)) {
                throw new Error('Invalid Mnemonic words!');
            }
            var seed = mn.toSeed(mnemonic, passphrase);
            var hdpriv = bitcore_lib_1.bitcore.HDPrivateKey.fromSeed(seed, network);
            var btcwallt = new BTCWallet();
            btcwallt.rootXpriv = hdpriv.toString();
            btcwallt.mnemonics = mnemonic;
            btcwallt.rootSeed = seed;
            btcwallt.network = network;
            btcwallt.language = lang;
            btcwallt.lock();
            return btcwallt;
        }
    }, {
        key: "fromSeed",
        value: function fromSeed(seed, network, lang) {
            // TODO: check seed ?
            var hdpriv = bitcore_lib_1.bitcore.HDPrivateKey.fromSeed(seed, network);
            var btcwallt = new BTCWallet();
            btcwallt.rootXpriv = hdpriv.toString();
            btcwallt.rootSeed = seed;
            btcwallt.network = network;
            btcwallt.language = lang;
            btcwallt.lock();
            return btcwallt;
        }
        /**
         * Restore wallet from previously exported json string
         *
         * @static
         * @param {string} json
         * @param {string} passphrase
         * @returns {BTCWallet}
         * @memberof BTCWallet
         */

    }, {
        key: "fromJSON",
        value: function fromJSON(json, passphrase) {
            var obj = JSON.parse(json);
            var rootseed = obj.rootseed;
            var network = obj.network;
            var language = obj.language;
            return BTCWallet.fromSeed(rootseed, network, language);
        }
    }]);

    return BTCWallet;
}();
// m/bip_number/coin_type/account/internal_or_external/index, we don't use change address


BTCWallet.BIP44_BTC_TESTNET_BASE_PATH = 'm/44\'/1\'/0\'/0/';
BTCWallet.BIP44_BTC_MAINNET_BASE_PATH = 'm/44\'/0\'/0\'/0/';
// most look ahead addresses
BTCWallet.GAP_LIMIT = 3;
// minimum confirmations
BTCWallet.MIN_CONFIRMATIONS = 6;
BTCWallet.SAFELOW_FEE = 2;
BTCWallet.HIGHEST_FEE = 10;
exports.BTCWallet = BTCWallet;
})