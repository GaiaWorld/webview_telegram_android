(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 846922391;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["w-class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 1083506517;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "生成钱包";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 2708102710;_node4.attrSize = 1;_node4.attrHash = 4148826170;_node4.attrs["w-class"] = "ga-notice-text";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = _installText("KuPay是一个开源项目，不储存用户密码，如果您忘了密码，我们将无法帮助你重置。请不要丢失或忘记。", 3660817285);;
				_$parent5.children.push(_node5);
			}_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 3 };_node6.children = [];_node6.childHash = 4096695085;_node6.attrSize = 1;_node6.attrHash = 2571584304;_node6.attrs["w-class"] = "ga-registered-item";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.childHash = 1792752949;_node7.attrSize = 1;_node7.attrHash = 2394645962;_node7.attrs["w-class"] = "ga-tips";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = _installText("为钱包设置密码，完成最后的步骤", 342016825);;
					_$parent8.children.push(_node8);
				}_$parent7.children.push(_node7);
			}_$parent6.children.push(_node6);
		}_$temp = _node;{
			var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 5 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 541041940;_node9.attrs["w-class"] = "ga-registered-container";_$temp = _node9;{
				var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 6 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 4072995735;_node10.attrs["w-class"] = "ga-registered-item";_node10.attrs["ev-input-change"] = "walletNameChange";_$temp = _node10;{
					var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 7 };_node11.children = [];_node11.childHash = 2121129643;_node11.attrSize = 1;_node11.attrHash = 1495868631;_node11.attrs["w-class"] = "ga-registered-item-label";_$temp = _node11;{
						var _$parent12 = _$temp;var _node12 = _installText("钱包名称", 2083270373);;
						_$parent12.children.push(_node12);
					}_$parent11.children.push(_node11);
				}_$temp = _node10;{
					var _$parent13 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 965381103;_node13.attrs["w-class"] = "ga-input-father";_$temp = _node13;{
						var _$parent14 = _$temp;var _node14 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 9 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
							var _$parent15 = _$temp;var _node15 = {}; //jpair pre

							{
								var _jvalue = "";
								_jvalue = "钱包名称";
								//jpair suf

								_node15["placeHolder"] = _jvalue;
							}
							//jpair pre

							_node15["input"] = it1.walletName;
							//jpair suf
							_addJson(_node15, _$parent15);
						}_chFunc(_node14);_$parent14.children.push(_node14);
					}_chFunc(_node13);_$parent13.children.push(_node13);
				}_chFunc(_node10);_$parent10.children.push(_node10);
			}_$temp = _node9;{
				var _$parent16 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 10 };_node16.children = [];_node16.attrSize = 3;_node16.attrHash = 3749651590;_node16.attrs["w-class"] = "ga-registered-item";_node16.attrs["ev-input-change"] = "walletPswChange";_node16.attrs["ev-input-blur"] = "walletPswBlur";_$temp = _node16;{
					var _$parent17 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 11 };_node17.children = [];_node17.childHash = 961210450;_node17.attrSize = 1;_node17.attrHash = 1495868631;_node17.attrs["w-class"] = "ga-registered-item-label";_$temp = _node17;{
						var _$parent18 = _$temp;var _node18 = _installText("密码，不少于8位字符，可包含英文、数字、特殊字符", 89750650);;
						_$parent18.children.push(_node18);
					}_$parent17.children.push(_node17);
				}_$temp = _node16;{
					var _$parent19 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 12 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 965381103;_node19.attrs["w-class"] = "ga-input-father";_$temp = _node19;{
						var _$parent20 = _$temp;var _node20 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 13 };_node20.hasChild = false;_node20.child = null;_node20.childHash = 4053870583;_node20.attrHash = 0;_$temp = _node20;{
							var _$parent21 = _$temp;var _node21 = {}; //jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "password";
								//jpair suf

								_node21["itype"] = _jvalue2;
							}
							//jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 = "设置密码";
								//jpair suf

								_node21["placeHolder"] = _jvalue3;
							}
							_addJson(_node21, _$parent21);
						}_$parent20.children.push(_node20);
					}_$temp = _node19;{
						var _$parent22 = _$temp;var _node22 = { "attrs": {}, "tagName": "span", "sid": 14 };_node22.children = [];_node22.attrSize = 2;_node22.attrHash = 2560683504;_node22.attrs["w-class"] = "ga-password-strength";{
							var attrvalue = "";attrvalue += "color:";attrvalue += it1.curWalletPswStrength.color;attrvalue += ";";_node22.attrs["style"] = attrvalue;
						}_node22.attrHash = _hash.nextHash(_node22.attrHash, _calTextHash(_node22.attrs["style"]));_$temp = _node22;{
							var _$parent23 = _$temp;var _node23 = { "attrs": {}, "tagName": "span", "sid": 15 };_node23.children = [];_node23.childHash = 3307626617;_node23.attrSize = 1;_node23.attrHash = 1566347660;_node23.attrs["w-class"] = "ga-password-strength-label";_$temp = _node23;{
								var _$parent24 = _$temp;var _node24 = _installText("安全强度:", 2875395853);;
								_$parent24.children.push(_node24);
							}_$parent23.children.push(_node23);
						}_$temp = _node22;{
							var _$parent25 = _$temp;var _node25 = { "attrs": {}, "tagName": "span", "sid": 16 };_node25.children = [];_node25.attrSize = 2;_node25.attrHash = 753586189;_node25.attrs["w-class"] = "ga-password-strength-text";_node25.attrs["style"] = "color: rgba(234,142,65,1);";_$temp = _node25;{
								var _$parent26 = _$temp;_addText(it1.curWalletPswStrength.text, _$parent26);
							}_chFunc(_node25);_$parent25.children.push(_node25);
						}_chFunc(_node22);_$parent22.children.push(_node22);
					}_chFunc(_node19);_$parent19.children.push(_node19);
				}_chFunc(_node16);_$parent16.children.push(_node16);
			}_$temp = _node9;{
				var _$parent27 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 17 };_node26.children = [];_node26.attrSize = 2;_node26.attrHash = 415075680;{
					var _attrvalue = "";_attrvalue += "ga-psw-tip-hidden  ";_attrvalue += it1.showPswTips ? 'ga-psw-tip-show' : '';_attrvalue += "";_node26.attrs["w-class"] = _attrvalue;
				}_node26.attrHash = _hash.nextHash(_node26.attrHash, _calTextHash(_node26.attrs["w-class"]));_node26.attrs["style"] = "color: rgba(234,142,65,1);";_$temp = _node26;{
					var _$parent28 = _$temp;var _node27 = _installText("不少于8位字符，可包含英文、数字、特殊字符", 866488382);;
					_$parent28.children.push(_node27);
				}_chFunc(_node26);_$parent27.children.push(_node26);
			}_$temp = _node9;{
				var _$parent29 = _$temp;var _node28 = { "attrs": {}, "tagName": "div", "sid": 18 };_node28.children = [];_node28.childHash = 3849743064;_node28.attrSize = 2;_node28.attrHash = 1699379161;_node28.attrs["w-class"] = "ga-registered-item";_node28.attrs["ev-input-change"] = "walletPswConfirmChange";_$temp = _node28;{
					var _$parent30 = _$temp;var _node29 = { "attrs": {}, "tagName": "div", "sid": 19 };_node29.children = [];_node29.childHash = 2707645093;_node29.attrSize = 1;_node29.attrHash = 1495868631;_node29.attrs["w-class"] = "ga-registered-item-label";_$temp = _node29;{
						var _$parent31 = _$temp;var _node30 = _installText("再次输入密码", 2740861029);;
						_$parent31.children.push(_node30);
					}_$parent30.children.push(_node29);
				}_$temp = _node28;{
					var _$parent32 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 20 };_node31.children = [];_node31.childHash = 425907670;_node31.attrSize = 1;_node31.attrHash = 965381103;_node31.attrs["w-class"] = "ga-input-father";_$temp = _node31;{
						var _$parent33 = _$temp;var _node32 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 21 };_node32.hasChild = false;_node32.child = null;_node32.childHash = 2346834623;_node32.attrHash = 0;_$temp = _node32;{
							var _$parent34 = _$temp;var _node33 = {}; //jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 = "password";
								//jpair suf

								_node33["itype"] = _jvalue4;
							}
							//jpair pre

							{
								var _jvalue5 = "";
								_jvalue5 = "再次输入密码";
								//jpair suf

								_node33["placeHolder"] = _jvalue5;
							}
							_addJson(_node33, _$parent34);
						}_$parent33.children.push(_node32);
					}_$parent32.children.push(_node31);
				}_$parent29.children.push(_node28);
			}_$temp = _node9;{
				var _$parent35 = _$temp;var _node34 = { "attrs": {}, "tagName": "div", "sid": 22 };_node34.children = [];_node34.childHash = 710771667;_node34.attrSize = 2;_node34.attrHash = 3609946228;_node34.attrs["w-class"] = "ga-registered-item";_node34.attrs["ev-input-change"] = "walletPswTipsChange";_$temp = _node34;{
					var _$parent36 = _$temp;var _node35 = { "attrs": {}, "tagName": "div", "sid": 23 };_node35.children = [];_node35.childHash = 1093794078;_node35.attrSize = 1;_node35.attrHash = 1495868631;_node35.attrs["w-class"] = "ga-registered-item-label";_$temp = _node35;{
						var _$parent37 = _$temp;var _node36 = _installText("提示信息（可不填）", 356474755);;
						_$parent37.children.push(_node36);
					}_$parent36.children.push(_node35);
				}_$temp = _node34;{
					var _$parent38 = _$temp;var _node37 = { "attrs": {}, "tagName": "div", "sid": 24 };_node37.children = [];_node37.childHash = 534500216;_node37.attrSize = 1;_node37.attrHash = 965381103;_node37.attrs["w-class"] = "ga-input-father";_$temp = _node37;{
						var _$parent39 = _$temp;var _node38 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 25 };_node38.hasChild = false;_node38.child = null;_node38.childHash = 815427989;_node38.attrHash = 0;_$temp = _node38;{
							var _$parent40 = _$temp;var _node39 = {}; //jpair pre

							{
								var _jvalue6 = "";
								_jvalue6 = "提示信息（可不填）";
								//jpair suf

								_node39["placeHolder"] = _jvalue6;
							}
							_addJson(_node39, _$parent40);
						}_$parent39.children.push(_node38);
					}_$parent38.children.push(_node37);
				}_$parent35.children.push(_node34);
			}_$temp = _node9;{
				var _$parent41 = _$temp;var _node40 = { "attrs": {}, "tagName": "div", "sid": 26 };_node40.children = [];_node40.childHash = 2119459271;_node40.attrSize = 2;_node40.attrHash = 2984237632;_node40.attrs["w-class"] = "ga-registered-protocol";_node40.attrs["ev-checkbox-click"] = "checkBoxClick";_$temp = _node40;{
					var _$parent42 = _$temp;var _node41 = { "attrs": {}, "tagName": "app-components-checkbox-checkbox", "sid": 27 };_node41.hasChild = false;_node41.child = null;_node41.childHash = 2901728037;_node41.attrHash = 0;_$temp = _node41;{
						var _$parent43 = _$temp;var _node42 = {}; //jpair pre

						{
							var _jvalue7 = "";
							_jvalue7 = "false";
							//jpair suf

							_node42["itype"] = _jvalue7;
						}
						//jpair pre

						{
							var _jvalue8 = "";
							_jvalue8 = "我已经认证阅读并同意";
							//jpair suf

							_node42["text"] = _jvalue8;
						}
						_addJson(_node42, _$parent43);
					}_$parent42.children.push(_node41);
				}_$temp = _node40;{
					var _$parent44 = _$temp;var _node43 = { "attrs": {}, "tagName": "span", "sid": 28 };_node43.children = [];_node43.childHash = 2049235899;_node43.attrSize = 2;_node43.attrHash = 3364877046;_node43.attrs["w-class"] = "ga-user-protocol";_node43.attrs["on-tap"] = "agreementClick";_$temp = _node43;{
						var _$parent45 = _$temp;var _node44 = _installText("隐私条约", 3041249419);;
						_$parent45.children.push(_node44);
					}_$parent44.children.push(_node43);
				}_$parent41.children.push(_node40);
			}_$temp = _node9;{
				var _$parent46 = _$temp;var _node45 = { "attrs": {}, "tagName": "div", "sid": 29 };_node45.children = [];_node45.attrSize = 3;_node45.attrHash = 2064656703;_node45.attrs["w-class"] = "ga-wallet-create-btn";_node45.attrs["on-tap"] = "createWalletClick";{
					var _attrvalue2 = "";_attrvalue2 += "backgroundColor:";_attrvalue2 += it1.userProtocolReaded ? '#1A70DD' : 'white';_attrvalue2 += ";color:";_attrvalue2 += it1.userProtocolReaded ? 'rgba(255,255,255,0.87)' : '#1A70DD';_attrvalue2 += "";_node45.attrs["style"] = _attrvalue2;
				}_node45.attrHash = _hash.nextHash(_node45.attrHash, _calTextHash(_node45.attrs["style"]));_$temp = _node45;{
					var _$parent47 = _$temp;var _node46 = _installText("创建钱包", 3372004917);;
					_$parent47.children.push(_node46);
				}_chFunc(_node45);_$parent46.children.push(_node45);
			}_chFunc(_node9);_$parent9.children.push(_node9);
		}_chFunc(_node);return _node;
	}
});