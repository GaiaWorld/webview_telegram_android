(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3805494539;_node.attrs["class"] = "ga-new-page";_node.attrs["w-class"] = "ga-new-page";_node.attrs["ev-back-click"] = "goBackClick";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 4072596495;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "历史账单";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 298201298;_node4.attrSize = 1;_node4.attrHash = 2056072742;_node4.attrs["w-class"] = "ga-year";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = _installText("2018年", 3607702370);;
				_$parent5.children.push(_node5);
			}_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 3 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 3056178776;_node6.attrs["w-class"] = "ga-mothon-list";{
				var _$i = 0;
				for (var _iterator = it1.billList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref;

					if (_isArray) {
						if (_i >= _iterator.length) break;
						_ref = _iterator[_i++];
					} else {
						_i = _iterator.next();
						if (_i.done) break;
						_ref = _i.value;
					}

					var bill = _ref;
					var index = _$i++;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 3055887010;_node7.attrs["w-class"] = "ga-mothon-item";_node7.attrs["on-tap"] = "billItemClick";_$temp = _node7;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1332260179;_node8.attrs["w-class"] = "ga-item-left";_$temp = _node8;{
								var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "span", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 3615543057;_node9.attrs["w-class"] = "ga-left-month";_$temp = _node9;{
									var _$parent10 = _$temp;_addText(bill.month, _$parent10);
								}_$temp = _node9;{
									var _$parent11 = _$temp;var _node10 = _installText("月账单", 2547916387);;
									_$parent11.children.push(_node10);
								}_chFunc(_node9);_$parent9.children.push(_node9);
							}_$temp = _node8;{
								var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 7 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 1581664449;_node11.attrs["w-class"] = "ga-left-date";_$temp = _node11;{
									var _$parent13 = _$temp;_addText(bill.date, _$parent13);
								}_chFunc(_node11);_$parent12.children.push(_node11);
							}_chFunc(_node8);_$parent8.children.push(_node8);
						}_$temp = _node7;{
							var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 2934720095;_node12.attrs["w-class"] = "ga-item-right";_$temp = _node12;{
								var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "span", "sid": 9 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 2935558525;_node13.attrs["w-class"] = "ga-right-text";_$temp = _node13;{
									var _$parent16 = _$temp;_addText(bill.value, _$parent16);
								}_$temp = _node13;{
									var _$parent17 = _$temp;var _node14 = _installText("CNY", 3116538504);;
									_$parent17.children.push(_node14);
								}_chFunc(_node13);_$parent15.children.push(_node13);
							}_$temp = _node12;{
								var _$parent18 = _$temp;var _node15 = { "attrs": {}, "tagName": "img", "sid": 10 };_node15.children = [];_node15.childHash = 0;_node15.attrSize = 2;_node15.attrHash = 3381975319;_node15.attrs["src"] = "../../../res/image/btn_right_arrow.png";_node15.attrs["w-class"] = "ga-right-arrow";_$parent18.children.push(_node15);
							}_chFunc(_node12);_$parent14.children.push(_node12);
						}_chFunc(_node7);_$parent7.children.push(_node7);
					}
				}
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});