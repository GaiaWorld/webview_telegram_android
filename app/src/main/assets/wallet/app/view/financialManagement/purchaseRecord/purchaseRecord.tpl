(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1658602538;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "goBackPage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 3929068506;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "我的理财";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 165548202;_node4.attrSize = 1;_node4.attrHash = 86005616;_node4.attrs["w-class"] = "hideOrShow";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 3 };_node5.children = [];_node5.childHash = 0;_node5.attrSize = 2;_node5.attrHash = 2166299671;_node5.attrs["src"] = "../../../res/image/img_none_record.png";_node5.attrs["w-class"] = "imgtip";_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.childHash = 2227840482;_node6.attrSize = 1;_node6.attrHash = 2318876417;_node6.attrs["w-class"] = "textTip";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = _installText("还没有购买理财哦", 3562234561);;
					_$parent7.children.push(_node7);
				}_$parent6.children.push(_node6);
			}_$parent4.children.push(_node4);
		}{
			var _$i = 0;
			for (var _iterator = it1.recordList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var v = _ref;
				var i = _$i++;_$temp = _node;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 309244816;_node8.attrs["w-class"] = "mineItem";_node8.attrs["on-tap"] = "toDetail";_$temp = _node8;{
						var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 3985851472;_node9.attrs["w-class"] = "mineTitle";_$temp = _node9;{
							var _$parent10 = _$temp;_addText(v.productName, _$parent10);
						}_$temp = _node9;{
							var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 1421650501;{
								var attrvalue = "";attrvalue += "stateSpan ";if (v.state == '结束') {
									attrvalue += " stateEnd ";
								}attrvalue += "";_node10.attrs["w-class"] = attrvalue;
							}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["w-class"]));_$temp = _node10;{
								var _$parent12 = _$temp;_addText(v.state, _$parent12);
							}_chFunc(_node10);_$parent11.children.push(_node10);
						}_chFunc(_node9);_$parent9.children.push(_node9);
					}_$temp = _node8;{
						var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 2760079784;_node11.attrs["w-class"] = "mineMain";_$temp = _node11;{
							var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 3928610572;_node12.attrs["w-class"] = "mainLeft";_$temp = _node12;{
								var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.childHash = 2628758604;_node13.attrSize = 1;_node13.attrHash = 4079970147;_node13.attrs["w-class"] = "normalTitle";_$temp = _node13;{
									var _$parent16 = _$temp;var _node14 = _installText("持有(0.01/份)", 2863660536);;
									_$parent16.children.push(_node14);
								}_$parent15.children.push(_node13);
							}_$temp = _node12;{
								var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 1563337590;_node15.attrs["w-class"] = "normalMain";_$temp = _node15;{
									var _$parent18 = _$temp;_addText(v.amount, _$parent18);
								}_$temp = _node15;{
									var _$parent19 = _$temp;var _node16 = _installText("份", 4105707745);;
									_$parent19.children.push(_node16);
								}_chFunc(_node15);_$parent17.children.push(_node15);
							}_chFunc(_node12);_$parent14.children.push(_node12);
						}_$temp = _node11;{
							var _$parent20 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 12 };_node17.children = [];_node17.attrSize = 1;_node17.attrHash = 625755529;_node17.attrs["w-class"] = "mainMid";_$temp = _node17;{
								var _$parent21 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 13 };_node18.children = [];_node18.childHash = 244615050;_node18.attrSize = 1;_node18.attrHash = 4079970147;_node18.attrs["w-class"] = "normalTitle";_$temp = _node18;{
									var _$parent22 = _$temp;var _node19 = _installText("昨日收益(ETH)", 805434941);;
									_$parent22.children.push(_node19);
								}_$parent21.children.push(_node18);
							}_$temp = _node17;{
								var _$parent23 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 14 };_node20.children = [];_node20.attrSize = 1;_node20.attrHash = 3539377192;_node20.attrs["w-class"] = "incomMain";_$temp = _node20;{
									var _$parent24 = _$temp;_addText(v.profit, _$parent24);
								}_chFunc(_node20);_$parent23.children.push(_node20);
							}_chFunc(_node17);_$parent20.children.push(_node17);
						}_$temp = _node11;{
							var _$parent25 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 15 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 1698727201;_node21.attrs["w-class"] = "mainRight";_$temp = _node21;{
								var _$parent26 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 16 };_node22.children = [];_node22.childHash = 2178445775;_node22.attrSize = 1;_node22.attrHash = 4079970147;_node22.attrs["w-class"] = "normalTitle";_$temp = _node22;{
									var _$parent27 = _$temp;var _node23 = _installText("累计", 734729751);;
									_$parent27.children.push(_node23);
								}_$parent26.children.push(_node22);
							}_$temp = _node21;{
								var _$parent28 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 17 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 1563337590;_node24.attrs["w-class"] = "normalMain";_$temp = _node24;{
									var _$parent29 = _$temp;_addText(v.days, _$parent29);
								}_$temp = _node24;{
									var _$parent30 = _$temp;var _node25 = _installText("天", 492225587);;
									_$parent30.children.push(_node25);
								}_chFunc(_node24);_$parent28.children.push(_node24);
							}_chFunc(_node21);_$parent25.children.push(_node21);
						}_chFunc(_node11);_$parent13.children.push(_node11);
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}
			}
		}_chFunc(_node);return _node;
	}
});