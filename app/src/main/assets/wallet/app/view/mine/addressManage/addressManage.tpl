(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;var content = it1.content;if (it1.showtype == 2) {
		content = it1.content;
	}_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1973402160;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["style"] = "background-color: #f9f9f9;";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 4159336403;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "常用地址";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 2962874223;_node4.attrs["w-class"] = "coinlist";{
				var _$i = 0;
				for (var _iterator = it1.coins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2293517078;{
							var attrvalue = "";attrvalue += "coinitem ";attrvalue += it1.selectnum == ind ? 'coinselect' : '';attrvalue += "";_node5.attrs["w-class"] = attrvalue;
						}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-class"]));{
							var _attrvalue = "";_attrvalue += "coinchange(e,";_attrvalue += ind;_attrvalue += ")";_node5.attrs["on-tap"] = _attrvalue;
						}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["on-tap"]));_$temp = _node5;{
							var _$parent6 = _$temp;_addText(val.name, _$parent6);
						}_chFunc(_node5);_$parent5.children.push(_node5);
					}
				}
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 3;_node6.attrHash = 2082834703;_node6.attrs["w-class"] = "addressmanageContent";_node6.attrs["class"] = "hide-scrollbar";_node6.attrs["style"] = "overflow-y: auto;overflow-x: hidden;";{
				var _$i2 = 0;
				for (var _iterator2 = content, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
					var _ref2;

					if (_isArray2) {
						if (_i2 >= _iterator2.length) break;
						_ref2 = _iterator2[_i2++];
					} else {
						_i2 = _iterator2.next();
						if (_i2.done) break;
						_ref2 = _i2.value;
					}

					var _val = _ref2;
					var _ind = _$i2++;_$temp = _node6;{
						var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "addressitem$", "sid": 5 };_node7.hasChild = false;_node7.child = null;_node7.attrHash = 0;_$temp = _node7;{
							var _$parent9 = _$temp;_addJson(_val, _$parent9);
						}_chFunc(_node7);_$parent8.children.push(_node7);
					}
				}
			}_chFunc(_node6);_$parent7.children.push(_node6);
		}_$temp = _node;{
			var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.childHash = 2404059985;_node8.attrSize = 2;_node8.attrHash = 1390473716;_node8.attrs["w-class"] = "blueBtn";_node8.attrs["on-tap"] = "addNewaddr";_$temp = _node8;{
				var _$parent11 = _$temp;var _node9 = _installText("添加常用地址", 1971122148);;
				_$parent11.children.push(_node9);
			}_$parent10.children.push(_node8);
		}_chFunc(_node);return _node;
	}
});