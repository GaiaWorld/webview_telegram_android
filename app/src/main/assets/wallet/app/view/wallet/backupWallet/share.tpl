(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3057051254;_node.attrs["id"] = "share";_node.attrs["class"] = "ga-new-page";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 3596031366;_node2.attrSize = 1;_node2.attrHash = 3605200885;_node2.attrs["w-class"] = "head";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 600621830;_node3.attrSize = 1;_node3.attrHash = 1559875520;_node3.attrs["w-class"] = "headMain";_$temp = _node3;{
																				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.childHash = 2362140244;_node4.attrSize = 1;_node4.attrHash = 3173585391;_node4.attrs["w-class"] = "headTitle";_$temp = _node4;{
																								var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 4 };_node5.children = [];_node5.childHash = 0;_node5.attrSize = 3;_node5.attrHash = 2630172001;_node5.attrs["on-tap"] = "back";_node5.attrs["src"] = "../../../res/image/btn_back.png";_node5.attrs["style"] = "vertical-align: middle;margin-right: 20px;";_$parent5.children.push(_node5);
																				}_$temp = _node4;{
																								var _$parent6 = _$temp;var _node6 = _installText("通过分享片段备份", 1553418616);;
																								_$parent6.children.push(_node6);
																				}_$parent4.children.push(_node4);
																}_$parent3.children.push(_node3);
												}_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1865359699;_node7.attrs["w-class"] = "stepBarBox";var i = 1;while (i <= it1.totalSteps) {
																_$temp = _node7;{
																				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2174997602;{
																								var attrvalue = "";attrvalue += "step ";attrvalue += it1.step == i ? 'stepchoosed' : '';attrvalue += "";_node8.attrs["w-class"] = attrvalue;
																				}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-class"]));_chFunc(_node8);_$parent8.children.push(_node8);
																}i = i + 1;
												}_chFunc(_node7);_$parent7.children.push(_node7);
								}_$temp = _node;{
												var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 4252679546;_node9.attrs["w-class"] = "body";_$temp = _node9;{
																var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.childHash = 132044545;_node10.attrSize = 1;_node10.attrHash = 1666800133;_node10.attrs["w-class"] = "note";_$temp = _node10;{
																				var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "p", "sid": 9 };_node11.children = [];_node11.childHash = 3007870010;_node11.attrHash = 0;_$temp = _node11;{
																								var _$parent12 = _$temp;var _node12 = _installText("什么是分享备份", 3018411641);;
																								_$parent12.children.push(_node12);
																				}_$parent11.children.push(_node11);
																}_$temp = _node10;{
																				var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "p", "sid": 10 };_node13.children = [];_node13.childHash = 54799851;_node13.attrHash = 0;_$temp = _node13;{
																								var _$parent14 = _$temp;var _node14 = _installText("将助记词加密并切片发给好友保存，只获得片段毫无作用，还需要您的交易密码才能将其解密，所以请牢记交易密码。", 4105953272);;
																								_$parent14.children.push(_node14);
																				}_$parent13.children.push(_node13);
																}_$parent10.children.push(_node10);
												}_$temp = _node9;{
																var _$parent15 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 299950553;_node15.attrs["w-class"] = "part";_$temp = _node15;{
																				var _$parent16 = _$temp;_addText(it1.part, _$parent16);
																}_chFunc(_node15);_$parent15.children.push(_node15);
												}_$temp = _node9;{
																var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 1428846779;_node16.attrs["w-class"] = "shareTitle";_$temp = _node16;{
																				var _$parent18 = _$temp;var _node17 = _installText("保存第", 2512518218);;
																				_$parent18.children.push(_node17);
																}if (it1.step == 1) {
																				_$temp = _node16;{
																								var _$parent19 = _$temp;var _node18 = _installText("一", 3926415787);;
																								_$parent19.children.push(_node18);
																				}
																} else if (it1.step == 2) {
																				_$temp = _node16;{
																								var _$parent20 = _$temp;var _node19 = _installText("二", 182290366);;
																								_$parent20.children.push(_node19);
																				}
																} else if (it1.step == 3) {
																				_$temp = _node16;{
																								var _$parent21 = _$temp;var _node20 = _installText("三", 692026222);;
																								_$parent21.children.push(_node20);
																				}
																} else if (it1.step == 4) {
																				_$temp = _node16;{
																								var _$parent22 = _$temp;var _node21 = _installText("四", 4226505956);;
																								_$parent22.children.push(_node21);
																				}
																} else {
																				_$temp = _node16;{
																								var _$parent23 = _$temp;_addText(it1.step, _$parent23);
																				}
																}_$temp = _node16;{
																				var _$parent24 = _$temp;var _node22 = _installText("份", 4105707745);;
																				_$parent24.children.push(_node22);
																}_chFunc(_node16);_$parent17.children.push(_node16);
												}_$temp = _node9;{
																var _$parent25 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 13 };_node23.children = [];_node23.attrSize = 1;_node23.attrHash = 2461161729;_node23.attrs["w-class"] = "btnBox";_$temp = _node23;{
																				var _$parent26 = _$temp;var _node24 = { "attrs": {}, "tagName": "button", "sid": 14 };_node24.children = [];_node24.attrSize = 2;_node24.attrHash = 1456349064;_node24.attrs["w-class"] = "shareBtn";_node24.attrs["on-tap"] = "shareBtnClick";_$temp = _node24;{
																								var _$parent27 = _$temp;var _node25 = _installText("分享给第", 3892269069);;
																								_$parent27.children.push(_node25);
																				}_$temp = _node24;{
																								var _$parent28 = _$temp;_addText(it1.step, _$parent28);
																				}_$temp = _node24;{
																								var _$parent29 = _$temp;var _node26 = _installText("个人", 2585327010);;
																								_$parent29.children.push(_node26);
																				}_chFunc(_node24);_$parent26.children.push(_node24);
																}_chFunc(_node23);_$parent25.children.push(_node23);
												}_chFunc(_node9);_$parent9.children.push(_node9);
								}_chFunc(_node);return _node;
				}
});