(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1658602538;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "goBackPage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 559453413;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "ETH资管第1期";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1056731054;_node4.attrs["w-class"] = "expectedEarnings";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3553250587;_node5.attrs["w-class"] = "centerBox";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.childHash = 244615050;_node6.attrSize = 1;_node6.attrHash = 2765718628;_node6.attrs["w-class"] = "earningsTitle";_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = _installText("昨日收益(ETH)", 805434941);;
						_$parent7.children.push(_node7);
					}_$parent6.children.push(_node6);
				}_$temp = _node5;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 444911005;_node8.attrs["w-class"] = "number";_$temp = _node8;{
						var _$parent9 = _$temp;_addText(it1.yesterdayProfit, _$parent9);
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 3797916989;_node9.attrs["w-class"] = "baseInfo";_$temp = _node9;{
				var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 3585496062;_node10.attrs["w-class"] = "flexOne";_$temp = _node10;{
					var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.childHash = 2334526534;_node11.attrSize = 1;_node11.attrHash = 2231850492;_node11.attrs["w-class"] = "oneTitle";_$temp = _node11;{
						var _$parent13 = _$temp;var _node12 = _installText("累计收益(ETH)", 1149727029);;
						_$parent13.children.push(_node12);
					}_$parent12.children.push(_node11);
				}_$temp = _node10;{
					var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 9 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 153833248;_node13.attrs["w-class"] = "oneMain";_$temp = _node13;{
						var _$parent15 = _$temp;_addText(it1.totalProfit, _$parent15);
					}_$temp = _node13;{
						var _$parent16 = _$temp;var _node14 = _installText("ETH", 2066775836);;
						_$parent16.children.push(_node14);
					}_chFunc(_node13);_$parent14.children.push(_node13);
				}_chFunc(_node10);_$parent11.children.push(_node10);
			}_$temp = _node9;{
				var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 10 };_node15.children = [];_node15.childHash = 2946814719;_node15.attrSize = 1;_node15.attrHash = 374818280;_node15.attrs["w-class"] = "line";_$parent17.children.push(_node15);
			}_$temp = _node9;{
				var _$parent18 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 11 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 3585496062;_node16.attrs["w-class"] = "flexOne";_$temp = _node16;{
					var _$parent19 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 12 };_node17.children = [];_node17.childHash = 3170339367;_node17.attrSize = 1;_node17.attrHash = 2231850492;_node17.attrs["w-class"] = "oneTitle";_$temp = _node17;{
						var _$parent20 = _$temp;var _node18 = _installText("持续(天)", 3709512665);;
						_$parent20.children.push(_node18);
					}_$parent19.children.push(_node17);
				}_$temp = _node16;{
					var _$parent21 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 13 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 153833248;_node19.attrs["w-class"] = "oneMain";_$temp = _node19;{
						var _$parent22 = _$temp;_addText(it1.continuedDay, _$parent22);
					}_chFunc(_node19);_$parent21.children.push(_node19);
				}_chFunc(_node16);_$parent18.children.push(_node16);
			}_$temp = _node9;{
				var _$parent23 = _$temp;var _node20 = { "attrs": {}, "tagName": "span", "sid": 14 };_node20.children = [];_node20.childHash = 2946814719;_node20.attrSize = 1;_node20.attrHash = 374818280;_node20.attrs["w-class"] = "line";_$parent23.children.push(_node20);
			}_$temp = _node9;{
				var _$parent24 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 15 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 3585496062;_node21.attrs["w-class"] = "flexOne";_$temp = _node21;{
					var _$parent25 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 16 };_node22.children = [];_node22.childHash = 2011269146;_node22.attrSize = 1;_node22.attrHash = 2231850492;_node22.attrs["w-class"] = "oneTitle";_$temp = _node22;{
						var _$parent26 = _$temp;var _node23 = _installText("年化收益", 669634272);;
						_$parent26.children.push(_node23);
					}_$parent25.children.push(_node22);
				}_$temp = _node21;{
					var _$parent27 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 17 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 153833248;_node24.attrs["w-class"] = "oneMain";_$temp = _node24;{
						var _$parent28 = _$temp;_addText(it1.annualIncome, _$parent28);
					}_chFunc(_node24);_$parent27.children.push(_node24);
				}_chFunc(_node21);_$parent24.children.push(_node21);
			}_chFunc(_node9);_$parent10.children.push(_node9);
		}_$temp = _node;{
			var _$parent29 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 18 };_node25.children = [];_node25.attrSize = 1;_node25.attrHash = 374160237;_node25.attrs["w-class"] = "contentBox";_$temp = _node25;{
				var _$parent30 = _$temp;var _node26 = { "attrs": {}, "tagName": "diV", "sid": 19 };_node26.children = [];_node26.attrSize = 1;_node26.attrHash = 3465090175;_node26.attrs["w-class"] = "productIntroduction";_$temp = _node26;{
					var _$parent31 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 20 };_node27.children = [];_node27.childHash = 1050786289;_node27.attrSize = 1;_node27.attrHash = 3216463699;_node27.attrs["w-class"] = "introductionTitle";_$temp = _node27;{
						var _$parent32 = _$temp;var _node28 = _installText("产品简介", 682118583);;
						_$parent32.children.push(_node28);
					}_$parent31.children.push(_node27);
				}_$temp = _node26;{
					var _$parent33 = _$temp;var _node29 = { "attrs": {}, "tagName": "div", "sid": 21 };_node29.children = [];_node29.attrSize = 1;_node29.attrHash = 4202414913;_node29.attrs["w-class"] = "introductionContent";_$temp = _node29;{
						var _$parent34 = _$temp;_addText(it1.productIntroduction, _$parent34);
					}_chFunc(_node29);_$parent33.children.push(_node29);
				}_chFunc(_node26);_$parent30.children.push(_node26);
			}_$temp = _node25;{
				var _$parent35 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 22 };_node30.children = [];_node30.attrSize = 1;_node30.attrHash = 4088947395;_node30.attrs["w-class"] = "otherInfo";_$temp = _node30;{
					var _$parent36 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 23 };_node31.children = [];_node31.childHash = 1607234711;_node31.attrSize = 1;_node31.attrHash = 4191302316;_node31.attrs["w-class"] = "infoTitle";_$temp = _node31;{
						var _$parent37 = _$temp;var _node32 = _installText("其它信息", 716244171);;
						_$parent37.children.push(_node32);
					}_$parent36.children.push(_node31);
				}_$temp = _node30;{
					var _$parent38 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 24 };_node33.children = [];_node33.attrSize = 1;_node33.attrHash = 3339267091;_node33.attrs["w-class"] = "infoContent";_$temp = _node33;{
						var _$parent39 = _$temp;var _node34 = { "attrs": {}, "tagName": "p", "sid": 25 };_node34.children = [];_node34.attrHash = 0;_$temp = _node34;{
							var _$parent40 = _$temp;var _node35 = _installText("交易时间：", 4054776664);;
							_$parent40.children.push(_node35);
						}_$temp = _node34;{
							var _$parent41 = _$temp;_addText(it1.dealTime, _$parent41);
						}_chFunc(_node34);_$parent39.children.push(_node34);
					}_$temp = _node33;{
						var _$parent42 = _$temp;var _node36 = { "attrs": {}, "tagName": "p", "sid": 26 };_node36.children = [];_node36.attrHash = 0;_$temp = _node36;{
							var _$parent43 = _$temp;var _node37 = _installText("购买单价：", 3650464858);;
							_$parent43.children.push(_node37);
						}_$temp = _node36;{
							var _$parent44 = _$temp;_addText(it1.unitPrice, _$parent44);
						}_$temp = _node36;{
							var _$parent45 = _$temp;var _node38 = _installText("ETH", 2066775836);;
							_$parent45.children.push(_node38);
						}_chFunc(_node36);_$parent42.children.push(_node36);
					}_$temp = _node33;{
						var _$parent46 = _$temp;var _node39 = { "attrs": {}, "tagName": "p", "sid": 27 };_node39.children = [];_node39.attrHash = 0;_$temp = _node39;{
							var _$parent47 = _$temp;var _node40 = _installText("产品名称：", 2003985254);;
							_$parent47.children.push(_node40);
						}_$temp = _node39;{
							var _$parent48 = _$temp;_addText(it1.productName, _$parent48);
						}_chFunc(_node39);_$parent46.children.push(_node39);
					}_$temp = _node33;{
						var _$parent49 = _$temp;var _node41 = { "attrs": {}, "tagName": "p", "sid": 28 };_node41.children = [];_node41.attrHash = 0;_$temp = _node41;{
							var _$parent50 = _$temp;var _node42 = _installText("购买份数：", 2135069541);;
							_$parent50.children.push(_node42);
						}_$temp = _node41;{
							var _$parent51 = _$temp;_addText(it1.amount, _$parent51);
						}_$temp = _node41;{
							var _$parent52 = _$temp;var _node43 = _installText("份", 4105707745);;
							_$parent52.children.push(_node43);
						}_chFunc(_node41);_$parent49.children.push(_node41);
					}_$temp = _node33;{
						var _$parent53 = _$temp;var _node44 = { "attrs": {}, "tagName": "p", "sid": 29 };_node44.children = [];_node44.attrHash = 0;_$temp = _node44;{
							var _$parent54 = _$temp;var _node45 = _installText("年化收益：", 637568466);;
							_$parent54.children.push(_node45);
						}_$temp = _node44;{
							var _$parent55 = _$temp;_addText(it1.annualIncome, _$parent55);
						}_chFunc(_node44);_$parent53.children.push(_node44);
					}_$temp = _node33;{
						var _$parent56 = _$temp;var _node46 = { "attrs": {}, "tagName": "p", "sid": 30 };_node46.children = [];_node46.attrHash = 0;_$temp = _node46;{
							var _$parent57 = _$temp;var _node47 = _installText("锁定期：", 2508525672);;
							_$parent57.children.push(_node47);
						}_$temp = _node46;{
							var _$parent58 = _$temp;_addText(it1.lockday, _$parent58);
						}_chFunc(_node46);_$parent56.children.push(_node46);
					}_chFunc(_node33);_$parent38.children.push(_node33);
				}_chFunc(_node30);_$parent35.children.push(_node30);
			}_$temp = _node25;{
				var _$parent59 = _$temp;var _node48 = { "attrs": {}, "tagName": "div", "sid": 31 };_node48.children = [];_node48.childHash = 3813368794;_node48.attrSize = 2;_node48.attrHash = 2543057442;_node48.attrs["w-class"] = "notice";_node48.attrs["on-tap"] = "redNotice";_$temp = _node48;{
					var _$parent60 = _$temp;var _node49 = _installText("阅读声明", 2283389227);;
					_$parent60.children.push(_node49);
				}_$parent59.children.push(_node48);
			}_chFunc(_node25);_$parent29.children.push(_node25);
		}_$temp = _node;{
			var _$parent61 = _$temp;var _node50 = { "attrs": {}, "tagName": "div", "sid": 32 };_node50.children = [];_node50.childHash = 2836070371;_node50.attrSize = 1;_node50.attrHash = 91296814;_node50.attrs["w-class"] = "botBtn";_$temp = _node50;{
				var _$parent62 = _$temp;var _node51 = _installText("赎回", 1160304915);;
				_$parent62.children.push(_node51);
			}_$parent61.children.push(_node50);
		}_chFunc(_node);return _node;
	}
});