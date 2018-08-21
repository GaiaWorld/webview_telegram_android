(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 2634935718;_node.attrs["id"] = "addressMessageBox";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 1;_node2.attrHash = 145131995;_node2.attrs["w-class"] = "bg";_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3338124703;_node3.attrs["w-class"] = "base";_$temp = _node3;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1913054642;_node4.attrs["w-class"] = "main";_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 2559935368;_node5.attrs["w-class"] = "header";_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1019047777;_node6.attrs["w-class"] = "title";_$temp = _node6;{
							var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 6 };_node7.children = [];_node7.attrHash = 0;_$temp = _node7;{
								var _$parent8 = _$temp;_addText(it.title, _$parent8);
							}_chFunc(_node7);_$parent7.children.push(_node7);
						}if (it.mType == "prompt") {
							_$temp = _node6;{
								var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "img", "sid": 7 };_node8.children = [];_node8.childHash = 0;_node8.attrSize = 3;_node8.attrHash = 4127532054;_node8.attrs["src"] = "../../../res/image/btn_scan.png";_node8.attrs["w-class"] = "scanbtn";_node8.attrs["on-tap"] = "scanClicked";_$parent9.children.push(_node8);
							}
						}_chFunc(_node6);_$parent6.children.push(_node6);
					}_chFunc(_node5);_$parent5.children.push(_node5);
				}_$temp = _node4;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 487306359;_node9.attrs["w-class"] = "content";if (it.mType == "prompt") {
						_$temp = _node9;{
							var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 9 };_node10.children = [];_node10.attrSize = 4;_node10.attrHash = 2015363344;_node10.attrs["w-class"] = "message";_node10.attrs["ev-input-change"] = "addresseChange";_node10.attrs["w-class"] = "input-father addressInput";_node10.attrs["class"] = "addressInput";_$temp = _node10;{
								var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 10 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 0;_$temp = _node11;{
									var _$parent13 = _$temp;var _node12 = {}; //jpair pre

									{
										var jvalue = "";
										jvalue = "textarea";
										//jpair suf

										_node12["itype"] = jvalue;
									}
									//jpair pre

									{
										var _jvalue = "";
										_jvalue = "输入地址";
										//jpair suf

										_node12["placeHolder"] = _jvalue;
									}
									//jpair pre

									{
										var _jvalue2 = "";
										_jvalue2 += it1.input1Value;_jvalue2 += "";
										//jpair suf

										_node12["input"] = _jvalue2;
									}
									//jpair pre

									{
										var _jvalue3 = "";
										_jvalue3 = "border:none,background:#fff;";
										//jpair suf

										_node12["style"] = _jvalue3;
									}
									_addJson(_node12, _$parent13);
								}_chFunc(_node11);_$parent12.children.push(_node11);
							}_chFunc(_node10);_$parent11.children.push(_node10);
						}
					} else {
						_$temp = _node9;{
							var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 11 };_node13.children = [];_node13.attrSize = 4;_node13.attrHash = 2015363344;_node13.attrs["w-class"] = "message";_node13.attrs["ev-input-change"] = "addresseChange";_node13.attrs["w-class"] = "input-father addressInput";_node13.attrs["class"] = "addressInput";_$temp = _node13;{
								var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 12 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
									var _$parent16 = _$temp;var _node15 = {}; //jpair pre

									{
										var _jvalue4 = "";
										_jvalue4 = "textarea";
										//jpair suf

										_node15["itype"] = _jvalue4;
									}
									//jpair pre

									{
										var _jvalue5 = "";
										_jvalue5 += it.text;_jvalue5 += "";
										//jpair suf

										_node15["placeHolder"] = _jvalue5;
									}
									//jpair pre

									{
										var _jvalue6 = "";
										_jvalue6 = "border:none,background:#fff;";
										//jpair suf

										_node15["style"] = _jvalue6;
									}
									//jpair pre

									_node15["disabled"] = true;
									//jpair suf
									_addJson(_node15, _$parent16);
								}_chFunc(_node14);_$parent15.children.push(_node14);
							}_chFunc(_node13);_$parent14.children.push(_node13);
						}
					}if (it.mType == "confirm" || it.mType == "prompt") {
						_$temp = _node9;{
							var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 13 };_node16.children = [];_node16.attrSize = 2;_node16.attrHash = 272095815;_node16.attrs["ev-input-change"] = "tagsChange";_node16.attrs["w-class"] = "input-father tags";_$temp = _node16;{
								var _$parent18 = _$temp;var _node17 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 14 };_node17.hasChild = false;_node17.child = null;_node17.attrHash = 0;_$temp = _node17;{
									var _$parent19 = _$temp;var _node18 = {}; //jpair pre

									_node18["itype"] = it.inputType;
									//jpair suf
									//jpair pre

									{
										var _jvalue7 = "";
										_jvalue7 = "请输入标签";
										//jpair suf

										_node18["placeHolder"] = _jvalue7;
									}
									//jpair pre

									{
										var _jvalue8 = "";
										_jvalue8 += it1.input2Value;_jvalue8 += "";
										//jpair suf

										_node18["input"] = _jvalue8;
									}
									//jpair pre

									{
										var _jvalue9 = "";
										_jvalue9 = "border:none,background:#F8F8F8;";
										//jpair suf

										_node18["style"] = _jvalue9;
									}
									_addJson(_node18, _$parent19);
								}_chFunc(_node17);_$parent18.children.push(_node17);
							}_chFunc(_node16);_$parent17.children.push(_node16);
						}
					}_chFunc(_node9);_$parent10.children.push(_node9);
				}_$temp = _node4;{
					var _$parent20 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 15 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 2566746008;_node19.attrs["w-class"] = "btns";if (it.mType == "confirm" || it.mType == "prompt") {
						_$temp = _node19;{
							var _$parent21 = _$temp;var _node20 = { "attrs": {}, "tagName": "button", "sid": 16 };_node20.children = [];_node20.childHash = 2573229304;_node20.attrSize = 4;_node20.attrHash = 1651763487;_node20.attrs["type"] = "button";_node20.attrs["w-class"] = "button button_small";_node20.attrs["on-tap"] = "doClickCancel";_node20.attrs["style"] = "margin-right: 30px;";_$temp = _node20;{
								var _$parent22 = _$temp;var _node21 = { "attrs": {}, "tagName": "span", "sid": 17 };_node21.children = [];_node21.childHash = 2195018664;_node21.attrHash = 0;_$temp = _node21;{
									var _$parent23 = _$temp;var _node22 = _installText("取消", 359863121);;
									_$parent23.children.push(_node22);
								}_$parent22.children.push(_node21);
							}_$parent21.children.push(_node20);
						}
					}_$temp = _node19;{
						var _$parent24 = _$temp;var _node23 = { "attrs": {}, "tagName": "button", "sid": 18 };_node23.children = [];_node23.childHash = 1228218462;_node23.attrSize = 3;_node23.attrHash = 2731318130;_node23.attrs["type"] = "button";_node23.attrs["w-class"] = "button button_small button_sure";_node23.attrs["on-tap"] = "doClickSure";_$temp = _node23;{
							var _$parent25 = _$temp;var _node24 = { "attrs": {}, "tagName": "span", "sid": 19 };_node24.children = [];_node24.childHash = 2383734690;_node24.attrHash = 0;_$temp = _node24;{
								var _$parent26 = _$temp;var _node25 = _installText("确定", 2644238972);;
								_$parent26.children.push(_node25);
							}_$parent25.children.push(_node24);
						}_$parent24.children.push(_node23);
					}_chFunc(_node19);_$parent20.children.push(_node19);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}_chFunc(_node3);_$parent3.children.push(_node3);
		}_chFunc(_node);return _node;
	}
});