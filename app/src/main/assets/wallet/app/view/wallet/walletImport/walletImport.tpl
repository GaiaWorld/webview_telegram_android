(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 846922391;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["w-class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = it.title;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "app-view-wallet-walletCreate-headTips-headTips", "sid": 2 };_node4.hasChild = false;_node4.child = null;_node4.childHash = 62856861;_node4.attrHash = 0;_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "KuPay是一个开源项目，不储存用户密码，如果您忘了密码，我们将无法帮助你重置。请不要丢失或忘记。";
					//jpair suf

					_node5["content"] = jvalue;
				}
				_addJson(_node5, _$parent5);
			}_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 3 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2599374397;_node6.attrs["w-class"] = "ga-import-container";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.childHash = 2345396913;_node7.attrSize = 1;_node7.attrHash = 438079109;_node7.attrs["ev-input-change"] = "walletMnemonicChange";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.childHash = 2075170570;_node8.attrSize = 1;_node8.attrHash = 3620826008;_node8.attrs["w-class"] = "ga-textarea-father";_$temp = _node8;{
						var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 6 };_node9.hasChild = false;_node9.child = null;_node9.childHash = 2099802145;_node9.attrHash = 0;_$temp = _node9;{
							var _$parent10 = _$temp;var _node10 = {}; //jpair pre

							{
								var _jvalue = "";
								_jvalue = "请在这里输入助记词，空间键分隔";
								//jpair suf

								_node10["placeHolder"] = _jvalue;
							}
							//jpair pre

							{
								var _jvalue2 = "";
								_jvalue2 = "textarea";
								//jpair suf

								_node10["itype"] = _jvalue2;
							}
							//jpair pre

							_node10["rows"] = 3;
							//jpair suf
							_addJson(_node10, _$parent10);
						}_$parent9.children.push(_node9);
					}_$parent8.children.push(_node8);
				}_$parent7.children.push(_node7);
			}_$temp = _node6;{
				var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 7 };_node11.children = [];_node11.attrSize = 3;_node11.attrHash = 603837899;_node11.attrs["w-class"] = "ga-import-item";_node11.attrs["ev-input-change"] = "walletPswChange";_node11.attrs["ev-input-blur"] = "walletPswBlur";_$temp = _node11;{
					var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.childHash = 961210450;_node12.attrSize = 1;_node12.attrHash = 3215959933;_node12.attrs["w-class"] = "ga-import-item-label";_$temp = _node12;{
						var _$parent13 = _$temp;var _node13 = _installText("密码，不少于8位字符，可包含英文、数字、特殊字符", 89750650);;
						_$parent13.children.push(_node13);
					}_$parent12.children.push(_node12);
				}_$temp = _node11;{
					var _$parent14 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 9 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 965381103;_node14.attrs["w-class"] = "ga-input-father";_$temp = _node14;{
						var _$parent15 = _$temp;var _node15 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 10 };_node15.hasChild = false;_node15.child = null;_node15.childHash = 4053870583;_node15.attrHash = 0;_$temp = _node15;{
							var _$parent16 = _$temp;var _node16 = {}; //jpair pre

							{
								var _jvalue3 = "";
								_jvalue3 = "password";
								//jpair suf

								_node16["itype"] = _jvalue3;
							}
							//jpair pre

							{
								var _jvalue4 = "";
								_jvalue4 = "设置密码";
								//jpair suf

								_node16["placeHolder"] = _jvalue4;
							}
							_addJson(_node16, _$parent16);
						}_$parent15.children.push(_node15);
					}_$temp = _node14;{
						var _$parent17 = _$temp;var _node17 = { "attrs": {}, "tagName": "span", "sid": 11 };_node17.children = [];_node17.attrSize = 2;_node17.attrHash = 2560683504;_node17.attrs["w-class"] = "ga-password-strength";{
							var attrvalue = "";attrvalue += "color:";attrvalue += it1.curWalletPswStrength.color;attrvalue += ";";_node17.attrs["style"] = attrvalue;
						}_node17.attrHash = _hash.nextHash(_node17.attrHash, _calTextHash(_node17.attrs["style"]));_$temp = _node17;{
							var _$parent18 = _$temp;var _node18 = { "attrs": {}, "tagName": "span", "sid": 12 };_node18.children = [];_node18.childHash = 3307626617;_node18.attrSize = 1;_node18.attrHash = 1566347660;_node18.attrs["w-class"] = "ga-password-strength-label";_$temp = _node18;{
								var _$parent19 = _$temp;var _node19 = _installText("安全强度:", 2875395853);;
								_$parent19.children.push(_node19);
							}_$parent18.children.push(_node18);
						}_$temp = _node17;{
							var _$parent20 = _$temp;var _node20 = { "attrs": {}, "tagName": "span", "sid": 13 };_node20.children = [];_node20.attrSize = 1;_node20.attrHash = 3953088620;_node20.attrs["w-class"] = "ga-password-strength-text";_$temp = _node20;{
								var _$parent21 = _$temp;_addText(it1.curWalletPswStrength.text, _$parent21);
							}_chFunc(_node20);_$parent20.children.push(_node20);
						}_chFunc(_node17);_$parent17.children.push(_node17);
					}_chFunc(_node14);_$parent14.children.push(_node14);
				}_chFunc(_node11);_$parent11.children.push(_node11);
			}_$temp = _node6;{
				var _$parent22 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 14 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 3667176594;{
					var _attrvalue = "";_attrvalue += "ga-psw-tip-hidden  ";_attrvalue += it1.showPswTips ? 'ga-psw-tip-show' : '';_attrvalue += "";_node21.attrs["w-class"] = _attrvalue;
				}_node21.attrHash = _hash.nextHash(_node21.attrHash, _calTextHash(_node21.attrs["w-class"]));_$temp = _node21;{
					var _$parent23 = _$temp;var _node22 = _installText("不少于8位字符，可包含英文、数字、特殊字符", 866488382);;
					_$parent23.children.push(_node22);
				}_chFunc(_node21);_$parent22.children.push(_node21);
			}_$temp = _node6;{
				var _$parent24 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 15 };_node23.children = [];_node23.childHash = 270580814;_node23.attrSize = 2;_node23.attrHash = 162312542;_node23.attrs["w-class"] = "ga-import-item";_node23.attrs["ev-input-change"] = "walletPswConfirmChange";_$temp = _node23;{
					var _$parent25 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 16 };_node24.children = [];_node24.childHash = 2707645093;_node24.attrSize = 1;_node24.attrHash = 3215959933;_node24.attrs["w-class"] = "ga-import-item-label";_$temp = _node24;{
						var _$parent26 = _$temp;var _node25 = _installText("再次输入密码", 2740861029);;
						_$parent26.children.push(_node25);
					}_$parent25.children.push(_node24);
				}_$temp = _node23;{
					var _$parent27 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 17 };_node26.children = [];_node26.childHash = 425907670;_node26.attrSize = 1;_node26.attrHash = 965381103;_node26.attrs["w-class"] = "ga-input-father";_$temp = _node26;{
						var _$parent28 = _$temp;var _node27 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 18 };_node27.hasChild = false;_node27.child = null;_node27.childHash = 2346834623;_node27.attrHash = 0;_$temp = _node27;{
							var _$parent29 = _$temp;var _node28 = {}; //jpair pre

							{
								var _jvalue5 = "";
								_jvalue5 = "password";
								//jpair suf

								_node28["itype"] = _jvalue5;
							}
							//jpair pre

							{
								var _jvalue6 = "";
								_jvalue6 = "再次输入密码";
								//jpair suf

								_node28["placeHolder"] = _jvalue6;
							}
							_addJson(_node28, _$parent29);
						}_$parent28.children.push(_node27);
					}_$parent27.children.push(_node26);
				}_$parent24.children.push(_node23);
			}_$temp = _node6;{
				var _$parent30 = _$temp;var _node29 = { "attrs": {}, "tagName": "div", "sid": 19 };_node29.children = [];_node29.attrSize = 1;_node29.attrHash = 3667176594;{
					var _attrvalue2 = "";_attrvalue2 += "ga-psw-tip-hidden  ";_attrvalue2 += !it1.pswSame ? 'ga-psw-tip-show' : '';_attrvalue2 += "";_node29.attrs["w-class"] = _attrvalue2;
				}_node29.attrHash = _hash.nextHash(_node29.attrHash, _calTextHash(_node29.attrs["w-class"]));_$temp = _node29;{
					var _$parent31 = _$temp;var _node30 = _installText("两次输入的密码不相同", 838102749);;
					_$parent31.children.push(_node30);
				}_chFunc(_node29);_$parent30.children.push(_node29);
			}_$temp = _node6;{
				var _$parent32 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 20 };_node31.children = [];_node31.childHash = 3989439576;_node31.attrSize = 2;_node31.attrHash = 3880712409;_node31.attrs["w-class"] = "ga-import-item";_node31.attrs["ev-input-change"] = "walletPswTipsChange";_$temp = _node31;{
					var _$parent33 = _$temp;var _node32 = { "attrs": {}, "tagName": "div", "sid": 21 };_node32.children = [];_node32.childHash = 1093794078;_node32.attrSize = 1;_node32.attrHash = 3215959933;_node32.attrs["w-class"] = "ga-import-item-label";_$temp = _node32;{
						var _$parent34 = _$temp;var _node33 = _installText("提示信息（可不填）", 356474755);;
						_$parent34.children.push(_node33);
					}_$parent33.children.push(_node32);
				}_$temp = _node31;{
					var _$parent35 = _$temp;var _node34 = { "attrs": {}, "tagName": "div", "sid": 22 };_node34.children = [];_node34.childHash = 534500216;_node34.attrSize = 1;_node34.attrHash = 965381103;_node34.attrs["w-class"] = "ga-input-father";_$temp = _node34;{
						var _$parent36 = _$temp;var _node35 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 23 };_node35.hasChild = false;_node35.child = null;_node35.childHash = 815427989;_node35.attrHash = 0;_$temp = _node35;{
							var _$parent37 = _$temp;var _node36 = {}; //jpair pre

							{
								var _jvalue7 = "";
								_jvalue7 = "提示信息（可不填）";
								//jpair suf

								_node36["placeHolder"] = _jvalue7;
							}
							_addJson(_node36, _$parent37);
						}_$parent36.children.push(_node35);
					}_$parent35.children.push(_node34);
				}_$parent32.children.push(_node31);
			}_$temp = _node6;{
				var _$parent38 = _$temp;var _node37 = { "attrs": {}, "tagName": "div", "sid": 24 };_node37.children = [];_node37.childHash = 2119459271;_node37.attrSize = 2;_node37.attrHash = 342155125;_node37.attrs["w-class"] = "ga-import-protocol";_node37.attrs["ev-checkbox-click"] = "checkBoxClick";_$temp = _node37;{
					var _$parent39 = _$temp;var _node38 = { "attrs": {}, "tagName": "app-components-checkbox-checkbox", "sid": 25 };_node38.hasChild = false;_node38.child = null;_node38.childHash = 2901728037;_node38.attrHash = 0;_$temp = _node38;{
						var _$parent40 = _$temp;var _node39 = {}; //jpair pre

						{
							var _jvalue8 = "";
							_jvalue8 = "false";
							//jpair suf

							_node39["itype"] = _jvalue8;
						}
						//jpair pre

						{
							var _jvalue9 = "";
							_jvalue9 = "我已经认证阅读并同意";
							//jpair suf

							_node39["text"] = _jvalue9;
						}
						_addJson(_node39, _$parent40);
					}_$parent39.children.push(_node38);
				}_$temp = _node37;{
					var _$parent41 = _$temp;var _node40 = { "attrs": {}, "tagName": "span", "sid": 26 };_node40.children = [];_node40.childHash = 2049235899;_node40.attrSize = 2;_node40.attrHash = 3364877046;_node40.attrs["w-class"] = "ga-user-protocol";_node40.attrs["on-tap"] = "agreementClick";_$temp = _node40;{
						var _$parent42 = _$temp;var _node41 = _installText("隐私条约", 3041249419);;
						_$parent42.children.push(_node41);
					}_$parent41.children.push(_node40);
				}_$parent38.children.push(_node37);
			}_$temp = _node6;{
				var _$parent43 = _$temp;var _node42 = { "attrs": {}, "tagName": "div", "sid": 27 };_node42.children = [];_node42.attrSize = 3;_node42.attrHash = 517658158;_node42.attrs["w-class"] = "ga-import-btn";_node42.attrs["on-tap"] = "importWalletClick";{
					var _attrvalue3 = "";_attrvalue3 += "backgroundColor:";_attrvalue3 += it1.userProtocolReaded ? '#1A70DD' : 'white';_attrvalue3 += "; color : ";_attrvalue3 += it1.userProtocolReaded ? '#FFFFFF' : '#1A70DD';_attrvalue3 += ";";_node42.attrs["style"] = _attrvalue3;
				}_node42.attrHash = _hash.nextHash(_node42.attrHash, _calTextHash(_node42.attrs["style"]));_$temp = _node42;{
					var _$parent44 = _$temp;var _node43 = _installText("导入", 3214925376);;
					_$parent44.children.push(_node43);
				}_chFunc(_node42);_$parent43.children.push(_node42);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});