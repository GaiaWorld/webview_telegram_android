(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 4175358555;_node2.attrSize = 2;_node2.attrHash = 3489104093;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 2568772243;_node3.attrSize = 3;_node3.attrHash = 3737543201;_node3.attrs["w-class"] = "input";_node3.attrs["ev-input-change"] = "onInputChange";_node3.attrs["ev-input-clear"] = "onInputChange";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "app-components-input-input_search", "sid": 3 };_node4.hasChild = false;_node4.child = null;_node4.childHash = 1671224625;_node4.attrHash = 0;_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "输入资产名";
							//jpair suf

							_node5["placeHolder"] = jvalue;
						}
						//jpair pre

						_node5["clearable"] = true;
						//jpair suf
						_addJson(_node5, _$parent5);
					}_$parent4.children.push(_node4);
				}_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.childHash = 2573229304;_node6.attrSize = 2;_node6.attrHash = 1639043576;_node6.attrs["w-class"] = "back";_node6.attrs["on-tap"] = "doClose";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.childHash = 2195018664;_node7.attrHash = 0;_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = _installText("取消", 359863121);;
						_$parent8.children.push(_node8);
					}_$parent7.children.push(_node7);
				}_$parent6.children.push(_node6);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 4252679546;_node9.attrs["w-class"] = "body";if (it1.list.length <= 0) {
				_$temp = _node9;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.childHash = 1698059088;_node10.attrSize = 1;_node10.attrHash = 772784223;_node10.attrs["style"] = "height: 100%;background-color: white;position: relative;";_$temp = _node10;{
						var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.childHash = 2946814719;_node11.attrSize = 1;_node11.attrHash = 3400304430;_node11.attrs["w-class"] = "no-record";_$parent11.children.push(_node11);
					}_$temp = _node10;{
						var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.childHash = 3857277720;_node12.attrSize = 1;_node12.attrHash = 704840034;_node12.attrs["w-class"] = "no-record-text";_$temp = _node12;{
							var _$parent13 = _$temp;var _node13 = _installText("并没有结果", 3284590862);;
							_$parent13.children.push(_node13);
						}_$parent12.children.push(_node12);
					}_$parent10.children.push(_node10);
				}
			} else {
				_$temp = _node9;{
					var _$parent14 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrHash = 0;{
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
							var i = _$i++;_$temp = _node14;{
								var _$parent15 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 2948486173;_node15.attrs["w-class"] = "each";_$temp = _node15;{
									var _$parent16 = _$temp;var _node16 = { "attrs": {}, "tagName": "img", "sid": 12 };_node16.children = [];_node16.attrSize = 2;_node16.attrHash = 1759828929;{
										var attrvalue = "";attrvalue += "../../../res/image/currency/";attrvalue += each.name;attrvalue += ".png";_node16.attrs["src"] = attrvalue;
									}_node16.attrHash = _hash.nextHash(_node16.attrHash, _calTextHash(_node16.attrs["src"]));_node16.attrs["w-class"] = "icon-img";_chFunc(_node16);_$parent16.children.push(_node16);
								}_$temp = _node15;{
									var _$parent17 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.attrSize = 1;_node17.attrHash = 2210269787;_node17.attrs["w-class"] = "box";_$temp = _node17;{
										var _$parent18 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 14 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 1540292426;_node18.attrs["w-class"] = "name";_$temp = _node18;{
											var _$parent19 = _$temp;_addText(each.name, _$parent19);
										}_chFunc(_node18);_$parent18.children.push(_node18);
									}_$temp = _node17;{
										var _$parent20 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 15 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 4031233572;_node19.attrs["w-class"] = "description";_$temp = _node19;{
											var _$parent21 = _$temp;_addText(each.description, _$parent21);
										}_chFunc(_node19);_$parent20.children.push(_node19);
									}_chFunc(_node17);_$parent17.children.push(_node17);
								}if (each.isChoose) {
									_$temp = _node15;{
										var _$parent22 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 16 };_node20.children = [];_node20.childHash = 4256557105;_node20.attrSize = 1;_node20.attrHash = 1849664493;_node20.attrs["w-class"] = "switched";_$temp = _node20;{
											var _$parent23 = _$temp;var _node21 = { "attrs": {}, "tagName": "span", "sid": 17 };_node21.children = [];_node21.childHash = 1903132846;_node21.attrHash = 0;_$temp = _node21;{
												var _$parent24 = _$temp;var _node22 = _installText("已添加", 3962702707);;
												_$parent24.children.push(_node22);
											}_$parent23.children.push(_node21);
										}_$parent22.children.push(_node20);
									}
								} else {
									_$temp = _node15;{
										var _$parent25 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 18 };_node23.children = [];_node23.attrSize = 2;_node23.attrHash = 409217365;_node23.attrs["w-class"] = "unswitch";{
											var _attrvalue = "";_attrvalue += "doAdd(e,";_attrvalue += i;_attrvalue += ")";_node23.attrs["on-tap"] = _attrvalue;
										}_node23.attrHash = _hash.nextHash(_node23.attrHash, _calTextHash(_node23.attrs["on-tap"]));_$temp = _node23;{
											var _$parent26 = _$temp;var _node24 = { "attrs": {}, "tagName": "span", "sid": 19 };_node24.children = [];_node24.childHash = 3697291371;_node24.attrHash = 0;_$temp = _node24;{
												var _$parent27 = _$temp;var _node25 = _installText("添加", 3661468093);;
												_$parent27.children.push(_node25);
											}_$parent26.children.push(_node24);
										}_chFunc(_node23);_$parent25.children.push(_node23);
									}
								}_chFunc(_node15);_$parent15.children.push(_node15);
							}
						}
					}_chFunc(_node14);_$parent14.children.push(_node14);
				}
			}_chFunc(_node9);_$parent9.children.push(_node9);
		}_chFunc(_node);return _node;
	}
});