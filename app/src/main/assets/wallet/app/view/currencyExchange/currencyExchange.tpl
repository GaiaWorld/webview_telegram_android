(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 124358627;_node.attrs["class"] = "ga-new-page";_node.attrs["w-class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2715577458;_node2.attrSize = 2;_node2.attrHash = 117553655;_node2.attrs["w-class"] = "topbar";_node2.attrs["ev-back-click"] = "backClick";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.childHash = 4288414166;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					{
						var jvalue = "";
						jvalue = "货币买卖";
						//jpair suf

						_node4["title"] = jvalue;
					}
					_addJson(_node4, _$parent4);
				}_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.childHash = 1131666266;_node5.attrSize = 2;_node5.attrHash = 2866380483;_node5.attrs["w-class"] = "history";_node5.attrs["on-tap"] = "exchangeRecordClick";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = _installText("兑换记录", 2951655499);;
					_$parent6.children.push(_node6);
				}_$parent5.children.push(_node5);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 3551322892;_node7.attrs["w-class"] = "exchange-msg";_$temp = _node7;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 1496289137;_node8.attrs["w-class"] = "available-balance";_$temp = _node8;{
					var _$parent9 = _$temp;var _node9 = _installText("可用金额", 154017141);;
					_$parent9.children.push(_node9);
				}_$temp = _node8;{
					var _$parent10 = _$temp;_addText(it1.outBalance, _$parent10);
				}_$temp = _node8;{
					var _$parent11 = _$temp;_addText(it1.outCurrency, _$parent11);
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_$temp = _node7;{
				var _$parent12 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 6 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 1142449544;_node10.attrs["w-class"] = "min-limit-item";_$temp = _node10;{
					var _$parent13 = _$temp;var _node11 = _installText("最小发出数量:", 3372612681);;
					_$parent13.children.push(_node11);
				}_$temp = _node10;{
					var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "span", "sid": 7 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 996712458;_node12.attrs["w-class"] = "ga-limit-currency";_$temp = _node12;{
						var _$parent15 = _$temp;var _node13 = _installText("(", 3447679526);;
						_$parent15.children.push(_node13);
					}_$temp = _node12;{
						var _$parent16 = _$temp;_addText(it1.outCurrency, _$parent16);
					}_$temp = _node12;{
						var _$parent17 = _$temp;var _node14 = _installText(")", 2008579719);;
						_$parent17.children.push(_node14);
					}_chFunc(_node12);_$parent14.children.push(_node12);
				}_$temp = _node10;{
					var _$parent18 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 8 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 4231931907;_node15.attrs["w-class"] = "ga-limit-amount";_$temp = _node15;{
						var _$parent19 = _$temp;_addText(it1.minimum, _$parent19);
					}_chFunc(_node15);_$parent18.children.push(_node15);
				}_chFunc(_node10);_$parent12.children.push(_node10);
			}_$temp = _node7;{
				var _$parent20 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 9 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 314565823;_node16.attrs["w-class"] = "max-limit-item";_$temp = _node16;{
					var _$parent21 = _$temp;var _node17 = _installText("最大发出数量:", 2516536395);;
					_$parent21.children.push(_node17);
				}_$temp = _node16;{
					var _$parent22 = _$temp;var _node18 = { "attrs": {}, "tagName": "span", "sid": 10 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 996712458;_node18.attrs["w-class"] = "ga-limit-currency";_$temp = _node18;{
						var _$parent23 = _$temp;var _node19 = _installText("(", 3447679526);;
						_$parent23.children.push(_node19);
					}_$temp = _node18;{
						var _$parent24 = _$temp;_addText(it1.outCurrency, _$parent24);
					}_$temp = _node18;{
						var _$parent25 = _$temp;var _node20 = _installText(")", 2008579719);;
						_$parent25.children.push(_node20);
					}_chFunc(_node18);_$parent22.children.push(_node18);
				}_$temp = _node16;{
					var _$parent26 = _$temp;var _node21 = { "attrs": {}, "tagName": "span", "sid": 11 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 4231931907;_node21.attrs["w-class"] = "ga-limit-amount";_$temp = _node21;{
						var _$parent27 = _$temp;_addText(it1.maxLimit, _$parent27);
					}_chFunc(_node21);_$parent26.children.push(_node21);
				}_chFunc(_node16);_$parent20.children.push(_node16);
			}_chFunc(_node7);_$parent7.children.push(_node7);
		}_$temp = _node;{
			var _$parent28 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 12 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 4252679546;_node22.attrs["w-class"] = "body";_$temp = _node22;{
				var _$parent29 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 13 };_node23.children = [];_node23.attrSize = 1;_node23.attrHash = 4217479099;_node23.attrs["w-class"] = "currency-contaier";_$temp = _node23;{
					var _$parent30 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 14 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 1751897602;_node24.attrs["w-class"] = "ga-outin-container";_$temp = _node24;{
						var _$parent31 = _$temp;var _node25 = { "attrs": {}, "tagName": "span", "sid": 15 };_node25.children = [];_node25.childHash = 1630941878;_node25.attrSize = 1;_node25.attrHash = 141124565;_node25.attrs["w-class"] = "ga-outin";_$temp = _node25;{
							var _$parent32 = _$temp;var _node26 = _installText("卖出", 3828390084);;
							_$parent32.children.push(_node26);
						}_$parent31.children.push(_node25);
					}_$temp = _node24;{
						var _$parent33 = _$temp;var _node27 = { "attrs": {}, "tagName": "img", "sid": 16 };_node27.children = [];_node27.attrSize = 3;_node27.attrHash = 3786118554;{
							var attrvalue = "";attrvalue += "../../res/image/currency/";attrvalue += it1.outCurrency;attrvalue += ".png";_node27.attrs["src"] = attrvalue;
						}_node27.attrHash = _hash.nextHash(_node27.attrHash, _calTextHash(_node27.attrs["src"]));_node27.attrs["w-class"] = "choose-out-currency";_node27.attrs["on-tap"] = "outCurrencySelectClick";_chFunc(_node27);_$parent33.children.push(_node27);
					}_$temp = _node24;{
						var _$parent34 = _$temp;var _node28 = { "attrs": {}, "tagName": "span", "sid": 17 };_node28.children = [];_node28.attrSize = 1;_node28.attrHash = 419266432;_node28.attrs["w-class"] = "currency";_$temp = _node28;{
							var _$parent35 = _$temp;_addText(it1.outCurrency, _$parent35);
						}_chFunc(_node28);_$parent34.children.push(_node28);
					}_chFunc(_node24);_$parent30.children.push(_node24);
				}_$temp = _node23;{
					var _$parent36 = _$temp;var _node29 = { "attrs": {}, "tagName": "div", "sid": 18 };_node29.children = [];_node29.childHash = 3503303092;_node29.attrSize = 1;_node29.attrHash = 4209698837;_node29.attrs["w-class"] = "ga-switch";_$temp = _node29;{
						var _$parent37 = _$temp;var _node30 = { "attrs": {}, "tagName": "div", "sid": 19 };_node30.children = [];_node30.childHash = 1265862876;_node30.attrSize = 2;_node30.attrHash = 55450911;_node30.attrs["w-class"] = "ga-switch-img-box";_node30.attrs["on-tap"] = "switchInOutClick";_$temp = _node30;{
							var _$parent38 = _$temp;var _node31 = { "attrs": {}, "tagName": "img", "sid": 20 };_node31.children = [];_node31.childHash = 0;_node31.attrSize = 2;_node31.attrHash = 3774164350;_node31.attrs["src"] = "../../res/image/currency_exchange.png";_node31.attrs["w-class"] = "ga-switch-img";_$parent38.children.push(_node31);
						}_$parent37.children.push(_node30);
					}_$parent36.children.push(_node29);
				}_$temp = _node23;{
					var _$parent39 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 21 };_node32.children = [];_node32.attrSize = 1;_node32.attrHash = 1751897602;_node32.attrs["w-class"] = "ga-outin-container";_$temp = _node32;{
						var _$parent40 = _$temp;var _node33 = { "attrs": {}, "tagName": "span", "sid": 22 };_node33.children = [];_node33.childHash = 1489544162;_node33.attrSize = 1;_node33.attrHash = 141124565;_node33.attrs["w-class"] = "ga-outin";_$temp = _node33;{
							var _$parent41 = _$temp;var _node34 = _installText("买入", 3488103702);;
							_$parent41.children.push(_node34);
						}_$parent40.children.push(_node33);
					}_$temp = _node32;{
						var _$parent42 = _$temp;var _node35 = { "attrs": {}, "tagName": "img", "sid": 23 };_node35.children = [];_node35.attrSize = 3;_node35.attrHash = 1413960027;{
							var _attrvalue = "";_attrvalue += "../../res/image/currency/";_attrvalue += it1.inCurrency;_attrvalue += ".png";_node35.attrs["src"] = _attrvalue;
						}_node35.attrHash = _hash.nextHash(_node35.attrHash, _calTextHash(_node35.attrs["src"]));_node35.attrs["w-class"] = "choose-out-currency";_node35.attrs["on-tap"] = "inCurrencySelectClick";_chFunc(_node35);_$parent42.children.push(_node35);
					}_$temp = _node32;{
						var _$parent43 = _$temp;var _node36 = { "attrs": {}, "tagName": "span", "sid": 24 };_node36.children = [];_node36.attrSize = 1;_node36.attrHash = 419266432;_node36.attrs["w-class"] = "currency";_$temp = _node36;{
							var _$parent44 = _$temp;_addText(it1.inCurrency, _$parent44);
						}_chFunc(_node36);_$parent43.children.push(_node36);
					}_chFunc(_node32);_$parent39.children.push(_node32);
				}_chFunc(_node23);_$parent29.children.push(_node23);
			}_$temp = _node22;{
				var _$parent45 = _$temp;var _node37 = { "attrs": {}, "tagName": "div", "sid": 25 };_node37.children = [];_node37.attrSize = 1;_node37.attrHash = 1163019767;_node37.attrs["w-class"] = "ga-input-container";_$temp = _node37;{
					var _$parent46 = _$temp;var _node38 = { "attrs": {}, "tagName": "div", "sid": 26 };_node38.children = [];_node38.attrSize = 2;_node38.attrHash = 2739489390;_node38.attrs["w-class"] = "input-father";_node38.attrs["ev-input-change"] = "outAmountChange";_$temp = _node38;{
						var _$parent47 = _$temp;var _node39 = { "attrs": {}, "tagName": "app-components-input-input_simple", "sid": 27 };_node39.hasChild = false;_node39.child = null;_node39.attrHash = 0;_$temp = _node39;{
							var _$parent48 = _$temp;var _node40 = {}; //jpair pre

							_node40["input"] = it1.outAmount;
							//jpair suf
							//jpair pre

							{
								var _jvalue = "";
								_jvalue = "发出数量";
								//jpair suf

								_node40["placeHolder"] = _jvalue;
							}
							_addJson(_node40, _$parent48);
						}_chFunc(_node39);_$parent47.children.push(_node39);
					}_chFunc(_node38);_$parent46.children.push(_node38);
				}_$temp = _node37;{
					var _$parent49 = _$temp;var _node41 = { "attrs": {}, "tagName": "div", "sid": 28 };_node41.children = [];_node41.childHash = 2946814719;_node41.attrSize = 1;_node41.attrHash = 14788812;_node41.attrs["w-class"] = "ga-space";_$parent49.children.push(_node41);
				}_$temp = _node37;{
					var _$parent50 = _$temp;var _node42 = { "attrs": {}, "tagName": "div", "sid": 29 };_node42.children = [];_node42.attrSize = 1;_node42.attrHash = 1509755987;_node42.attrs["w-class"] = "input-father";_$temp = _node42;{
						var _$parent51 = _$temp;var _node43 = { "attrs": {}, "tagName": "app-components-input-input_simple", "sid": 30 };_node43.hasChild = false;_node43.child = null;_node43.attrHash = 0;_$temp = _node43;{
							var _$parent52 = _$temp;var _node44 = {}; //jpair pre

							_node44["input"] = it1.receiveAmount;
							//jpair suf
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "收到数量";
								//jpair suf

								_node44["placeHolder"] = _jvalue2;
							}
							//jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 = "textAlign:right;";
								//jpair suf

								_node44["style"] = _jvalue3;
							}
							_addJson(_node44, _$parent52);
						}_chFunc(_node43);_$parent51.children.push(_node43);
					}_chFunc(_node42);_$parent50.children.push(_node42);
				}_chFunc(_node37);_$parent45.children.push(_node37);
			}_$temp = _node22;{
				var _$parent53 = _$temp;var _node45 = { "attrs": {}, "tagName": "div", "sid": 31 };_node45.children = [];_node45.attrSize = 2;_node45.attrHash = 575276146;_node45.attrs["w-class"] = "rate";_node45.attrs["on-tap"] = "rateDescClick";_$temp = _node45;{
					var _$parent54 = _$temp;var _node46 = { "attrs": {}, "tagName": "img", "sid": 32 };_node46.children = [];_node46.childHash = 0;_node46.attrSize = 2;_node46.attrHash = 459882814;_node46.attrs["src"] = "../../res/image/rate_tip.png";_node46.attrs["w-class"] = "ga-tip";_$parent54.children.push(_node46);
				}_$temp = _node45;{
					var _$parent55 = _$temp;var _node47 = { "attrs": {}, "tagName": "span", "sid": 33 };_node47.children = [];_node47.attrHash = 0;_$temp = _node47;{
						var _$parent56 = _$temp;var _node48 = _installText("实时汇率 1", 2135188978);;
						_$parent56.children.push(_node48);
					}_$temp = _node47;{
						var _$parent57 = _$temp;_addText(it1.outCurrency, _$parent57);
					}_$temp = _node47;{
						var _$parent58 = _$temp;var _node49 = _installText("=", 1789488551);;
						_$parent58.children.push(_node49);
					}_$temp = _node47;{
						var _$parent59 = _$temp;_addText(it1.rate, _$parent59);
					}_$temp = _node47;{
						var _$parent60 = _$temp;_addText(it1.inCurrency, _$parent60);
					}_chFunc(_node47);_$parent55.children.push(_node47);
				}_chFunc(_node45);_$parent53.children.push(_node45);
			}_$temp = _node22;{
				var _$parent61 = _$temp;var _node50 = { "attrs": {}, "tagName": "div", "sid": 34 };_node50.children = [];_node50.childHash = 2383734690;_node50.attrSize = 2;_node50.attrHash = 841140797;_node50.attrs["w-class"] = "ok-btn";_node50.attrs["on-tap"] = "sureClick";_$temp = _node50;{
					var _$parent62 = _$temp;var _node51 = _installText("确定", 2644238972);;
					_$parent62.children.push(_node51);
				}_$parent61.children.push(_node50);
			}_chFunc(_node22);_$parent28.children.push(_node22);
		}_chFunc(_node);return _node;
	}
});