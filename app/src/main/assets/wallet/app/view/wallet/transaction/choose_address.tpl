(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 2;_node2.attrHash = 3086550878;_node2.attrs["w-class"] = "bg";_node2.attrs["on-tap"] = "doClose";_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 4015834940;_node3.attrs["w-class"] = "show-list";_$temp = _node3;{
																var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 3617678174;_node4.attrs["style"] = "max-height: 900px;overflow-y: auto;overflow-x: hidden;";_node4.attrs["class"] = "hide-scrollbar";{
																				var _$i = 0;
																				for (var _iterator = it1.list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																								var _ref;

																								if (_isArray) {
																												if (_i >= _iterator.length) break;
																												_ref = _iterator[_i++];
																								} else {
																												_i = _iterator.next();
																												if (_i.done) break;
																												_ref = _i.value;
																								}

																								var each = _ref;
																								var i = _$i++;_$temp = _node4;{
																												var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 1796068371;_node5.attrs["w-class"] = "each";{
																																var attrvalue = "";attrvalue += "chooseAddr(e,";attrvalue += i;attrvalue += ")";_node5.attrs["on-tap"] = attrvalue;
																												}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["on-tap"]));_$temp = _node5;{
																																var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1540292426;_node6.attrs["w-class"] = "name";_$temp = _node6;{
																																				var _$parent7 = _$temp;_addText(each.name, _$parent7);
																																}_chFunc(_node6);_$parent6.children.push(_node6);
																												}if (each.isChoose) {
																																_$temp = _node5;{
																																				var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.childHash = 3271492271;_node7.attrSize = 1;_node7.attrHash = 864656130;_node7.attrs["w-class"] = "is-choose";_$temp = _node7;{
																																								var _$parent9 = _$temp;var _node8 = _installText("√", 4250526368);;
																																								_$parent9.children.push(_node8);
																																				}_$parent8.children.push(_node7);
																																}
																												}_$temp = _node5;{
																																var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1349797565;_node9.attrs["w-class"] = "balance";_$temp = _node9;{
																																				var _$parent11 = _$temp;_addText(each.balance, _$parent11);
																																}_$temp = _node9;{
																																				var _$parent12 = _$temp;var _node10 = _installText("&nbsp;", 1553561131);;
																																				_$parent12.children.push(_node10);
																																}_$temp = _node9;{
																																				var _$parent13 = _$temp;_addText(it.currencyName, _$parent13);
																																}_chFunc(_node9);_$parent10.children.push(_node9);
																												}_chFunc(_node5);_$parent5.children.push(_node5);
																								}
																				}
																}_chFunc(_node4);_$parent4.children.push(_node4);
												}_$temp = _node3;{
																var _$parent14 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.childHash = 3302825673;_node11.attrSize = 2;_node11.attrHash = 487043822;_node11.attrs["w-class"] = "add-addr";_node11.attrs["on-tap"] = "addAddr";_$temp = _node11;{
																				var _$parent15 = _$temp;var _node12 = _installText("添加地址", 3197056612);;
																				_$parent15.children.push(_node12);
																}_$parent14.children.push(_node11);
												}_chFunc(_node3);_$parent3.children.push(_node3);
								}_chFunc(_node);return _node;
				}
});