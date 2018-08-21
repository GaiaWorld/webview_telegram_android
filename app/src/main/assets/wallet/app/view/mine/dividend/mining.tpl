(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3829907308;_node.attrs["class"] = "ga-new-page";_node.attrs["style"] = "background-image: linear-gradient(-180deg, #FFB800 0%, #FFE400 100%);overflow-y: auto;height: 100%;overflow-x: hidden; ";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1796115628;_node2.attrs["w-class"] = "";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 3719697581;_node3.attrSize = 1;_node3.attrHash = 3880895855;_node3.attrs["w-class"] = "ga-top-banner";_$temp = _node3;{
																				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "img", "sid": 3 };_node4.children = [];_node4.childHash = 0;_node4.attrSize = 3;_node4.attrHash = 1224155588;_node4.attrs["src"] = "../../../res/image/btn_back_white.png";_node4.attrs["w-class"] = "ga-back";_node4.attrs["on-tap"] = "backPrePage";_$parent4.children.push(_node4);
																}_$temp = _node3;{
																				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.childHash = 4239532626;_node5.attrSize = 2;_node5.attrHash = 3301930082;_node5.attrs["w-class"] = "ga-banner-title";_node5.attrs["on-tap"] = "backPrePage";_$temp = _node5;{
																								var _$parent6 = _$temp;var _node6 = _installText("挖矿", 3826901135);;
																								_$parent6.children.push(_node6);
																				}_$parent5.children.push(_node5);
																}_$temp = _node3;{
																				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.childHash = 1535570629;_node7.attrSize = 2;_node7.attrHash = 3381500443;_node7.attrs["w-class"] = "ga-next";_node7.attrs["on-tap"] = "goHistory";_$temp = _node7;{
																								var _$parent8 = _$temp;var _node8 = _installText("挖矿历史", 2733507898);;
																								_$parent8.children.push(_node8);
																				}_$parent7.children.push(_node7);
																}_$parent3.children.push(_node3);
												}_$temp = _node2;{
																var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 3090186721;_node9.attrs["w-class"] = "groupcard";_$temp = _node9;{
																				var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.childHash = 3503617713;_node10.attrSize = 1;_node10.attrHash = 1875170223;_node10.attrs["w-class"] = "dividend-title";_$temp = _node10;{
																								var _$parent11 = _$temp;var _node11 = _installText("已挖(KT)", 2666208777);;
																								_$parent11.children.push(_node11);
																				}_$parent10.children.push(_node10);
																}_$temp = _node9;{
																				var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 427216314;_node12.attrs["w-class"] = "dividend-money";_$temp = _node12;{
																								var _$parent13 = _$temp;_addText(it1.holdNum, _$parent13);
																				}_chFunc(_node12);_$parent12.children.push(_node12);
																}_$temp = _node9;{
																				var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 9 };_node13.children = [];_node13.childHash = 2946814719;_node13.attrSize = 1;_node13.attrHash = 3144420239;_node13.attrs["w-class"] = "dividLine";_$parent14.children.push(_node13);
																}_$temp = _node9;{
																				var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrSize = 2;_node14.attrHash = 3345710051;_node14.attrs["w-class"] = "dividend-sum";_node14.attrs["on-tap"] = "goRank";_$temp = _node14;{
																								var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "img", "sid": 11 };_node15.children = [];_node15.childHash = 0;_node15.attrSize = 2;_node15.attrHash = 865777651;_node15.attrs["src"] = "../../../res/image/icon_bonus_ranking.png";_node15.attrs["style"] = "width: 54px;height: 70px;display: inline-block;vertical-align: middle;";_$parent16.children.push(_node15);
																				}_$temp = _node14;{
																								var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "span", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 3608606104;_node16.attrs["style"] = "display: inline-block;vertical-align: middle;";_$temp = _node16;{
																												var _$parent18 = _$temp;var _node17 = _installText("排名第", 781052248);;
																												_$parent18.children.push(_node17);
																								}_$temp = _node16;{
																												var _$parent19 = _$temp;_addText(it1.mineRank, _$parent19);
																								}_$temp = _node16;{
																												var _$parent20 = _$temp;var _node18 = _installText("位", 113002326);;
																												_$parent20.children.push(_node18);
																								}_chFunc(_node16);_$parent17.children.push(_node16);
																				}_chFunc(_node14);_$parent15.children.push(_node14);
																}_chFunc(_node9);_$parent9.children.push(_node9);
												}_$temp = _node2;{
																var _$parent21 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 13 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 3090186721;_node19.attrs["w-class"] = "groupcard";_$temp = _node19;{
																				var _$parent22 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 14 };_node20.children = [];_node20.attrSize = 1;_node20.attrHash = 2126782020;_node20.attrs["w-class"] = "twodata";_$temp = _node20;{
																								var _$parent23 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 15 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 1243630088;_node21.attrs["w-class"] = "data";_$temp = _node21;{
																												var _$parent24 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 16 };_node22.children = [];_node22.childHash = 2349598980;_node22.attrSize = 2;_node22.attrHash = 3496405435;_node22.attrs["w-class"] = "data-title";_node22.attrs["style"] = "border-right: 3px solid rgb(227,230,245); ";_$temp = _node22;{
																																var _$parent25 = _$temp;var _node23 = _installText("本次可挖(KT)", 2213751938);;
																																_$parent25.children.push(_node23);
																												}_$parent24.children.push(_node22);
																								}_$temp = _node21;{
																												var _$parent26 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 17 };_node24.children = [];_node24.attrSize = 2;_node24.attrHash = 594616756;_node24.attrs["w-class"] = "data-num";_node24.attrs["style"] = "border-right: 3px solid rgb(227,230,245); ";_$temp = _node24;{
																																var _$parent27 = _$temp;_addText(it1.thisNum, _$parent27);
																												}_chFunc(_node24);_$parent26.children.push(_node24);
																								}_chFunc(_node21);_$parent23.children.push(_node21);
																				}_$temp = _node20;{
																								var _$parent28 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 18 };_node25.children = [];_node25.attrSize = 1;_node25.attrHash = 1243630088;_node25.attrs["w-class"] = "data";_$temp = _node25;{
																												var _$parent29 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 19 };_node26.children = [];_node26.childHash = 4004855382;_node26.attrSize = 1;_node26.attrHash = 126758747;_node26.attrs["w-class"] = "data-title";_$temp = _node26;{
																																var _$parent30 = _$temp;var _node27 = _installText("矿山总量(KT)", 3234379110);;
																																_$parent30.children.push(_node27);
																												}_$parent29.children.push(_node26);
																								}_$temp = _node25;{
																												var _$parent31 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 20 };_node28.children = [];_node28.attrSize = 1;_node28.attrHash = 3408934622;_node28.attrs["w-class"] = "data-num";_$temp = _node28;{
																																var _$parent32 = _$temp;_addText(it1.totalNum, _$parent32);
																												}_chFunc(_node28);_$parent31.children.push(_node28);
																								}_chFunc(_node25);_$parent28.children.push(_node25);
																				}_chFunc(_node20);_$parent22.children.push(_node20);
																}_chFunc(_node19);_$parent21.children.push(_node19);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent33 = _$temp;var _node29 = { "attrs": {}, "tagName": "div", "sid": 21 };_node29.children = [];_node29.attrSize = 2;_node29.attrHash = 498157196;_node29.attrs["style"] = "text-align: center;";_node29.attrs["id"] = "miningBtn";_$temp = _node29;{
																var _$parent34 = _$temp;var _node30 = { "attrs": {}, "tagName": "img", "sid": 22 };_node30.children = [];_node30.childHash = 0;_node30.attrSize = 2;_node30.attrHash = 91698042;_node30.attrs["src"] = "../../../res/image/Group 531.png";_node30.attrs["style"] = "width: 611px;height: 800px;margin-top: -360px;";_$parent34.children.push(_node30);
												}_$temp = _node29;{
																var _$parent35 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 23 };_node31.children = [];_node31.attrSize = 1;_node31.attrHash = 2048540949;_node31.attrs["style"] = "margin-top: -190px;height: 200px;";_$temp = _node31;{
																				var _$parent36 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 24 };_node32.children = [];_node32.attrSize = 4;_node32.attrHash = 2025752947;_node32.attrs["w-class"] = "miningBtn";_node32.attrs["class"] = "miningBtnClick";_node32.attrs["on-tap"] = "doMining";{
																								var attrvalue = "";attrvalue += "animation:";attrvalue += it1.isAbleBtn ? 'change 0.2s' : '';attrvalue += "";_node32.attrs["style"] = attrvalue;
																				}_node32.attrHash = _hash.nextHash(_node32.attrHash, _calTextHash(_node32.attrs["style"]));_$temp = _node32;{
																								var _$parent37 = _$temp;var _node33 = _installText("挖一下", 4033219735);;
																								_$parent37.children.push(_node33);
																				}_chFunc(_node32);_$parent36.children.push(_node32);
																}_chFunc(_node31);_$parent35.children.push(_node31);
												}_chFunc(_node29);_$parent33.children.push(_node29);
								}_$temp = _node;{
												var _$parent38 = _$temp;var _node34 = { "attrs": {}, "tagName": "div", "sid": 25 };_node34.children = [];_node34.attrSize = 2;_node34.attrHash = 3543160957;_node34.attrs["class"] = "miningNum";{
																var _attrvalue = "";_attrvalue += "animation:";_attrvalue += it1.doMining ? 'move 0.5s' : '';_attrvalue += "";_node34.attrs["style"] = _attrvalue;
												}_node34.attrHash = _hash.nextHash(_node34.attrHash, _calTextHash(_node34.attrs["style"]));_$temp = _node34;{
																var _$parent39 = _$temp;var _node35 = { "attrs": {}, "tagName": "span", "sid": 26 };_node35.children = [];_node35.attrHash = 0;_$temp = _node35;{
																				var _$parent40 = _$temp;var _node36 = _installText("+", 3807426999);;
																				_$parent40.children.push(_node36);
																}_$temp = _node35;{
																				var _$parent41 = _$temp;_addText(it1.thisNum, _$parent41);
																}_chFunc(_node35);_$parent39.children.push(_node35);
												}_chFunc(_node34);_$parent38.children.push(_node34);
								}_$temp = _node;{
												var _$parent42 = _$temp;var _node37 = { "attrs": {}, "tagName": "div", "sid": 27 };_node37.children = [];_node37.childHash = 785121836;_node37.attrSize = 2;_node37.attrHash = 2582049540;_node37.attrs["w-class"] = "addMine";_node37.attrs["on-tap"] = "goAddMine";_$temp = _node37;{
																var _$parent43 = _$temp;var _node38 = _installText("去增加储备矿", 653635432);;
																_$parent43.children.push(_node38);
												}_$parent42.children.push(_node37);
								}_$temp = _node;{
												var _$parent44 = _$temp;var _node39 = { "attrs": {}, "tagName": "div", "sid": 28 };_node39.children = [];_node39.childHash = 412216901;_node39.attrSize = 1;_node39.attrHash = 3583682907;_node39.attrs["style"] = "text-align: center;";_$temp = _node39;{
																var _$parent45 = _$temp;var _node40 = { "attrs": {}, "tagName": "span", "sid": 29 };_node40.children = [];_node40.childHash = 2946814719;_node40.attrSize = 1;_node40.attrHash = 374818280;_node40.attrs["w-class"] = "line";_$parent45.children.push(_node40);
												}_$temp = _node39;{
																var _$parent46 = _$temp;var _node41 = { "attrs": {}, "tagName": "span", "sid": 30 };_node41.children = [];_node41.childHash = 3367456450;_node41.attrSize = 1;_node41.attrHash = 4129954462;_node41.attrs["w-class"] = "rule-title";_$temp = _node41;{
																				var _$parent47 = _$temp;var _node42 = _installText("挖矿规则", 2805283159);;
																				_$parent47.children.push(_node42);
																}_$parent46.children.push(_node41);
												}_$temp = _node39;{
																var _$parent48 = _$temp;var _node43 = { "attrs": {}, "tagName": "span", "sid": 31 };_node43.children = [];_node43.childHash = 2946814719;_node43.attrSize = 1;_node43.attrHash = 374818280;_node43.attrs["w-class"] = "line";_$parent48.children.push(_node43);
												}_$parent44.children.push(_node39);
								}_$temp = _node;{
												var _$parent49 = _$temp;var _node44 = { "attrs": {}, "tagName": "div", "sid": 32 };_node44.children = [];_node44.childHash = 1547145828;_node44.attrSize = 1;_node44.attrHash = 1621286922;_node44.attrs["w-class"] = "dividend-rule";_$temp = _node44;{
																var _$parent50 = _$temp;var _node45 = { "attrs": {}, "tagName": "div", "sid": 33 };_node45.children = [];_node45.childHash = 3465385195;_node45.attrSize = 1;_node45.attrHash = 1098253977;_node45.attrs["w-class"] = "rulemess";_$temp = _node45;{
																				var _$parent51 = _$temp;var _node46 = _installText("1、用户每日可挖取储矿的25%KT，最高10000KT。", 399434632);;
																				_$parent51.children.push(_node46);
																}_$parent50.children.push(_node45);
												}_$temp = _node44;{
																var _$parent52 = _$temp;var _node47 = { "attrs": {}, "tagName": "div", "sid": 34 };_node47.children = [];_node47.childHash = 2241726411;_node47.attrSize = 1;_node47.attrHash = 1098253977;_node47.attrs["w-class"] = "rulemess";_$temp = _node47;{
																				var _$parent53 = _$temp;var _node48 = _installText("2、储矿量小于100KT，则把剩下的一次性挖完。", 1077466186);;
																				_$parent53.children.push(_node48);
																}_$parent52.children.push(_node47);
												}_$temp = _node44;{
																var _$parent54 = _$temp;var _node49 = { "attrs": {}, "tagName": "div", "sid": 35 };_node49.children = [];_node49.childHash = 1278306551;_node49.attrSize = 1;_node49.attrHash = 1098253977;_node49.attrs["w-class"] = "rulemess";_$temp = _node49;{
																				var _$parent55 = _$temp;var _node50 = _installText("3、每日只能挖一次，挖矿结算后，挖到的数量将从储矿量中减去。", 3596354066);;
																				_$parent55.children.push(_node50);
																}_$parent54.children.push(_node49);
												}_$temp = _node44;{
																var _$parent56 = _$temp;var _node51 = { "attrs": {}, "tagName": "div", "sid": 36 };_node51.children = [];_node51.childHash = 173851443;_node51.attrSize = 1;_node51.attrHash = 1098253977;_node51.attrs["w-class"] = "rulemess";_$temp = _node51;{
																				var _$parent57 = _$temp;var _node52 = _installText("4、真实用户的标准是曾经达到1000KT。", 3196249604);;
																				_$parent57.children.push(_node52);
																}_$parent56.children.push(_node51);
												}_$temp = _node44;{
																var _$parent58 = _$temp;var _node53 = { "attrs": {}, "tagName": "div", "sid": 37 };_node53.children = [];_node53.childHash = 133298142;_node53.attrSize = 1;_node53.attrHash = 1098253977;_node53.attrs["w-class"] = "rulemess";_$temp = _node53;{
																				var _$parent59 = _$temp;var _node54 = _installText("5、拥有1000KT才具有提现权限。", 2262616247);;
																				_$parent59.children.push(_node54);
																}_$parent58.children.push(_node53);
												}_$parent49.children.push(_node44);
								}_chFunc(_node);return _node;
				}
});