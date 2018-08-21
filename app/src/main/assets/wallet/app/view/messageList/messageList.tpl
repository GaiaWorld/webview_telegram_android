(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1618851374;_node.attrs["class"] = "ga-new-page";_node.attrs["style"] = "background-color: #f9f9f9;";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 3867012313;_node2.attrSize = 1;_node2.attrHash = 3880895855;_node2.attrs["w-class"] = "ga-top-banner";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.childHash = 0;_node3.attrSize = 3;_node3.attrHash = 2648266818;_node3.attrs["src"] = "../../res/image/btn_back.png";_node3.attrs["w-class"] = "ga-back";_node3.attrs["on-tap"] = "goback";_$parent3.children.push(_node3);
												}_$temp = _node2;{
																var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.childHash = 2345556436;_node4.attrSize = 1;_node4.attrHash = 3072105167;_node4.attrs["w-class"] = "ga-banner-title";_$temp = _node4;{
																				var _$parent5 = _$temp;var _node5 = _installText("消息", 946807678);;
																				_$parent5.children.push(_node5);
																}_$parent4.children.push(_node4);
												}_$temp = _node2;{
																var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 4 };_node6.children = [];_node6.childHash = 542701114;_node6.attrSize = 1;_node6.attrHash = 1833934475;_node6.attrs["w-class"] = "ga-banner-btn";_$temp = _node6;{
																				var _$parent7 = _$temp;var _node7 = _installText("全部已读", 3634565767);;
																				_$parent7.children.push(_node7);
																}_$parent6.children.push(_node6);
												}_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2185739571;_node8.attrs["style"] = "position: relative;top:0px;bottom:0px;width:100%;";{
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
																				var ind = _$i++;_$temp = _node8;{
																								var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 2081490909;_node9.attrs["w-class"] = "messItem ";{
																												var attrvalue = "";attrvalue += "messDetail(e,";attrvalue += ind;attrvalue += ")";_node9.attrs["on-tap"] = attrvalue;
																								}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["on-tap"]));if (val.noread) {
																												_$temp = _node9;{
																																var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.childHash = 2946814719;_node10.attrSize = 1;_node10.attrHash = 3396554656;_node10.attrs["w-class"] = "is-noread";_$parent10.children.push(_node10);
																												}
																								}_$temp = _node9;{
																												var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 8 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 4250693920;_node11.attrs["w-class"] = "messType";_$temp = _node11;{
																																var _$parent12 = _$temp;_addText(val.typename, _$parent12);
																												}_chFunc(_node11);_$parent11.children.push(_node11);
																								}if (val.type == "1") {
																												_$temp = _node9;{
																																var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "span", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 4250693920;_node12.attrs["w-class"] = "messType";_$temp = _node12;{
																																				var _$parent14 = _$temp;_addText(" " + val.name, _$parent14);
																																}_chFunc(_node12);_$parent13.children.push(_node12);
																												}
																								}_$temp = _node9;{
																												var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "span", "sid": 10 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 2178238504;_node13.attrs["w-class"] = "messTime";_$temp = _node13;{
																																var _$parent16 = _$temp;_addText(val.time, _$parent16);
																												}_chFunc(_node13);_$parent15.children.push(_node13);
																								}_$temp = _node9;{
																												var _$parent17 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 696813556;_node14.attrs["w-class"] = "messTitle";_$temp = _node14;{
																																var _$parent18 = _$temp;_addText(val.title, _$parent18);
																												}if (val.type == "2") {
																																_$temp = _node14;{
																																				var _$parent19 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 12 };_node15.children = [];_node15.attrHash = 0;_$temp = _node15;{
																																								var _$parent20 = _$temp;var _node16 = _installText("：", 3359304705);;
																																								_$parent20.children.push(_node16);
																																				}_$temp = _node15;{
																																								var _$parent21 = _$temp;_addText(val.content, _$parent21);
																																				}_chFunc(_node15);_$parent19.children.push(_node15);
																																}
																												}_chFunc(_node14);_$parent17.children.push(_node14);
																								}_chFunc(_node9);_$parent9.children.push(_node9);
																				}
																}
												}_chFunc(_node8);_$parent8.children.push(_node8);
								}_chFunc(_node);return _node;
				}
});