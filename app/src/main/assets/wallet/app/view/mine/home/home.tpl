(function (_cfg, it, it1) {
				var _$temp = void 0,
				    node = void 0;_$temp = node;{
								var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 4285755435;_node.attrs["class"] = "ga-new-page";_node.attrs["style"] = "background-color: #f9f9f9;";_$temp = _node;{
												var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 3584035190;_node2.attrs["w-class"] = "ga-top-banner";_node2.attrs["on-tap"] = "walletManagementClick";_$temp = _node2;{
																var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "span", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3072105167;_node3.attrs["w-class"] = "ga-banner-title";_$temp = _node3;{
																				var _$parent4 = _$temp;_addText(it1.walletName ? it1.walletName : "我的钱包", _$parent4);
																}_chFunc(_node3);_$parent3.children.push(_node3);
												}_$temp = _node2;{
																var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3966724626;_node4.attrs["w-class"] = "ga-banner-btn-Box";if (!it1.mnemonicBackup && (it1.wallet || it1.walletList.length > 0)) {
																				_$temp = _node4;{
																								var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.childHash = 4158244149;_node5.attrSize = 2;_node5.attrHash = 1764441726;_node5.attrs["w-class"] = "ga-banner-btn";_node5.attrs["on-tap"] = "backupClick";_$temp = _node5;{
																												var _$parent7 = _$temp;var _node6 = _installText("请备份", 3171296422);;
																												_$parent7.children.push(_node6);
																								}_$parent6.children.push(_node5);
																				}
																}_$temp = _node4;{
																				var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 5 };_node7.children = [];_node7.childHash = 0;_node7.attrSize = 2;_node7.attrHash = 734893753;_node7.attrs["src"] = "../../res/image/cloud_arow_right.png";_node7.attrs["w-class"] = "arowIcon";_$parent8.children.push(_node7);
																}_chFunc(_node4);_$parent5.children.push(_node4);
												}_chFunc(_node2);_$parent2.children.push(_node2);
								}_$temp = _node;{
												var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrHash = 0;{
																var _$i = 0;
																for (var _iterator = it1.mineList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
																				var _ref;

																				if (_isArray) {
																								if (_i >= _iterator.length) break;
																								_ref = _iterator[_i++];
																				} else {
																								_i = _iterator.next();
																								if (_i.done) break;
																								_ref = _i.value;
																				}

																				var item = _ref;
																				var index = _$i++;_$temp = _node8;{
																								var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 3;_node9.attrHash = 1567402254;_node9.attrs["w-class"] = "ga-item";{
																												var attrvalue = "";attrvalue += "itemClick(e,";attrvalue += index;attrvalue += ")";_node9.attrs["on-tap"] = attrvalue;
																								}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["on-tap"]));{
																												var _attrvalue = "";_attrvalue += index == 2 ? 'border-bottom:none' : '';_attrvalue += "";_node9.attrs["style"] = _attrvalue;
																								}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["style"]));_$temp = _node9;{
																												var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "img", "sid": 8 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 70366608;{
																																var _attrvalue2 = "";_attrvalue2 += "../../../res/image/";_attrvalue2 += item.icon;_attrvalue2 += "";_node10.attrs["src"] = _attrvalue2;
																												}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["src"]));_node10.attrs["w-class"] = "ga-item-icon";_chFunc(_node10);_$parent11.children.push(_node10);
																								}_$temp = _node9;{
																												var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 9 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 651827725;_node11.attrs["w-class"] = "ga-item-text";_$temp = _node11;{
																																var _$parent13 = _$temp;_addText(item.text, _$parent13);
																												}_chFunc(_node11);_$parent12.children.push(_node11);
																								}_$temp = _node9;{
																												var _$parent14 = _$temp;var _node12 = { "attrs": {}, "tagName": "img", "sid": 10 };_node12.children = [];_node12.childHash = 0;_node12.attrSize = 2;_node12.attrHash = 4107950578;_node12.attrs["src"] = "../../../res/image/btn_right_arrow.png";_node12.attrs["w-class"] = "ga-item-arrow";_$parent14.children.push(_node12);
																								}_chFunc(_node9);_$parent10.children.push(_node9);
																				}
																}
												}_chFunc(_node8);_$parent9.children.push(_node8);
								}_chFunc(_node);return _node;
				}
});