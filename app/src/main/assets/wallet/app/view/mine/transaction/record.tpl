(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 2313958793;_node2.attrSize = 3;_node2.attrHash = 3664680752;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_node2.attrs["ev-back-click"] = "doClose";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.childHash = 2745472776;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					{
						var jvalue = "";
						jvalue = "交易记录";
						//jpair suf

						_node4["title"] = jvalue;
					}
					_addJson(_node4, _$parent4);
				}_$parent3.children.push(_node3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 4252679546;_node5.attrs["w-class"] = "body";if (it1.list.length <= 0) {
				_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.childHash = 2946814719;_node6.attrSize = 1;_node6.attrHash = 3400304430;_node6.attrs["w-class"] = "no-record";_$parent6.children.push(_node6);
				}_$temp = _node5;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.childHash = 1671456823;_node7.attrSize = 1;_node7.attrHash = 704840034;_node7.attrs["w-class"] = "no-record-text";_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = _installText("还没有交易记录", 3138677258);;
						_$parent8.children.push(_node8);
					}_$parent7.children.push(_node7);
				}
			}_$temp = _node5;{
				var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 6 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 2478994113;_node9.attrs["w-class"] = "transaction-list";_$temp = _node9;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "app-view-wallet-transaction-currency_details_list", "sid": 7 };_node10.hasChild = false;_node10.child = null;_node10.attrHash = 0;_$temp = _node10;{
						var _$parent11 = _$temp;var _node11 = {}; //jpair pre

						_node11["list"] = it1.list;
						//jpair suf
						//jpair pre

						_node11["height"] = 1140;
						//jpair suf
						_addJson(_node11, _$parent11);
					}_chFunc(_node10);_$parent10.children.push(_node10);
				}_chFunc(_node9);_$parent9.children.push(_node9);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});