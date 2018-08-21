(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3560492439;_node.attrs["w-class"] = "ga-new-page";_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backClick";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 2893584505;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "选择货币";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4162789478;_node4.attrs["w-class"] = "ga-currency-container";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1637153029;_node5.attrs["w-class"] = "ga-currency-list";{
					var _$i = 0;
					for (var _iterator = it1.currencyShowList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
						var _ref;

						if (_isArray) {
							if (_i >= _iterator.length) break;
							_ref = _iterator[_i++];
						} else {
							_i = _iterator.next();
							if (_i.done) break;
							_ref = _i.value;
						}

						var item = _ref;
						var index = _$i++;_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 1683081935;_node6.attrs["w-class"] = "ga-currency-item";{
								var attrvalue = "";attrvalue += "currencyItemClick(e,";attrvalue += index;attrvalue += ")";_node6.attrs["on-tap"] = attrvalue;
							}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["on-tap"]));_$temp = _node6;{
								var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 5 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 1344702076;{
									var _attrvalue = "";_attrvalue += "../../res/image/currency/";_attrvalue += item.currencyName;_attrvalue += ".png";_node7.attrs["src"] = _attrvalue;
								}_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["src"]));_node7.attrs["w-class"] = "ga-currency-icon";_chFunc(_node7);_$parent7.children.push(_node7);
							}_$temp = _node6;{
								var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 5598151;_node8.attrs["w-class"] = "ga-currency";_$temp = _node8;{
									var _$parent9 = _$temp;_addText(item.currencyName, _$parent9);
								}_chFunc(_node8);_$parent8.children.push(_node8);
							}_$temp = _node6;{
								var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 915537050;_node9.attrs["w-class"] = "ga-balance";_$temp = _node9;{
									var _$parent11 = _$temp;_addText(item.balance, _$parent11);
								}_chFunc(_node9);_$parent10.children.push(_node9);
							}_chFunc(_node6);_$parent6.children.push(_node6);
						}
					}
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});