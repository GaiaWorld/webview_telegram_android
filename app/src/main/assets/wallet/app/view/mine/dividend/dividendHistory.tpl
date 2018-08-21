(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;it = it || 1;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1839940969;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["style"] = "background-color: #fff;";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = it == 1 ? "分红历史" : "挖矿历史";
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 3;_node4.attrHash = 4195340504;_node4.attrs["w-class"] = "history";_node4.attrs["id"] = "historylist";_node4.attrs["on-scroll"] = "getMoreList";{
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
					var ind = _$i++;_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 451693416;_node5.attrs["w-class"] = "historyitem";_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrHash = 0;_$temp = _node6;{
								var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 136397174;_node7.attrs["w-class"] = "itemName";_$temp = _node7;{
									var _$parent8 = _$temp;_addText(it == 1 ? "分红" : "挖矿", _$parent8);
								}_chFunc(_node7);_$parent7.children.push(_node7);
							}_$temp = _node6;{
								var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2381908302;_node8.attrs["w-class"] = "itemNum";_$temp = _node8;{
									var _$parent10 = _$temp;_addText(val.num, _$parent10);
								}_$temp = _node8;{
									var _$parent11 = _$temp;_addText(it == 1 ? ' ETH' : ' KT', _$parent11);
								}_chFunc(_node8);_$parent9.children.push(_node8);
							}_chFunc(_node6);_$parent6.children.push(_node6);
						}_$temp = _node5;{
							var _$parent12 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrHash = 0;_$temp = _node9;{
								var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2937775176;_node10.attrs["w-class"] = "itemTime";_$temp = _node10;{
									var _$parent14 = _$temp;_addText(val.time, _$parent14);
								}_chFunc(_node10);_$parent13.children.push(_node10);
							}_$temp = _node9;{
								var _$parent15 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 9 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 4093422730;_node11.attrs["w-class"] = "itemTotal";_$temp = _node11;{
									var _$parent16 = _$temp;_addText(val.total, _$parent16);
								}_$temp = _node11;{
									var _$parent17 = _$temp;_addText(it == 1 ? ' ETH' : ' KT', _$parent17);
								}_chFunc(_node11);_$parent15.children.push(_node11);
							}_chFunc(_node9);_$parent12.children.push(_node9);
						}_chFunc(_node5);_$parent5.children.push(_node5);
					}
				}
			}if (it1.data.length == 0) {
				_$temp = _node4;{
					var _$parent18 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 10 };_node12.children = [];_node12.childHash = 3777425099;_node12.attrSize = 1;_node12.attrHash = 122587241;_node12.attrs["w-class"] = "loadmore";_$temp = _node12;{
						var _$parent19 = _$temp;var _node13 = _installText("~暂无数据~", 3507071126);;
						_$parent19.children.push(_node13);
					}_$parent18.children.push(_node12);
				}
			}_$temp = _node4;{
				var _$parent20 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.childHash = 2946814719;_node14.attrSize = 2;_node14.attrHash = 166472800;_node14.attrs["style"] = "height: 128px;";_node14.attrs["id"] = "more";_$parent20.children.push(_node14);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});