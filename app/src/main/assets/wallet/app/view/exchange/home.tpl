(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1569405500;_node.attrs["w-class"] = "base";_node.attrs["class"] = "hide-scrollbar";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3664680752;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_node2.attrs["ev-back-click"] = "doClose";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = it1.currency1 + '/' + it1.currency2;
					//jpair suf
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.childHash = 2946814719;_node5.attrSize = 2;_node5.attrHash = 2698672431;_node5.attrs["w-class"] = "k-line";_node5.attrs["on-tap"] = "showKLine";_$parent5.children.push(_node5);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 3664935731;_node6.attrs["w-class"] = "menu";_node6.attrs["ev-tabs-change"] = "onMenuChange";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "app-components-tabs-tabsNormal", "sid": 5 };_node7.hasChild = false;_node7.child = null;_node7.attrHash = 0;_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = {}; //jpair pre

					_node8["list"] = it1.list;
					//jpair suf
					//jpair pre

					_node8["activeNum"] = it1.activeNum;
					//jpair suf
					_addJson(_node8, _$parent8);
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}if (it1.activeNum === 0 || it1.activeNum === 1) {
			_$temp = _node;{
				var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 240598600;_node9.attrs["w-class"] = "body-business";_node9.attrs["style"] = "overflow-y: auto;overflow-x: hidden;height: 1100px;";_$temp = _node9;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 1568567330;_node10.attrs["w-class"] = "body-business-left";_$temp = _node10;{
						var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 414196992;_node11.attrs["w-class"] = "limit-text";_$temp = _node11;{
							var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "span", "sid": 9 };_node12.children = [];_node12.attrHash = 0;_$temp = _node12;{
								var _$parent13 = _$temp;var _node13 = _installText("限价", 2874357481);;
								_$parent13.children.push(_node13);
							}_$temp = _node12;{
								var _$parent14 = _$temp;_addText(it1.activeNum === 0 ? '买入' : '卖出', _$parent14);
							}_chFunc(_node12);_$parent12.children.push(_node12);
						}_chFunc(_node11);_$parent11.children.push(_node11);
					}_$temp = _node10;{
						var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.childHash = 190115680;_node14.attrSize = 1;_node14.attrHash = 103542462;_node14.attrs["w-class"] = "color-show";_$temp = _node14;{
							var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.childHash = 2946814719;_node15.attrSize = 1;_node15.attrHash = 295389574;_node15.attrs["w-class"] = "buy-color";_$parent16.children.push(_node15);
						}_$temp = _node14;{
							var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.childHash = 2251027941;_node16.attrSize = 1;_node16.attrHash = 2798212015;_node16.attrs["w-class"] = "buy-color-text";_$temp = _node16;{
								var _$parent18 = _$temp;var _node17 = _installText("买", 2872242660);;
								_$parent18.children.push(_node17);
							}_$parent17.children.push(_node16);
						}_$temp = _node14;{
							var _$parent19 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 13 };_node18.children = [];_node18.childHash = 2946814719;_node18.attrSize = 1;_node18.attrHash = 862680360;_node18.attrs["w-class"] = "sale-color";_$parent19.children.push(_node18);
						}_$temp = _node14;{
							var _$parent20 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 14 };_node19.children = [];_node19.childHash = 2976854951;_node19.attrSize = 1;_node19.attrHash = 3038823918;_node19.attrs["w-class"] = "sale-color-text";_$temp = _node19;{
								var _$parent21 = _$temp;var _node20 = _installText("卖", 1247866041);;
								_$parent21.children.push(_node20);
							}_$parent20.children.push(_node19);
						}_$parent15.children.push(_node14);
					}_$temp = _node10;{
						var _$parent22 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 15 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 508574910;_node21.attrs["w-class"] = "input-price";_$temp = _node21;{
							var _$parent23 = _$temp;var _node22 = { "attrs": {}, "tagName": "app-components-input-input_border", "sid": 16 };_node22.hasChild = false;_node22.child = null;_node22.attrHash = 0;_$temp = _node22;{
								var _$parent24 = _$temp;var _node23 = {}; //jpair pre

								_node23["input"] = it1.price;
								//jpair suf
								//jpair pre

								{
									var jvalue = "";
									jvalue = "价格";
									//jpair suf

									_node23["placeHolder"] = jvalue;
								}
								_addJson(_node23, _$parent24);
							}_chFunc(_node22);_$parent23.children.push(_node22);
						}_chFunc(_node21);_$parent22.children.push(_node21);
					}_$temp = _node10;{
						var _$parent25 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 17 };_node24.children = [];_node24.childHash = 2946814719;_node24.attrSize = 1;_node24.attrHash = 1144529593;_node24.attrs["w-class"] = "price-less";_$parent25.children.push(_node24);
					}_$temp = _node10;{
						var _$parent26 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 18 };_node25.children = [];_node25.childHash = 2946814719;_node25.attrSize = 1;_node25.attrHash = 1383298436;_node25.attrs["w-class"] = "price-add";_$parent26.children.push(_node25);
					}_$temp = _node10;{
						var _$parent27 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 19 };_node26.children = [];_node26.attrSize = 1;_node26.attrHash = 3045765313;_node26.attrs["w-class"] = "price-conversion";_$temp = _node26;{
							var _$parent28 = _$temp;var _node27 = { "attrs": {}, "tagName": "span", "sid": 20 };_node27.children = [];_node27.attrHash = 0;_$temp = _node27;{
								var _$parent29 = _$temp;_addText(it1.priceConversion, _$parent29);
							}_chFunc(_node27);_$parent28.children.push(_node27);
						}_chFunc(_node26);_$parent27.children.push(_node26);
					}_$temp = _node10;{
						var _$parent30 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 21 };_node28.children = [];_node28.attrSize = 1;_node28.attrHash = 1118621266;_node28.attrs["w-class"] = "input-count";_$temp = _node28;{
							var _$parent31 = _$temp;var _node29 = { "attrs": {}, "tagName": "app-components-input-input_border", "sid": 22 };_node29.hasChild = false;_node29.child = null;_node29.attrHash = 0;_$temp = _node29;{
								var _$parent32 = _$temp;var _node30 = {}; //jpair pre

								_node30["input"] = it1.count;
								//jpair suf
								//jpair pre

								_node30["placeHolder"] = it1.countHolder;
								//jpair suf
								//jpair pre

								{
									var _jvalue = "";
									_jvalue = "padding: 0px 100px 0px 20px;";
									//jpair suf

									_node30["style"] = _jvalue;
								}
								_addJson(_node30, _$parent32);
							}_chFunc(_node29);_$parent31.children.push(_node29);
						}_$temp = _node28;{
							var _$parent33 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 23 };_node31.children = [];_node31.attrSize = 1;_node31.attrHash = 546127139;_node31.attrs["w-class"] = "count-currency";_$temp = _node31;{
								var _$parent34 = _$temp;_addText(it1.currency1, _$parent34);
							}_chFunc(_node31);_$parent33.children.push(_node31);
						}_chFunc(_node28);_$parent30.children.push(_node28);
					}_$temp = _node10;{
						var _$parent35 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 24 };_node32.children = [];_node32.attrSize = 1;_node32.attrHash = 2299347250;_node32.attrs["w-class"] = "count-use";_$temp = _node32;{
							var _$parent36 = _$temp;var _node33 = _installText("可用", 3436033355);;
							_$parent36.children.push(_node33);
						}_$temp = _node32;{
							var _$parent37 = _$temp;var _node34 = { "attrs": {}, "tagName": "span", "sid": 25 };_node34.children = [];_node34.attrHash = 0;_$temp = _node34;{
								var _$parent38 = _$temp;var _node35 = _installText("0.00", 2633138814);;
								_$parent38.children.push(_node35);
							}_$temp = _node34;{
								var _$parent39 = _$temp;_addText(it1.activeNum === 0 ? it1.currency1 : it1.currency2, _$parent39);
							}_chFunc(_node34);_$parent37.children.push(_node34);
						}_$temp = _node32;{
							var _$parent40 = _$temp;var _node36 = { "attrs": {}, "tagName": "span", "sid": 26 };_node36.children = [];_node36.childHash = 2382405953;_node36.attrSize = 1;_node36.attrHash = 2590226655;_node36.attrs["style"] = "position: relative;left: 130px;color: #1A70DD;";_$temp = _node36;{
								var _$parent41 = _$temp;var _node37 = _installText("充值", 3768531277);;
								_$parent41.children.push(_node37);
							}_$parent40.children.push(_node36);
						}_chFunc(_node32);_$parent35.children.push(_node32);
					}_$temp = _node10;{
						var _$parent42 = _$temp;var _node38 = { "attrs": {}, "tagName": "div", "sid": 27 };_node38.children = [];_node38.attrSize = 2;_node38.attrHash = 2988758795;_node38.attrs["w-class"] = "count-slider";_node38.attrs["ev-slider-change"] = "onSlicerChange";_$temp = _node38;{
							var _$parent43 = _$temp;var _node39 = { "attrs": {}, "tagName": "pi-components-slider-slider", "sid": 28 };_node39.hasChild = false;_node39.child = null;_node39.attrHash = 0;_$temp = _node39;{
								var _$parent44 = _$temp;var _node40 = {}; //jpair pre

								_node40["value"] = it1.usePercent;
								//jpair suf
								//jpair pre

								_node40["min"] = 0;
								//jpair suf
								//jpair pre

								_node40["max"] = 100;
								//jpair suf
								_addJson(_node40, _$parent44);
							}_chFunc(_node39);_$parent43.children.push(_node39);
						}_$temp = _node38;{
							var _$parent45 = _$temp;var _node41 = { "attrs": {}, "tagName": "span", "sid": 29 };_node41.children = [];_node41.attrHash = 0;_$temp = _node41;{
								var _$parent46 = _$temp;_addText(it1.usePercent, _$parent46);
							}_$temp = _node41;{
								var _$parent47 = _$temp;var _node42 = _installText("%", 4257547020);;
								_$parent47.children.push(_node42);
							}_chFunc(_node41);_$parent45.children.push(_node41);
						}_chFunc(_node38);_$parent42.children.push(_node38);
					}_$temp = _node10;{
						var _$parent48 = _$temp;var _node43 = { "attrs": {}, "tagName": "span", "sid": 30 };_node43.children = [];_node43.childHash = 563740119;_node43.attrSize = 1;_node43.attrHash = 2500533923;_node43.attrs["w-class"] = "all_text";_$temp = _node43;{
							var _$parent49 = _$temp;var _node44 = _installText("交易额", 2726457592);;
							_$parent49.children.push(_node44);
						}_$parent48.children.push(_node43);
					}_$temp = _node10;{
						var _$parent50 = _$temp;var _node45 = { "attrs": {}, "tagName": "div", "sid": 31 };_node45.children = [];_node45.attrSize = 1;_node45.attrHash = 656517741;_node45.attrs["w-class"] = "input-all";_$temp = _node45;{
							var _$parent51 = _$temp;var _node46 = { "attrs": {}, "tagName": "app-components-input-input_border", "sid": 32 };_node46.hasChild = false;_node46.child = null;_node46.attrHash = 0;_$temp = _node46;{
								var _$parent52 = _$temp;var _node47 = {}; //jpair pre

								_node47["input"] = it1.all;
								//jpair suf
								//jpair pre

								_node47["placeHolder"] = it1.allCountHolder;
								//jpair suf
								//jpair pre

								{
									var _jvalue2 = "";
									_jvalue2 = "padding: 0px 100px 0px 20px;";
									//jpair suf

									_node47["style"] = _jvalue2;
								}
								_addJson(_node47, _$parent52);
							}_chFunc(_node46);_$parent51.children.push(_node46);
						}_$temp = _node45;{
							var _$parent53 = _$temp;var _node48 = { "attrs": {}, "tagName": "div", "sid": 33 };_node48.children = [];_node48.attrSize = 1;_node48.attrHash = 546127139;_node48.attrs["w-class"] = "count-currency";_$temp = _node48;{
								var _$parent54 = _$temp;_addText(it1.currency2, _$parent54);
							}_chFunc(_node48);_$parent53.children.push(_node48);
						}_chFunc(_node45);_$parent50.children.push(_node45);
					}_$temp = _node10;{
						var _$parent55 = _$temp;var _node49 = { "attrs": {}, "tagName": "div", "sid": 34 };_node49.children = [];_node49.attrSize = 1;_node49.attrHash = 1546289919;_node49.attrs["w-class"] = "btn-buy-currency";_$temp = _node49;{
							var _$parent56 = _$temp;_addText(it1.activeNum === 0 ? '买入' : '卖出', _$parent56);
						}_$temp = _node49;{
							var _$parent57 = _$temp;_addText(it1.currency1, _$parent57);
						}_chFunc(_node49);_$parent55.children.push(_node49);
					}_chFunc(_node10);_$parent10.children.push(_node10);
				}_$temp = _node9;{
					var _$parent58 = _$temp;var _node50 = { "attrs": {}, "tagName": "div", "sid": 35 };_node50.children = [];_node50.attrSize = 1;_node50.attrHash = 2320598739;_node50.attrs["w-class"] = "body-business-right";_$temp = _node50;{
						var _$parent59 = _$temp;var _node51 = { "attrs": {}, "tagName": "span", "sid": 36 };_node51.children = [];_node51.childHash = 1541618409;_node51.attrSize = 1;_node51.attrHash = 3099717597;_node51.attrs["w-class"] = "show-tip";_$temp = _node51;{
							var _$parent60 = _$temp;var _node52 = _installText("4位小数", 1066429988);;
							_$parent60.children.push(_node52);
						}_$parent59.children.push(_node51);
					}_$temp = _node50;{
						var _$parent61 = _$temp;var _node53 = { "attrs": {}, "tagName": "div", "sid": 37 };_node53.children = [];_node53.childHash = 2946814719;_node53.attrSize = 2;_node53.attrHash = 2227247012;_node53.attrs["w-class"] = "line";_node53.attrs["style"] = "top: 30px;";_$parent61.children.push(_node53);
					}_$temp = _node50;{
						var _$parent62 = _$temp;var _node54 = { "attrs": {}, "tagName": "div", "sid": 38 };_node54.children = [];_node54.attrSize = 1;_node54.attrHash = 1019047777;_node54.attrs["w-class"] = "title";_$temp = _node54;{
							var _$parent63 = _$temp;var _node55 = { "attrs": {}, "tagName": "span", "sid": 39 };_node55.children = [];_node55.attrSize = 1;_node55.attrHash = 611277532;_node55.attrs["w-class"] = "title-price";_$temp = _node55;{
								var _$parent64 = _$temp;var _node56 = _installText("价格(", 2720656848);;
								_$parent64.children.push(_node56);
							}_$temp = _node55;{
								var _$parent65 = _$temp;_addText(it1.currency2, _$parent65);
							}_$temp = _node55;{
								var _$parent66 = _$temp;var _node57 = _installText(")", 2008579719);;
								_$parent66.children.push(_node57);
							}_chFunc(_node55);_$parent63.children.push(_node55);
						}_$temp = _node54;{
							var _$parent67 = _$temp;var _node58 = { "attrs": {}, "tagName": "span", "sid": 40 };_node58.children = [];_node58.attrSize = 1;_node58.attrHash = 1929059306;_node58.attrs["w-class"] = "title-count";_$temp = _node58;{
								var _$parent68 = _$temp;var _node59 = _installText("数量(", 1087515470);;
								_$parent68.children.push(_node59);
							}_$temp = _node58;{
								var _$parent69 = _$temp;_addText(it1.currency1, _$parent69);
							}_$temp = _node58;{
								var _$parent70 = _$temp;var _node60 = _installText(")", 2008579719);;
								_$parent70.children.push(_node60);
							}_chFunc(_node58);_$parent67.children.push(_node58);
						}_chFunc(_node54);_$parent62.children.push(_node54);
					}_$temp = _node50;{
						var _$parent71 = _$temp;var _node61 = { "attrs": {}, "tagName": "div", "sid": 41 };_node61.children = [];_node61.attrSize = 1;_node61.attrHash = 110905839;_node61.attrs["w-class"] = "buy-list";{
							var _$i = 0;
							for (var _iterator = it1.buyList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
								var i = _$i++;_$temp = _node61;{
									var _$parent72 = _$temp;var _node62 = { "attrs": {}, "tagName": "div", "sid": 42 };_node62.children = [];_node62.attrSize = 1;_node62.attrHash = 4092681921;_node62.attrs["w-class"] = "each-buy";_$temp = _node62;{
										var _$parent73 = _$temp;var _node63 = { "attrs": {}, "tagName": "div", "sid": 43 };_node63.children = [];_node63.attrSize = 1;_node63.attrHash = 2478623655;_node63.attrs["w-class"] = "buy-price";_$temp = _node63;{
											var _$parent74 = _$temp;_addText(each.price, _$parent74);
										}_chFunc(_node63);_$parent73.children.push(_node63);
									}_$temp = _node62;{
										var _$parent75 = _$temp;var _node64 = { "attrs": {}, "tagName": "div", "sid": 44 };_node64.children = [];_node64.attrSize = 1;_node64.attrHash = 2350007061;_node64.attrs["w-class"] = "buy-count";_$temp = _node64;{
											var _$parent76 = _$temp;_addText(each.count, _$parent76);
										}_chFunc(_node64);_$parent75.children.push(_node64);
									}_$temp = _node62;{
										var _$parent77 = _$temp;var _node65 = { "attrs": {}, "tagName": "div", "sid": 45 };_node65.children = [];_node65.attrSize = 1;_node65.attrHash = 2464473697;_node65.attrs["w-class"] = "buy-schedule";_$temp = _node65;{
											var _$parent78 = _$temp;var _node66 = { "attrs": {}, "tagName": "div", "sid": 46 };_node66.children = [];_node66.attrSize = 2;_node66.attrHash = 3326450403;_node66.attrs["w-class"] = "buy-schedule-bar";{
												var attrvalue = "";attrvalue += "width: ";attrvalue += each.schedule * 100;attrvalue += "%";_node66.attrs["style"] = attrvalue;
											}_node66.attrHash = _hash.nextHash(_node66.attrHash, _calTextHash(_node66.attrs["style"]));_chFunc(_node66);_$parent78.children.push(_node66);
										}_chFunc(_node65);_$parent77.children.push(_node65);
									}_chFunc(_node62);_$parent72.children.push(_node62);
								}
							}
						}_chFunc(_node61);_$parent71.children.push(_node61);
					}_$temp = _node50;{
						var _$parent79 = _$temp;var _node67 = { "attrs": {}, "tagName": "span", "sid": 47 };_node67.children = [];_node67.attrSize = 1;_node67.attrHash = 2756001270;_node67.attrs["w-class"] = "average";_$temp = _node67;{
							var _$parent80 = _$temp;_addText(it1.average, _$parent80);
						}_chFunc(_node67);_$parent79.children.push(_node67);
					}_$temp = _node50;{
						var _$parent81 = _$temp;var _node68 = { "attrs": {}, "tagName": "div", "sid": 48 };_node68.children = [];_node68.attrSize = 1;_node68.attrHash = 4074132470;_node68.attrs["w-class"] = "average-price";_$temp = _node68;{
							var _$parent82 = _$temp;_addText(it1.averagePrice, _$parent82);
						}_chFunc(_node68);_$parent81.children.push(_node68);
					}_$temp = _node50;{
						var _$parent83 = _$temp;var _node69 = { "attrs": {}, "tagName": "div", "sid": 49 };_node69.children = [];_node69.childHash = 2946814719;_node69.attrSize = 2;_node69.attrHash = 458561244;_node69.attrs["w-class"] = "line";_node69.attrs["style"] = "top: 100px;";_$parent83.children.push(_node69);
					}_$temp = _node50;{
						var _$parent84 = _$temp;var _node70 = { "attrs": {}, "tagName": "div", "sid": 50 };_node70.children = [];_node70.attrSize = 1;_node70.attrHash = 2709728443;_node70.attrs["w-class"] = "sale-list";{
							var _$i2 = 0;
							for (var _iterator2 = it1.saleList, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
								var _ref2;

								if (_isArray2) {
									if (_i2 >= _iterator2.length) break;
									_ref2 = _iterator2[_i2++];
								} else {
									_i2 = _iterator2.next();
									if (_i2.done) break;
									_ref2 = _i2.value;
								}

								var _each = _ref2;
								var _i3 = _$i2++;_$temp = _node70;{
									var _$parent85 = _$temp;var _node71 = { "attrs": {}, "tagName": "div", "sid": 51 };_node71.children = [];_node71.attrSize = 1;_node71.attrHash = 3975692292;_node71.attrs["w-class"] = "each-sale";_$temp = _node71;{
										var _$parent86 = _$temp;var _node72 = { "attrs": {}, "tagName": "div", "sid": 52 };_node72.children = [];_node72.attrSize = 1;_node72.attrHash = 2266969804;_node72.attrs["w-class"] = "sale-price";_$temp = _node72;{
											var _$parent87 = _$temp;_addText(_each.price, _$parent87);
										}_chFunc(_node72);_$parent86.children.push(_node72);
									}_$temp = _node71;{
										var _$parent88 = _$temp;var _node73 = { "attrs": {}, "tagName": "div", "sid": 53 };_node73.children = [];_node73.attrSize = 1;_node73.attrHash = 3471879995;_node73.attrs["w-class"] = "sale-count";_$temp = _node73;{
											var _$parent89 = _$temp;_addText(_each.count, _$parent89);
										}_chFunc(_node73);_$parent88.children.push(_node73);
									}_$temp = _node71;{
										var _$parent90 = _$temp;var _node74 = { "attrs": {}, "tagName": "div", "sid": 54 };_node74.children = [];_node74.attrSize = 1;_node74.attrHash = 2446554846;_node74.attrs["w-class"] = "sale-schedule";_$temp = _node74;{
											var _$parent91 = _$temp;var _node75 = { "attrs": {}, "tagName": "div", "sid": 55 };_node75.children = [];_node75.attrSize = 2;_node75.attrHash = 3299429511;_node75.attrs["w-class"] = "sale-schedule-bar";{
												var _attrvalue = "";_attrvalue += "width: ";_attrvalue += _each.schedule * 100;_attrvalue += "%";_node75.attrs["style"] = _attrvalue;
											}_node75.attrHash = _hash.nextHash(_node75.attrHash, _calTextHash(_node75.attrs["style"]));_chFunc(_node75);_$parent91.children.push(_node75);
										}_chFunc(_node74);_$parent90.children.push(_node74);
									}_chFunc(_node71);_$parent85.children.push(_node71);
								}
							}
						}_chFunc(_node70);_$parent84.children.push(_node70);
					}_chFunc(_node50);_$parent58.children.push(_node50);
				}_$temp = _node9;{
					var _$parent92 = _$temp;var _node76 = { "attrs": {}, "tagName": "div", "sid": 56 };_node76.children = [];_node76.childHash = 2946814719;_node76.attrSize = 2;_node76.attrHash = 1524644374;_node76.attrs["w-class"] = "line";_node76.attrs["style"] = "width: 100%;top: 160px;";_$parent92.children.push(_node76);
				}_$temp = _node9;{
					var _$parent93 = _$temp;var _node77 = { "attrs": {}, "tagName": "div", "sid": 57 };_node77.children = [];_node77.attrSize = 1;_node77.attrHash = 3097059565;_node77.attrs["w-class"] = "foot-business";_$temp = _node77;{
						var _$parent94 = _$temp;var _node78 = { "attrs": {}, "tagName": "div", "sid": 58 };_node78.children = [];_node78.childHash = 571828682;_node78.attrSize = 1;_node78.attrHash = 1087368310;_node78.attrs["w-class"] = "transfer-title";_$temp = _node78;{
							var _$parent95 = _$temp;var _node79 = { "attrs": {}, "tagName": "div", "sid": 59 };_node79.children = [];_node79.childHash = 570640763;_node79.attrSize = 1;_node79.attrHash = 797185836;_node79.attrs["w-class"] = "transfer-time";_$temp = _node79;{
								var _$parent96 = _$temp;var _node80 = _installText("时间", 3449752377);;
								_$parent96.children.push(_node80);
							}_$parent95.children.push(_node79);
						}_$temp = _node78;{
							var _$parent97 = _$temp;var _node81 = { "attrs": {}, "tagName": "div", "sid": 60 };_node81.children = [];_node81.childHash = 363653029;_node81.attrSize = 1;_node81.attrHash = 4267033049;_node81.attrs["w-class"] = "transfer-price";_$temp = _node81;{
								var _$parent98 = _$temp;var _node82 = _installText("价格", 2788028535);;
								_$parent98.children.push(_node82);
							}_$parent97.children.push(_node81);
						}_$temp = _node78;{
							var _$parent99 = _$temp;var _node83 = { "attrs": {}, "tagName": "div", "sid": 61 };_node83.children = [];_node83.childHash = 221214531;_node83.attrSize = 1;_node83.attrHash = 1570291131;_node83.attrs["w-class"] = "transfer-count";_$temp = _node83;{
								var _$parent100 = _$temp;var _node84 = _installText("数量", 2370637379);;
								_$parent100.children.push(_node84);
							}_$parent99.children.push(_node83);
						}_$parent94.children.push(_node78);
					}if (it1.transferList) {
						_$temp = _node77;{
							var _$parent101 = _$temp;var _node85 = { "attrs": {}, "tagName": "div", "sid": 62 };_node85.children = [];_node85.attrSize = 1;_node85.attrHash = 1313279973;_node85.attrs["w-class"] = "transfer-info";{
								var _$i3 = 0;
								for (var _iterator3 = it1.transferList, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
									var _ref3;

									if (_isArray3) {
										if (_i4 >= _iterator3.length) break;
										_ref3 = _iterator3[_i4++];
									} else {
										_i4 = _iterator3.next();
										if (_i4.done) break;
										_ref3 = _i4.value;
									}

									var _each2 = _ref3;
									var _i5 = _$i3++;_$temp = _node85;{
										var _$parent102 = _$temp;var _node86 = { "attrs": {}, "tagName": "div", "sid": 63 };_node86.children = [];_node86.attrSize = 1;_node86.attrHash = 2569366235;_node86.attrs["w-class"] = "each-transfer";_$temp = _node86;{
											var _$parent103 = _$temp;var _node87 = { "attrs": {}, "tagName": "div", "sid": 64 };_node87.children = [];_node87.attrSize = 1;_node87.attrHash = 797185836;_node87.attrs["w-class"] = "transfer-time";_$temp = _node87;{
												var _$parent104 = _$temp;_addText(_each2.time, _$parent104);
											}_chFunc(_node87);_$parent103.children.push(_node87);
										}_$temp = _node86;{
											var _$parent105 = _$temp;var _node88 = { "attrs": {}, "tagName": "div", "sid": 65 };_node88.children = [];_node88.attrSize = 1;_node88.attrHash = 4267033049;_node88.attrs["w-class"] = "transfer-price";_$temp = _node88;{
												var _$parent106 = _$temp;_addText(_each2.price, _$parent106);
											}_chFunc(_node88);_$parent105.children.push(_node88);
										}_$temp = _node86;{
											var _$parent107 = _$temp;var _node89 = { "attrs": {}, "tagName": "div", "sid": 66 };_node89.children = [];_node89.attrSize = 1;_node89.attrHash = 1570291131;_node89.attrs["w-class"] = "transfer-count";_$temp = _node89;{
												var _$parent108 = _$temp;_addText(_each2.count, _$parent108);
											}_chFunc(_node89);_$parent107.children.push(_node89);
										}_chFunc(_node86);_$parent102.children.push(_node86);
									}
								}
							}_chFunc(_node85);_$parent101.children.push(_node85);
						}
					} else {
						_$temp = _node77;{
							var _$parent109 = _$temp;var _node90 = { "attrs": {}, "tagName": "div", "sid": 67 };_node90.children = [];_node90.childHash = 1729816829;_node90.attrSize = 1;_node90.attrHash = 4003886906;_node90.attrs["w-class"] = "transfer-info-none";_$temp = _node90;{
								var _$parent110 = _$temp;var _node91 = _installText("暂无数据", 1874497114);;
								_$parent110.children.push(_node91);
							}_$parent109.children.push(_node90);
						}
					}_chFunc(_node77);_$parent93.children.push(_node77);
				}_chFunc(_node9);_$parent9.children.push(_node9);
			}
		} else {
			_$temp = _node;{
				var _$parent111 = _$temp;var _node92 = { "attrs": {}, "tagName": "div", "sid": 68 };_node92.children = [];_node92.attrSize = 2;_node92.attrHash = 1443796024;_node92.attrs["w-class"] = "body-entrust";_node92.attrs["style"] = "overflow-y: auto;overflow-x: hidden;height: 1100px;";{
					var _$i4 = 0;
					for (var _iterator4 = it1.entrustList, _isArray4 = Array.isArray(_iterator4), _i6 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
						var _ref4;

						if (_isArray4) {
							if (_i6 >= _iterator4.length) break;
							_ref4 = _iterator4[_i6++];
						} else {
							_i6 = _iterator4.next();
							if (_i6.done) break;
							_ref4 = _i6.value;
						}

						var _each3 = _ref4;
						var _i7 = _$i4++;_$temp = _node92;{
							var _$parent112 = _$temp;var _node93 = { "attrs": {}, "tagName": "div", "sid": 69 };_node93.children = [];_node93.attrSize = 1;_node93.attrHash = 970917841;_node93.attrs["w-class"] = "each-entrust";if (_each3.type === 1) {
								_$temp = _node93;{
									var _$parent113 = _$temp;var _node94 = { "attrs": {}, "tagName": "div", "sid": 70 };_node94.children = [];_node94.childHash = 1489544162;_node94.attrSize = 2;_node94.attrHash = 3570570472;_node94.attrs["w-class"] = "entrust-type";_node94.attrs["style"] = "color: rgba(0, 189, 154, 1);";_$temp = _node94;{
										var _$parent114 = _$temp;var _node95 = _installText("买入", 3488103702);;
										_$parent114.children.push(_node95);
									}_$parent113.children.push(_node94);
								}
							} else {
								_$temp = _node93;{
									var _$parent115 = _$temp;var _node96 = { "attrs": {}, "tagName": "div", "sid": 71 };_node96.children = [];_node96.childHash = 1630941878;_node96.attrSize = 2;_node96.attrHash = 3910988891;_node96.attrs["w-class"] = "entrust-type";_node96.attrs["style"] = "color: rgba(255, 105, 96, 1);";_$temp = _node96;{
										var _$parent116 = _$temp;var _node97 = _installText("卖出", 3828390084);;
										_$parent116.children.push(_node97);
									}_$parent115.children.push(_node96);
								}
							}_$temp = _node93;{
								var _$parent117 = _$temp;var _node98 = { "attrs": {}, "tagName": "div", "sid": 72 };_node98.children = [];_node98.attrSize = 1;_node98.attrHash = 1238365662;_node98.attrs["w-class"] = "entrust-currency";_$temp = _node98;{
									var _$parent118 = _$temp;_addText(_each3.currency1, _$parent118);
								}_$temp = _node98;{
									var _$parent119 = _$temp;var _node99 = _installText("/", 883865250);;
									_$parent119.children.push(_node99);
								}_$temp = _node98;{
									var _$parent120 = _$temp;_addText(_each3.currency2, _$parent120);
								}_chFunc(_node98);_$parent117.children.push(_node98);
							}_$temp = _node93;{
								var _$parent121 = _$temp;var _node100 = { "attrs": {}, "tagName": "div", "sid": 73 };_node100.children = [];_node100.childHash = 3678142061;_node100.attrSize = 1;_node100.attrHash = 2629632916;_node100.attrs["w-class"] = "entrust-status";_$temp = _node100;{
									var _$parent122 = _$temp;var _node101 = _installText("委托中", 2032101857);;
									_$parent122.children.push(_node101);
								}_$parent121.children.push(_node100);
							}_$temp = _node93;{
								var _$parent123 = _$temp;var _node102 = { "attrs": {}, "tagName": "div", "sid": 74 };_node102.children = [];_node102.attrSize = 1;_node102.attrHash = 1105250663;_node102.attrs["w-class"] = "entrust-time";_$temp = _node102;{
									var _$parent124 = _$temp;_addText(_each3.time, _$parent124);
								}_chFunc(_node102);_$parent123.children.push(_node102);
							}if (it1.activeNum === 2) {
								_$temp = _node93;{
									var _$parent125 = _$temp;var _node103 = { "attrs": {}, "tagName": "div", "sid": 75 };_node103.children = [];_node103.attrSize = 2;_node103.attrHash = 62014986;_node103.attrs["w-class"] = "entrust-cancel";{
										var _attrvalue2 = "";_attrvalue2 += "doCancel(e,";_attrvalue2 += _each3.id;_attrvalue2 += ")";_node103.attrs["on-tap"] = _attrvalue2;
									}_node103.attrHash = _hash.nextHash(_node103.attrHash, _calTextHash(_node103.attrs["on-tap"]));_$temp = _node103;{
										var _$parent126 = _$temp;var _node104 = _installText("撤销", 3081647399);;
										_$parent126.children.push(_node104);
									}_chFunc(_node103);_$parent125.children.push(_node103);
								}
							}_$temp = _node93;{
								var _$parent127 = _$temp;var _node105 = { "attrs": {}, "tagName": "div", "sid": 76 };_node105.children = [];_node105.attrSize = 1;_node105.attrHash = 1163265877;_node105.attrs["w-class"] = "entrust-title";_$temp = _node105;{
									var _$parent128 = _$temp;var _node106 = { "attrs": {}, "tagName": "div", "sid": 77 };_node106.children = [];_node106.childHash = 363653029;_node106.attrSize = 1;_node106.attrHash = 4002341480;_node106.attrs["w-class"] = "entrust-price";_$temp = _node106;{
										var _$parent129 = _$temp;var _node107 = _installText("价格", 2788028535);;
										_$parent129.children.push(_node107);
									}_$parent128.children.push(_node106);
								}_$temp = _node105;{
									var _$parent130 = _$temp;var _node108 = { "attrs": {}, "tagName": "div", "sid": 78 };_node108.children = [];_node108.attrSize = 1;_node108.attrHash = 1294248169;_node108.attrs["w-class"] = "entrust-currency1";_$temp = _node108;{
										var _$parent131 = _$temp;_addText(_each3.currency1, _$parent131);
									}_chFunc(_node108);_$parent130.children.push(_node108);
								}_$temp = _node105;{
									var _$parent132 = _$temp;var _node109 = { "attrs": {}, "tagName": "div", "sid": 79 };_node109.children = [];_node109.attrSize = 1;_node109.attrHash = 1724941648;_node109.attrs["w-class"] = "entrust-currency2";_$temp = _node109;{
										var _$parent133 = _$temp;_addText(_each3.currency2, _$parent133);
									}_chFunc(_node109);_$parent132.children.push(_node109);
								}_chFunc(_node105);_$parent127.children.push(_node105);
							}_$temp = _node93;{
								var _$parent134 = _$temp;var _node110 = { "attrs": {}, "tagName": "div", "sid": 80 };_node110.children = [];_node110.attrSize = 1;_node110.attrHash = 1879066404;_node110.attrs["w-class"] = "entrust-body";_$temp = _node110;{
									var _$parent135 = _$temp;var _node111 = { "attrs": {}, "tagName": "div", "sid": 81 };_node111.children = [];_node111.attrSize = 1;_node111.attrHash = 4002341480;_node111.attrs["w-class"] = "entrust-price";_$temp = _node111;{
										var _$parent136 = _$temp;_addText(_each3.price, _$parent136);
									}_chFunc(_node111);_$parent135.children.push(_node111);
								}_$temp = _node110;{
									var _$parent137 = _$temp;var _node112 = { "attrs": {}, "tagName": "div", "sid": 82 };_node112.children = [];_node112.attrSize = 1;_node112.attrHash = 1294248169;_node112.attrs["w-class"] = "entrust-currency1";_$temp = _node112;{
										var _$parent138 = _$temp;_addText(_each3.currencyCount1, _$parent138);
									}_chFunc(_node112);_$parent137.children.push(_node112);
								}_$temp = _node110;{
									var _$parent139 = _$temp;var _node113 = { "attrs": {}, "tagName": "div", "sid": 83 };_node113.children = [];_node113.attrSize = 1;_node113.attrHash = 1724941648;_node113.attrs["w-class"] = "entrust-currency2";_$temp = _node113;{
										var _$parent140 = _$temp;_addText(_each3.currencyCount2, _$parent140);
									}_chFunc(_node113);_$parent139.children.push(_node113);
								}_chFunc(_node110);_$parent134.children.push(_node110);
							}_$temp = _node93;{
								var _$parent141 = _$temp;var _node114 = { "attrs": {}, "tagName": "div", "sid": 84 };_node114.children = [];_node114.childHash = 2946814719;_node114.attrSize = 2;_node114.attrHash = 1216755612;_node114.attrs["w-class"] = "line";_node114.attrs["style"] = "top: 295px;width: 100%;";_$parent141.children.push(_node114);
							}_chFunc(_node93);_$parent112.children.push(_node93);
						}
					}
				}_chFunc(_node92);_$parent111.children.push(_node92);
			}
		}_chFunc(_node);return _node;
	}
});