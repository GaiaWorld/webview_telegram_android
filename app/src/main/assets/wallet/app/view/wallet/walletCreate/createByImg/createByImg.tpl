(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1651722600;_node.attrs["class"] = "ga-new-page";_node.attrs["id"] = "createByImg";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 1083506517;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "生成钱包";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "app-view-wallet-walletCreate-headTips-headTips", "sid": 2 };_node4.hasChild = false;_node4.child = null;_node4.childHash = 2876541501;_node4.attrHash = 0;_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = {}; //jpair pre

				{
					var _jvalue = "";
					_jvalue = "同一张照片和同样的字符会生成同一个的钱包。所以可以记住您的照片和输入字符，这也是一种备份手段。";
					//jpair suf

					_node5["content"] = _jvalue;
				}
				_addJson(_node5, _$parent5);
			}_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 3 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 2359369176;_node6.attrs["w-class"] = "imgBox";_node6.attrs["on-tap"] = "chooseImg";if (!it1.choosedImg) {
				_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.childHash = 4179153652;_node7.attrSize = 1;_node7.attrHash = 1171342845;_node7.attrs["w-class"] = "boxAlt";_$temp = _node7;{
						var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "p", "sid": 5 };_node8.children = [];_node8.childHash = 250173230;_node8.attrSize = 1;_node8.attrHash = 329428242;_node8.attrs["w-class"] = "altTitle";_$temp = _node8;{
							var _$parent9 = _$temp;var _node9 = _installText("选择一张照片", 1710362259);;
							_$parent9.children.push(_node9);
						}_$parent8.children.push(_node8);
					}_$temp = _node7;{
						var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "p", "sid": 6 };_node10.children = [];_node10.childHash = 2891272356;_node10.attrSize = 1;_node10.attrHash = 1506521754;_node10.attrs["w-class"] = "altMain";_$temp = _node10;{
							var _$parent11 = _$temp;var _node11 = _installText("请使用颜色丰富的照片", 2195903473);;
							_$parent11.children.push(_node11);
						}_$parent10.children.push(_node10);
					}_$parent7.children.push(_node7);
				}
			} else {
				_$temp = _node6;{
					var _$parent12 = _$temp;var _node12 = { "attrs": {}, "tagName": "widget", "sid": 7 };_node12.hasChild = false;_node12.child = null;_node12.attrHash = 112166869;_node12.attrs["w-tag"] = "pi-ui-html";_node12.tagName = _node12.attrs["w-tag"];_$temp = _node12;{
						var _$parent13 = _$temp;_addJson(it1.imgStr, _$parent13);
					}_chFunc(_node12);_$parent12.children.push(_node12);
				}_$temp = _node6;{
					var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.childHash = 2946814719;_node13.attrSize = 2;_node13.attrHash = 1726613506;_node13.attrs["w-class"] = "closeicon";_node13.attrs["on-tap"] = "removeImg";_$parent14.children.push(_node13);
				}
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_$temp = _node;{
			var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 9 };_node14.children = [];_node14.childHash = 2597194288;_node14.attrSize = 1;_node14.attrHash = 3673258602;_node14.attrs["w-class"] = "inputTitle";_$temp = _node14;{
				var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "input", "sid": 10 };_node15.children = [];_node15.childHash = 0;_node15.attrSize = 5;_node15.attrHash = 2746659153;_node15.attrs["type"] = "text";_node15.attrs["class"] = "input";_node15.attrs["on-input"] = "inputIng";_node15.attrs["w-class"] = "input";_node15.attrs["placeholder"] = "输入一串用于生成助记词的字符";_$parent16.children.push(_node15);
			}_$parent15.children.push(_node14);
		}_$temp = _node;{
			var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 11 };_node16.children = [];_node16.childHash = 3197232890;_node16.attrSize = 1;_node16.attrHash = 819962544;_node16.attrs["w-class"] = "tips";_$temp = _node16;{
				var _$parent18 = _$temp;var _node17 = _installText("记住您的照片和输入字符，这也是一种备份手段", 543465316);;
				_$parent18.children.push(_node17);
			}_$parent17.children.push(_node16);
		}_$temp = _node;{
			var _$parent19 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 12 };_node18.children = [];_node18.childHash = 2213930500;_node18.attrSize = 2;_node18.attrHash = 3061272149;_node18.attrs["w-class"] = "btnWhite";_node18.attrs["on-tap"] = "nextStep";_$temp = _node18;{
				var _$parent20 = _$temp;var _node19 = _installText("生成钱包", 1312132016);;
				_$parent20.children.push(_node19);
			}_$parent19.children.push(_node18);
		}_chFunc(_node);return _node;
	}
});