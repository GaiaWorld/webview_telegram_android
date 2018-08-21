(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;var talkcontent = it1.data1;if (it.content == "2") {
								talkcontent = it1.data2;
				}_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 4285755435;_node.attrs["class"] = "ga-new-page";_node.attrs["style"] = "background-color: #f9f9f9;";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3880895855;_node2.attrs["w-class"] = "ga-top-banner";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.childHash = 0;_node3.attrSize = 3;_node3.attrHash = 1715270467;_node3.attrs["src"] = "../../res/image/btn_back.png";_node3.attrs["w-class"] = "ga-back";_node3.attrs["on-tap"] = "backPrePage";_$parent3.children.push(_node3);
												}_$temp = _node2;{
																var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3583682907;_node4.attrs["style"] = "text-align: center;";_$temp = _node4;{
																				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3296415734;_node5.attrs["w-class"] = "messFriendName";_$temp = _node5;{
																								var _$parent6 = _$temp;_addText(it.name, _$parent6);
																				}_chFunc(_node5);_$parent5.children.push(_node5);
																}_$temp = _node4;{
																				var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.childHash = 489686814;_node6.attrSize = 1;_node6.attrHash = 3774391908;_node6.attrs["w-class"] = "messFriendAddr";_$temp = _node6;{
																								var _$parent8 = _$temp;var _node7 = _installText("ETH asdfasdg...fhadfhasf", 943261075);;
																								_$parent8.children.push(_node7);
																				}_$parent7.children.push(_node6);
																}_chFunc(_node4);_$parent4.children.push(_node4);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 3581199669;_node8.attrs["w-plugin"] = '{"mod":"pi/widget/scroller/scroller", "options":{"startY":-819} }';_node8.attrs["w-class"] = "talkContent";_$temp = _node8;{
																var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 696640143;_node9.attrs["style"] = "height: auto;";_node9.attrs["id"] = "talkcontent";{
																				var _$i = 0;
																				for (var _iterator = talkcontent, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
																								var ind = _$i++;if (val.time) {
																												_$temp = _node9;{
																																var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2245952039;_node10.attrs["w-class"] = "messFriendTime";_$temp = _node10;{
																																				var _$parent12 = _$temp;_addText(val.time, _$parent12);
																																}_chFunc(_node10);_$parent11.children.push(_node10);
																												}
																								}if (val.type == "1") {
																												_$temp = _node9;{
																																var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 9 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 258075502;_node11.attrs["style"] = "overflow:auto;";_$temp = _node11;{
																																				var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 10 };_node12.children = [];_node12.childHash = 143393981;_node12.attrSize = 2;_node12.attrHash = 2703789001;_node12.attrs["style"] = "text-align: right;";_node12.attrs["w-class"] = "messFriendPerson";_$temp = _node12;{
																																								var _$parent15 = _$temp;var _node13 = _installText("我", 1772587791);;
																																								_$parent15.children.push(_node13);
																																				}_$parent14.children.push(_node12);
																																}_$temp = _node11;{
																																				var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 819362918;_node14.attrs["w-class"] = "mymessContent";_$temp = _node14;{
																																								var _$parent17 = _$temp;_addText(val.content, _$parent17);
																																				}_chFunc(_node14);_$parent16.children.push(_node14);
																																}_$temp = _node11;{
																																				var _$parent18 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 12 };_node15.children = [];_node15.childHash = 2946814719;_node15.attrSize = 1;_node15.attrHash = 474075932;_node15.attrs["style"] = "clear: both;";_$parent18.children.push(_node15);
																																}_chFunc(_node11);_$parent13.children.push(_node11);
																												}
																								} else {
																												_$temp = _node9;{
																																var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 13 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 258075502;_node16.attrs["style"] = "overflow:auto;";_$temp = _node16;{
																																				var _$parent20 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 14 };_node17.children = [];_node17.attrSize = 1;_node17.attrHash = 1362087218;_node17.attrs["w-class"] = "messFriendPerson";_$temp = _node17;{
																																								var _$parent21 = _$temp;_addText(it.name, _$parent21);
																																				}_chFunc(_node17);_$parent20.children.push(_node17);
																																}_$temp = _node16;{
																																				var _$parent22 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 15 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 430071479;_node18.attrs["w-class"] = "friendmessContent";_$temp = _node18;{
																																								var _$parent23 = _$temp;_addText(val.content, _$parent23);
																																				}_chFunc(_node18);_$parent22.children.push(_node18);
																																}_chFunc(_node16);_$parent19.children.push(_node16);
																												}
																								}
																				}
																}_chFunc(_node9);_$parent10.children.push(_node9);
												}_chFunc(_node8);_$parent9.children.push(_node8);
								}_$temp = _node;{
												var _$parent24 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 16 };_node19.children = [];_node19.childHash = 1177999867;_node19.attrSize = 1;_node19.attrHash = 4033663925;_node19.attrs["w-class"] = "talkInput";_$temp = _node19;{
																var _$parent25 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 17 };_node20.children = [];_node20.childHash = 3000582246;_node20.attrSize = 1;_node20.attrHash = 2599426744;_node20.attrs["w-class"] = "inputDiv";_$temp = _node20;{
																				var _$parent26 = _$temp;var _node21 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 18 };_node21.hasChild = false;_node21.child = null;_node21.childHash = 2359726162;_node21.attrHash = 0;_$temp = _node21;{
																								var _$parent27 = _$temp;var _node22 = {};_addJson(_node22, _$parent27);
																				}_$parent26.children.push(_node21);
																}_$parent25.children.push(_node20);
												}_$temp = _node19;{
																var _$parent28 = _$temp;var _node23 = { "attrs": {}, "tagName": "img", "sid": 19 };_node23.children = [];_node23.childHash = 0;_node23.attrSize = 2;_node23.attrHash = 3378379858;_node23.attrs["src"] = "../../res/image/icon_mine_send.png";_node23.attrs["w-class"] = "sendBtn";_$parent28.children.push(_node23);
												}_$parent24.children.push(_node19);
								}_chFunc(_node);return _node;
				}
});