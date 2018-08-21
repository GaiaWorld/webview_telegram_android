(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 2998280543;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["w-class"] = "ga-new-page";_node.attrs["on-tap"] = "pageClick";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3880895855;_node2.attrs["w-class"] = "ga-top-banner";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = it1.gwlt.nickName;
					//jpair suf
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3019178346;_node5.attrs["w-class"] = "cardPaddingDiv";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 485493064;_node6.attrs["w-class"] = "ga-card";_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 4148888521;_node7.attrs["w-class"] = "ga-wallet-name-container";_$temp = _node7;{
							var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "img", "sid": 6 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 2277589865;_node8.attrs["w-class"] = "ga-wallet-header";{
								var attrvalue = "";attrvalue += "../../../res/image/";attrvalue += it1.wallet.avatar;attrvalue += "";_node8.attrs["src"] = attrvalue;
							}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["src"]));_chFunc(_node8);_$parent8.children.push(_node8);
						}_$temp = _node7;{
							var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "input", "sid": 7 };_node9.children = [];_node9.attrSize = 5;_node9.attrHash = 3389390358;_node9.attrs["id"] = "walletNameInput";_node9.attrs["w-class"] = "ga-input";{
								var _attrvalue = "";_attrvalue += it1.gwlt.nickName;_attrvalue += "";_node9.attrs["value"] = _attrvalue;
							}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["value"]));_node9.attrs["on-blur"] = "walletNameInputBlur";_node9.attrs["on-focus"] = "walletNameInputFocus";_chFunc(_node9);_$parent9.children.push(_node9);
						}_chFunc(_node7);_$parent7.children.push(_node7);
					}_$temp = _node6;{
						var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2118462882;_node10.attrs["w-class"] = "ga-assets";_$temp = _node10;{
							var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 9 };_node11.children = [];_node11.childHash = 1698554215;_node11.attrSize = 1;_node11.attrHash = 1542202106;_node11.attrs["w-class"] = "ga-assets-item";_$temp = _node11;{
								var _$parent12 = _$temp;var _node12 = _installText("≈", 1669375947);;
								_$parent12.children.push(_node12);
							}_$parent11.children.push(_node11);
						}_$temp = _node10;{
							var _$parent13 = _$temp;_addText(it1.totalAssets, _$parent13);
						}_$temp = _node10;{
							var _$parent14 = _$temp;var _node13 = _installText("&nbsp;CNY", 1700257245);;
							_$parent14.children.push(_node13);
						}_chFunc(_node10);_$parent10.children.push(_node10);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 3069583482;_node14.attrs["w-class"] = "ga-bottom-container";_$temp = _node14;{
				var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.childHash = 520685336;_node15.attrSize = 2;_node15.attrHash = 1262732392;_node15.attrs["w-class"] = "ga-item";_node15.attrs["on-tap"] = "changePasswordClick";_$temp = _node15;{
					var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "span", "sid": 12 };_node16.children = [];_node16.childHash = 2013369116;_node16.attrSize = 1;_node16.attrHash = 651827725;_node16.attrs["w-class"] = "ga-item-text";_$temp = _node16;{
						var _$parent18 = _$temp;var _node17 = _installText("修改交易密码", 540808860);;
						_$parent18.children.push(_node17);
					}_$parent17.children.push(_node16);
				}_$temp = _node15;{
					var _$parent19 = _$temp;var _node18 = { "attrs": {}, "tagName": "img", "sid": 13 };_node18.children = [];_node18.childHash = 0;_node18.attrSize = 2;_node18.attrHash = 1011087184;_node18.attrs["w-class"] = "ga-item-arrow";_node18.attrs["src"] = "../../../res/image/btn_right_arrow.png";_$parent19.children.push(_node18);
				}_$parent16.children.push(_node15);
			}_$temp = _node14;{
				var _$parent20 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 14 };_node19.children = [];_node19.attrSize = 1;_node19.attrHash = 857004545;_node19.attrs["w-class"] = "ga-item";if (!it1.showPswTips) {
					_$temp = _node19;{
						var _$parent21 = _$temp;var _node20 = { "attrs": {}, "tagName": "span", "sid": 15 };_node20.children = [];_node20.childHash = 532156493;_node20.attrSize = 1;_node20.attrHash = 651827725;_node20.attrs["w-class"] = "ga-item-text";_$temp = _node20;{
							var _$parent22 = _$temp;var _node21 = _installText("********", 835832309);;
							_$parent22.children.push(_node21);
						}_$parent21.children.push(_node20);
					}
				} else {
					_$temp = _node19;{
						var _$parent23 = _$temp;var _node22 = { "attrs": {}, "tagName": "input", "sid": 16 };_node22.children = [];_node22.attrSize = 5;_node22.attrHash = 538421211;_node22.attrs["id"] = "pswTipsInput";_node22.attrs["w-class"] = "ga-input-psw-tips";{
							var _attrvalue2 = "";_attrvalue2 += it1.pswTips;_attrvalue2 += "";_node22.attrs["value"] = _attrvalue2;
						}_node22.attrHash = _hash.nextHash(_node22.attrHash, _calTextHash(_node22.attrs["value"]));_node22.attrs["on-blur"] = "pswTipsInputBlur";_node22.attrs["on-focus"] = "pswTipsInputFocus";_chFunc(_node22);_$parent23.children.push(_node22);
					}
				}_$temp = _node19;{
					var _$parent24 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 17 };_node23.children = [];_node23.attrSize = 2;_node23.attrHash = 3274995599;_node23.attrs["w-class"] = "ga-psw-tips-container";_node23.attrs["on-tap"] = "pswTipsClick";_$temp = _node23;{
						var _$parent25 = _$temp;var _node24 = { "attrs": {}, "tagName": "span", "sid": 18 };_node24.children = [];_node24.childHash = 493597212;_node24.attrHash = 0;_$temp = _node24;{
							var _$parent26 = _$temp;var _node25 = _installText("密码提示", 3881850915);;
							_$parent26.children.push(_node25);
						}_$parent25.children.push(_node24);
					}_$temp = _node23;{
						var _$parent27 = _$temp;var _node26 = { "attrs": {}, "tagName": "img", "sid": 19 };_node26.children = [];_node26.attrSize = 2;_node26.attrHash = 4119194208;{
							var _attrvalue3 = "";_attrvalue3 += "../../../res/image/";_attrvalue3 += it1.showPswTips ? 'btn_display_open.png' : 'btn_display_close.png';_attrvalue3 += "";_node26.attrs["src"] = _attrvalue3;
						}_node26.attrHash = _hash.nextHash(_node26.attrHash, _calTextHash(_node26.attrs["src"]));_node26.attrs["w-class"] = "ga-img";_chFunc(_node26);_$parent27.children.push(_node26);
					}_chFunc(_node23);_$parent24.children.push(_node23);
				}_chFunc(_node19);_$parent20.children.push(_node19);
			}_$temp = _node14;{
				var _$parent28 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 20 };_node27.children = [];_node27.childHash = 3821375922;_node27.attrSize = 2;_node27.attrHash = 3996183382;_node27.attrs["w-class"] = "ga-item";_node27.attrs["on-tap"] = "exportPrivateKeyClick";_$temp = _node27;{
					var _$parent29 = _$temp;var _node28 = { "attrs": {}, "tagName": "span", "sid": 21 };_node28.children = [];_node28.childHash = 463351587;_node28.attrSize = 1;_node28.attrHash = 651827725;_node28.attrs["w-class"] = "ga-item-text";_$temp = _node28;{
						var _$parent30 = _$temp;var _node29 = _installText("导出私钥", 2400805050);;
						_$parent30.children.push(_node29);
					}_$parent29.children.push(_node28);
				}_$temp = _node27;{
					var _$parent31 = _$temp;var _node30 = { "attrs": {}, "tagName": "img", "sid": 22 };_node30.children = [];_node30.childHash = 0;_node30.attrSize = 2;_node30.attrHash = 1011087184;_node30.attrs["w-class"] = "ga-item-arrow";_node30.attrs["src"] = "../../../res/image/btn_right_arrow.png";_$parent31.children.push(_node30);
				}_$parent28.children.push(_node27);
			}_$temp = _node14;{
				var _$parent32 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 23 };_node31.children = [];_node31.childHash = 269348157;_node31.attrSize = 2;_node31.attrHash = 3434684298;_node31.attrs["w-class"] = "ga-item";_node31.attrs["on-tap"] = "bindPhone";_$temp = _node31;{
					var _$parent33 = _$temp;var _node32 = { "attrs": {}, "tagName": "span", "sid": 24 };_node32.children = [];_node32.childHash = 3475242087;_node32.attrSize = 1;_node32.attrHash = 651827725;_node32.attrs["w-class"] = "ga-item-text";_$temp = _node32;{
						var _$parent34 = _$temp;var _node33 = _installText("验证手机号", 3016216985);;
						_$parent34.children.push(_node33);
					}_$parent33.children.push(_node32);
				}_$temp = _node31;{
					var _$parent35 = _$temp;var _node34 = { "attrs": {}, "tagName": "img", "sid": 25 };_node34.children = [];_node34.childHash = 0;_node34.attrSize = 2;_node34.attrHash = 1011087184;_node34.attrs["w-class"] = "ga-item-arrow";_node34.attrs["src"] = "../../../res/image/btn_right_arrow.png";_$parent35.children.push(_node34);
				}_$parent32.children.push(_node31);
			}_$temp = _node14;{
				var _$parent36 = _$temp;var _node35 = { "attrs": {}, "tagName": "div", "sid": 26 };_node35.children = [];_node35.childHash = 2280042547;_node35.attrSize = 2;_node35.attrHash = 2923608851;_node35.attrs["w-class"] = "ga-item";_node35.attrs["on-tap"] = "signOutClick";_$temp = _node35;{
					var _$parent37 = _$temp;var _node36 = { "attrs": {}, "tagName": "span", "sid": 27 };_node36.children = [];_node36.childHash = 1316671125;_node36.attrSize = 1;_node36.attrHash = 651827725;_node36.attrs["w-class"] = "ga-item-text";_$temp = _node36;{
						var _$parent38 = _$temp;var _node37 = _installText("退出钱包", 3471507116);;
						_$parent38.children.push(_node37);
					}_$parent37.children.push(_node36);
				}_$temp = _node35;{
					var _$parent39 = _$temp;var _node38 = { "attrs": {}, "tagName": "img", "sid": 28 };_node38.children = [];_node38.childHash = 0;_node38.attrSize = 2;_node38.attrHash = 1011087184;_node38.attrs["w-class"] = "ga-item-arrow";_node38.attrs["src"] = "../../../res/image/btn_right_arrow.png";_$parent39.children.push(_node38);
				}_$parent36.children.push(_node35);
			}_chFunc(_node14);_$parent15.children.push(_node14);
		}_$temp = _node;{
			var _$parent40 = _$temp;var _node39 = { "attrs": {}, "tagName": "div", "sid": 29 };_node39.children = [];_node39.childHash = 2653848356;_node39.attrSize = 2;_node39.attrHash = 3963533752;_node39.attrs["w-class"] = "ga-wallet-backup-btn";_node39.attrs["on-tap"] = "backupMnemonic";_$temp = _node39;{
				var _$parent41 = _$temp;var _node40 = _installText("备份助记词", 1146792669);;
				_$parent41.children.push(_node40);
			}_$parent40.children.push(_node39);
		}_$temp = _node;{
			var _$parent42 = _$temp;var _node41 = { "attrs": {}, "tagName": "div", "sid": 30 };_node41.children = [];_node41.childHash = 3814856717;_node41.attrSize = 2;_node41.attrHash = 312452987;_node41.attrs["w-class"] = "ga-delete-wallet";_node41.attrs["on-tap"] = "deleteWalletClick";_$temp = _node41;{
				var _$parent43 = _$temp;var _node42 = _installText("删除钱包", 255190078);;
				_$parent43.children.push(_node42);
			}_$parent42.children.push(_node41);
		}_chFunc(_node);return _node;
	}
});