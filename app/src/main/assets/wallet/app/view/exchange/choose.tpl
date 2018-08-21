(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3310400376;_node.attrs["w-class"] = "base";_node.attrs["on-tap"] = "close";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 1;_node2.attrHash = 145131995;_node2.attrs["w-class"] = "bg";_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 625501389;_node3.attrs["w-class"] = "menu-list";_node3.attrs["ev-tabs-change"] = "onTabsChange";_$temp = _node3;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "pi-components-tabs-tabs", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.attrHash = 0;_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = {}; //jpair pre

					_node5["list"] = it1.menuList;
					//jpair suf
					_addJson(_node5, _$parent5);
				}_chFunc(_node4);_$parent4.children.push(_node4);
			}_chFunc(_node3);_$parent3.children.push(_node3);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1057093043;_node6.attrs["w-class"] = "result-list";{
				var _$i = 0;
				for (var _iterator = it1.resultList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
					var i = _$i++;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 3894001502;_node7.attrs["w-class"] = "each";{
							var attrvalue = "";attrvalue += "choose(e,";attrvalue += i;attrvalue += ")";_node7.attrs["on-tap"] = attrvalue;
						}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["on-tap"]));_$temp = _node7;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "img", "sid": 6 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 4017039606;_node8.attrs["w-class"] = "icon";{
								var _attrvalue = "";_attrvalue += each.icon;_attrvalue += "";_node8.attrs["src"] = _attrvalue;
							}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["src"]));_chFunc(_node8);_$parent8.children.push(_node8);
						}_$temp = _node7;{
							var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1540292426;_node9.attrs["w-class"] = "name";_$temp = _node9;{
								var _$parent10 = _$temp;_addText(each.name, _$parent10);
							}_chFunc(_node9);_$parent9.children.push(_node9);
						}_chFunc(_node7);_$parent7.children.push(_node7);
					}
				}
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});