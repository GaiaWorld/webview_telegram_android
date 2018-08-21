(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3102268884;_node.attrs["class"] = "ga-new-page";_node.attrs["w-class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backClick";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = it.coinType;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3010196950;_node4.attrs["w-class"] = "assestsHead";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 3527159895;{
					var attrvalue = "";attrvalue += "../../../res/image/currency/";attrvalue += it.coinType;attrvalue += ".png";_node5.attrs["src"] = attrvalue;
				}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["src"]));_node5.attrs["w-class"] = "assestsImg";_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 4281788275;_node6.attrs["w-class"] = "coinType";_$temp = _node6;{
					var _$parent7 = _$temp;_addText(it.coinType, _$parent7);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_$temp = _node4;{
				var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1349797565;_node7.attrs["w-class"] = "balance";_$temp = _node7;{
					var _$parent9 = _$temp;_addText(it.coinBalance, _$parent9);
				}_chFunc(_node7);_$parent8.children.push(_node7);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1379628278;_node8.attrs["w-class"] = "panelBtnGroup";{
				var _$i = 0;
				for (var _iterator = it1.panelBtns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref;

					if (_isArray) {
						if (_i >= _iterator.length) break;
						_ref = _iterator[_i++];
					} else {
						_i = _iterator.next();
						if (_i.done) break;
						_ref = _i.value;
					}

					var v = _ref;
					var k = _$i++;_$temp = _node8;{
						var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "span", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 2391852078;{
							var _attrvalue = "";_attrvalue += "btn ";_attrvalue += it1.isActive === k ? 'active' : '';_attrvalue += "";_node9.attrs["w-class"] = _attrvalue;
						}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["w-class"]));{
							var _attrvalue2 = "";_attrvalue2 += "panelBtnClicked(e,";_attrvalue2 += k;_attrvalue2 += ")";_node9.attrs["on-tap"] = _attrvalue2;
						}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["on-tap"]));_$temp = _node9;{
							var _$parent12 = _$temp;_addText(v.label, _$parent12);
						}_chFunc(_node9);_$parent11.children.push(_node9);
					}
				}
			}_chFunc(_node8);_$parent10.children.push(_node8);
		}_$temp = _node;{
			var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 3142709360;_node10.attrs["w-class"] = "mask";{
				var _attrvalue3 = "";_attrvalue3 += "height:";_attrvalue3 += it1.maskHeight - 470;_attrvalue3 += "px;";_node10.attrs["style"] = _attrvalue3;
			}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["style"]));_$temp = _node10;{
				var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "widget", "sid": 9 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 782767477;{
					var _attrvalue4 = "";_attrvalue4 = it1.routePath;_node11.attrs["w-tag"] = _attrvalue4;
				}_node11.attrHash = _hash.nextHash(_node11.attrHash, _calTextHash(_node11.attrs["w-tag"]));_node11.tagName = _node11.attrs["w-tag"];_$temp = _node11;{
					var _$parent15 = _$temp;var _node12 = {}; //jpair pre

					_node12["coinType"] = it.coinType;
					//jpair suf
					_addJson(_node12, _$parent15);
				}_chFunc(_node11);_$parent14.children.push(_node11);
			}_chFunc(_node10);_$parent13.children.push(_node10);
		}if (it1.showChargeAndWithdraw) {
			_$temp = _node;{
				var _$parent16 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.childHash = 3168306206;_node13.attrSize = 1;_node13.attrHash = 2708300265;_node13.attrs["w-class"] = "botFixed";_$temp = _node13;{
					var _$parent17 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.childHash = 432143568;_node14.attrSize = 2;_node14.attrHash = 1934345364;_node14.attrs["w-class"] = "fixedBtn Charge";_node14.attrs["on-tap"] = "chargeClicked";_$temp = _node14;{
						var _$parent18 = _$temp;var _node15 = { "attrs": {}, "tagName": "img", "sid": 12 };_node15.children = [];_node15.childHash = 0;_node15.attrSize = 2;_node15.attrHash = 3625242403;_node15.attrs["src"] = "../../../res/image/cloud_charge.png";_node15.attrs["w-class"] = "btnIcon";_$parent18.children.push(_node15);
					}_$temp = _node14;{
						var _$parent19 = _$temp;var _node16 = _installText("充值", 3768531277);;
						_$parent19.children.push(_node16);
					}_$parent17.children.push(_node14);
				}_$temp = _node13;{
					var _$parent20 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.childHash = 4086284600;_node17.attrSize = 2;_node17.attrHash = 3721455734;_node17.attrs["w-class"] = "fixedBtn Withdraw";_node17.attrs["on-tap"] = "withdrawClicked";_$temp = _node17;{
						var _$parent21 = _$temp;var _node18 = { "attrs": {}, "tagName": "img", "sid": 14 };_node18.children = [];_node18.childHash = 0;_node18.attrSize = 2;_node18.attrHash = 3148792475;_node18.attrs["src"] = "../../../res/image/cloud_withdraw.png";_node18.attrs["w-class"] = "btnIcon";_$parent21.children.push(_node18);
					}_$temp = _node17;{
						var _$parent22 = _$temp;var _node19 = _installText("提现", 1220133970);;
						_$parent22.children.push(_node19);
					}_$parent20.children.push(_node17);
				}_$parent16.children.push(_node13);
			}
		}_chFunc(_node);return _node;
	}
});