(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2896174234;_node.attrs["w-class"] = "base";_node.attrs["class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3664680752;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_node2.attrs["ev-back-click"] = "doClose";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = it.currencyName;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "white";
						//jpair suf

						_node4["iconColor"] = jvalue;
					}
					//jpair pre

					{
						var _jvalue = "";
						_jvalue = "left";
						//jpair suf

						_node4["titlePosition"] = _jvalue;
					}
					//jpair pre

					{
						var _jvalue2 = "";
						_jvalue2 = "backgroundColor:rgba(68, 140, 255, 1);color:#fff;";
						//jpair suf

						_node4["style"] = _jvalue2;
					}
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 4252679546;_node5.attrs["w-class"] = "body";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1913054642;_node6.attrs["w-class"] = "main";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 2255858724;_node7.attrs["w-class"] = "body-header";_$temp = _node7;{
						var _$parent8 = _$temp;_addText(it1.title, _$parent8);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}_$temp = _node6;{
					var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1650692450;_node8.attrs["w-class"] = "qrcode";_$temp = _node8;{
						var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "pi-components-qrcode-qrcode", "sid": 7 };_node9.hasChild = false;_node9.child = null;_node9.attrHash = 0;_$temp = _node9;{
							var _$parent11 = _$temp;var _node10 = {}; //jpair pre

							_node10["value"] = it.addr;
							//jpair suf
							//jpair pre

							_node10["size"] = 400;
							//jpair suf
							_addJson(_node10, _$parent11);
						}_chFunc(_node9);_$parent10.children.push(_node9);
					}_chFunc(_node8);_$parent9.children.push(_node8);
				}_$temp = _node6;{
					var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 3146205922;_node11.attrs["w-class"] = "addr";_$temp = _node11;{
						var _$parent13 = _$temp;_addText(it.addr, _$parent13);
					}_chFunc(_node11);_$parent12.children.push(_node11);
				}_$temp = _node6;{
					var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.childHash = 1404001520;_node12.attrSize = 1;_node12.attrHash = 2566746008;_node12.attrs["w-class"] = "btns";_$temp = _node12;{
						var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "span", "sid": 10 };_node13.children = [];_node13.childHash = 2563630519;_node13.attrSize = 2;_node13.attrHash = 628267920;_node13.attrs["w-class"] = "btn btn-share";_node13.attrs["on-tap"] = "shareToFriends";_$temp = _node13;{
							var _$parent16 = _$temp;var _node14 = _installText("分享好友", 3339192615);;
							_$parent16.children.push(_node14);
						}_$parent15.children.push(_node13);
					}_$temp = _node12;{
						var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 11 };_node15.children = [];_node15.childHash = 2556105762;_node15.attrSize = 2;_node15.attrHash = 351822800;_node15.attrs["w-class"] = "btn btn-copy";_node15.attrs["on-tap"] = "copyClick";_$temp = _node15;{
							var _$parent18 = _$temp;var _node16 = _installText("复制", 1600198991);;
							_$parent18.children.push(_node16);
						}_$parent17.children.push(_node15);
					}_$parent14.children.push(_node12);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});