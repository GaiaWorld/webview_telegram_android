(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3113579527;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 3618698558;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "管理钱包";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1913054642;_node4.attrs["w-class"] = "main";{
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

					var v = _ref;
					var i = _$i++;_$temp = _node4;{
						var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 516496622;_node5.attrs["w-class"] = "items";{
							var attrvalue = "";attrvalue += "listItemClicked('";attrvalue += v.walletId;attrvalue += "')";_node5.attrs["on-tap"] = attrvalue;
						}_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["on-tap"]));_$temp = _node5;{
							var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "img", "sid": 4 };_node6.children = [];_node6.attrSize = 3;_node6.attrHash = 863670238;{
								var _attrvalue = "";_attrvalue += "../../../res/image/";_attrvalue += v.avatar;_attrvalue += "";_node6.attrs["src"] = _attrvalue;
							}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["src"]));_node6.attrs["w-class"] = "avatar";{
								var _attrvalue2 = "";_attrvalue2 += it1.curWalletId == v.walletId ? '' : 'filter: grayscale(100%);';_attrvalue2 += "";_node6.attrs["style"] = _attrvalue2;
							}_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["style"]));_chFunc(_node6);_$parent6.children.push(_node6);
						}_$temp = _node5;{
							var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 2790268932;_node7.attrs["w-class"] = "nickName";_$temp = _node7;{
								var _$parent8 = _$temp;_addText(it1.fromJSON(v.gwlt).nickName, _$parent8);
							}_chFunc(_node7);_$parent7.children.push(_node7);
						}if (!it1.fromJSON(v.gwlt).mnemonicBackup) {
							_$temp = _node5;{
								var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 6 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 3268955453;_node8.attrs["w-class"] = "backupBtn";{
									var _attrvalue3 = "";_attrvalue3 += "backupClicked('";_attrvalue3 += v.walletId;_attrvalue3 += "')";_node8.attrs["on-tap"] = _attrvalue3;
								}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["on-tap"]));_$temp = _node8;{
									var _$parent10 = _$temp;var _node9 = _installText("请备份", 3171296422);;
									_$parent10.children.push(_node9);
								}_chFunc(_node8);_$parent9.children.push(_node8);
							}
						}_chFunc(_node5);_$parent5.children.push(_node5);
					}
				}
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});