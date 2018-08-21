(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1973402160;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["style"] = "background-color: #f9f9f9;";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 4103794566;_node2.attrs["w-class"] = "applicationTop";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 2472692496;{
																				var attrvalue = "";attrvalue += "applTab ";attrvalue += it1.activeIndex == 0 ? 'isactive' : '';attrvalue += "";_node3.attrs["w-class"] = attrvalue;
																}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));_node3.attrs["on-tap"] = "tabClick(0)";_$temp = _node3;{
																				var _$parent4 = _$temp;var _node4 = _installText("全部", 2167202486);;
																				_$parent4.children.push(_node4);
																}_chFunc(_node3);_$parent3.children.push(_node3);
												}_$temp = _node2;{
																var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2881040760;{
																				var _attrvalue = "";_attrvalue += "applTab ";_attrvalue += it1.activeIndex == 1 ? 'isactive' : '';_attrvalue += "";_node5.attrs["w-class"] = _attrvalue;
																}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-class"]));_node5.attrs["on-tap"] = "tabClick(1)";_$temp = _node5;{
																				var _$parent6 = _$temp;var _node6 = _installText("游戏", 2167901041);;
																				_$parent6.children.push(_node6);
																}_chFunc(_node5);_$parent5.children.push(_node5);
												}_$temp = _node2;{
																var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 4 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 391455170;{
																				var _attrvalue2 = "";_attrvalue2 += "applTab ";_attrvalue2 += it1.activeIndex == 2 ? 'isactive' : '';_attrvalue2 += "";_node7.attrs["w-class"] = _attrvalue2;
																}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["w-class"]));_node7.attrs["on-tap"] = "tabClick(2)";_$temp = _node7;{
																				var _$parent8 = _$temp;var _node8 = _installText("工具", 1073769720);;
																				_$parent8.children.push(_node8);
																}_chFunc(_node7);_$parent7.children.push(_node7);
												}_$temp = _node2;{
																var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "span", "sid": 5 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 738036619;{
																				var _attrvalue3 = "";_attrvalue3 += "applTab ";_attrvalue3 += it1.activeIndex == 3 ? 'isactive' : '';_attrvalue3 += "";_node9.attrs["w-class"] = _attrvalue3;
																}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["w-class"]));_node9.attrs["on-tap"] = "tabClick(3)";_$temp = _node9;{
																				var _$parent10 = _$temp;var _node10 = _installText("我的", 3559682536);;
																				_$parent10.children.push(_node10);
																}_chFunc(_node9);_$parent9.children.push(_node9);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 6 };_node11.children = [];_node11.attrSize = 3;_node11.attrHash = 936694449;_node11.attrs["w-class"] = "applicationContent";_node11.attrs["class"] = "hide-scrollbar";_node11.attrs["style"] = "overflow-y: auto;overflow-x: hidden;";_$temp = _node11;{
																var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 7 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 1047608949;_node12.attrs["style"] = "height: 1600px;";{
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
																								var ind = _$i++;_$temp = _node12;{
																												var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "applicationItem$", "sid": 8 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
																																var _$parent14 = _$temp;_addJson(val, _$parent14);
																												}_chFunc(_node13);_$parent13.children.push(_node13);
																								}
																				}
																}_chFunc(_node12);_$parent12.children.push(_node12);
												}_chFunc(_node11);_$parent11.children.push(_node11);
								}_$temp = _node;{
												var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 9 };_node14.children = [];_node14.childHash = 2946814719;_node14.attrSize = 1;_node14.attrHash = 4023884176;_node14.attrs["style"] = "height: 100px;position: relative;width: 100%; ";_$parent15.children.push(_node14);
								}_chFunc(_node);return _node;
				}
});