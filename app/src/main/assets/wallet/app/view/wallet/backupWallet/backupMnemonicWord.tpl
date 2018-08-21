(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 1309254377;_node.attrs["id"] = "backupMnemonicWord";_node.attrs["w-class"] = "ga-new-page";_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
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
				var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 4 };_node7.children = [];_node7.childHash = 1142470881;_node7.attrSize = 1;_node7.attrHash = 1981747992;_node7.attrs["w-class"] = "bodyTitle";_$temp = _node7;{
					var _$parent8 = _$temp;var _node8 = _installText("您的钱包已生成", 855427611);;
					_$parent8.children.push(_node8);
				}_$parent7.children.push(_node7);
			}_$temp = _node6;{
				var _$parent9 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 5 };_node9.children = [];_node9.childHash = 1963388938;_node9.attrSize = 1;_node9.attrHash = 819962544;_node9.attrs["w-class"] = "tips";_$temp = _node9;{
					var _$parent10 = _$temp;var _node10 = _installText("请将下面的助记词抄写在一张纸上，保存在安全的地方，如果丢失，将无法恢复您的钱包。助记词非常重要，如果丢失或泄露，您的资产将受到损失。", 1680458654);;
					_$parent10.children.push(_node10);
				}_$parent9.children.push(_node9);
			}_$temp = _node6;{
				var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 6 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 2545374260;_node11.attrs["w-class"] = "mnemonic";_$temp = _node11;{
					var _$parent12 = _$temp;_addText(it.mnemonic, _$parent12);
				}_chFunc(_node11);_$parent11.children.push(_node11);
			}_$temp = _node6;{
				var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 7 };_node12.children = [];_node12.childHash = 339792869;_node12.attrSize = 1;_node12.attrHash = 2566746008;_node12.attrs["w-class"] = "btns";_$temp = _node12;{
					var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.childHash = 4180065665;_node13.attrSize = 2;_node13.attrHash = 2516323176;_node13.attrs["w-class"] = "btn1";_node13.attrs["on-tap"] = "next";_$temp = _node13;{
						var _$parent15 = _$temp;var _node14 = _installText("已妥善保管", 1164010642);;
						_$parent15.children.push(_node14);
					}_$parent14.children.push(_node13);
				}_$temp = _node12;{
					var _$parent16 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 9 };_node15.children = [];_node15.childHash = 2199010799;_node15.attrSize = 2;_node15.attrHash = 1850095460;_node15.attrs["w-class"] = "btn2";_node15.attrs["on-tap"] = "shareClick";_$temp = _node15;{
						var _$parent17 = _$temp;var _node16 = _installText("使用更安全的保管方案", 4161903271);;
						_$parent17.children.push(_node16);
					}_$parent16.children.push(_node15);
				}_$parent13.children.push(_node12);
			}_chFunc(_node6);_$parent6.children.push(_node6);
		}_chFunc(_node);return _node;
	}
});