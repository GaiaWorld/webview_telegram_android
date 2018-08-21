(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 1;_node2.attrHash = 145131995;_node2.attrs["w-class"] = "bg";_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 819962544;_node3.attrs["w-class"] = "tips";_$temp = _node3;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "img", "sid": 3 };_node4.children = [];_node4.attrSize = 2;_node4.attrHash = 3481065642;_node4.attrs["w-class"] = "avatar";{
					var attrvalue = "";attrvalue += "../../res/image/";attrvalue += it.tipsImgUrl;attrvalue += "";_node4.attrs["src"] = attrvalue;
				}_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["src"]));_chFunc(_node4);_$parent4.children.push(_node4);
			}_$temp = _node3;{
				var _$parent5 = _$temp;_addText(it.tipsTitle, _$parent5);
			}_chFunc(_node3);_$parent3.children.push(_node3);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1913054642;_node5.attrs["w-class"] = "main";_$temp = _node5;{
				var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2559935368;_node6.attrs["w-class"] = "header";_$temp = _node6;{
					var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1019047777;_node7.attrs["w-class"] = "title";_$temp = _node7;{
						var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 7 };_node8.children = [];_node8.attrHash = 0;_$temp = _node8;{
							var _$parent10 = _$temp;_addText(it.title, _$parent10);
						}_chFunc(_node8);_$parent9.children.push(_node8);
					}_chFunc(_node7);_$parent8.children.push(_node7);
				}_chFunc(_node6);_$parent7.children.push(_node6);
			}_$temp = _node5;{
				var _$parent11 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 241430158;_node9.attrs["w-class"] = "content";if (it.contentStyle) {
					{
						var _attrvalue = "";_attrvalue += it.contentStyle;_attrvalue += "";_node9.attrs["style"] = _attrvalue;
					}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["style"]));_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(null));
				}if (it.content) {
					_$temp = _node9;{
						var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 9 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2697260623;_node10.attrs["w-class"] = "message";_$temp = _node10;{
							var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "p", "sid": 10 };_node11.children = [];_node11.attrHash = 0;_$temp = _node11;{
								var _$parent14 = _$temp;_addText(it.content, _$parent14);
							}_chFunc(_node11);_$parent13.children.push(_node11);
						}_chFunc(_node10);_$parent12.children.push(_node10);
					}
				}_$temp = _node9;{
					var _$parent15 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 11 };_node12.children = [];_node12.attrSize = 2;_node12.attrHash = 2935850061;_node12.attrs["ev-input-change"] = "inputChange";_node12.attrs["w-class"] = "input-father";_$temp = _node12;{
						var _$parent16 = _$temp;var _node13 = { "attrs": {}, "tagName": "input-input$$", "sid": 12 };_node13.hasChild = false;_node13.child = null;_node13.attrHash = 0;_$temp = _node13;{
							var _$parent17 = _$temp;var _node14 = {}; //jpair pre

							_node14["itype"] = it.inputType;
							//jpair suf
							//jpair pre

							_node14["placeHolder"] = it.placeHolder;
							//jpair suf
							//jpair pre

							{
								var jvalue = "";
								jvalue = "backgroundColor:#F8F8F8;border:1px solid #D6D9DF;borderRadius: 6px;padding:0 17px;";
								//jpair suf

								_node14["style"] = jvalue;
							}
							_addJson(_node14, _$parent17);
						}_chFunc(_node13);_$parent16.children.push(_node13);
					}_chFunc(_node12);_$parent15.children.push(_node12);
				}_chFunc(_node9);_$parent11.children.push(_node9);
			}_$temp = _node5;{
				var _$parent18 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 13 };_node15.children = [];_node15.childHash = 839736285;_node15.attrSize = 1;_node15.attrHash = 2566746008;_node15.attrs["w-class"] = "btns";_$temp = _node15;{
					var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "button", "sid": 14 };_node16.children = [];_node16.childHash = 2573229304;_node16.attrSize = 3;_node16.attrHash = 3844452577;_node16.attrs["type"] = "button";_node16.attrs["w-class"] = "button button_cancel";_node16.attrs["on-tap"] = "doClickCancel";_$temp = _node16;{
						var _$parent20 = _$temp;var _node17 = { "attrs": {}, "tagName": "span", "sid": 15 };_node17.children = [];_node17.childHash = 2195018664;_node17.attrHash = 0;_$temp = _node17;{
							var _$parent21 = _$temp;var _node18 = _installText("取消", 359863121);;
							_$parent21.children.push(_node18);
						}_$parent20.children.push(_node17);
					}_$parent19.children.push(_node16);
				}_$temp = _node15;{
					var _$parent22 = _$temp;var _node19 = { "attrs": {}, "tagName": "button", "sid": 16 };_node19.children = [];_node19.childHash = 481835282;_node19.attrSize = 3;_node19.attrHash = 3612651385;_node19.attrs["type"] = "button";_node19.attrs["w-class"] = "button button_sure";_node19.attrs["on-tap"] = "doClickSure";_$temp = _node19;{
						var _$parent23 = _$temp;var _node20 = { "attrs": {}, "tagName": "span", "sid": 17 };_node20.children = [];_node20.childHash = 3736051092;_node20.attrHash = 0;_$temp = _node20;{
							var _$parent24 = _$temp;var _node21 = _installText("验证", 2997520732);;
							_$parent24.children.push(_node21);
						}_$parent23.children.push(_node20);
					}_$parent22.children.push(_node19);
				}_$parent18.children.push(_node15);
			}_chFunc(_node5);_$parent6.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});