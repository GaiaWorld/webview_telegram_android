(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3413582394;_node.attrs["id"] = "backupMnemonicWordConfirm";_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 3358664653;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "备份助记词";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 2 };_node4.children = [];_node4.childHash = 4192499705;_node4.attrSize = 2;_node4.attrHash = 752871135;_node4.attrs["w-class"] = "jumpOver";_node4.attrs["on-tap"] = "jumpOver";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = _installText("跳过", 2739327954);;
				_$parent5.children.push(_node5);
			}_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 3 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 4252679546;_node6.attrs["w-class"] = "body";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.childHash = 2256582562;_node7.attrSize = 1;_node7.attrHash = 1981747992;_node7.attrs["w-class"] = "bodyTitle";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = _installText("确认你的助记词", 3336535141);;
					_$parent8.children.push(_node8);
				}_$parent7.children.push(_node7);
			}_$temp = _node6;{
				var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 5 };_node9.children = [];_node9.childHash = 2362549016;_node9.attrSize = 1;_node9.attrHash = 819962544;_node9.attrs["w-class"] = "tips";_$temp = _node9;{
					var _$parent10 = _$temp;var _node10 = _installText("请按顺序选择您刚才抄写的助记词", 3512178298);;
					_$parent10.children.push(_node10);
				}_$parent9.children.push(_node9);
			}_$temp = _node6;{
				var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 6 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 3807270382;_node11.attrs["w-class"] = "screen";{
					var _$i = 0;
					for (var _iterator = it1.confirmedMnemonic, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
						var index = _$i++;_$temp = _node11;{
							var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "span", "sid": 7 };_node12.children = [];_node12.attrSize = 2;_node12.attrHash = 800669928;_node12.attrs["w-class"] = "screenItem";{
								var attrvalue = "";attrvalue += "confirmedMnemonicItemClick(e,";attrvalue += index;attrvalue += ")";_node12.attrs["on-tap"] = attrvalue;
							}_node12.attrHash = _hash.nextHash(_node12.attrHash, _calTextHash(_node12.attrs["on-tap"]));_$temp = _node12;{
								var _$parent13 = _$temp;_addText(item.word, _$parent13);
							}_chFunc(_node12);_$parent12.children.push(_node12);
						}
					}
				}_chFunc(_node11);_$parent11.children.push(_node11);
			}_$temp = _node6;{
				var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 1253124464;_node13.attrs["w-class"] = "itemsBox";{
					var _$i2 = 0;
					for (var _iterator2 = it1.shuffledMnemonic, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
						var _ref2;

						if (_isArray2) {
							if (_i2 >= _iterator2.length) break;
							_ref2 = _iterator2[_i2++];
						} else {
							_i2 = _iterator2.next();
							if (_i2.done) break;
							_ref2 = _i2.value;
						}

						var _item = _ref2;
						var _index = _$i2++;_$temp = _node13;{
							var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 9 };_node14.children = [];_node14.attrSize = 2;_node14.attrHash = 2999699873;{
								var _attrvalue = "";_attrvalue += "item ";_attrvalue += _item.isActive ? 'checked' : '';_attrvalue += "";_node14.attrs["w-class"] = _attrvalue;
							}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["w-class"]));{
								var _attrvalue2 = "";_attrvalue2 += "shuffledMnemonicItemClick(e,";_attrvalue2 += _index;_attrvalue2 += ")";_node14.attrs["on-tap"] = _attrvalue2;
							}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["on-tap"]));_$temp = _node14;{
								var _$parent16 = _$temp;_addText(_item.word, _$parent16);
							}_chFunc(_node14);_$parent15.children.push(_node14);
						}
					}
				}_chFunc(_node13);_$parent14.children.push(_node13);
			}_$temp = _node6;{
				var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 10 };_node15.children = [];_node15.childHash = 947222333;_node15.attrSize = 1;_node15.attrHash = 2461161729;_node15.attrs["w-class"] = "btnBox";_$temp = _node15;{
					var _$parent18 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 11 };_node16.children = [];_node16.childHash = 222228824;_node16.attrSize = 2;_node16.attrHash = 370845402;_node16.attrs["w-class"] = "btn";_node16.attrs["on-tap"] = "nextStepClick";_$temp = _node16;{
						var _$parent19 = _$temp;var _node17 = _installText("完成", 3396534408);;
						_$parent19.children.push(_node17);
					}_$parent18.children.push(_node16);
				}_$parent17.children.push(_node15);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});