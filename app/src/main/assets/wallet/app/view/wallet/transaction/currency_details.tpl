(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3664680752;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_node2.attrs["ev-back-click"] = "doClose";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = it.currencyName;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "color:#fff;backgroundColor:#203260;";
						//jpair suf

						_node4["style"] = jvalue;
					}
					//jpair pre

					{
						var _jvalue = "";
						_jvalue = "white";
						//jpair suf

						_node4["iconColor"] = _jvalue;
					}
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.childHash = 3655315691;_node5.attrSize = 2;_node5.attrHash = 776642323;_node5.attrs["w-class"] = "search";_node5.attrs["on-tap"] = "doSearch";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 4 };_node6.children = [];_node6.childHash = 3720282539;_node6.attrHash = 0;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = _installText("...", 606905832);;
						_$parent7.children.push(_node7);
					}_$parent6.children.push(_node6);
				}_$parent5.children.push(_node5);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 2812074640;_node8.attrs["w-class"] = "container";_$temp = _node8;{
				var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1349797565;_node9.attrs["w-class"] = "balance";_$temp = _node9;{
					var _$parent10 = _$temp;_addText(it1.showBalance, _$parent10);
				}_chFunc(_node9);_$parent9.children.push(_node9);
			}_$temp = _node8;{
				var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2765912222;_node10.attrs["w-class"] = "balance-conversion";_$temp = _node10;{
					var _$parent12 = _$temp;_addText(it1.showBalanceConversion, _$parent12);
				}_chFunc(_node10);_$parent11.children.push(_node10);
			}_$temp = _node8;{
				var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 8 };_node11.children = [];_node11.childHash = 2946814719;_node11.attrSize = 2;_node11.attrHash = 153169598;_node11.attrs["id"] = "k-line";_node11.attrs["w-class"] = "k-line";_$parent13.children.push(_node11);
			}_chFunc(_node8);_$parent8.children.push(_node8);
		}_$temp = _node;{
			var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 784343782;_node12.attrs["w-class"] = "transaction-record";_$temp = _node12;{
				var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 2210269787;_node13.attrs["w-class"] = "box";_$temp = _node13;{
					var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 11 };_node14.children = [];_node14.childHash = 202098702;_node14.attrSize = 1;_node14.attrHash = 2982277365;_node14.attrs["w-class"] = "record-text";_$temp = _node14;{
						var _$parent17 = _$temp;var _node15 = _installText("交易记录", 3996628713);;
						_$parent17.children.push(_node15);
					}_$parent16.children.push(_node14);
				}_$temp = _node13;{
					var _$parent18 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 3393973547;_node16.attrs["w-class"] = "box1";_$temp = _node16;{
						var _$parent19 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 13 };_node17.children = [];_node17.childHash = 568162345;_node17.attrSize = 1;_node17.attrHash = 2667219916;_node17.attrs["w-class"] = "ga-up-and-down";_$temp = _node17;{
							var _$parent20 = _$temp;var _node18 = _installText("-2.63%", 3471148362);;
							_$parent20.children.push(_node18);
						}_$parent19.children.push(_node17);
					}if (it1.canCurrencyExchange) {
						_$temp = _node16;{
							var _$parent21 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 14 };_node19.children = [];_node19.childHash = 3298306252;_node19.attrSize = 2;_node19.attrHash = 3025741414;_node19.attrs["on-tap"] = "currencyExchangeClick";_node19.attrs["w-class"] = "ga-exchange";_$temp = _node19;{
								var _$parent22 = _$temp;var _node20 = _installText("买/卖", 2096751542);;
								_$parent22.children.push(_node20);
							}_$parent21.children.push(_node19);
						}
					}_chFunc(_node16);_$parent18.children.push(_node16);
				}_chFunc(_node13);_$parent15.children.push(_node13);
			}if (it1.list.length <= 0) {
				_$temp = _node12;{
					var _$parent23 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 15 };_node21.children = [];_node21.childHash = 619104102;_node21.attrSize = 1;_node21.attrHash = 3953351156;_node21.attrs["w-class"] = "no-record-container";_$temp = _node21;{
						var _$parent24 = _$temp;var _node22 = { "attrs": {}, "tagName": "img", "sid": 16 };_node22.children = [];_node22.childHash = 0;_node22.attrSize = 2;_node22.attrHash = 795852965;_node22.attrs["w-class"] = "no-record";_node22.attrs["src"] = "../../../res/image/img_none_record.png";_$parent24.children.push(_node22);
					}_$temp = _node21;{
						var _$parent25 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 17 };_node23.children = [];_node23.childHash = 1671456823;_node23.attrSize = 1;_node23.attrHash = 704840034;_node23.attrs["w-class"] = "no-record-text";_$temp = _node23;{
							var _$parent26 = _$temp;var _node24 = _installText("还没有交易记录", 3138677258);;
							_$parent26.children.push(_node24);
						}_$parent25.children.push(_node23);
					}_$parent23.children.push(_node21);
				}
			} else {
				_$temp = _node12;{
					var _$parent27 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 18 };_node25.children = [];_node25.attrSize = 2;_node25.attrHash = 2364970544;_node25.attrs["w-class"] = "transaction-list";_node25.attrs["class"] = "hide-scrollbar";_$temp = _node25;{
						var _$parent28 = _$temp;var _node26 = { "attrs": {}, "tagName": "currency_details_list$", "sid": 19 };_node26.hasChild = false;_node26.child = null;_node26.attrHash = 0;_$temp = _node26;{
							var _$parent29 = _$temp;var _node27 = {}; //jpair pre

							_node27["list"] = it1.list;
							//jpair suf
							_addJson(_node27, _$parent29);
						}_chFunc(_node26);_$parent28.children.push(_node26);
					}_chFunc(_node25);_$parent27.children.push(_node25);
				}
			}_$temp = _node12;{
				var _$parent30 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 20 };_node28.children = [];_node28.childHash = 3867717944;_node28.attrSize = 1;_node28.attrHash = 2571325130;_node28.attrs["w-class"] = "footer";_$temp = _node28;{
					var _$parent31 = _$temp;var _node29 = { "attrs": {}, "tagName": "div", "sid": 21 };_node29.children = [];_node29.childHash = 3331422086;_node29.attrSize = 2;_node29.attrHash = 2263022546;_node29.attrs["w-class"] = "btn transfer";_node29.attrs["on-tap"] = "doTransfer";_$temp = _node29;{
						var _$parent32 = _$temp;var _node30 = { "attrs": {}, "tagName": "img", "sid": 22 };_node30.children = [];_node30.childHash = 0;_node30.attrSize = 2;_node30.attrHash = 1539089283;_node30.attrs["src"] = "../../../res/image/icon_trans_transfer.png";_node30.attrs["alt"] = "";_$parent32.children.push(_node30);
					}_$temp = _node29;{
						var _$parent33 = _$temp;var _node31 = { "attrs": {}, "tagName": "span", "sid": 23 };_node31.children = [];_node31.childHash = 2445024412;_node31.attrSize = 1;_node31.attrHash = 3268236106;_node31.attrs["style"] = "margin-left: 20px;";_$temp = _node31;{
							var _$parent34 = _$temp;var _node32 = _installText("转账", 3857191924);;
							_$parent34.children.push(_node32);
						}_$parent33.children.push(_node31);
					}_$parent31.children.push(_node29);
				}_$temp = _node28;{
					var _$parent35 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 24 };_node33.children = [];_node33.childHash = 3953257020;_node33.attrSize = 2;_node33.attrHash = 801943220;_node33.attrs["w-class"] = "btn receipt";_node33.attrs["on-tap"] = "doReceipt";_$temp = _node33;{
						var _$parent36 = _$temp;var _node34 = { "attrs": {}, "tagName": "img", "sid": 25 };_node34.children = [];_node34.childHash = 0;_node34.attrSize = 2;_node34.attrHash = 1413362049;_node34.attrs["src"] = "../../../res/image/icon_trans_receipt.png";_node34.attrs["alt"] = "";_$parent36.children.push(_node34);
					}_$temp = _node33;{
						var _$parent37 = _$temp;var _node35 = { "attrs": {}, "tagName": "span", "sid": 26 };_node35.children = [];_node35.childHash = 2680077777;_node35.attrSize = 1;_node35.attrHash = 3268236106;_node35.attrs["style"] = "margin-left: 20px;";_$temp = _node35;{
							var _$parent38 = _$temp;var _node36 = _installText("收款", 2187046069);;
							_$parent38.children.push(_node36);
						}_$parent37.children.push(_node35);
					}_$parent35.children.push(_node33);
				}_$parent30.children.push(_node28);
			}_chFunc(_node12);_$parent14.children.push(_node12);
		}_chFunc(_node);return _node;
	}
});