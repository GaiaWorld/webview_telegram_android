(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 124358627;_node.attrs["class"] = "ga-new-page";_node.attrs["w-class"] = "ga-new-page";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.childHash = 59948145;_node2.attrSize = 2;_node2.attrHash = 1024049843;_node2.attrs["w-class"] = "ga-title-bar";_node2.attrs["ev-back-click"] = "backPrePage";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.childHash = 1260154507;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					{
						var jvalue = "";
						jvalue = "兑换领奖";
						//jpair suf

						_node4["title"] = jvalue;
					}
					_addJson(_node4, _$parent4);
				}_$parent3.children.push(_node3);
			}_$temp = _node2;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.childHash = 1131666266;_node5.attrSize = 2;_node5.attrHash = 2082808853;_node5.attrs["w-class"] = "ga-red-envelope-record";_node5.attrs["on-tap"] = "redEnvelopeRecordsClick";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = _installText("兑换记录", 2951655499);;
					_$parent6.children.push(_node6);
				}_$parent5.children.push(_node5);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.attrSize = 2;_node7.attrHash = 3918454215;_node7.attrs["w-class"] = "ga-input-father";_node7.attrs["ev-input-change"] = "redemptionCodeChange";_$temp = _node7;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "app-components-input-input_simple", "sid": 5 };_node8.hasChild = false;_node8.child = null;_node8.attrHash = 0;_$temp = _node8;{
					var _$parent9 = _$temp;var _node9 = {}; //jpair pre

					_node9["placeHolder"] = it1.placeHolder;
					//jpair suf
					//jpair pre

					_node9["input"] = it1.cid;
					//jpair suf
					//jpair pre

					{
						var _jvalue = "";
						_jvalue = "backgroundColor:#F8F8F8;border:1px solid #D6D9DF;borderRadius:6px;padding:0 17px;";
						//jpair suf

						_node9["style"] = _jvalue;
					}
					_addJson(_node9, _$parent9);
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_chFunc(_node7);_$parent7.children.push(_node7);
		}_$temp = _node;{
			var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 6 };_node10.children = [];_node10.childHash = 2587477725;_node10.attrSize = 2;_node10.attrHash = 1244627162;_node10.attrs["w-class"] = "ga-convert-btn";_node10.attrs["on-tap"] = "convertClick";_$temp = _node10;{
				var _$parent11 = _$temp;var _node11 = _installText("兑换领取", 519560504);;
				_$parent11.children.push(_node11);
			}_$parent10.children.push(_node10);
		}_$temp = _node;{
			var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 7 };_node12.children = [];_node12.childHash = 3769880079;_node12.attrSize = 1;_node12.attrHash = 406484528;_node12.attrs["w-class"] = "ga-tag";_$temp = _node12;{
				var _$parent13 = _$temp;var _node13 = _installText("未领取的红包，将于24小时后失效", 1108877852);;
				_$parent13.children.push(_node13);
			}_$parent12.children.push(_node12);
		}_chFunc(_node);return _node;
	}
});