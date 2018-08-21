(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1973402160;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["style"] = "background-color: #f9f9f9;";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 3826659900;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "交易通知";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}{
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
				var ind = _$i++;_$temp = _node;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 4053454469;_node4.attrs["w-class"] = "transItem";_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 3 };_node5.children = [];_node5.childHash = 222228824;_node5.attrSize = 1;_node5.attrHash = 409359123;_node5.attrs["w-class"] = "transRes";_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = _installText("完成", 3396534408);;
							_$parent6.children.push(_node6);
						}_$parent5.children.push(_node5);
					}if (val.type == "1") {
						_$temp = _node4;{
							var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.childHash = 2445024412;_node7.attrSize = 1;_node7.attrHash = 3545328372;_node7.attrs["w-class"] = "transType";_$temp = _node7;{
								var _$parent8 = _$temp;var _node8 = _installText("转账", 3857191924);;
								_$parent8.children.push(_node8);
							}_$parent7.children.push(_node7);
						}_$temp = _node4;{
							var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 5 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 3638498372;_node9.attrs["w-class"] = "transData";_$temp = _node9;{
								var _$parent10 = _$temp;var _node10 = _installText("-", 1066372933);;
								_$parent10.children.push(_node10);
							}_$temp = _node9;{
								var _$parent11 = _$temp;_addText(val.content + " " + val.unit, _$parent11);
							}_chFunc(_node9);_$parent9.children.push(_node9);
						}
					} else {
						_$temp = _node4;{
							var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 6 };_node11.children = [];_node11.childHash = 2680077777;_node11.attrSize = 1;_node11.attrHash = 1823619992;_node11.attrs["w-class"] = "transType1";_$temp = _node11;{
								var _$parent13 = _$temp;var _node12 = _installText("收款", 2187046069);;
								_$parent13.children.push(_node12);
							}_$parent12.children.push(_node11);
						}_$temp = _node4;{
							var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 7 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 3638498372;_node13.attrs["w-class"] = "transData";_$temp = _node13;{
								var _$parent15 = _$temp;var _node14 = _installText("+", 3807426999);;
								_$parent15.children.push(_node14);
							}_$temp = _node13;{
								var _$parent16 = _$temp;_addText(val.content + " " + val.unit, _$parent16);
							}_chFunc(_node13);_$parent14.children.push(_node13);
						}
					}_chFunc(_node4);_$parent4.children.push(_node4);
				}
			}
		}_chFunc(_node);return _node;
	}
});