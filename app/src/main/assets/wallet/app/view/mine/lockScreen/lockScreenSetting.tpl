(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1957018759;_node.attrs["class"] = "ga-new-page";_node.attrs["w-class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 1564520664;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "锁屏密码";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 2946814719;_node4.attrSize = 1;_node4.attrHash = 1997455202;_node4.attrs["w-class"] = "ga-line";_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 857004545;_node5.attrs["w-class"] = "ga-item";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 4 };_node6.children = [];_node6.childHash = 2439846357;_node6.attrHash = 0;_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = _installText("开启锁屏密码", 3595237826);;
					_$parent7.children.push(_node7);
				}_$parent6.children.push(_node6);
			}_$temp = _node5;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 1473445354;{
					var attrvalue = "";attrvalue += it1.openLockScreen ? 'switch-choose' : 'switch';attrvalue += "";_node8.attrs["w-class"] = attrvalue;
				}_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["w-class"]));_node8.attrs["on-tap"] = "onSwitchChange";_chFunc(_node8);_$parent8.children.push(_node8);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_$temp = _node;{
			var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 2640211895;{
				var _attrvalue = "";_attrvalue += "hiddenArea ";_attrvalue += it1.openLockScreen ? 'openLockScreen' : '';_attrvalue += "";_node9.attrs["w-class"] = _attrvalue;
			}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["w-class"]));_$temp = _node9;{
				var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 7 };_node10.children = [];_node10.childHash = 140010955;_node10.attrSize = 2;_node10.attrHash = 4064762294;_node10.attrs["w-class"] = "ga-item";_node10.attrs["on-tap"] = "resetLockScreen";_$temp = _node10;{
					var _$parent11 = _$temp;var _node11 = _installText("修改锁屏密码", 2452119425);;
					_$parent11.children.push(_node11);
				}_$parent10.children.push(_node10);
			}_$temp = _node9;{
				var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 8 };_node12.children = [];_node12.childHash = 704190704;_node12.attrSize = 2;_node12.attrHash = 323502414;_node12.attrs["w-class"] = "ga-item";_node12.attrs["on-tap"] = "forgetPasswordClick";_$temp = _node12;{
					var _$parent13 = _$temp;var _node13 = _installText("忘了密码?", 3967490955);;
					_$parent13.children.push(_node13);
				}_$parent12.children.push(_node12);
			}_chFunc(_node9);_$parent9.children.push(_node9);
		}_chFunc(_node);return _node;
	}
});