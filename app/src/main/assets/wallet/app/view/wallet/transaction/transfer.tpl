(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3664680752;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_node2.attrs["ev-back-click"] = "doClose";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = it1.title;
					//jpair suf
					//jpair pre

					{
						var jvalue = "";
						jvalue = "white";
						//jpair suf

						_node4["iconColor"] = jvalue;
					}
					//jpair pre

					{
						var _jvalue = "";
						_jvalue = "backgroundColor:rgba(68, 140, 255, 1);color:#fff;";
						//jpair suf

						_node4["style"] = _jvalue;
					}
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.childHash = 1779548533;_node5.attrSize = 2;_node5.attrHash = 400695967;_node5.attrs["w-class"] = "qrcode-scan";_node5.attrs["on-tap"] = "doScan";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 4 };_node6.children = [];_node6.childHash = 0;_node6.attrSize = 2;_node6.attrHash = 402826650;_node6.attrs["src"] = "../../../res/image/btn_scan.png";_node6.attrs["w-class"] = "scanbtn";_$parent6.children.push(_node6);
			}_$parent5.children.push(_node5);
		}_$temp = _node;{
			var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1349797565;_node7.attrs["w-class"] = "balance";_$temp = _node7;{
				var _$parent8 = _$temp;var _node8 = _installText("余额&nbsp;&nbsp;", 1116645350);;
				_$parent8.children.push(_node8);
			}_$temp = _node7;{
				var _$parent9 = _$temp;_addText(it.currencyBalance, _$parent9);
			}_$temp = _node7;{
				var _$parent10 = _$temp;var _node9 = _installText("&nbsp;", 1553561131);;
				_$parent10.children.push(_node9);
			}_$temp = _node7;{
				var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 6 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 973517844;_node10.attrs["w-class"] = "currency-name";_$temp = _node10;{
					var _$parent12 = _$temp;_addText(it.currencyName, _$parent12);
				}_chFunc(_node10);_$parent11.children.push(_node10);
			}_chFunc(_node7);_$parent7.children.push(_node7);
		}_$temp = _node;{
			var _$parent13 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 7 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 4252679546;_node11.attrs["w-class"] = "body";_$temp = _node11;{
				var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.attrSize = 2;_node12.attrHash = 2094392163;_node12.attrs["w-class"] = "ga-item get-addr-value";_node12.attrs["ev-input-change"] = "onToChange";_$temp = _node12;{
					var _$parent15 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 9 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 2906980578;_node13.attrs["w-class"] = "textarea-father";_$temp = _node13;{
						var _$parent16 = _$temp;var _node14 = { "attrs": {}, "tagName": "app-components-input-input_textarea", "sid": 10 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
							var _$parent17 = _$temp;var _node15 = {}; //jpair pre

							_node15["input"] = it1.to;
							//jpair suf
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "textarea";
								//jpair suf

								_node15["itype"] = _jvalue2;
							}
							//jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 = "请输入收款地址";
								//jpair suf

								_node15["placeHolder"] = _jvalue3;
							}
							_addJson(_node15, _$parent17);
						}_chFunc(_node14);_$parent16.children.push(_node14);
					}_chFunc(_node13);_$parent15.children.push(_node13);
				}_chFunc(_node12);_$parent14.children.push(_node12);
			}_$temp = _node11;{
				var _$parent18 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 11 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 2611620575;_node16.attrs["w-class"] = "ga-item pay ga-item-space-between";_$temp = _node16;{
					var _$parent19 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 12 };_node17.children = [];_node17.attrSize = 2;_node17.attrHash = 3177833508;_node17.attrs["w-class"] = "pay-value input-father";_node17.attrs["ev-input-change"] = "onPayChange";_$temp = _node17;{
						var _$parent20 = _$temp;var _node18 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 13 };_node18.hasChild = false;_node18.child = null;_node18.attrHash = 0;_$temp = _node18;{
							var _$parent21 = _$temp;var _node19 = {}; //jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 = "输入转账金额";
								//jpair suf

								_node19["placeHolder"] = _jvalue4;
							}
							//jpair pre

							_node19["input"] = it1.pay;
							//jpair suf
							//jpair pre

							{
								var _jvalue5 = "";
								_jvalue5 = "padding:0 180px 0 30px;";
								//jpair suf

								_node19["style"] = _jvalue5;
							}
							_addJson(_node19, _$parent21);
						}_chFunc(_node18);_$parent20.children.push(_node18);
					}_chFunc(_node17);_$parent19.children.push(_node17);
				}_$temp = _node16;{
					var _$parent22 = _$temp;var _node20 = { "attrs": {}, "tagName": "span", "sid": 14 };_node20.children = [];_node20.attrSize = 1;_node20.attrHash = 498447201;_node20.attrs["w-class"] = "pay-value-conversion";_$temp = _node20;{
						var _$parent23 = _$temp;var _node21 = _installText("≈￥", 3239443134);;
						_$parent23.children.push(_node21);
					}_$temp = _node20;{
						var _$parent24 = _$temp;_addText(it1.payConversion || '', _$parent24);
					}_chFunc(_node20);_$parent22.children.push(_node20);
				}_chFunc(_node16);_$parent18.children.push(_node16);
			}if (it1.showNote) {
				_$temp = _node11;{
					var _$parent25 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 15 };_node22.children = [];_node22.childHash = 3459014451;_node22.attrSize = 1;_node22.attrHash = 857004545;_node22.attrs["w-class"] = "ga-item";_$temp = _node22;{
						var _$parent26 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 16 };_node23.children = [];_node23.childHash = 3894823698;_node23.attrSize = 2;_node23.attrHash = 1174326658;_node23.attrs["w-class"] = "info-value input-father";_node23.attrs["ev-input-change"] = "onInfoChange";_$temp = _node23;{
							var _$parent27 = _$temp;var _node24 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 17 };_node24.hasChild = false;_node24.child = null;_node24.childHash = 2184617940;_node24.attrHash = 0;_$temp = _node24;{
								var _$parent28 = _$temp;var _node25 = {}; //jpair pre

								{
									var _jvalue6 = "";
									_jvalue6 = "备注";
									//jpair suf

									_node25["placeHolder"] = _jvalue6;
								}
								//jpair pre

								{
									var _jvalue7 = "";
									_jvalue7 = "padding:0 180px 0 30px;";
									//jpair suf

									_node25["style"] = _jvalue7;
								}
								_addJson(_node25, _$parent28);
							}_$parent27.children.push(_node24);
						}_$parent26.children.push(_node23);
					}_$parent25.children.push(_node22);
				}
			}_$temp = _node11;{
				var _$parent29 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 18 };_node26.children = [];_node26.attrSize = 1;_node26.attrHash = 2611620575;_node26.attrs["w-class"] = "ga-item pay ga-item-space-between";_$temp = _node26;{
					var _$parent30 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 19 };_node27.children = [];_node27.attrSize = 2;_node27.attrHash = 2515701924;_node27.attrs["w-class"] = "pay-value input-father";_node27.attrs["ev-input-change"] = "onGasFeeChange";_$temp = _node27;{
						var _$parent31 = _$temp;var _node28 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 20 };_node28.hasChild = false;_node28.child = null;_node28.attrHash = 0;_$temp = _node28;{
							var _$parent32 = _$temp;var _node29 = {}; //jpair pre

							{
								var _jvalue8 = "";
								_jvalue8 = "矿工费";
								//jpair suf

								_node29["placeHolder"] = _jvalue8;
							}
							//jpair pre

							_node29["input"] = it1.fees || '';
							//jpair suf
							//jpair pre

							{
								var _jvalue9 = "";
								_jvalue9 = "padding:0 180px 0 30px;";
								//jpair suf

								_node29["style"] = _jvalue9;
							}
							_addJson(_node29, _$parent32);
						}_chFunc(_node28);_$parent31.children.push(_node28);
					}_chFunc(_node27);_$parent30.children.push(_node27);
				}_$temp = _node26;{
					var _$parent33 = _$temp;var _node30 = { "attrs": {}, "tagName": "span", "sid": 21 };_node30.children = [];_node30.attrSize = 1;_node30.attrHash = 498447201;_node30.attrs["w-class"] = "pay-value-conversion";_$temp = _node30;{
						var _$parent34 = _$temp;var _node31 = _installText("≈￥", 3239443134);;
						_$parent34.children.push(_node31);
					}_$temp = _node30;{
						var _$parent35 = _$temp;_addText(it1.feesConversion || '', _$parent35);
					}_chFunc(_node30);_$parent33.children.push(_node30);
				}_chFunc(_node26);_$parent29.children.push(_node26);
			}_$temp = _node11;{
				var _$parent36 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 22 };_node32.children = [];_node32.childHash = 458967506;_node32.attrSize = 1;_node32.attrHash = 1121734002;_node32.attrs["w-class"] = "ga-item ga-congestion-container";_$temp = _node32;{
					var _$parent37 = _$temp;var _node33 = { "attrs": {}, "tagName": "img", "sid": 23 };_node33.children = [];_node33.childHash = 0;_node33.attrSize = 2;_node33.attrHash = 52007207;_node33.attrs["src"] = "../../../res/image/rate_tip.png";_node33.attrs["w-class"] = "ga-img";_$parent37.children.push(_node33);
				}_$temp = _node32;{
					var _$parent38 = _$temp;var _node34 = { "attrs": {}, "tagName": "span", "sid": 24 };_node34.children = [];_node34.childHash = 1461124884;_node34.attrSize = 1;_node34.attrHash = 2268181744;_node34.attrs["w-class"] = "ga-congestion-title";_$temp = _node34;{
						var _$parent39 = _$temp;var _node35 = _installText("拥堵情况", 1154165371);;
						_$parent39.children.push(_node35);
					}_$parent38.children.push(_node34);
				}_$temp = _node32;{
					var _$parent40 = _$temp;var _node36 = { "attrs": {}, "tagName": "span", "sid": 25 };_node36.children = [];_node36.childHash = 108644992;_node36.attrSize = 1;_node36.attrHash = 550473594;_node36.attrs["w-class"] = "ga-congestion";_$temp = _node36;{
						var _$parent41 = _$temp;var _node37 = _installText("畅通", 2896458454);;
						_$parent41.children.push(_node37);
					}_$parent40.children.push(_node36);
				}_$parent36.children.push(_node32);
			}_$temp = _node11;{
				var _$parent42 = _$temp;var _node38 = { "attrs": {}, "tagName": "div", "sid": 26 };_node38.children = [];_node38.childHash = 2814566193;_node38.attrSize = 2;_node38.attrHash = 831124796;_node38.attrs["w-class"] = "next";_node38.attrs["on-tap"] = "doNext";_$temp = _node38;{
					var _$parent43 = _$temp;var _node39 = _installText("发送", 1344234539);;
					_$parent43.children.push(_node39);
				}_$parent42.children.push(_node38);
			}_$temp = _node11;{
				var _$parent44 = _$temp;var _node40 = { "attrs": {}, "tagName": "div", "sid": 27 };_node40.children = [];_node40.attrSize = 1;_node40.attrHash = 525873835;_node40.attrs["w-class"] = "set-addr";_$temp = _node40;{
					var _$parent45 = _$temp;var _node41 = { "attrs": {}, "tagName": "span", "sid": 28 };_node41.children = [];_node41.childHash = 3760095760;_node41.attrHash = 0;_$temp = _node41;{
						var _$parent46 = _$temp;var _node42 = _installText("发币地址", 486656894);;
						_$parent46.children.push(_node42);
					}_$parent45.children.push(_node41);
				}_$temp = _node40;{
					var _$parent47 = _$temp;var _node43 = { "attrs": {}, "tagName": "span", "sid": 29 };_node43.children = [];_node43.attrSize = 1;_node43.attrHash = 1642259128;_node43.attrs["w-class"] = "addr-from";_$temp = _node43;{
						var _$parent48 = _$temp;_addText(it.fromAddr || '', _$parent48);
					}_chFunc(_node43);_$parent47.children.push(_node43);
				}_chFunc(_node40);_$parent44.children.push(_node40);
			}_chFunc(_node11);_$parent13.children.push(_node11);
		}_chFunc(_node);return _node;
	}
});