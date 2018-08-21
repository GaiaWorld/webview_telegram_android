(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 2478994113;_node.attrs["w-class"] = "transaction-list";{
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

																var each = _ref;
																var i = _$i++;_$temp = _node;{
																				var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3701876768;_node2.attrs["w-class"] = "each";{
																								var attrvalue = "";attrvalue += "showTransactionDetails(e,";attrvalue += i;attrvalue += ")";_node2.attrs["on-tap"] = attrvalue;
																				}_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["on-tap"]));_$temp = _node2;{
																								var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3393973547;_node3.attrs["w-class"] = "box1";_$temp = _node3;{
																												var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 1385258054;_node4.attrs["w-class"] = "type";{
																																var _attrvalue = "";_attrvalue += "color:";_attrvalue += each.type === '收款' ? '#40875E' : each.type === '转账' ? '#874040' : '';_attrvalue += "";_node4.attrs["style"] = _attrvalue;
																												}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["style"]));_$temp = _node4;{
																																var _$parent5 = _$temp;_addText(each.type, _$parent5);
																												}_chFunc(_node4);_$parent4.children.push(_node4);
																								}_$temp = _node3;{
																												var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3484935328;_node5.attrs["w-class"] = "account";_$temp = _node5;{
																																var _$parent7 = _$temp;_addText(each.account, _$parent7);
																												}_chFunc(_node5);_$parent6.children.push(_node5);
																								}_$temp = _node3;{
																												var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2020633451;_node6.attrs["w-class"] = "pay";_$temp = _node6;{
																																var _$parent9 = _$temp;_addText(each.type === '收款' ? '+' : each.type === '转账' ? '-' : '', _$parent9);
																												}_$temp = _node6;{
																																var _$parent10 = _$temp;_addText(each.showPay, _$parent10);
																												}_chFunc(_node6);_$parent8.children.push(_node6);
																								}_chFunc(_node3);_$parent3.children.push(_node3);
																				}_$temp = _node2;{
																								var _$parent11 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 30411952;_node7.attrs["w-class"] = "box2";_$temp = _node7;{
																												var _$parent12 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 4199677935;_node8.attrs["w-class"] = "time";_$temp = _node8;{
																																var _$parent13 = _$temp;_addText(each.showTime, _$parent13);
																												}_chFunc(_node8);_$parent12.children.push(_node8);
																								}_$temp = _node7;{
																												var _$parent14 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 298594604;_node9.attrs["w-class"] = "result";_$temp = _node9;{
																																var _$parent15 = _$temp;_addText(each.result, _$parent15);
																												}_chFunc(_node9);_$parent14.children.push(_node9);
																								}_chFunc(_node7);_$parent11.children.push(_node7);
																				}_chFunc(_node2);_$parent2.children.push(_node2);
																}
												}
								}_chFunc(_node);return _node;
				}
});