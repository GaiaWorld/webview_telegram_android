(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;it = it.ind || 1;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1839940969;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["style"] = "background-color: #fff;";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = it == 1 ? "矿山排名" : "挖矿排名";
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 2946814719;_node4.attrSize = 1;_node4.attrHash = 605715806;_node4.attrs["style"] = "height: 10px;background: #F8F8F8";_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 3;_node5.attrHash = 3800650917;_node5.attrs["style"] = "height: 100%;overflow-x: hidden;overflow-y: auto;";_node5.attrs["on-scroll"] = "getMoreList";_node5.attrs["id"] = "ranklist";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 244211666;_node6.attrs["w-class"] = "rankItem";_node6.attrs["style"] = "color: #A0ACC0;";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 5 };_node7.children = [];_node7.childHash = 159592564;_node7.attrSize = 1;_node7.attrHash = 3101826641;_node7.attrs["style"] = "margin-left: 50px;";_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = _installText("排名", 3241587341);;
						_$parent8.children.push(_node8);
					}_$parent7.children.push(_node7);
				}_$temp = _node6;{
					var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "span", "sid": 6 };_node9.children = [];_node9.childHash = 820605687;_node9.attrSize = 1;_node9.attrHash = 1786584261;_node9.attrs["style"] = "margin-left: 67px;";_$temp = _node9;{
						var _$parent10 = _$temp;var _node10 = _installText("昵称", 1301170364);;
						_$parent10.children.push(_node10);
					}_$parent9.children.push(_node9);
				}_$temp = _node6;{
					var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 7 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 3147569790;_node11.attrs["style"] = "float: right;margin-right: 30px;";_$temp = _node11;{
						var _$parent12 = _$temp;_addText(it == 1 ? "矿山" : "挖矿", _$parent12);
					}_$temp = _node11;{
						var _$parent13 = _$temp;var _node12 = _installText("总量(KT)", 3873893271);;
						_$parent13.children.push(_node12);
					}_chFunc(_node11);_$parent11.children.push(_node11);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}{
				var _$i = 0;
				for (var _iterator = it1.gainRank, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref;

					if (_isArray) {
						if (_i >= _iterator.length) break;
						_ref = _iterator[_i++];
					} else {
						_i = _iterator.next();
						if (_i.done) break;
						_ref = _i.value;
					}

					var val = _ref;
					var ind = _$i++;_$temp = _node5;{
						var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.attrSize = 2;_node13.attrHash = 327995047;_node13.attrs["w-class"] = "rankItem";_node13.attrs["style"] = "color: #666666;";_$temp = _node13;{
							var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "span", "sid": 9 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 1654647318;{
								var attrvalue = "";attrvalue += "margin-left: 50px;font-weight: 600;color: ";attrvalue += ind <= 10 ? '#F17835' : '#111111';attrvalue += "";_node14.attrs["style"] = attrvalue;
							}_node14.attrHash = _hash.nextHash(_node14.attrHash, _calTextHash(_node14.attrs["style"]));_$temp = _node14;{
								var _$parent16 = _$temp;_addText(val.index, _$parent16);
							}_chFunc(_node14);_$parent15.children.push(_node14);
						}_$temp = _node13;{
							var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "span", "sid": 10 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 1786584261;_node15.attrs["style"] = "margin-left: 67px;";_$temp = _node15;{
								var _$parent18 = _$temp;_addText(val.name, _$parent18);
							}_chFunc(_node15);_$parent17.children.push(_node15);
						}_$temp = _node13;{
							var _$parent19 = _$temp;var _node16 = { "attrs": {}, "tagName": "span", "sid": 11 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 1225994188;_node16.attrs["style"] = "float: right;margin-right: 30px;font-weight: 600;";_$temp = _node16;{
								var _$parent20 = _$temp;_addText(val.num, _$parent20);
							}_chFunc(_node16);_$parent19.children.push(_node16);
						}_chFunc(_node13);_$parent14.children.push(_node13);
					}
				}
			}_$temp = _node5;{
				var _$parent21 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 12 };_node17.children = [];_node17.childHash = 2946814719;_node17.attrSize = 2;_node17.attrHash = 166472800;_node17.attrs["style"] = "height: 128px;";_node17.attrs["id"] = "more";_$parent21.children.push(_node17);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});