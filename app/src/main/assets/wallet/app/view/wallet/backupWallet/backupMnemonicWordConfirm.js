_$define("app/view/wallet/backupWallet/backupMnemonicWordConfirm", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * mnemonic backup confirm page
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");
var globalWallet_1 = require("../../../core/globalWallet");
var store_1 = require("../../../store/store");
var tools_1 = require("../../../utils/tools");

var BackupMnemonicWordConfirm = function (_widget_1$Widget) {
    _inherits(BackupMnemonicWordConfirm, _widget_1$Widget);

    function BackupMnemonicWordConfirm() {
        _classCallCheck(this, BackupMnemonicWordConfirm);

        return _possibleConstructorReturn(this, (BackupMnemonicWordConfirm.__proto__ || Object.getPrototypeOf(BackupMnemonicWordConfirm)).call(this));
    }

    _createClass(BackupMnemonicWordConfirm, [{
        key: "setProps",
        value: function setProps(props, oldProps) {
            _get(BackupMnemonicWordConfirm.prototype.__proto__ || Object.getPrototypeOf(BackupMnemonicWordConfirm.prototype), "setProps", this).call(this, props, oldProps);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            var mnemonic = this.props.mnemonic.split(' ');
            var shuffledMnemonic = this.initMnemonic(mnemonic);
            this.state = {
                mnemonic: mnemonic,
                confirmedMnemonic: [],
                shuffledMnemonic: shuffledMnemonic
            };
        }
    }, {
        key: "jumpOver",
        value: function jumpOver() {
            var _this2 = this;

            root_1.popNew('app-components-message-messagebox', {
                itype: 'confirm',
                title: '提示',
                content: '为了确保您的资产安全，建议不要跳过验证！',
                okButton: '取消',
                cancelButton: '跳过',
                okButtonStyle: 'color:rgba(26,112,221,1);',
                cancelButtonStyle: 'color:#8E96AB'
            }, null, function () {
                _this2.ok && _this2.ok();
            });
        }
    }, {
        key: "backPrePage",
        value: function backPrePage() {
            this.ok && this.ok();
        }
        // 对助记词乱序和标识处理

    }, {
        key: "initMnemonic",
        value: function initMnemonic(arr) {
            return this.initActive(tools_1.shuffle(arr));
        }
        // 初始化每个助记词标识是否被点击

    }, {
        key: "initActive",
        value: function initActive(arr) {
            var res = [];
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                var obj = {
                    word: '',
                    isActive: false
                };
                obj.word = arr[i];
                res.push(obj);
            }
            return res;
        }
    }, {
        key: "nextStepClick",
        value: function nextStepClick() {
            if (!this.compareMnemonicEqualed()) {
                root_1.popNew('app-components-message-messagebox', { itype: 'alert', title: '提示', content: '请检查助记词' });
            } else {
                this.deleteMnemonic();
                root_1.popNew('app-components-message-messagebox', { itype: 'alert', title: '提示', content: '备份完成' });
                this.ok && this.ok();
            }
        }
    }, {
        key: "shuffledMnemonicItemClick",
        value: function shuffledMnemonicItemClick(e, v) {
            var mnemonic = this.state.shuffledMnemonic[v];
            if (mnemonic.isActive) {
                mnemonic.isActive = false;
                arryRemove(this.state.confirmedMnemonic, mnemonic);
            } else {
                mnemonic.isActive = true;
                this.state.confirmedMnemonic.push(mnemonic);
            }
            console.log(this.state.confirmedMnemonic);
            console.log(this.state.confirmedMnemonic);
            this.paint();
        }
    }, {
        key: "confirmedMnemonicItemClick",
        value: function confirmedMnemonicItemClick(e, v) {
            var arr = this.state.confirmedMnemonic.splice(v, 1);
            arr[0].isActive = false;
            this.paint();
        }
    }, {
        key: "deleteMnemonic",
        value: function deleteMnemonic() {
            var _this3 = this;

            var isUpdate = false;
            var walletList = store_1.find('walletList').map(function (v) {
                if (v.walletId === _this3.props.walletId) {
                    isUpdate = true;
                    var gwlt = globalWallet_1.GlobalWallet.fromJSON(v.gwlt);
                    gwlt.mnemonicBackup = true;
                    v.gwlt = gwlt.toJSON();
                }
                if (isUpdate) store_1.updateStore('curWallet', v);
                return v;
            });
            if (isUpdate) store_1.updateStore('walletList', walletList);
        }
    }, {
        key: "compareMnemonicEqualed",
        value: function compareMnemonicEqualed() {
            var isEqualed = true;
            var len = this.state.mnemonic.length;
            if (this.state.confirmedMnemonic.length !== len) return false;
            for (var i = 0; i < len; i++) {
                if (this.state.confirmedMnemonic[i].word !== this.state.mnemonic[i]) {
                    isEqualed = false;
                }
            }
            return isEqualed;
        }
    }]);

    return BackupMnemonicWordConfirm;
}(widget_1.Widget);

exports.BackupMnemonicWordConfirm = BackupMnemonicWordConfirm;
var arryRemove = function arryRemove(ary, target) {
    //
    for (var i = 0; i < ary.length; i++) {
        var one = ary[i];
        if (one === target) {
            ary.splice(i, 1);
            return;
        }
    }
    return;
};
})