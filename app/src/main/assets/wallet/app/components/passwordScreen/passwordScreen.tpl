(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 1243708087;_node.attrs["w-class"] = "ga-psw-screen";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 2840447640;_node2.attrs["w-class"] = "ga-title";_$temp = _node2;{
																var _$parent3 = _$temp;_addText(it.title, _$parent3);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent4 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 569710817;_node3.attrs["w-class"] = "ga-dots-container";{
																var _$i = 0;
																for (var _iterator = it1.defaultArr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																				var _ref;

																				if (_isArray) {
																								if (_i >= _iterator.length) break;
																								_ref = _iterator[_i++];
																				} else {
																								_i = _iterator.next();
																								if (_i.done) break;
																								_ref = _i.value;
																				}

																				var value = _ref;
																				var index = _$i++;_$temp = _node3;{
																								var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2255571891;{
																												var attrvalue = "";attrvalue += it1.pswArr[index] >= 0 ? 'ga-dot ga-dot-active' : 'ga-dot';attrvalue += "";_node4.attrs["w-class"] = attrvalue;
																								}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-class"]));_chFunc(_node4);_$parent5.children.push(_node4);
																				}
																}
												}_chFunc(_node3);_$parent4.children.push(_node3);
								}_$temp = _node;{
												var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 3512227263;_node5.attrs["w-class"] = "ga-forgetpsw";_node5.attrs["on-tap"] = "forgetPswClick";_$temp = _node5;{
																var _$parent7 = _$temp;_addText(it.forgetPsw ? '忘记密码?' : '', _$parent7);
												}_chFunc(_node5);_$parent6.children.push(_node5);
								}_$temp = _node;{
												var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2809490308;_node6.attrs["w-class"] = "ga-password-board";{
																var _$i2 = 0;
																for (var _iterator2 = it1.pswBoard, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
																				var _ref2;

																				if (_isArray2) {
																								if (_i2 >= _iterator2.length) break;
																								_ref2 = _iterator2[_i2++];
																				} else {
																								_i2 = _iterator2.next();
																								if (_i2.done) break;
																								_ref2 = _i2.value;
																				}

																				var _value = _ref2;
																				var _index = _$i2++;_$temp = _node6;{
																								var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 6 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 3543735423;_node7.attrs["w-class"] = "ga-psw-board-item";{
																												var _attrvalue = "";_attrvalue += "boardItemClick(e,";_attrvalue += _index;_attrvalue += ")";_node7.attrs["on-down"] = _attrvalue;
																								}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["on-down"]));_$temp = _node7;{
																												var _$parent10 = _$temp;_addText(_value, _$parent10);
																								}_chFunc(_node7);_$parent9.children.push(_node7);
																				}
																}
												}_$temp = _node6;{
																var _$parent11 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 7 };_node8.children = [];_node8.childHash = 1679539878;_node8.attrSize = 2;_node8.attrHash = 2682009546;_node8.attrs["w-class"] = "ga-clear";_node8.attrs["on-down"] = "clearClick";_$temp = _node8;{
																				var _$parent12 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 8 };_node9.children = [];_node9.childHash = 0;_node9.attrSize = 2;_node9.attrHash = 211100535;_node9.attrs["src"] = "../../res/image/delete_lock.png";_node9.attrs["w-class"] = "deletIcon";_$parent12.children.push(_node9);
																}_$parent11.children.push(_node8);
												}_chFunc(_node6);_$parent8.children.push(_node6);
								}_chFunc(_node);return _node;
				}
});