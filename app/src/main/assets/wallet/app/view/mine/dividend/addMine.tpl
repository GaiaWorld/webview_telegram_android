(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3829907308;_node.attrs["class"] = "ga-new-page";_node.attrs["style"] = "background-image: linear-gradient(-180deg, #FFB800 0%, #FFE400 100%);overflow-y: auto;height: 100%;overflow-x: hidden; ";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2158543356;_node2.attrSize = 1;_node2.attrHash = 1796115628;_node2.attrs["w-class"] = "";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 4172411640;_node3.attrSize = 1;_node3.attrHash = 3880895855;_node3.attrs["w-class"] = "ga-top-banner";_$temp = _node3;{
																				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "img", "sid": 3 };_node4.children = [];_node4.childHash = 0;_node4.attrSize = 3;_node4.attrHash = 1224155588;_node4.attrs["src"] = "../../../res/image/btn_back_white.png";_node4.attrs["w-class"] = "ga-back";_node4.attrs["on-tap"] = "backPrePage";_$parent4.children.push(_node4);
																}_$temp = _node3;{
																				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.childHash = 4289660834;_node5.attrSize = 2;_node5.attrHash = 3301930082;_node5.attrs["w-class"] = "ga-banner-title";_node5.attrs["on-tap"] = "backPrePage";_$temp = _node5;{
																								var _$parent6 = _$temp;var _node6 = _installText("增加储备矿", 2051912951);;
																								_$parent6.children.push(_node6);
																				}_$parent5.children.push(_node5);
																}_$parent3.children.push(_node3);
												}_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrHash = 0;{
																var _$i = 0;
																for (var _iterator = it1.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																				var _ref;

																				if (_isArray) {
																								if (_i >= _iterator.length) break;
																								_ref = _iterator[_i++];
																				} else {
																								_i = _iterator.next();
																								if (_i.done) break;
																								_ref = _i.value;
																				}

																				var val = _ref;
																				var ind = _$i++;_$temp = _node7;{
																								var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 3608956311;_node8.attrs["w-class"] = "miningItem";{
																												var attrvalue = "";attrvalue += "goDetail( ";attrvalue += ind;attrvalue += " )";_node8.attrs["on-tap"] = attrvalue;
																								}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["on-tap"]));_$temp = _node8;{
																												var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrHash = 0;_$temp = _node9;{
																																var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "img", "sid": 8 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 1356816673;{
																																				var _attrvalue = "";_attrvalue += val.itemImg;_attrvalue += "";_node10.attrs["src"] = _attrvalue;
																																}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["src"]));_node10.attrs["w-class"] = "itemImg";_chFunc(_node10);_$parent10.children.push(_node10);
																												}_$temp = _node9;{
																																var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 9 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 136397174;_node11.attrs["w-class"] = "itemName";_$temp = _node11;{
																																				var _$parent12 = _$temp;_addText(val.itemName, _$parent12);
																																}_chFunc(_node11);_$parent11.children.push(_node11);
																												}_$temp = _node9;{
																																var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "img", "sid": 10 };_node12.children = [];_node12.attrSize = 2;_node12.attrHash = 2279226596;{
																																				var _attrvalue2 = "";_attrvalue2 += val.isComplete ? '../../../res/image/icon_right2.png' : '../../../res/image/icon_right.png';_attrvalue2 += "";_node12.attrs["src"] = _attrvalue2;
																																}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["src"]));_node12.attrs["w-class"] = "itemNum";_chFunc(_node12);_$parent13.children.push(_node12);
																												}_chFunc(_node9);_$parent9.children.push(_node9);
																								}_$temp = _node8;{
																												var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 11 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 3095917008;_node13.attrs["w-class"] = "itemDetail";_$temp = _node13;{
																																var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "widget", "sid": 12 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 112166869;_node14.attrs["w-tag"] = "pi-ui-html";_node14.tagName = _node14.attrs["w-tag"];_$temp = _node14;{
																																				var _$parent16 = _$temp;_addJson(val.itemDetail, _$parent16);
																																}_chFunc(_node14);_$parent15.children.push(_node14);
																												}_chFunc(_node13);_$parent14.children.push(_node13);
																								}_chFunc(_node8);_$parent8.children.push(_node8);
																				}
																}
												}_chFunc(_node7);_$parent7.children.push(_node7);
								}_chFunc(_node);return _node;
				}
});