(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 124358627;_node.attrs["class"] = "ga-new-page";_node.attrs["w-class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 1418489982;_node2.attrs["w-class"] = "mainPanel";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.childHash = 4091564180;_node3.attrSize = 1;_node3.attrHash = 2305549563;_node3.attrs["w-class"] = "panelTitle";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = _installText("理财声明", 1815813819);;
					_$parent4.children.push(_node4);
				}_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 103382622;_node5.attrs["w-class"] = "panelContent";_$temp = _node5;{
					var _$parent6 = _$temp;_addText(it1.notice, _$parent6);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node2;{
				var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.childHash = 4232995833;_node6.attrSize = 2;_node6.attrHash = 4039620625;_node6.attrs["w-class"] = "agreeChoose";_node6.attrs["ev-checkbox-click"] = "checkBoxClick";_$temp = _node6;{
					var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "app-components-checkbox-checkbox", "sid": 5 };_node7.hasChild = false;_node7.child = null;_node7.childHash = 2901728037;_node7.attrHash = 0;_$temp = _node7;{
						var _$parent9 = _$temp;var _node8 = {}; //jpair pre

						{
							var jvalue = "";
							jvalue = "false";
							//jpair suf

							_node8["itype"] = jvalue;
						}
						//jpair pre

						{
							var _jvalue = "";
							_jvalue = "我已经认证阅读并同意";
							//jpair suf

							_node8["text"] = _jvalue;
						}
						_addJson(_node8, _$parent9);
					}_$parent8.children.push(_node7);
				}_$parent7.children.push(_node6);
			}_$temp = _node2;{
				var _$parent10 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 2;_node9.attrHash = 3389167528;{
					var attrvalue = "";attrvalue += "agreeBtn ";attrvalue += it1.isAgree ? 'active' : '';attrvalue += "";_node9.attrs["w-class"] = attrvalue;
				}_node9.attrHash = _hash.nextHash(_node9.attrHash, _calTextHash(_node9.attrs["w-class"]));_node9.attrs["on-tap"] = "agreeClicked";_$temp = _node9;{
					var _$parent11 = _$temp;var _node10 = _installText("我已阅读", 3759502716);;
					_$parent11.children.push(_node10);
				}_chFunc(_node9);_$parent10.children.push(_node9);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});