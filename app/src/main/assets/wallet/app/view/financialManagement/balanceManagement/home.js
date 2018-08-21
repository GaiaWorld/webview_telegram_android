_$define("app/view/financialManagement/balanceManagement/home", function (require, exports, module){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 币投宝
 */
var root_1 = require("../../../../pi/ui/root");
var widget_1 = require("../../../../pi/widget/widget");

var BalanceManagementHome = function (_widget_1$Widget) {
    _inherits(BalanceManagementHome, _widget_1$Widget);

    function BalanceManagementHome() {
        _classCallCheck(this, BalanceManagementHome);

        return _possibleConstructorReturn(this, (BalanceManagementHome.__proto__ || Object.getPrototypeOf(BalanceManagementHome)).call(this));
    }

    _createClass(BalanceManagementHome, [{
        key: "create",
        value: function create() {
            _get(BalanceManagementHome.prototype.__proto__ || Object.getPrototypeOf(BalanceManagementHome.prototype), "create", this).call(this);
            this.init();
        }
    }, {
        key: "init",
        value: function init() {
            this.state = {
                preferredFunds: [{
                    name: '生物/医疗健康',
                    number: '501009',
                    per: 27.24,
                    MinInvestment: '1,000',
                    date: '近一年'
                }, {
                    name: '基础链',
                    number: '501019',
                    per: 25.76,
                    MinInvestment: '10',
                    date: '近一年'
                }]
            };
        }
    }, {
        key: "goBackClick",
        value: function goBackClick() {
            this.ok && this.ok();
        }
    }, {
        key: "preferredFundItemClick",
        value: function preferredFundItemClick(e, index) {
            root_1.popNew('app-view-financialManagement-fund-home', { fund: this.state.preferredFunds[index] });
        }
    }, {
        key: "projectIntroductionClick",
        value: function projectIntroductionClick() {
            root_1.popNew('app-components-message-message', { itype: 'notice', content: '正在开发,敬请期待', center: true });
        }
    }, {
        key: "commonProblemClick",
        value: function commonProblemClick() {
            root_1.popNew('app-components-message-message', { itype: 'notice', content: '正在开发,敬请期待', center: true });
        }
    }]);

    return BalanceManagementHome;
}(widget_1.Widget);

exports.BalanceManagementHome = BalanceManagementHome;
})