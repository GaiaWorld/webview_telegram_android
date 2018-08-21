(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3664680752;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_node2.attrs["ev-back-click"] = "doClose";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = it1.title;
					//jpair suf
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.childHash = 2946814719;_node5.attrSize = 3;_node5.attrHash = 3643223986;_node5.attrs["w-class"] = "search";_node5.attrs["style"] = "cursor: pointer;";_node5.attrs["on-tap"] = "doSearch";_$parent5.children.push(_node5);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 4252679546;_node6.attrs["w-class"] = "body";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrHash = 0;{
					var _$i = 0;
					for (var _iterator = it1.list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var i = _$i++;_$temp = _node7;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2948486173;_node8.attrs["w-class"] = "each";_$temp = _node8;{
								var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "img", "sid": 7 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 1759828929;{
									var attrvalue = "";attrvalue += "../../../res/image/currency/";attrvalue += each.name;attrvalue += ".png";_node9.attrs["src"] = attrvalue;
								}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["src"]));_node9.attrs["w-class"] = "icon-img";_chFunc(_node9);_$parent9.children.push(_node9);
							}_$temp = _node8;{
								var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2210269787;_node10.attrs["w-class"] = "box";_$temp = _node10;{
									var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 9 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 1540292426;_node11.attrs["w-class"] = "name";_$temp = _node11;{
										var _$parent12 = _$temp;_addText(each.name, _$parent12);
									}_chFunc(_node11);_$parent11.children.push(_node11);
								}_$temp = _node10;{
									var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 10 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 4031233572;_node12.attrs["w-class"] = "description";_$temp = _node12;{
										var _$parent14 = _$temp;_addText(each.description, _$parent14);
									}_chFunc(_node12);_$parent13.children.push(_node12);
								}_chFunc(_node10);_$parent10.children.push(_node10);
							}_$temp = _node8;{
								var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 11 };_node13.children = [];_node13.attrSize = 2;_node13.attrHash = 298813298;{
									var _attrvalue = "";_attrvalue += each.isChoose ? 'switch-choose' : 'switch';_attrvalue += "";_node13.attrs["w-class"] = _attrvalue;
								}_node13.attrHash = _hash.nextHash(_node13.attrHash, _calTextHash(_node13.attrs["w-class"]));{
									var _attrvalue2 = "";_attrvalue2 += "onSwitchChange(e,";_attrvalue2 += i;_attrvalue2 += ")";_node13.attrs["on-tap"] = _attrvalue2;
								}_node13.attrHash = _hash.nextHash(_node13.attrHash, _calTextHash(_node13.attrs["on-tap"]));_chFunc(_node13);_$parent15.children.push(_node13);
							}_chFunc(_node8);_$parent8.children.push(_node8);
						}
					}
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});