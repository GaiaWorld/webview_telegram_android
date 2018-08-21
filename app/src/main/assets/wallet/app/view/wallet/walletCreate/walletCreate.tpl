(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 846922391;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["w-class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 1758287676;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "设置密码";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "app-view-wallet-walletCreate-headTips-headTips", "sid": 2 };_node4.hasChild = false;_node4.child = null;_node4.childHash = 2159761201;_node4.attrHash = 0;_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = {}; //jpair pre

				{
					var _jvalue = "";
					_jvalue = "该密码用于保护钱包，KuPay不储存用户密码，如果您忘了密码，我们将无法帮助你重置。请不要丢失或忘记。";
					//jpair suf

					_node5["content"] = _jvalue;
				}
				_addJson(_node5, _$parent5);
			}_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 3 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 541041940;_node6.attrs["w-class"] = "ga-registered-container";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 4072995735;_node7.attrs["w-class"] = "ga-registered-item";_node7.attrs["ev-input-change"] = "walletNameChange";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.childHash = 2121129643;_node8.attrSize = 1;_node8.attrHash = 1495868631;_node8.attrs["w-class"] = "ga-registered-item-label";_$temp = _node8;{
						var _$parent9 = _$temp;var _node9 = _installText("钱包名称", 2083270373);;
						_$parent9.children.push(_node9);
					}_$parent8.children.push(_node8);
				}_$temp = _node7;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 6 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 965381103;_node10.attrs["w-class"] = "ga-input-father";_$temp = _node10;{
						var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 7 };_node11.hasChild = false;_node11.child = null;_node11.attrHash = 0;_$temp = _node11;{
							var _$parent12 = _$temp;var _node12 = {}; //jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "钱包名称";
								//jpair suf

								_node12["placeHolder"] = _jvalue2;
							}
							//jpair pre

							_node12["input"] = it1.walletName;
							//jpair suf
							//jpair pre

							_node12["maxLength"] = 24;
							//jpair suf
							_addJson(_node12, _$parent12);
						}_chFunc(_node11);_$parent11.children.push(_node11);
					}_chFunc(_node10);_$parent10.children.push(_node10);
				}_chFunc(_node7);_$parent7.children.push(_node7);
			}_$temp = _node6;{
				var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.attrSize = 3;_node13.attrHash = 3749651590;_node13.attrs["w-class"] = "ga-registered-item";_node13.attrs["ev-input-change"] = "walletPswChange";_node13.attrs["ev-input-blur"] = "walletPswBlur";_$temp = _node13;{
					var _$parent14 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 9 };_node14.children = [];_node14.childHash = 961210450;_node14.attrSize = 1;_node14.attrHash = 1495868631;_node14.attrs["w-class"] = "ga-registered-item-label";_$temp = _node14;{
						var _$parent15 = _$temp;var _node15 = _installText("密码，不少于8位字符，可包含英文、数字、特殊字符", 89750650);;
						_$parent15.children.push(_node15);
					}_$parent14.children.push(_node14);
				}_$temp = _node13;{
					var _$parent16 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 10 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 965381103;_node16.attrs["w-class"] = "ga-input-father";_$temp = _node16;{
						var _$parent17 = _$temp;var _node17 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 11 };_node17.hasChild = false;_node17.child = null;_node17.childHash = 4053870583;_node17.attrHash = 0;_$temp = _node17;{
							var _$parent18 = _$temp;var _node18 = {}; //jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 = "password";
								//jpair suf

								_node18["itype"] = _jvalue3;
							}
							//jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 = "设置密码";
								//jpair suf

								_node18["placeHolder"] = _jvalue4;
							}
							_addJson(_node18, _$parent18);
						}_$parent17.children.push(_node17);
					}_$temp = _node16;{
						var _$parent19 = _$temp;var _node19 = { "attrs": {}, "tagName": "span", "sid": 12 };_node19.children = [];_node19.attrSize = 2;_node19.attrHash = 2560683504;_node19.attrs["w-class"] = "ga-password-strength";{
							var attrvalue = "";attrvalue += "color:";attrvalue += it1.curWalletPswStrength.color;attrvalue += ";";_node19.attrs["style"] = attrvalue;
						}_node19.attrHash = _hash.nextHash(_node19.attrHash, _calTextHash(_node19.attrs["style"]));_$temp = _node19;{
							var _$parent20 = _$temp;var _node20 = { "attrs": {}, "tagName": "span", "sid": 13 };_node20.children = [];_node20.childHash = 3307626617;_node20.attrSize = 1;_node20.attrHash = 1566347660;_node20.attrs["w-class"] = "ga-password-strength-label";_$temp = _node20;{
								var _$parent21 = _$temp;var _node21 = _installText("安全强度:", 2875395853);;
								_$parent21.children.push(_node21);
							}_$parent20.children.push(_node20);
						}_$temp = _node19;{
							var _$parent22 = _$temp;var _node22 = { "attrs": {}, "tagName": "span", "sid": 14 };_node22.children = [];_node22.attrSize = 1;_node22.attrHash = 3953088620;_node22.attrs["w-class"] = "ga-password-strength-text";_$temp = _node22;{
								var _$parent23 = _$temp;_addText(it1.curWalletPswStrength.text, _$parent23);
							}_chFunc(_node22);_$parent22.children.push(_node22);
						}_chFunc(_node19);_$parent19.children.push(_node19);
					}_chFunc(_node16);_$parent16.children.push(_node16);
				}_chFunc(_node13);_$parent13.children.push(_node13);
			}_$temp = _node6;{
				var _$parent24 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 15 };_node23.children = [];_node23.attrSize = 2;_node23.attrHash = 415075680;{
					var _attrvalue = "";_attrvalue += "ga-psw-tip-hidden  ";_attrvalue += it1.showPswTips ? 'ga-psw-tip-show' : '';_attrvalue += "";_node23.attrs["w-class"] = _attrvalue;
				}_node23.attrHash = _hash.nextHash(_node23.attrHash, _calTextHash(_node23.attrs["w-class"]));_node23.attrs["style"] = "color: rgba(234,142,65,1);";_$temp = _node23;{
					var _$parent25 = _$temp;var _node24 = _installText("不少于8位字符，可包含英文、数字、特殊字符", 866488382);;
					_$parent25.children.push(_node24);
				}_chFunc(_node23);_$parent24.children.push(_node23);
			}_$temp = _node6;{
				var _$parent26 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 16 };_node25.children = [];_node25.childHash = 3849743064;_node25.attrSize = 2;_node25.attrHash = 1699379161;_node25.attrs["w-class"] = "ga-registered-item";_node25.attrs["ev-input-change"] = "walletPswConfirmChange";_$temp = _node25;{
					var _$parent27 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 17 };_node26.children = [];_node26.childHash = 2707645093;_node26.attrSize = 1;_node26.attrHash = 1495868631;_node26.attrs["w-class"] = "ga-registered-item-label";_$temp = _node26;{
						var _$parent28 = _$temp;var _node27 = _installText("再次输入密码", 2740861029);;
						_$parent28.children.push(_node27);
					}_$parent27.children.push(_node26);
				}_$temp = _node25;{
					var _$parent29 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 18 };_node28.children = [];_node28.childHash = 425907670;_node28.attrSize = 1;_node28.attrHash = 965381103;_node28.attrs["w-class"] = "ga-input-father";_$temp = _node28;{
						var _$parent30 = _$temp;var _node29 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 19 };_node29.hasChild = false;_node29.child = null;_node29.childHash = 2346834623;_node29.attrHash = 0;_$temp = _node29;{
							var _$parent31 = _$temp;var _node30 = {}; //jpair pre

							{
								var _jvalue5 = "";
								_jvalue5 = "password";
								//jpair suf

								_node30["itype"] = _jvalue5;
							}
							//jpair pre

							{
								var _jvalue6 = "";
								_jvalue6 = "再次输入密码";
								//jpair suf

								_node30["placeHolder"] = _jvalue6;
							}
							_addJson(_node30, _$parent31);
						}_$parent30.children.push(_node29);
					}_$parent29.children.push(_node28);
				}_$parent26.children.push(_node25);
			}_$temp = _node6;{
				var _$parent32 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 20 };_node31.children = [];_node31.attrSize = 2;_node31.attrHash = 415075680;{
					var _attrvalue2 = "";_attrvalue2 += "ga-psw-tip-hidden  ";_attrvalue2 += !it1.pswSame ? 'ga-psw-tip-show' : '';_attrvalue2 += "";_node31.attrs["w-class"] = _attrvalue2;
				}_node31.attrHash = _hash.nextHash(_node31.attrHash, _calTextHash(_node31.attrs["w-class"]));_node31.attrs["style"] = "color: rgba(234,142,65,1);";_$temp = _node31;{
					var _$parent33 = _$temp;var _node32 = _installText("两次输入的密码不相同", 838102749);;
					_$parent33.children.push(_node32);
				}_chFunc(_node31);_$parent32.children.push(_node31);
			}_$temp = _node6;{
				var _$parent34 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 21 };_node33.children = [];_node33.childHash = 710771667;_node33.attrSize = 2;_node33.attrHash = 3609946228;_node33.attrs["w-class"] = "ga-registered-item";_node33.attrs["ev-input-change"] = "walletPswTipsChange";_$temp = _node33;{
					var _$parent35 = _$temp;var _node34 = { "attrs": {}, "tagName": "div", "sid": 22 };_node34.children = [];_node34.childHash = 1093794078;_node34.attrSize = 1;_node34.attrHash = 1495868631;_node34.attrs["w-class"] = "ga-registered-item-label";_$temp = _node34;{
						var _$parent36 = _$temp;var _node35 = _installText("提示信息（可不填）", 356474755);;
						_$parent36.children.push(_node35);
					}_$parent35.children.push(_node34);
				}_$temp = _node33;{
					var _$parent37 = _$temp;var _node36 = { "attrs": {}, "tagName": "div", "sid": 23 };_node36.children = [];_node36.childHash = 534500216;_node36.attrSize = 1;_node36.attrHash = 965381103;_node36.attrs["w-class"] = "ga-input-father";_$temp = _node36;{
						var _$parent38 = _$temp;var _node37 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 24 };_node37.hasChild = false;_node37.child = null;_node37.childHash = 815427989;_node37.attrHash = 0;_$temp = _node37;{
							var _$parent39 = _$temp;var _node38 = {}; //jpair pre

							{
								var _jvalue7 = "";
								_jvalue7 = "提示信息（可不填）";
								//jpair suf

								_node38["placeHolder"] = _jvalue7;
							}
							_addJson(_node38, _$parent39);
						}_$parent38.children.push(_node37);
					}_$parent37.children.push(_node36);
				}_$parent34.children.push(_node33);
			}_$temp = _node6;{
				var _$parent40 = _$temp;var _node39 = { "attrs": {}, "tagName": "div", "sid": 25 };_node39.children = [];_node39.childHash = 2119459271;_node39.attrSize = 2;_node39.attrHash = 2984237632;_node39.attrs["w-class"] = "ga-registered-protocol";_node39.attrs["ev-checkbox-click"] = "checkBoxClick";_$temp = _node39;{
					var _$parent41 = _$temp;var _node40 = { "attrs": {}, "tagName": "app-components-checkbox-checkbox", "sid": 26 };_node40.hasChild = false;_node40.child = null;_node40.childHash = 2901728037;_node40.attrHash = 0;_$temp = _node40;{
						var _$parent42 = _$temp;var _node41 = {}; //jpair pre

						{
							var _jvalue8 = "";
							_jvalue8 = "false";
							//jpair suf

							_node41["itype"] = _jvalue8;
						}
						//jpair pre

						{
							var _jvalue9 = "";
							_jvalue9 = "我已经认证阅读并同意";
							//jpair suf

							_node41["text"] = _jvalue9;
						}
						_addJson(_node41, _$parent42);
					}_$parent41.children.push(_node40);
				}_$temp = _node39;{
					var _$parent43 = _$temp;var _node42 = { "attrs": {}, "tagName": "span", "sid": 27 };_node42.children = [];_node42.childHash = 2049235899;_node42.attrSize = 2;_node42.attrHash = 3364877046;_node42.attrs["w-class"] = "ga-user-protocol";_node42.attrs["on-tap"] = "agreementClick";_$temp = _node42;{
						var _$parent44 = _$temp;var _node43 = _installText("隐私条约", 3041249419);;
						_$parent44.children.push(_node43);
					}_$parent43.children.push(_node42);
				}_$parent40.children.push(_node39);
			}_$temp = _node6;{
				var _$parent45 = _$temp;var _node44 = { "attrs": {}, "tagName": "div", "sid": 28 };_node44.children = [];_node44.attrSize = 3;_node44.attrHash = 2064656703;_node44.attrs["w-class"] = "ga-wallet-create-btn";_node44.attrs["on-tap"] = "createWalletClick";{
					var _attrvalue3 = "";_attrvalue3 += "backgroundColor:";_attrvalue3 += it1.userProtocolReaded ? '#1A70DD' : 'white';_attrvalue3 += ";color:";_attrvalue3 += it1.userProtocolReaded ? 'rgba(255,255,255,0.87)' : '#1A70DD';_attrvalue3 += "";_node44.attrs["style"] = _attrvalue3;
				}_node44.attrHash = _hash.nextHash(_node44.attrHash, _calTextHash(_node44.attrs["style"]));_$temp = _node44;{
					var _$parent46 = _$temp;var _node45 = _installText("创建钱包", 3372004917);;
					_$parent46.children.push(_node45);
				}_chFunc(_node44);_$parent45.children.push(_node44);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});