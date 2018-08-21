(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1145265926;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backClick";_node.attrs["w-class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 4219723679;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "兑换记录";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3683563707;_node4.attrs["w-class"] = "ga-body";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrHash = 0;{
					var _$i = 0;
					for (var _iterator = it1.txsShow, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
							var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 857004545;_node6.attrs["w-class"] = "ga-item";_$temp = _node6;{
								var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1055728625;_node7.attrs["w-class"] = "ga-item-top";_$temp = _node7;{
									var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 522018474;_node8.attrs["w-class"] = "ga-box1";_$temp = _node8;{
										var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "span", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 2255571891;{
											var attrvalue = "";attrvalue += item.status_class;attrvalue += "";_node9.attrs["w-class"] = attrvalue;
										}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["w-class"]));_$temp = _node9;{
											var _$parent10 = _$temp;_addText(item.status_show, _$parent10);
										}_chFunc(_node9);_$parent9.children.push(_node9);
									}_$temp = _node8;{
										var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 3460207294;_node10.attrs["w-class"] = "ga-inout";_$temp = _node10;{
											var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 9 };_node11.children = [];_node11.attrHash = 0;_$temp = _node11;{
												var _$parent13 = _$temp;_addText(item.inputCurrency, _$parent13);
											}_chFunc(_node11);_$parent12.children.push(_node11);
										}_$temp = _node10;{
											var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "span", "sid": 10 };_node12.children = [];_node12.childHash = 3184785254;_node12.attrSize = 1;_node12.attrHash = 4132746306;_node12.attrs["w-class"] = "ga-arrow";_$temp = _node12;{
												var _$parent15 = _$temp;var _node13 = _installText("→", 3348316341);;
												_$parent15.children.push(_node13);
											}_$parent14.children.push(_node12);
										}_$temp = _node10;{
											var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "span", "sid": 11 };_node14.children = [];_node14.attrHash = 0;_$temp = _node14;{
												var _$parent17 = _$temp;_addText(item.outputCurrency, _$parent17);
											}_chFunc(_node14);_$parent16.children.push(_node14);
										}_chFunc(_node10);_$parent11.children.push(_node10);
									}_chFunc(_node8);_$parent8.children.push(_node8);
								}_$temp = _node7;{
									var _$parent18 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 12 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 4129506760;_node15.attrs["w-class"] = "ga-box2";_$temp = _node15;{
										var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 13 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 3822233206;_node16.attrs["w-class"] = "ga-rate";_$temp = _node16;{
											var _$parent20 = _$temp;var _node17 = _installText("汇率:&nbsp;", 1191091203);;
											_$parent20.children.push(_node17);
										}_$temp = _node16;{
											var _$parent21 = _$temp;_addText(item.shiftRate, _$parent21);
										}_chFunc(_node16);_$parent19.children.push(_node16);
									}_$temp = _node15;{
										var _$parent22 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 14 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 3092223661;_node18.attrs["w-class"] = "ga-time";_$temp = _node18;{
											var _$parent23 = _$temp;_addText(item.timestamp_show, _$parent23);
										}_chFunc(_node18);_$parent22.children.push(_node18);
									}_chFunc(_node15);_$parent18.children.push(_node15);
								}_chFunc(_node7);_$parent7.children.push(_node7);
							}_$temp = _node6;{
								var _$parent24 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 15 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 1278252545;_node19.attrs["w-class"] = "ga-item-bottom";_$temp = _node19;{
									var _$parent25 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 16 };_node20.children = [];_node20.attrSize = 1;_node20.attrHash = 546416387;_node20.attrs["w-class"] = "ga-box3";_$temp = _node20;{
										var _$parent26 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 17 };_node21.children = [];_node21.attrSize = 2;_node21.attrHash = 1165919027;_node21.attrs["w-class"] = "ga-in-hash";{
											var _attrvalue = "";_attrvalue += "inHashClick(e,";_attrvalue += index;_attrvalue += ")";_node21.attrs["on-tap"] = _attrvalue;
										}_node21.attrHash = _hash.nextHash(_node21.attrHash, _calTextHash(_node21.attrs["on-tap"]));_$temp = _node21;{
											var _$parent27 = _$temp;_addText(item.inputTXID_show, _$parent27);
										}_chFunc(_node21);_$parent26.children.push(_node21);
									}_$temp = _node20;{
										var _$parent28 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 18 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 508093253;_node22.attrs["w-class"] = "ga-in-amount";_$temp = _node22;{
											var _$parent29 = _$temp;var _node23 = _installText("-", 1066372933);;
											_$parent29.children.push(_node23);
										}_$temp = _node22;{
											var _$parent30 = _$temp;_addText(item.inputAmount, _$parent30);
										}_chFunc(_node22);_$parent28.children.push(_node22);
									}_chFunc(_node20);_$parent25.children.push(_node20);
								}if (item.status === 'complete') {
									_$temp = _node19;{
										var _$parent31 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 19 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 2343379298;_node24.attrs["w-class"] = "ga-box4";_$temp = _node24;{
											var _$parent32 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 20 };_node25.children = [];_node25.attrSize = 2;_node25.attrHash = 2743082121;_node25.attrs["w-class"] = "ga-out-hash";{
												var _attrvalue2 = "";_attrvalue2 += "outHashClick(e,";_attrvalue2 += index;_attrvalue2 += ")";_node25.attrs["on-tap"] = _attrvalue2;
											}_node25.attrHash = _hash.nextHash(_node25.attrHash, _calTextHash(_node25.attrs["on-tap"]));_$temp = _node25;{
												var _$parent33 = _$temp;_addText(item.outputTXID_show, _$parent33);
											}_chFunc(_node25);_$parent32.children.push(_node25);
										}_$temp = _node24;{
											var _$parent34 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 21 };_node26.children = [];_node26.attrSize = 1;_node26.attrHash = 428820461;_node26.attrs["w-class"] = "ga-out-amount";_$temp = _node26;{
												var _$parent35 = _$temp;var _node27 = _installText("+", 3807426999);;
												_$parent35.children.push(_node27);
											}_$temp = _node26;{
												var _$parent36 = _$temp;_addText(item.outputAmount, _$parent36);
											}_chFunc(_node26);_$parent34.children.push(_node26);
										}_chFunc(_node24);_$parent31.children.push(_node24);
									}
								}_chFunc(_node19);_$parent24.children.push(_node19);
							}_chFunc(_node6);_$parent6.children.push(_node6);
						}
					}
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});