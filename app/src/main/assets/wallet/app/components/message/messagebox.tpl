(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 1;_node2.attrHash = 145131995;_node2.attrs["w-class"] = "bg";_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1913054642;_node3.attrs["w-class"] = "main";_$temp = _node3;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2559935368;_node4.attrs["w-class"] = "header";_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1019047777;_node5.attrs["w-class"] = "title";_$temp = _node5;{
						var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 5 };_node6.children = [];_node6.attrHash = 0;_$temp = _node6;{
							var _$parent7 = _$temp;_addText(it.title, _$parent7);
						}_chFunc(_node6);_$parent6.children.push(_node6);
					}_chFunc(_node5);_$parent5.children.push(_node5);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}_$temp = _node3;{
				var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 241430158;_node7.attrs["w-class"] = "content";if (it.contentStyle) {
					{
						var attrvalue = "";attrvalue += it.contentStyle;attrvalue += "";_node7.attrs["style"] = attrvalue;
					}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["style"]));_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(null));
				}if (it.content) {
					_$temp = _node7;{
						var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2697260623;_node8.attrs["w-class"] = "message";_$temp = _node8;{
							var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "p", "sid": 8 };_node9.children = [];_node9.attrHash = 0;_$temp = _node9;{
								var _$parent11 = _$temp;_addText(it.content, _$parent11);
							}_chFunc(_node9);_$parent10.children.push(_node9);
						}_chFunc(_node8);_$parent9.children.push(_node8);
					}
				}if (it.itype === "prompt") {
					_$temp = _node7;{
						var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 9 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 2935850061;_node10.attrs["ev-input-change"] = "inputChange";_node10.attrs["w-class"] = "input-father";_$temp = _node10;{
							var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "input-input$$", "sid": 10 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 0;_$temp = _node11;{
								var _$parent14 = _$temp;var _node12 = {}; //jpair pre

								_node12["itype"] = it.inputType;
								//jpair suf
								//jpair pre

								_node12["placeHolder"] = it.placeHolder;
								//jpair suf
								_addJson(_node12, _$parent14);
							}_chFunc(_node11);_$parent13.children.push(_node11);
						}_chFunc(_node10);_$parent12.children.push(_node10);
					}
				}_chFunc(_node7);_$parent8.children.push(_node7);
			}if (it.itype !== "extra") {
				_$temp = _node3;{
					var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 11 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 2566746008;_node13.attrs["w-class"] = "btns";if (it.itype === "confirm" || it.itype === "prompt") {
						_$temp = _node13;{
							var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "button", "sid": 12 };_node14.children = [];_node14.attrSize = 4;_node14.attrHash = 921938277;_node14.attrs["type"] = "button";_node14.attrs["w-class"] = "button button_small";_node14.attrs["on-tap"] = "doClickCancel";{
								var _attrvalue = "";_attrvalue += "margin-right: 90px;";_attrvalue += it.cancelButtonStyle ? it.cancelButtonStyle : '';_attrvalue += "";_node14.attrs["style"] = _attrvalue;
							}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["style"]));if (it.cancelButton) {
								_$temp = _node14;{
									var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 13 };_node15.children = [];_node15.attrHash = 0;_$temp = _node15;{
										var _$parent18 = _$temp;_addText(it.cancelButton, _$parent18);
									}_chFunc(_node15);_$parent17.children.push(_node15);
								}
							} else {
								_$temp = _node14;{
									var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "span", "sid": 14 };_node16.children = [];_node16.childHash = 2195018664;_node16.attrHash = 0;_$temp = _node16;{
										var _$parent20 = _$temp;var _node17 = _installText("取消", 359863121);;
										_$parent20.children.push(_node17);
									}_$parent19.children.push(_node16);
								}
							}_chFunc(_node14);_$parent16.children.push(_node14);
						}
					}_$temp = _node13;{
						var _$parent21 = _$temp;var _node18 = { "attrs": {}, "tagName": "button", "sid": 15 };_node18.children = [];_node18.attrSize = 4;_node18.attrHash = 3716074414;_node18.attrs["type"] = "button";_node18.attrs["w-class"] = "button button_small button_sure";_node18.attrs["on-tap"] = "doClickSure";{
							var _attrvalue2 = "";_attrvalue2 += it.okButtonStyle ? it.okButtonStyle : '';_attrvalue2 += "";_node18.attrs["style"] = _attrvalue2;
						}_node18.attrHash = _hash.nextHash(_node18.attrHash, _calTextHash(_node18.attrs["style"]));if (it.okButton) {
							_$temp = _node18;{
								var _$parent22 = _$temp;var _node19 = { "attrs": {}, "tagName": "span", "sid": 16 };_node19.children = [];_node19.attrHash = 0;_$temp = _node19;{
									var _$parent23 = _$temp;_addText(it.okButton, _$parent23);
								}_chFunc(_node19);_$parent22.children.push(_node19);
							}
						} else {
							_$temp = _node18;{
								var _$parent24 = _$temp;var _node20 = { "attrs": {}, "tagName": "span", "sid": 17 };_node20.children = [];_node20.childHash = 2383734690;_node20.attrHash = 0;_$temp = _node20;{
									var _$parent25 = _$temp;var _node21 = _installText("确定", 2644238972);;
									_$parent25.children.push(_node21);
								}_$parent24.children.push(_node20);
							}
						}_chFunc(_node18);_$parent21.children.push(_node18);
					}_chFunc(_node13);_$parent15.children.push(_node13);
				}
			} else {
				_$temp = _node3;{
					var _$parent26 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 18 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 2025654205;_node22.attrs["w-class"] = "extra";_$temp = _node22;{
						var _$parent27 = _$temp;_addText(it.extraInfo, _$parent27);
					}_chFunc(_node22);_$parent26.children.push(_node22);
				}_$temp = _node3;{
					var _$parent28 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 19 };_node23.children = [];_node23.childHash = 4141367856;_node23.attrSize = 2;_node23.attrHash = 3606893633;_node23.attrs["w-class"] = "quit-container";_node23.attrs["on-tap"] = "quitClick";_$temp = _node23;{
						var _$parent29 = _$temp;var _node24 = { "attrs": {}, "tagName": "img", "sid": 20 };_node24.children = [];_node24.childHash = 0;_node24.attrSize = 2;_node24.attrHash = 3401290591;_node24.attrs["w-class"] = "quit";_node24.attrs["src"] = "../../res/image/btn_pop_close.png";_$parent29.children.push(_node24);
					}_$parent28.children.push(_node23);
				}_$temp = _node3;{
					var _$parent30 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 21 };_node25.children = [];_node25.attrSize = 2;_node25.attrHash = 2713346874;_node25.attrs["w-class"] = "copy-btn";_node25.attrs["on-tap"] = "copyBtnClick";_$temp = _node25;{
						var _$parent31 = _$temp;_addText(it.copyBtnText, _$parent31);
					}_chFunc(_node25);_$parent30.children.push(_node25);
				}
			}_chFunc(_node3);_$parent3.children.push(_node3);
		}_chFunc(_node);return _node;
	}
});