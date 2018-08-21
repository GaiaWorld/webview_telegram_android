(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3171675317;_node2.attrs["w-class"] = "nav-wrap";_node2.attrs["class"] = "tabs-nav-wrap";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 4249958198;_node3.attrs["w-class"] = "nav-scroll";_$temp = _node3;{
																				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1940417547;_node4.attrs["w-class"] = "nav";{
																								var _$i = 0;
																								for (var _iterator = it.list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
																												var i = _$i++;var isActive = i === it.activeNum;var isFirst = i === 0;_$temp = _node4;{
																																var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 4;_node5.attrHash = 2436384668;{
																																				var attrvalue = "";attrvalue += "nav-item ";attrvalue += isFirst ? 'first-item' : '';attrvalue += " ";attrvalue += isActive ? 'is-active-normal' : '';attrvalue += "";_node5.attrs["w-class"] = attrvalue;
																																}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-class"]));_node5.attrs["class"] = "tabs-item";_node5.attrs["style"] = "font-size: 28px;height: 80px;line-height: 80px;";{
																																				var _attrvalue = "";_attrvalue += "doClick(e,";_attrvalue += i;_attrvalue += ")";_node5.attrs["on-tap"] = _attrvalue;
																																}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["on-tap"]));_$temp = _node5;{
																																				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 189939039;{
																																								var _attrvalue2 = "";_attrvalue2 += "nav-span-normal";_attrvalue2 += isActive ? '-activity' : '';_attrvalue2 += "";_node6.attrs["w-class"] = _attrvalue2;
																																				}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["w-class"]));_$temp = _node6;{
																																								var _$parent7 = _$temp;_addText(v, _$parent7);
																																				}_chFunc(_node6);_$parent6.children.push(_node6);
																																}_chFunc(_node5);_$parent5.children.push(_node5);
																												}
																								}
																				}_chFunc(_node4);_$parent4.children.push(_node4);
																}_chFunc(_node3);_$parent3.children.push(_node3);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_chFunc(_node);return _node;
				}
});