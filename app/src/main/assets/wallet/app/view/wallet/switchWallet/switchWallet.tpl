(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3688825704;_node.attrs["class"] = "ga-new-page";{
												var attrvalue = "";attrvalue += "ga-switch-wallet-page ";attrvalue += it1.close ? 'ga-switch-wallet-page-hidden' : '';attrvalue += "";_node.attrs["w-class"] = attrvalue;
								}_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2946814719;_node2.attrSize = 2;_node2.attrHash = 3505782811;_node2.attrs["w-class"] = "ga-switch-wallet-left";_node2.attrs["on-tap"] = "closePageClick";_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3756741148;{
																var _attrvalue = "";_attrvalue += "ga-switch-wallet-right ";_attrvalue += it1.close ? 'ga-switch-wallet-right-hidden' : '';_attrvalue += "";_node3.attrs["w-class"] = _attrvalue;
												}_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));_$temp = _node3;{
																var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 308651146;_node4.attrs["w-class"] = "ga-wallet-container";{
																				var _$i = 0;
																				for (var _iterator = it1.walletList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																								var _ref;

																								if (_isArray) {
																												if (_i >= _iterator.length) break;
																												_ref = _iterator[_i++];
																								} else {
																												_i = _iterator.next();
																												if (_i.done) break;
																												_ref = _i.value;
																								}

																								var wallet = _ref;
																								var index = _$i++;_$temp = _node4;{
																												var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 4148392891;{
																																var _attrvalue2 = "";_attrvalue2 += "ga-wallet-item ";_attrvalue2 += wallet.walletId === it1.curWalletId ? 'ga-wallet-item-active' : '';_attrvalue2 += "";_node5.attrs["w-class"] = _attrvalue2;
																												}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-class"]));{
																																var _attrvalue3 = "";_attrvalue3 += "switchWalletClick(e,";_attrvalue3 += index;_attrvalue3 += ",";_attrvalue3 += wallet.walletId === it1.curWalletId;_attrvalue3 += ")";_node5.attrs["on-tap"] = _attrvalue3;
																												}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["on-tap"]));_$temp = _node5;{
																																var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 5 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 2277589865;_node6.attrs["w-class"] = "ga-wallet-header";{
																																				var _attrvalue4 = "";_attrvalue4 += "../../../res/image/";_attrvalue4 += wallet.avatar;_attrvalue4 += "";_node6.attrs["src"] = _attrvalue4;
																																}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["src"]));_chFunc(_node6);_$parent6.children.push(_node6);
																												}_$temp = _node5;{
																																var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 1593420403;_node7.attrs["w-class"] = "ga-wallet-item-name";_$temp = _node7;{
																																				var _$parent8 = _$temp;_addText(it1.nickNameInterception(wallet.gwlt.nickName), _$parent8);
																																}_chFunc(_node7);_$parent7.children.push(_node7);
																												}_chFunc(_node5);_$parent5.children.push(_node5);
																								}
																				}
																}_chFunc(_node4);_$parent4.children.push(_node4);
												}_$temp = _node3;{
																var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.childHash = 1292287985;_node8.attrSize = 1;_node8.attrHash = 3069583482;_node8.attrs["w-class"] = "ga-bottom-container";_$temp = _node8;{
																				var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 8 };_node9.children = [];_node9.childHash = 3587450834;_node9.attrSize = 2;_node9.attrHash = 2149080673;_node9.attrs["w-class"] = "ga-import-wallet";_node9.attrs["on-tap"] = "importWalletClick";_$temp = _node9;{
																								var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 9 };_node10.children = [];_node10.childHash = 3737372306;_node10.attrSize = 1;_node10.attrHash = 1126701879;_node10.attrs["w-class"] = "ga-text";_$temp = _node10;{
																												var _$parent12 = _$temp;var _node11 = _installText("添加钱包", 1768325899);;
																												_$parent12.children.push(_node11);
																								}_$parent11.children.push(_node10);
																				}_$parent10.children.push(_node9);
																}_$parent9.children.push(_node8);
												}_chFunc(_node3);_$parent3.children.push(_node3);
								}_chFunc(_node);return _node;
				}
});