_$define("app/store/interface", function (require, exports, module){
"use strict";
/**
 * 内存中的数据结构
 */

Object.defineProperty(exports, "__esModule", { value: true });
// 枚举登录状态
var LoginState;
(function (LoginState) {
    LoginState[LoginState["init"] = 0] = "init";
    LoginState[LoginState["logining"] = 1] = "logining";
    LoginState[LoginState["logined"] = 2] = "logined";
    LoginState[LoginState["relogining"] = 3] = "relogining";
    LoginState[LoginState["logouting"] = 4] = "logouting";
    LoginState[LoginState["logouted"] = 5] = "logouted";
    LoginState[LoginState["logerror"] = 6] = "logerror";
})(LoginState = exports.LoginState || (exports.LoginState = {}));
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
// 红包类型
var RedEnvelopeType;
(function (RedEnvelopeType) {
    RedEnvelopeType["Normal"] = "00";
    RedEnvelopeType["Random"] = "01";
    RedEnvelopeType["Invite"] = "99";
})(RedEnvelopeType = exports.RedEnvelopeType || (exports.RedEnvelopeType = {}));
var TaskSid;
(function (TaskSid) {
    TaskSid[TaskSid["createWlt"] = 1001] = "createWlt";
    TaskSid[TaskSid["firstChargeEth"] = 1002] = "firstChargeEth";
    TaskSid[TaskSid["bindPhone"] = 1003] = "bindPhone";
    TaskSid[TaskSid["chargeEth"] = 1004] = "chargeEth";
    TaskSid[TaskSid["inviteFriends"] = 1005] = "inviteFriends";
    TaskSid[TaskSid["buyFinancial"] = 1007] = "buyFinancial";
    TaskSid[TaskSid["transfer"] = 1008] = "transfer";
    TaskSid[TaskSid["bonus"] = 1009] = "bonus";
    TaskSid[TaskSid["mines"] = 1010] = "mines";
    TaskSid[TaskSid["chat"] = 1011] = "chat";
    TaskSid["redEnvelope"] = "red_bag_port";
    TaskSid["recharge"] = "bank_db";
    TaskSid["withdraw"] = "bank_port"; // 提现
})(TaskSid = exports.TaskSid || (exports.TaskSid = {}));
})