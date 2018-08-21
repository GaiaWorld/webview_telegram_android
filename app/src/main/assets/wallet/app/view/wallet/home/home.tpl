(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 822266151;_node.attrs["class"] = "ga-new-page hide-scrollbar";_node.attrs["on-move"] = "pageScroll";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 745646591;_node2.attrs["id"] = "page";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 2225329733;_node3.attrs["id"] = "gaHeader";_node3.attrs["w-class"] = "ga-header-Outer";if (it1.gwlt) {
																				_$temp = _node3;{
																								var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3958917665;_node4.attrs["w-class"] = "ga-header";_$temp = _node4;{
																												var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 4148888521;_node5.attrs["w-class"] = "ga-wallet-name-container";_$temp = _node5;{
																																var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 5 };_node6.children = [];_node6.attrSize = 3;_node6.attrHash = 1428330914;_node6.attrs["w-class"] = "ga-wallet-header";{
																																				var attrvalue = "";attrvalue += "../../../res/image/";attrvalue += it1.wallet.avatar;attrvalue += "";_node6.attrs["src"] = attrvalue;
																																}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["src"]));_node6.attrs["on-tap"] = "switchWalletClick";_chFunc(_node6);_$parent6.children.push(_node6);
																												}_$temp = _node5;{
																																var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 6 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 2123616223;_node7.attrs["w-class"] = "ga-wallet-name";_node7.attrs["on-tap"] = "switchWalletClick";_$temp = _node7;{
																																				var _$parent8 = _$temp;_addText(it1.gwlt.nickName, _$parent8);
																																}_chFunc(_node7);_$parent7.children.push(_node7);
																												}_chFunc(_node5);_$parent5.children.push(_node5);
																								}_$temp = _node4;{
																												var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 3545894166;_node8.attrs["w-class"] = "ga-assets-container";_$temp = _node8;{
																																var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1406660402;_node9.attrs["w-class"] = "ga-assets-box";_$temp = _node9;{
																																				var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 9 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 2118462882;_node10.attrs["w-class"] = "ga-assets";_$temp = _node10;{
																																								var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 10 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 2920714695;_node11.attrs["w-class"] = "ga-box";_$temp = _node11;{
																																												var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "span", "sid": 11 };_node12.children = [];_node12.childHash = 2050950902;_node12.attrSize = 1;_node12.attrHash = 382413218;_node12.attrs["w-class"] = "ga-assets-symbol";_$temp = _node12;{
																																																var _$parent14 = _$temp;var _node13 = _installText("≈￥", 3239443134);;
																																																_$parent14.children.push(_node13);
																																												}_$parent13.children.push(_node12);
																																								}_$temp = _node11;{
																																												var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "span", "sid": 12 };_node14.children = [];_node14.attrHash = 0;_$temp = _node14;{
																																																var _$parent16 = _$temp;_addText(it1.hiddenAssets ? it1.totalAssets.replace(/[0-9]/g, '-') : it1.totalAssets, _$parent16);
																																												}_chFunc(_node14);_$parent15.children.push(_node14);
																																								}_chFunc(_node11);_$parent12.children.push(_node11);
																																				}_$temp = _node10;{
																																								var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "img", "sid": 13 };_node15.children = [];_node15.attrSize = 3;_node15.attrHash = 2671926847;{
																																												var _attrvalue = "";_attrvalue += "../../../res/image/";_attrvalue += it1.hiddenAssets ? 'btn_display_close_v2' : 'btn_display_open_v2';_attrvalue += ".png";_node15.attrs["src"] = _attrvalue;
																																								}_node15.attrHash = _hash.nextHash(_node15.attrHash, _calTextHash(_node15.attrs["src"]));_node15.attrs["w-class"] = "ga-hidden";_node15.attrs["on-tap"] = "hiddenAssetsClick";_chFunc(_node15);_$parent17.children.push(_node15);
																																				}_chFunc(_node10);_$parent11.children.push(_node10);
																																}_chFunc(_node9);_$parent10.children.push(_node9);
																												}_$temp = _node8;{
																																var _$parent18 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 14 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 908290051;_node16.attrs["w-class"] = "ga-profit";_$temp = _node16;{
																																				var _$parent19 = _$temp;var _node17 = _installText("今日盈利 ￥", 3219033595);;
																																				_$parent19.children.push(_node17);
																																}_$temp = _node16;{
																																				var _$parent20 = _$temp;_addText(it1.hiddenAssets ? '-.--' : '0.00', _$parent20);
																																}_chFunc(_node16);_$parent18.children.push(_node16);
																												}_chFunc(_node8);_$parent9.children.push(_node8);
																								}_$temp = _node4;{
																												var _$parent21 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 15 };_node18.children = [];_node18.childHash = 2122744287;_node18.attrSize = 1;_node18.attrHash = 3614624660;_node18.attrs["w-class"] = "ga-add-container";_$temp = _node18;{
																																var _$parent22 = _$temp;var _node19 = { "attrs": {}, "tagName": "img", "sid": 16 };_node19.children = [];_node19.childHash = 0;_node19.attrSize = 3;_node19.attrHash = 3888313088;_node19.attrs["w-class"] = "ga-add-currency";_node19.attrs["src"] = "../../../res/image/btn_add_money.png";_node19.attrs["on-tap"] = "clickAddCurrencyListener";_$parent22.children.push(_node19);
																												}_$parent21.children.push(_node18);
																								}_chFunc(_node4);_$parent4.children.push(_node4);
																				}
																} else {
																				_$temp = _node3;{
																								var _$parent23 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 17 };_node20.children = [];_node20.attrSize = 2;_node20.attrHash = 2080490822;_node20.attrs["w-class"] = "ga-header";_node20.attrs["id"] = "gaHeader";_$temp = _node20;{
																												var _$parent24 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 18 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 4148888521;_node21.attrs["w-class"] = "ga-wallet-name-container";_$temp = _node21;{
																																var _$parent25 = _$temp;var _node22 = { "attrs": {}, "tagName": "span", "sid": 19 };_node22.children = [];_node22.attrSize = 2;_node22.attrHash = 3024093192;_node22.attrs["w-class"] = "ga-wallet-name";_node22.attrs["on-tap"] = "createWalletClick";_$temp = _node22;{
																																				var _$parent26 = _$temp;_addText(it1.otherWallets ? '选择钱包' : '创建钱包', _$parent26);
																																}_chFunc(_node22);_$parent25.children.push(_node22);
																												}_chFunc(_node21);_$parent24.children.push(_node21);
																								}_$temp = _node20;{
																												var _$parent27 = _$temp;var _node23 = { "attrs": {}, "tagName": "div", "sid": 20 };_node23.children = [];_node23.attrSize = 1;_node23.attrHash = 3545894166;_node23.attrs["w-class"] = "ga-assets-container";_$temp = _node23;{
																																var _$parent28 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 21 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 1406660402;_node24.attrs["w-class"] = "ga-assets-box";_$temp = _node24;{
																																				var _$parent29 = _$temp;var _node25 = { "attrs": {}, "tagName": "span", "sid": 22 };_node25.children = [];_node25.attrSize = 1;_node25.attrHash = 2118462882;_node25.attrs["w-class"] = "ga-assets";_$temp = _node25;{
																																								var _$parent30 = _$temp;var _node26 = { "attrs": {}, "tagName": "div", "sid": 23 };_node26.children = [];_node26.attrSize = 1;_node26.attrHash = 2920714695;_node26.attrs["w-class"] = "ga-box";_$temp = _node26;{
																																												var _$parent31 = _$temp;var _node27 = { "attrs": {}, "tagName": "span", "sid": 24 };_node27.children = [];_node27.childHash = 2050950902;_node27.attrSize = 1;_node27.attrHash = 382413218;_node27.attrs["w-class"] = "ga-assets-symbol";_$temp = _node27;{
																																																var _$parent32 = _$temp;var _node28 = _installText("≈￥", 3239443134);;
																																																_$parent32.children.push(_node28);
																																												}_$parent31.children.push(_node27);
																																								}_$temp = _node26;{
																																												var _$parent33 = _$temp;var _node29 = { "attrs": {}, "tagName": "span", "sid": 25 };_node29.children = [];_node29.attrHash = 0;_$temp = _node29;{
																																																var _$parent34 = _$temp;_addText(it1.hiddenAssets ? it1.totalAssets.toFixed(2).replace(/./g, '*') : it1.totalAssets.toFixed(2), _$parent34);
																																												}_chFunc(_node29);_$parent33.children.push(_node29);
																																								}_chFunc(_node26);_$parent30.children.push(_node26);
																																				}_$temp = _node25;{
																																								var _$parent35 = _$temp;var _node30 = { "attrs": {}, "tagName": "img", "sid": 26 };_node30.children = [];_node30.attrSize = 3;_node30.attrHash = 2671926847;{
																																												var _attrvalue2 = "";_attrvalue2 += "../../../res/image/";_attrvalue2 += it1.hiddenAssets ? 'btn_display_close_v2' : 'btn_display_open_v2';_attrvalue2 += ".png";_node30.attrs["src"] = _attrvalue2;
																																								}_node30.attrHash = _hash.nextHash(_node30.attrHash, _calTextHash(_node30.attrs["src"]));_node30.attrs["w-class"] = "ga-hidden";_node30.attrs["on-tap"] = "hiddenAssetsClick";_chFunc(_node30);_$parent35.children.push(_node30);
																																				}_chFunc(_node25);_$parent29.children.push(_node25);
																																}_chFunc(_node24);_$parent28.children.push(_node24);
																												}_$temp = _node23;{
																																var _$parent36 = _$temp;var _node31 = { "attrs": {}, "tagName": "div", "sid": 27 };_node31.children = [];_node31.attrSize = 1;_node31.attrHash = 908290051;_node31.attrs["w-class"] = "ga-profit";_$temp = _node31;{
																																				var _$parent37 = _$temp;var _node32 = _installText("今日盈利 ￥", 3219033595);;
																																				_$parent37.children.push(_node32);
																																}_$temp = _node31;{
																																				var _$parent38 = _$temp;_addText(it1.hiddenAssets ? '-.--' : '0.00', _$parent38);
																																}_chFunc(_node31);_$parent36.children.push(_node31);
																												}_chFunc(_node23);_$parent27.children.push(_node23);
																								}_chFunc(_node20);_$parent23.children.push(_node20);
																				}
																}_$temp = _node3;{
																				var _$parent39 = _$temp;var _node33 = { "attrs": {}, "tagName": "div", "sid": 28 };_node33.children = [];_node33.attrSize = 2;_node33.attrHash = 1210756652;_node33.attrs["on-tap"] = "backupWalletClick";_node33.attrs["w-class"] = "ga-float-box";_$temp = _node33;{
																								var _$parent40 = _$temp;var _node34 = { "attrs": {}, "tagName": "span", "sid": 29 };_node34.children = [];_node34.childHash = 2946814719;_node34.attrSize = 1;_node34.attrHash = 1289859383;_node34.attrs["w-class"] = "iconSpan";_$parent40.children.push(_node34);
																				}_$temp = _node33;{
																								var _$parent41 = _$temp;var _node35 = { "attrs": {}, "tagName": "span", "sid": 30 };_node35.children = [];_node35.attrSize = 1;_node35.attrHash = 3318118676;_node35.attrs["style"] = "flex-grow: 1;";_$temp = _node35;{
																												var _$parent42 = _$temp;_addText(it1.floatBoxTip, _$parent42);
																								}_chFunc(_node35);_$parent41.children.push(_node35);
																				}_$temp = _node33;{
																								var _$parent43 = _$temp;var _node36 = { "attrs": {}, "tagName": "img", "sid": 31 };_node36.children = [];_node36.childHash = 0;_node36.attrSize = 2;_node36.attrHash = 3860710240;_node36.attrs["src"] = "../../../res/image/right_arrow.png";_node36.attrs["w-class"] = "ga-arrow-img";_$parent43.children.push(_node36);
																				}_chFunc(_node33);_$parent39.children.push(_node33);
																}_chFunc(_node3);_$parent3.children.push(_node3);
												}_$temp = _node2;{
																var _$parent44 = _$temp;var _node37 = { "attrs": {}, "tagName": "div", "sid": 32 };_node37.children = [];_node37.attrSize = 1;_node37.attrHash = 2023363034;_node37.attrs["w-class"] = "ga-currency-list-container";_$temp = _node37;{
																				var _$parent45 = _$temp;var _node38 = { "attrs": {}, "tagName": "ul", "sid": 33 };_node38.children = [];_node38.attrSize = 2;_node38.attrHash = 3014213770;_node38.attrs["id"] = "currencyList";_node38.attrs["w-class"] = "ga-currency-list";{
																								var _$i = 0;
																								for (var _iterator = it1.currencyList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																												var _ref;

																												if (_isArray) {
																																if (_i >= _iterator.length) break;
																																_ref = _iterator[_i++];
																												} else {
																																_i = _iterator.next();
																																if (_i.done) break;
																																_ref = _i.value;
																												}

																												var currency = _ref;
																												var index = _$i++;_$temp = _node38;{
																																var _$parent46 = _$temp;var _node39 = { "attrs": {}, "tagName": "li", "sid": 34 };_node39.children = [];_node39.attrSize = 2;_node39.attrHash = 3413669873;_node39.attrs["w-class"] = "ga-currency-item";{
																																				var _attrvalue3 = "";_attrvalue3 += "clickCurrencyItemListener(e,";_attrvalue3 += index;_attrvalue3 += ")";_node39.attrs["on-tap"] = _attrvalue3;
																																}_node39.attrHash = _hash.nextHash(_node39.attrHash, _calTextHash(_node39.attrs["on-tap"]));_$temp = _node39;{
																																				var _$parent47 = _$temp;var _node40 = { "attrs": {}, "tagName": "div", "sid": 35 };_node40.children = [];_node40.attrSize = 1;_node40.attrHash = 775442201;_node40.attrs["w-class"] = "ga-currency-logo-container";_$temp = _node40;{
																																								var _$parent48 = _$temp;var _node41 = { "attrs": {}, "tagName": "img", "sid": 36 };_node41.children = [];_node41.attrSize = 2;_node41.attrHash = 3864030014;{
																																												var _attrvalue4 = "";_attrvalue4 += "../../../res/image/currency/";_attrvalue4 += currency.currencyName;_attrvalue4 += ".png";_node41.attrs["src"] = _attrvalue4;
																																								}_node41.attrHash = _hash.nextHash(_node41.attrHash, _calTextHash(_node41.attrs["src"]));_node41.attrs["w-class"] = "ga-currency-logo";_chFunc(_node41);_$parent48.children.push(_node41);
																																				}_chFunc(_node40);_$parent47.children.push(_node40);
																																}_$temp = _node39;{
																																				var _$parent49 = _$temp;var _node42 = { "attrs": {}, "tagName": "div", "sid": 37 };_node42.children = [];_node42.attrSize = 1;_node42.attrHash = 29917491;_node42.attrs["w-class"] = "ga-item-right-container";_$temp = _node42;{
																																								var _$parent50 = _$temp;var _node43 = { "attrs": {}, "tagName": "div", "sid": 38 };_node43.children = [];_node43.attrSize = 1;_node43.attrHash = 4222371030;_node43.attrs["w-class"] = "ga-item-top-container";_$temp = _node43;{
																																												var _$parent51 = _$temp;var _node44 = { "attrs": {}, "tagName": "div", "sid": 39 };_node44.children = [];_node44.attrSize = 1;_node44.attrHash = 2522646661;_node44.attrs["w-class"] = "ga-curreny-name";_$temp = _node44;{
																																																var _$parent52 = _$temp;_addText(currency.currencyName, _$parent52);
																																												}_chFunc(_node44);_$parent51.children.push(_node44);
																																								}_$temp = _node43;{
																																												var _$parent53 = _$temp;var _node45 = { "attrs": {}, "tagName": "div", "sid": 40 };_node45.children = [];_node45.attrSize = 1;_node45.attrHash = 262192867;_node45.attrs["w-class"] = "ga-curreny-balance";_$temp = _node45;{
																																																var _$parent54 = _$temp;_addText(currency.balance, _$parent54);
																																												}_chFunc(_node45);_$parent53.children.push(_node45);
																																								}_chFunc(_node43);_$parent50.children.push(_node43);
																																				}_$temp = _node42;{
																																								var _$parent55 = _$temp;var _node46 = { "attrs": {}, "tagName": "div", "sid": 41 };_node46.children = [];_node46.attrSize = 1;_node46.attrHash = 3209197582;_node46.attrs["w-class"] = "ga-item-bottom-container";_$temp = _node46;{
																																												var _$parent56 = _$temp;var _node47 = { "attrs": {}, "tagName": "div", "sid": 42 };_node47.children = [];_node47.attrSize = 1;_node47.attrHash = 4262156754;_node47.attrs["w-class"] = "ga-curreny-full-name";_$temp = _node47;{
																																																var _$parent57 = _$temp;_addText(currency.currencyFullName, _$parent57);
																																												}_chFunc(_node47);_$parent56.children.push(_node47);
																																								}_$temp = _node46;{
																																												var _$parent58 = _$temp;var _node48 = { "attrs": {}, "tagName": "div", "sid": 43 };_node48.children = [];_node48.attrSize = 1;_node48.attrHash = 3535551149;_node48.attrs["w-class"] = "ga-curreny-balance-value";_$temp = _node48;{
																																																var _$parent59 = _$temp;var _node49 = _installText("≈", 1669375947);;
																																																_$parent59.children.push(_node49);
																																												}_$temp = _node48;{
																																																var _$parent60 = _$temp;_addText(currency.balanceValue, _$parent60);
																																												}_$temp = _node48;{
																																																var _$parent61 = _$temp;var _node50 = _installText("&nbsp;CNY", 1700257245);;
																																																_$parent61.children.push(_node50);
																																												}_chFunc(_node48);_$parent58.children.push(_node48);
																																								}_chFunc(_node46);_$parent55.children.push(_node46);
																																				}_chFunc(_node42);_$parent49.children.push(_node42);
																																}_chFunc(_node39);_$parent46.children.push(_node39);
																												}
																								}
																				}_chFunc(_node38);_$parent45.children.push(_node38);
																}_chFunc(_node37);_$parent44.children.push(_node37);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent62 = _$temp;var _node51 = { "attrs": {}, "tagName": "div", "sid": 44 };_node51.children = [];_node51.attrSize = 2;_node51.attrHash = 1662129173;_node51.attrs["id"] = "hideHead";_node51.attrs["w-class"] = "hideHeadOuter";_$temp = _node51;{
																var _$parent63 = _$temp;var _node52 = { "attrs": {}, "tagName": "div", "sid": 45 };_node52.children = [];_node52.attrSize = 1;_node52.attrHash = 2238630696;_node52.attrs["w-class"] = "hideHead";_$temp = _node52;{
																				var _$parent64 = _$temp;var _node53 = { "attrs": {}, "tagName": "span", "sid": 46 };_node53.children = [];_node53.attrHash = 0;_$temp = _node53;{
																								var _$parent65 = _$temp;var _node54 = { "attrs": {}, "tagName": "span", "sid": 47 };_node54.children = [];_node54.childHash = 3607555440;_node54.attrSize = 1;_node54.attrHash = 331284326;_node54.attrs["w-class"] = "currencyIcon";_$temp = _node54;{
																												var _$parent66 = _$temp;var _node55 = _installText("￥", 3615707983);;
																												_$parent66.children.push(_node55);
																								}_$parent65.children.push(_node54);
																				}_$temp = _node53;{
																								var _$parent67 = _$temp;_addText(it1.totalAssets, _$parent67);
																				}_chFunc(_node53);_$parent64.children.push(_node53);
																}_$temp = _node52;{
																				var _$parent68 = _$temp;var _node56 = { "attrs": {}, "tagName": "img", "sid": 48 };_node56.children = [];_node56.childHash = 0;_node56.attrSize = 2;_node56.attrHash = 3986282625;_node56.attrs["src"] = "../../../res/image/img_avatar1.png";_node56.attrs["w-class"] = "hidetitleHeadImg";_$parent68.children.push(_node56);
																}_chFunc(_node52);_$parent63.children.push(_node52);
												}_chFunc(_node51);_$parent62.children.push(_node51);
								}_chFunc(_node);return _node;
				}
});