(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2896174234;_node.attrs["w-class"] = "base";_node.attrs["class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3664680752;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_node2.attrs["ev-back-click"] = "doClose";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = it1.title;
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
						var _$parent8 = _$temp;var _node8 = _installText("正在接收", 3856011967);;
						_$parent8.children.push(_node8);
					}_$temp = _node7;{
						var _$parent9 = _$temp;_addText(it.currencyName, _$parent9);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}_$temp = _node6;{
					var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1650692450;_node9.attrs["w-class"] = "qrcode";_$temp = _node9;{
						var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "pi-components-qrcode-qrcode", "sid": 7 };_node10.hasChild = false;_node10.child = null;_node10.attrHash = 0;_$temp = _node10;{
							var _$parent12 = _$temp;var _node11 = {}; //jpair pre

							_node11["value"] = it.addr;
							//jpair suf
							//jpair pre

							_node11["size"] = 400;
							//jpair suf
							_addJson(_node11, _$parent12);
						}_chFunc(_node10);_$parent11.children.push(_node10);
					}_chFunc(_node9);_$parent10.children.push(_node9);
				}_$temp = _node6;{
					var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 3146205922;_node12.attrs["w-class"] = "addr";_$temp = _node12;{
						var _$parent14 = _$temp;_addText(it.addr, _$parent14);
					}_chFunc(_node12);_$parent13.children.push(_node12);
				}_$temp = _node6;{
					var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 9 };_node13.children = [];_node13.childHash = 1404001520;_node13.attrSize = 1;_node13.attrHash = 2566746008;_node13.attrs["w-class"] = "btns";_$temp = _node13;{
						var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "span", "sid": 10 };_node14.children = [];_node14.childHash = 2563630519;_node14.attrSize = 2;_node14.attrHash = 628267920;_node14.attrs["w-class"] = "btn btn-share";_node14.attrs["on-tap"] = "shareToFriends";_$temp = _node14;{
							var _$parent17 = _$temp;var _node15 = _installText("分享好友", 3339192615);;
							_$parent17.children.push(_node15);
						}_$parent16.children.push(_node14);
					}_$temp = _node13;{
						var _$parent18 = _$temp;var _node16 = { "attrs": {}, "tagName": "span", "sid": 11 };_node16.children = [];_node16.childHash = 2556105762;_node16.attrSize = 2;_node16.attrHash = 351822800;_node16.attrs["w-class"] = "btn btn-copy";_node16.attrs["on-tap"] = "copyClick";_$temp = _node16;{
							var _$parent19 = _$temp;var _node17 = _installText("复制", 1600198991);;
							_$parent19.children.push(_node17);
						}_$parent18.children.push(_node16);
					}_$parent15.children.push(_node13);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});