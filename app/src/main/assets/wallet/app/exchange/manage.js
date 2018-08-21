_$define("app/exchange/manage", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 交易所管理
 * @example
 */

var ExchangeManage = function () {
  function ExchangeManage() {
    _classCallCheck(this, ExchangeManage);
  }

  _createClass(ExchangeManage, [{
    key: "init",

    /**
     * 初始化
     */
    value: function init() {
      // 启动http获取火币行情
      // huobiCrawlerRestInit();
      // 启动ws获取火币行情
      // todo 暂时数据解析有问题，暂不开启
      // huobiCrawlerWsInit();
      // 启动http获取okex行情
      // todo 接口存在跨域问题  暂时跳过
      // okexSpotRestInit();
      // 启动http获取币安行情
      // todo 接口存在跨域问题  暂时跳过
      // binanceRestApiInit();
      // 启动http获取比特儿行情
      // todo 接口存在跨域问题  暂时跳过
      // gateRestApiInit();
      // 启动http获取fcoin行情
      // fcoinRestApiInit();
    }
  }]);

  return ExchangeManage;
}();

exports.ExchangeManage = ExchangeManage;
// ============================================ 立即执行
/**
 * 消息处理列表
 */
exports.exchangeManage = new ExchangeManage();
})