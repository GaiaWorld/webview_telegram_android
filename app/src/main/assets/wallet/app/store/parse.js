_$define("app/store/parse", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../pi/net/websocket/util");
var globalWallet_1 = require("../core/globalWallet");
var tools_1 = require("../utils/tools");
var interface_1 = require("./interface");
/**
 * 解析数据
 */
// ===================================================== 导入
// ===================================================== 导出
/**
 * 解析云端账号余额
 */
exports.parseCloudBalance = function (balanceInfo) {
    var m = new Map();
    for (var i = 0; i < balanceInfo.value.length; i++) {
        var each = balanceInfo.value[i];
        m.set(each[0], tools_1.smallUnit2LargeUnit(interface_1.CurrencyTypeReverse[each[0]], each[1]));
    }
    return m;
};
/**
 * 解析云端账号详情
 */
exports.parseCloudAccountDetail = function (coinType, infos) {
    var list = [];
    infos.forEach(function (v) {
        var itype = v[0];
        var amount = tools_1.formatBalance(tools_1.smallUnit2LargeUnit(interface_1.CurrencyTypeReverse[coinType], v[1]));
        var behavior = '';
        console.log('itype', itype);
        switch (itype) {
            case interface_1.TaskSid.mines:
                behavior = '挖矿';
                break;
            case interface_1.TaskSid.redEnvelope:
                behavior = amount > 0 ? '领红包' : '发红包';
                break;
            case interface_1.TaskSid.recharge:
                behavior = '充值';
                break;
            case interface_1.TaskSid.withdraw:
                behavior = '提现';
                break;
            default:
                behavior = util_1.isArray(v[2]) ? tools_1.unicodeArray2Str(v[2]) : v[2];
        }
        list.push({
            itype: itype,
            amount: amount,
            behavior: behavior,
            time: v[3]
        });
    });
    return list;
};
/**
 * 处理矿山排名列表
 */
exports.parseMineRank = function (data) {
    var mineData = {
        mineSecond: false,
        mineThird: false,
        minePage: 1,
        mineMore: false,
        mineList: data.value,
        mineRank: [{
            index: 1,
            name: '昵称未设置',
            num: '0'
        }],
        myRank: data.me
    };
    if (data.value.length > 10) {
        mineData.mineMore = true;
        mineData.mineSecond = true;
        mineData.mineThird = true;
    } else if (data.value.length > 2) {
        mineData.mineSecond = true;
        mineData.mineThird = true;
    } else if (data.value.length > 1) {
        mineData.mineSecond = true;
    }
    var data1 = [];
    for (var i = 0; i < data.value.length && i < 10; i++) {
        data1.push({
            index: i + 1,
            name: data.value[i][1] === '' ? '昵称未设置' : data.value[i][1],
            num: tools_1.kpt2kt(data.value[i][2])
        });
    }
    mineData.mineRank = data1;
    return mineData;
};
/**
 * 处理挖矿排名列表
 */
exports.parseMiningRank = function (data) {
    var miningData = {
        miningSecond: false,
        miningThird: false,
        miningFirst: true,
        miningPage: 1,
        miningMore: false,
        miningList: data.value,
        miningRank: [{
            index: 1,
            name: '昵称未设置',
            num: '0'
        }]
    };
    if (data.value === '') {
        miningData.miningFirst = false;
        return miningData;
    }
    if (data.value.length > 10) {
        miningData.miningMore = true;
        miningData.miningSecond = true;
        miningData.miningThird = true;
    } else if (data.value.length > 2) {
        miningData.miningSecond = true;
        miningData.miningThird = true;
    } else if (data.value.length > 1) {
        miningData.miningSecond = true;
    }
    var data2 = [];
    for (var i = 0; i < data.value.length && i < 10; i++) {
        data2.push({
            index: i + 1,
            name: data.value[i][1] === '' ? '昵称未设置' : data.value[i][1],
            num: tools_1.kpt2kt(data.value[i][2])
        });
    }
    miningData.miningRank = data2;
    return miningData;
};
/**
 *
 */
exports.parseMineDetail = function (detail) {
    var list = [{
        isComplete: false,
        itemNum: 0
    }, {
        isComplete: false,
        itemNum: 0
    }, {
        isComplete: false,
        itemNum: 0
    }, {
        isComplete: false,
        itemNum: 0
    }, {
        isComplete: false,
        itemNum: 0
    }, {
        isComplete: false,
        itemNum: 0
    }];
    if (detail.value.length !== 0) {
        for (var i = 0; i < detail.value.length; i++) {
            if (detail.value[i][0] === interface_1.TaskSid.createWlt) {
                // 创建钱包
                list[0].isComplete = true;
                list[0].itemNum = tools_1.kpt2kt(detail.value[i][1]);
            } else if (detail.value[i][0] === interface_1.TaskSid.bindPhone) {
                // 注册手机号
                list[1].isComplete = true;
                list[1].itemNum = tools_1.kpt2kt(detail.value[i][1]);
            } else if (detail.value[i][0] === interface_1.TaskSid.chargeEth) {
                // 存币
                list[2].itemNum = tools_1.kpt2kt(detail.value[i][1]);
            } else if (detail.value[i][0] === interface_1.TaskSid.inviteFriends) {
                // 与好友分享
                list[3].itemNum = tools_1.kpt2kt(detail.value[i][1]);
            } else if (detail.value[i][0] === interface_1.TaskSid.buyFinancial) {
                // 购买理财
                list[4].itemNum = tools_1.kpt2kt(detail.value[i][1]);
            } else if (detail.value[i][0] === interface_1.TaskSid.chat) {
                // 聊天
                list[5].isComplete = true;
                list[5].itemNum = tools_1.kpt2kt(detail.value[i][1]);
            }
        }
    }
    return list;
};
/**
 * 解析充值提现记录
 */
exports.parseRechargeWithdrawalLog = function (val) {
    var infoList = [];
    for (var i = 0; i < val.length; i++) {
        var record = {
            time: val[i][0],
            timeShow: tools_1.timestampFormat(val[i][0]),
            amount: globalWallet_1.wei2Eth(val[i][1]),
            status: val[i][2],
            statusShow: parseRechargeWithdrawalLogStatus(val[i][2]),
            hash: val[i][3]
        };
        infoList.push(record);
    }
    return infoList.reverse();
};
// ===================================================== 本地
var parseRechargeWithdrawalLogStatus = function parseRechargeWithdrawalLogStatus(status) {
    var statusShow = void 0;
    switch (status) {
        case -2:
            statusShow = '取消';
            break;
        case -1:
            statusShow = '错误';
            break;
        case 0:
            statusShow = '发送中';
            break;
        case 1:
            statusShow = '完成';
            break;
        default:
    }
    return statusShow;
};
// ===================================================== 立即执行
})