(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1839940969;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["style"] = "background-color: #fff;";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 355853184;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "排名";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 2946814719;_node4.attrSize = 1;_node4.attrHash = 605715806;_node4.attrs["style"] = "height: 10px;background: #F8F8F8";_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 2734676204;_node5.attrs["style"] = "height: 100%;margin-bottom: 128px;overflow-x: hidden;overflow-y: auto;";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.childHash = 1703888615;_node6.attrSize = 1;_node6.attrHash = 2068599742;_node6.attrs["style"] = "line-height: 100px;border-bottom: 1px solid #e5e5ee;display: flex";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.childHash = 2584196815;_node7.attrSize = 1;_node7.attrHash = 1019047777;_node7.attrs["w-class"] = "title";_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = _installText("矿山排名", 1622501878);;
						_$parent8.children.push(_node8);
					}_$parent7.children.push(_node7);
				}_$temp = _node6;{
					var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "span", "sid": 6 };_node9.children = [];_node9.childHash = 2411539008;_node9.attrSize = 2;_node9.attrHash = 2514283851;_node9.attrs["w-class"] = "more";_node9.attrs["on-tap"] = "gotoMore(1)";_$temp = _node9;{
						var _$parent10 = _$temp;var _node10 = _installText("全部", 2167202486);;
						_$parent10.children.push(_node10);
					}_$temp = _node9;{
						var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "img", "sid": 7 };_node11.children = [];_node11.childHash = 0;_node11.attrSize = 2;_node11.attrHash = 3884819292;_node11.attrs["src"] = "../../../res/image/btn_right_arrow.png";_node11.attrs["w-class"] = "moreImg";_$parent11.children.push(_node11);
					}_$parent9.children.push(_node9);
				}_$parent6.children.push(_node6);
			}_$temp = _node5;{
				var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 843339889;_node12.attrs["w-class"] = "rank";if (it1.mineSecond) {
					_$temp = _node12;{
						var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 9 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 1185458622;_node13.attrs["w-class"] = "rankSecond";_$temp = _node13;{
							var _$parent14 = _$temp;var _node14 = { "attrs": {}, "tagName": "img", "sid": 10 };_node14.children = [];_node14.childHash = 0;_node14.attrSize = 2;_node14.attrHash = 1965779710;_node14.attrs["src"] = "../../../res/image/mining_rank_two.png";_node14.attrs["style"] = "width: 100px;height: 100px;border-radius: 50%;background: #E1E1E1";_$parent14.children.push(_node14);
						}_$temp = _node13;{
							var _$parent15 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 1777706569;_node15.attrs["w-class"] = "rankName";_$temp = _node15;{
								var _$parent16 = _$temp;_addText(it1.mineRank[1].name, _$parent16);
							}_chFunc(_node15);_$parent15.children.push(_node15);
						}_$temp = _node13;{
							var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 1435687824;_node16.attrs["w-class"] = "rankNum";_$temp = _node16;{
								var _$parent18 = _$temp;_addText(it1.mineRank[1].num, _$parent18);
							}_chFunc(_node16);_$parent17.children.push(_node16);
						}_$temp = _node13;{
							var _$parent19 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.childHash = 2946814719;_node17.attrSize = 1;_node17.attrHash = 629468906;_node17.attrs["style"] = "width: 190px;height: 160px;background: #E1E1E1";_$parent19.children.push(_node17);
						}_chFunc(_node13);_$parent13.children.push(_node13);
					}
				}_$temp = _node12;{
					var _$parent20 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 14 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 1012428265;_node18.attrs["w-class"] = "rankFirst";_$temp = _node18;{
						var _$parent21 = _$temp;var _node19 = { "attrs": {}, "tagName": "img", "sid": 15 };_node19.children = [];_node19.childHash = 0;_node19.attrSize = 2;_node19.attrHash = 4043619101;_node19.attrs["src"] = "../../../res/image/mining_rank_one.png";_node19.attrs["style"] = "width: 100px;height: 100px;border-radius: 50%;background: #FFCE49";_$parent21.children.push(_node19);
					}_$temp = _node18;{
						var _$parent22 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 16 };_node20.children = [];_node20.attrSize = 2;_node20.attrHash = 3536403742;_node20.attrs["w-class"] = "rankName";_node20.attrs["style"] = "width: auto";_$temp = _node20;{
							var _$parent23 = _$temp;_addText(it1.mineRank[0].name, _$parent23);
						}_chFunc(_node20);_$parent22.children.push(_node20);
					}_$temp = _node18;{
						var _$parent24 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 17 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 1435687824;_node21.attrs["w-class"] = "rankNum";_$temp = _node21;{
							var _$parent25 = _$temp;_addText(it1.mineRank[0].num, _$parent25);
						}_chFunc(_node21);_$parent24.children.push(_node21);
					}_$temp = _node18;{
						var _$parent26 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 18 };_node22.children = [];_node22.childHash = 2946814719;_node22.attrSize = 1;_node22.attrHash = 3499197805;_node22.attrs["style"] = "width: 190px;height: 280px;background: #FFCE49";_$parent26.children.push(_node22);
					}_chFunc(_node18);_$parent20.children.push(_node18);
				}if (it1.mineThird) {
					_$temp = _node12;{
						var _$parent27 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 19 };_node23.children = [];_node23.attrSize = 1;_node23.attrHash = 2344878345;_node23.attrs["w-class"] = "rankThree";_$temp = _node23;{
							var _$parent28 = _$temp;var _node24 = { "attrs": {}, "tagName": "img", "sid": 20 };_node24.children = [];_node24.childHash = 0;_node24.attrSize = 2;_node24.attrHash = 904187046;_node24.attrs["src"] = "../../../res/image/mining_rank_three.png";_node24.attrs["style"] = "width: 100px;height: 100px;border-radius: 50%;background: #CDA257";_$parent28.children.push(_node24);
						}_$temp = _node23;{
							var _$parent29 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 21 };_node25.children = [];_node25.attrSize = 1;_node25.attrHash = 1777706569;_node25.attrs["w-class"] = "rankName";_$temp = _node25;{
								var _$parent30 = _$temp;_addText(it1.mineRank[2].name, _$parent30);
							}_chFunc(_node25);_$parent29.children.push(_node25);
						}_$temp = _node23;{
							var _$parent31 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 22 };_node26.children = [];_node26.attrSize = 1;_node26.attrHash = 1435687824;_node26.attrs["w-class"] = "rankNum";_$temp = _node26;{
								var _$parent32 = _$temp;_addText(it1.mineRank[2].num, _$parent32);
							}_chFunc(_node26);_$parent31.children.push(_node26);
						}_$temp = _node23;{
							var _$parent33 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 23 };_node27.children = [];_node27.childHash = 2946814719;_node27.attrSize = 1;_node27.attrHash = 3843660992;_node27.attrs["style"] = "width: 190px;height: 110px;background: #CDA257";_$parent33.children.push(_node27);
						}_chFunc(_node23);_$parent27.children.push(_node23);
					}
				}_chFunc(_node12);_$parent12.children.push(_node12);
			}_$temp = _node5;{
				var _$parent34 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 24 };_node28.children = [];_node28.childHash = 19858921;_node28.attrSize = 2;_node28.attrHash = 244211666;_node28.attrs["w-class"] = "rankItem";_node28.attrs["style"] = "color: #A0ACC0;";_$temp = _node28;{
					var _$parent35 = _$temp;var _node29 = { "attrs": {}, "tagName": "span", "sid": 25 };_node29.children = [];_node29.childHash = 159592564;_node29.attrSize = 1;_node29.attrHash = 3101826641;_node29.attrs["style"] = "margin-left: 50px;";_$temp = _node29;{
						var _$parent36 = _$temp;var _node30 = _installText("排名", 3241587341);;
						_$parent36.children.push(_node30);
					}_$parent35.children.push(_node29);
				}_$temp = _node28;{
					var _$parent37 = _$temp;var _node31 = { "attrs": {}, "tagName": "span", "sid": 26 };_node31.children = [];_node31.childHash = 820605687;_node31.attrSize = 1;_node31.attrHash = 1786584261;_node31.attrs["style"] = "margin-left: 67px;";_$temp = _node31;{
						var _$parent38 = _$temp;var _node32 = _installText("昵称", 1301170364);;
						_$parent38.children.push(_node32);
					}_$parent37.children.push(_node31);
				}_$temp = _node28;{
					var _$parent39 = _$temp;var _node33 = { "attrs": {}, "tagName": "span", "sid": 27 };_node33.children = [];_node33.childHash = 4004855382;_node33.attrSize = 1;_node33.attrHash = 3147569790;_node33.attrs["style"] = "float: right;margin-right: 30px;";_$temp = _node33;{
						var _$parent40 = _$temp;var _node34 = _installText("矿山总量(KT)", 3234379110);;
						_$parent40.children.push(_node34);
					}_$parent39.children.push(_node33);
				}_$parent34.children.push(_node28);
			}{
				var _$i = 0;
				for (var _iterator = it1.mineRank, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
					var ind = _$i++;_$temp = _node5;{
						var _$parent41 = _$temp;var _node35 = { "attrs": {}, "tagName": "div", "sid": 28 };_node35.children = [];_node35.attrSize = 2;_node35.attrHash = 327995047;_node35.attrs["w-class"] = "rankItem";_node35.attrs["style"] = "color: #666666;";_$temp = _node35;{
							var _$parent42 = _$temp;var _node36 = { "attrs": {}, "tagName": "span", "sid": 29 };_node36.children = [];_node36.attrSize = 1;_node36.attrHash = 1156572282;_node36.attrs["style"] = "margin-left: 50px;color: #111111;font-size: 28px;font-weight: 600;";_$temp = _node36;{
								var _$parent43 = _$temp;_addText(val.index, _$parent43);
							}_chFunc(_node36);_$parent42.children.push(_node36);
						}_$temp = _node35;{
							var _$parent44 = _$temp;var _node37 = { "attrs": {}, "tagName": "span", "sid": 30 };_node37.children = [];_node37.attrSize = 1;_node37.attrHash = 1786584261;_node37.attrs["style"] = "margin-left: 67px;";_$temp = _node37;{
								var _$parent45 = _$temp;_addText(val.name, _$parent45);
							}_chFunc(_node37);_$parent44.children.push(_node37);
						}_$temp = _node35;{
							var _$parent46 = _$temp;var _node38 = { "attrs": {}, "tagName": "span", "sid": 31 };_node38.children = [];_node38.attrSize = 1;_node38.attrHash = 1928016895;_node38.attrs["style"] = "float: right;margin-right: 30px;font-size: 28px;font-weight: 600;";_$temp = _node38;{
								var _$parent47 = _$temp;_addText(val.num, _$parent47);
							}_chFunc(_node38);_$parent46.children.push(_node38);
						}_chFunc(_node35);_$parent41.children.push(_node35);
					}
				}
			}_$temp = _node5;{
				var _$parent48 = _$temp;var _node39 = { "attrs": {}, "tagName": "div", "sid": 32 };_node39.children = [];_node39.attrSize = 3;_node39.attrHash = 843776783;_node39.attrs["w-class"] = "moreRank";_node39.attrs["on-tap"] = "getMore(1)";{
					var attrvalue = "";attrvalue += "display: ";attrvalue += it1.mineMore ? 'block' : 'none';attrvalue += "";_node39.attrs["style"] = attrvalue;
				}_node39.attrHash = _hash.nextHash(_node39.attrHash, _calTextHash(_node39.attrs["style"]));_$temp = _node39;{
					var _$parent49 = _$temp;var _node40 = _installText("更多", 800505308);;
					_$parent49.children.push(_node40);
				}_chFunc(_node39);_$parent48.children.push(_node39);
			}if (it1.miningFirst) {
				_$temp = _node5;{
					var _$parent50 = _$temp;var _node41 = { "attrs": {}, "tagName": "div", "sid": 33 };_node41.children = [];_node41.childHash = 2946814719;_node41.attrSize = 1;_node41.attrHash = 845060644;_node41.attrs["style"] = "height: 20px;background: #f8f8f8;";_$parent50.children.push(_node41);
				}_$temp = _node5;{
					var _$parent51 = _$temp;var _node42 = { "attrs": {}, "tagName": "div", "sid": 34 };_node42.children = [];_node42.childHash = 2039301374;_node42.attrSize = 1;_node42.attrHash = 4110279666;_node42.attrs["style"] = "line-height: 100px;border-bottom: 1px solid #e5e5ee;display: flex;";_$temp = _node42;{
						var _$parent52 = _$temp;var _node43 = { "attrs": {}, "tagName": "div", "sid": 35 };_node43.children = [];_node43.childHash = 1484800930;_node43.attrSize = 1;_node43.attrHash = 1019047777;_node43.attrs["w-class"] = "title";_$temp = _node43;{
							var _$parent53 = _$temp;var _node44 = _installText("挖矿排名", 1165939414);;
							_$parent53.children.push(_node44);
						}_$parent52.children.push(_node43);
					}_$temp = _node42;{
						var _$parent54 = _$temp;var _node45 = { "attrs": {}, "tagName": "span", "sid": 36 };_node45.children = [];_node45.childHash = 2411539008;_node45.attrSize = 2;_node45.attrHash = 661382693;_node45.attrs["w-class"] = "more";_node45.attrs["on-tap"] = "gotoMore(2)";_$temp = _node45;{
							var _$parent55 = _$temp;var _node46 = _installText("全部", 2167202486);;
							_$parent55.children.push(_node46);
						}_$temp = _node45;{
							var _$parent56 = _$temp;var _node47 = { "attrs": {}, "tagName": "img", "sid": 37 };_node47.children = [];_node47.childHash = 0;_node47.attrSize = 2;_node47.attrHash = 3884819292;_node47.attrs["src"] = "../../../res/image/btn_right_arrow.png";_node47.attrs["w-class"] = "moreImg";_$parent56.children.push(_node47);
						}_$parent54.children.push(_node45);
					}_$parent51.children.push(_node42);
				}_$temp = _node5;{
					var _$parent57 = _$temp;var _node48 = { "attrs": {}, "tagName": "div", "sid": 38 };_node48.children = [];_node48.attrSize = 1;_node48.attrHash = 843339889;_node48.attrs["w-class"] = "rank";if (it1.miningSecond) {
						_$temp = _node48;{
							var _$parent58 = _$temp;var _node49 = { "attrs": {}, "tagName": "div", "sid": 39 };_node49.children = [];_node49.attrSize = 1;_node49.attrHash = 1185458622;_node49.attrs["w-class"] = "rankSecond";_$temp = _node49;{
								var _$parent59 = _$temp;var _node50 = { "attrs": {}, "tagName": "img", "sid": 40 };_node50.children = [];_node50.childHash = 0;_node50.attrSize = 2;_node50.attrHash = 1965779710;_node50.attrs["src"] = "../../../res/image/mining_rank_two.png";_node50.attrs["style"] = "width: 100px;height: 100px;border-radius: 50%;background: #E1E1E1";_$parent59.children.push(_node50);
							}_$temp = _node49;{
								var _$parent60 = _$temp;var _node51 = { "attrs": {}, "tagName": "div", "sid": 41 };_node51.children = [];_node51.attrSize = 1;_node51.attrHash = 1777706569;_node51.attrs["w-class"] = "rankName";_$temp = _node51;{
									var _$parent61 = _$temp;_addText(it1.miningRank[1].name, _$parent61);
								}_chFunc(_node51);_$parent60.children.push(_node51);
							}_$temp = _node49;{
								var _$parent62 = _$temp;var _node52 = { "attrs": {}, "tagName": "div", "sid": 42 };_node52.children = [];_node52.attrSize = 1;_node52.attrHash = 1435687824;_node52.attrs["w-class"] = "rankNum";_$temp = _node52;{
									var _$parent63 = _$temp;_addText(it1.miningRank[1].num, _$parent63);
								}_chFunc(_node52);_$parent62.children.push(_node52);
							}_$temp = _node49;{
								var _$parent64 = _$temp;var _node53 = { "attrs": {}, "tagName": "div", "sid": 43 };_node53.children = [];_node53.childHash = 2946814719;_node53.attrSize = 1;_node53.attrHash = 629468906;_node53.attrs["style"] = "width: 190px;height: 160px;background: #E1E1E1";_$parent64.children.push(_node53);
							}_chFunc(_node49);_$parent58.children.push(_node49);
						}
					}_$temp = _node48;{
						var _$parent65 = _$temp;var _node54 = { "attrs": {}, "tagName": "div", "sid": 44 };_node54.children = [];_node54.attrSize = 1;_node54.attrHash = 1012428265;_node54.attrs["w-class"] = "rankFirst";_$temp = _node54;{
							var _$parent66 = _$temp;var _node55 = { "attrs": {}, "tagName": "img", "sid": 45 };_node55.children = [];_node55.childHash = 0;_node55.attrSize = 2;_node55.attrHash = 4043619101;_node55.attrs["src"] = "../../../res/image/mining_rank_one.png";_node55.attrs["style"] = "width: 100px;height: 100px;border-radius: 50%;background: #FFCE49";_$parent66.children.push(_node55);
						}_$temp = _node54;{
							var _$parent67 = _$temp;var _node56 = { "attrs": {}, "tagName": "div", "sid": 46 };_node56.children = [];_node56.attrSize = 2;_node56.attrHash = 3536403742;_node56.attrs["w-class"] = "rankName";_node56.attrs["style"] = "width: auto";_$temp = _node56;{
								var _$parent68 = _$temp;_addText(it1.miningRank[0].name, _$parent68);
							}_chFunc(_node56);_$parent67.children.push(_node56);
						}_$temp = _node54;{
							var _$parent69 = _$temp;var _node57 = { "attrs": {}, "tagName": "div", "sid": 47 };_node57.children = [];_node57.attrSize = 1;_node57.attrHash = 1435687824;_node57.attrs["w-class"] = "rankNum";_$temp = _node57;{
								var _$parent70 = _$temp;_addText(it1.miningRank[0].num, _$parent70);
							}_chFunc(_node57);_$parent69.children.push(_node57);
						}_$temp = _node54;{
							var _$parent71 = _$temp;var _node58 = { "attrs": {}, "tagName": "div", "sid": 48 };_node58.children = [];_node58.childHash = 2946814719;_node58.attrSize = 1;_node58.attrHash = 3499197805;_node58.attrs["style"] = "width: 190px;height: 280px;background: #FFCE49";_$parent71.children.push(_node58);
						}_chFunc(_node54);_$parent65.children.push(_node54);
					}if (it1.miningThird) {
						_$temp = _node48;{
							var _$parent72 = _$temp;var _node59 = { "attrs": {}, "tagName": "div", "sid": 49 };_node59.children = [];_node59.attrSize = 1;_node59.attrHash = 2344878345;_node59.attrs["w-class"] = "rankThree";_$temp = _node59;{
								var _$parent73 = _$temp;var _node60 = { "attrs": {}, "tagName": "img", "sid": 50 };_node60.children = [];_node60.childHash = 0;_node60.attrSize = 2;_node60.attrHash = 904187046;_node60.attrs["src"] = "../../../res/image/mining_rank_three.png";_node60.attrs["style"] = "width: 100px;height: 100px;border-radius: 50%;background: #CDA257";_$parent73.children.push(_node60);
							}_$temp = _node59;{
								var _$parent74 = _$temp;var _node61 = { "attrs": {}, "tagName": "div", "sid": 51 };_node61.children = [];_node61.attrSize = 1;_node61.attrHash = 1777706569;_node61.attrs["w-class"] = "rankName";_$temp = _node61;{
									var _$parent75 = _$temp;_addText(it1.miningRank[2].name, _$parent75);
								}_chFunc(_node61);_$parent74.children.push(_node61);
							}_$temp = _node59;{
								var _$parent76 = _$temp;var _node62 = { "attrs": {}, "tagName": "div", "sid": 52 };_node62.children = [];_node62.attrSize = 1;_node62.attrHash = 1435687824;_node62.attrs["w-class"] = "rankNum";_$temp = _node62;{
									var _$parent77 = _$temp;_addText(it1.miningRank[2].num, _$parent77);
								}_chFunc(_node62);_$parent76.children.push(_node62);
							}_$temp = _node59;{
								var _$parent78 = _$temp;var _node63 = { "attrs": {}, "tagName": "div", "sid": 53 };_node63.children = [];_node63.childHash = 2946814719;_node63.attrSize = 1;_node63.attrHash = 3843660992;_node63.attrs["style"] = "width: 190px;height: 110px;background: #CDA257";_$parent78.children.push(_node63);
							}_chFunc(_node59);_$parent72.children.push(_node59);
						}
					}_chFunc(_node48);_$parent57.children.push(_node48);
				}_$temp = _node5;{
					var _$parent79 = _$temp;var _node64 = { "attrs": {}, "tagName": "div", "sid": 54 };_node64.children = [];_node64.childHash = 2976413202;_node64.attrSize = 2;_node64.attrHash = 244211666;_node64.attrs["w-class"] = "rankItem";_node64.attrs["style"] = "color: #A0ACC0;";_$temp = _node64;{
						var _$parent80 = _$temp;var _node65 = { "attrs": {}, "tagName": "span", "sid": 55 };_node65.children = [];_node65.childHash = 159592564;_node65.attrSize = 1;_node65.attrHash = 3101826641;_node65.attrs["style"] = "margin-left: 50px;";_$temp = _node65;{
							var _$parent81 = _$temp;var _node66 = _installText("排名", 3241587341);;
							_$parent81.children.push(_node66);
						}_$parent80.children.push(_node65);
					}_$temp = _node64;{
						var _$parent82 = _$temp;var _node67 = { "attrs": {}, "tagName": "span", "sid": 56 };_node67.children = [];_node67.childHash = 820605687;_node67.attrSize = 1;_node67.attrHash = 1786584261;_node67.attrs["style"] = "margin-left: 67px;";_$temp = _node67;{
							var _$parent83 = _$temp;var _node68 = _installText("昵称", 1301170364);;
							_$parent83.children.push(_node68);
						}_$parent82.children.push(_node67);
					}_$temp = _node64;{
						var _$parent84 = _$temp;var _node69 = { "attrs": {}, "tagName": "span", "sid": 57 };_node69.children = [];_node69.childHash = 3343642801;_node69.attrSize = 1;_node69.attrHash = 3147569790;_node69.attrs["style"] = "float: right;margin-right: 30px;";_$temp = _node69;{
							var _$parent85 = _$temp;var _node70 = _installText("挖矿总量(KT)", 2235822753);;
							_$parent85.children.push(_node70);
						}_$parent84.children.push(_node69);
					}_$parent79.children.push(_node64);
				}{
					var _$i2 = 0;
					for (var _iterator2 = it1.miningRank, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
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
						var _ind = _$i2++;_$temp = _node5;{
							var _$parent86 = _$temp;var _node71 = { "attrs": {}, "tagName": "div", "sid": 58 };_node71.children = [];_node71.attrSize = 2;_node71.attrHash = 327995047;_node71.attrs["w-class"] = "rankItem";_node71.attrs["style"] = "color: #666666;";_$temp = _node71;{
								var _$parent87 = _$temp;var _node72 = { "attrs": {}, "tagName": "span", "sid": 59 };_node72.children = [];_node72.attrSize = 1;_node72.attrHash = 1156572282;_node72.attrs["style"] = "margin-left: 50px;color: #111111;font-size: 28px;font-weight: 600;";_$temp = _node72;{
									var _$parent88 = _$temp;_addText(_val.index, _$parent88);
								}_chFunc(_node72);_$parent87.children.push(_node72);
							}_$temp = _node71;{
								var _$parent89 = _$temp;var _node73 = { "attrs": {}, "tagName": "span", "sid": 60 };_node73.children = [];_node73.attrSize = 1;_node73.attrHash = 1786584261;_node73.attrs["style"] = "margin-left: 67px;";_$temp = _node73;{
									var _$parent90 = _$temp;_addText(_val.name, _$parent90);
								}_chFunc(_node73);_$parent89.children.push(_node73);
							}_$temp = _node71;{
								var _$parent91 = _$temp;var _node74 = { "attrs": {}, "tagName": "span", "sid": 61 };_node74.children = [];_node74.attrSize = 1;_node74.attrHash = 1928016895;_node74.attrs["style"] = "float: right;margin-right: 30px;font-size: 28px;font-weight: 600;";_$temp = _node74;{
									var _$parent92 = _$temp;_addText(_val.num, _$parent92);
								}_chFunc(_node74);_$parent91.children.push(_node74);
							}_chFunc(_node71);_$parent86.children.push(_node71);
						}
					}
				}_$temp = _node5;{
					var _$parent93 = _$temp;var _node75 = { "attrs": {}, "tagName": "div", "sid": 62 };_node75.children = [];_node75.attrSize = 3;_node75.attrHash = 2103360589;_node75.attrs["w-class"] = "moreRank";_node75.attrs["on-tap"] = "getMore(2)";{
						var _attrvalue = "";_attrvalue += "display: ";_attrvalue += it1.miningMore ? 'block' : 'none';_attrvalue += "";_node75.attrs["style"] = _attrvalue;
					}_node75.attrHash = _hash.nextHash(_node75.attrHash, _calTextHash(_node75.attrs["style"]));_$temp = _node75;{
						var _$parent94 = _$temp;var _node76 = _installText("更多", 800505308);;
						_$parent94.children.push(_node76);
					}_chFunc(_node75);_$parent93.children.push(_node75);
				}_$temp = _node5;{
					var _$parent95 = _$temp;var _node77 = { "attrs": {}, "tagName": "div", "sid": 63 };_node77.children = [];_node77.childHash = 2946814719;_node77.attrSize = 1;_node77.attrHash = 845060644;_node77.attrs["style"] = "height: 20px;background: #f8f8f8;";_$parent95.children.push(_node77);
				}
			}_$temp = _node5;{
				var _$parent96 = _$temp;var _node78 = { "attrs": {}, "tagName": "div", "sid": 64 };_node78.children = [];_node78.childHash = 2946814719;_node78.attrSize = 1;_node78.attrHash = 1100010770;_node78.attrs["style"] = "height: 128px;";_$parent96.children.push(_node78);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});