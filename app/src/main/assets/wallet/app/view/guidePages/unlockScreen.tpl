(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 3133483475;_node.attrs["ev-completed-click"] = "completedInput";_node.attrs["ev-forgetPassword-click"] = "forgetPasswordClick";_node.attrs["id"] = "unlock-screen";_node.attrs["class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-passwordScreen-passwordScreen", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				_node3["title"] = it1.passwordScreenTitle;
				//jpair suf
				//jpair pre

				_node3["forgetPsw"] = true;
				//jpair suf
				_addJson(_node3, _$parent3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}if (it && it.jump) {
			_$temp = _node;{
				var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 4192499705;_node4.attrSize = 2;_node4.attrHash = 1620648816;_node4.attrs["w-class"] = "ga-jump";_node4.attrs["on-tap"] = "jumpClick";_$temp = _node4;{
					var _$parent5 = _$temp;var _node5 = _installText("跳过", 2739327954);;
					_$parent5.children.push(_node5);
				}_$parent4.children.push(_node4);
			}
		}_chFunc(_node);return _node;
	}
});