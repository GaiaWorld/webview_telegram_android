(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 3482854695;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["style"] = "background-color: #ffffff;";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 2547331681;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "公告";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 379613658;_node4.attrs["w-class"] = "messitemTitle";_$temp = _node4;{
				var _$parent5 = _$temp;_addText(it.title, _$parent5);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 3721806404;_node5.attrs["w-class"] = "messitemContent";_$temp = _node5;{
				var _$parent7 = _$temp;_addText(it.content, _$parent7);
			}_chFunc(_node5);_$parent6.children.push(_node5);
		}_$temp = _node;{
			var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 1063058265;_node6.attrs["w-class"] = "messitemTime";_$temp = _node6;{
				var _$parent9 = _$temp;_addText(it.time, _$parent9);
			}_chFunc(_node6);_$parent8.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});