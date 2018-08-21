(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 1;_node.attrHash = 3338124703;_node.attrs["w-class"] = "base";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 3;_node2.attrHash = 3664680752;_node2.attrs["w-class"] = "header";_node2.attrs["title"] = "36px";_node2.attrs["ev-back-click"] = "doClose";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 2 };_node3.hasChild = false;_node3.child = null;_node3.attrHash = 0;_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = {}; //jpair pre

					_node4["title"] = it1.title;
					//jpair suf
					_addJson(_node4, _$parent4);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 4252679546;_node5.attrs["w-class"] = "body";_$temp = _node5;{
				var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2122183344;_node6.attrs["w-class"] = "body-main";_$temp = _node6;{
					var _$parent7 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 5 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 2020633451;_node7.attrs["w-class"] = "pay";_$temp = _node7;{
						var _$parent8 = _$temp;_addText(it.type === "转账" ? "-" : it.type === "收款" ? "+" : "", _$parent8);
					}_$temp = _node7;{
						var _$parent9 = _$temp;_addText(it.pay, _$parent9);
					}_$temp = _node7;{
						var _$parent10 = _$temp;_addText(it.currencyName, _$parent10);
					}_chFunc(_node7);_$parent7.children.push(_node7);
				}_$temp = _node6;{
					var _$parent11 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 6 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 298594604;_node8.attrs["w-class"] = "result";_$temp = _node8;{
						var _$parent12 = _$temp;_addText(it.result, _$parent12);
					}_chFunc(_node8);_$parent11.children.push(_node8);
				}_chFunc(_node6);_$parent6.children.push(_node6);
			}_$temp = _node5;{
				var _$parent13 = _$temp;var _node9 = { "attrs": {}, "tagName": "div", "sid": 7 };_node9.children = [];_node9.attrSize = 1;_node9.attrHash = 1310854828;_node9.attrs["w-class"] = "body-other";_$temp = _node9;{
					var _$parent14 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.childHash = 3732898004;_node10.attrSize = 2;_node10.attrHash = 2917373369;_node10.attrs["w-class"] = "body-title";_node10.attrs["style"] = "margin-top: 0px";_$temp = _node10;{
						var _$parent15 = _$temp;var _node11 = _installText("收币地址", 417229775);;
						_$parent15.children.push(_node11);
					}_$parent14.children.push(_node10);
				}_$temp = _node9;{
					var _$parent16 = _$temp;var _node12 = { "attrs": {}, "tagName": "div", "sid": 9 };_node12.children = [];_node12.attrSize = 1;_node12.attrHash = 2123612943;_node12.attrs["w-class"] = "body-title-value";_$temp = _node12;{
						var _$parent17 = _$temp;_addText(it.to, _$parent17);
					}_chFunc(_node12);_$parent16.children.push(_node12);
				}_$temp = _node9;{
					var _$parent18 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 10 };_node13.children = [];_node13.childHash = 3880216523;_node13.attrSize = 1;_node13.attrHash = 1516714034;_node13.attrs["w-class"] = "body-title";_$temp = _node13;{
						var _$parent19 = _$temp;var _node14 = _installText("矿工费", 2445841764);;
						_$parent19.children.push(_node14);
					}_$parent18.children.push(_node13);
				}_$temp = _node9;{
					var _$parent20 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 11 };_node15.children = [];_node15.attrSize = 1;_node15.attrHash = 2123612943;_node15.attrs["w-class"] = "body-title-value";_$temp = _node15;{
						var _$parent21 = _$temp;_addText(it.tip, _$parent21);
					}_chFunc(_node15);_$parent20.children.push(_node15);
				}_$temp = _node9;{
					var _$parent22 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 12 };_node16.children = [];_node16.childHash = 410023545;_node16.attrSize = 1;_node16.attrHash = 1516714034;_node16.attrs["w-class"] = "body-title";_$temp = _node16;{
						var _$parent23 = _$temp;var _node17 = _installText("备注", 626395445);;
						_$parent23.children.push(_node17);
					}_$parent22.children.push(_node16);
				}_$temp = _node9;{
					var _$parent24 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 13 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 2123612943;_node18.attrs["w-class"] = "body-title-value";_$temp = _node18;{
						var _$parent25 = _$temp;_addText(it.info, _$parent25);
					}_chFunc(_node18);_$parent24.children.push(_node18);
				}_$temp = _node9;{
					var _$parent26 = _$temp;var _node19 = { "attrs": {}, "tagName": "div", "sid": 14 };_node19.children = [];_node19.childHash = 3760095760;_node19.attrSize = 1;_node19.attrHash = 1516714034;_node19.attrs["w-class"] = "body-title";_$temp = _node19;{
						var _$parent27 = _$temp;var _node20 = _installText("发币地址", 486656894);;
						_$parent27.children.push(_node20);
					}_$parent26.children.push(_node19);
				}_$temp = _node9;{
					var _$parent28 = _$temp;var _node21 = { "attrs": {}, "tagName": "div", "sid": 15 };_node21.children = [];_node21.attrSize = 1;_node21.attrHash = 2123612943;_node21.attrs["w-class"] = "body-title-value";_$temp = _node21;{
						var _$parent29 = _$temp;_addText(it.fromAddr, _$parent29);
					}_chFunc(_node21);_$parent28.children.push(_node21);
				}_$temp = _node9;{
					var _$parent30 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 16 };_node22.children = [];_node22.childHash = 3538340904;_node22.attrSize = 1;_node22.attrHash = 1516714034;_node22.attrs["w-class"] = "body-title";_$temp = _node22;{
						var _$parent31 = _$temp;var _node23 = _installText("交易时间", 3040961231);;
						_$parent31.children.push(_node23);
					}_$parent30.children.push(_node22);
				}_$temp = _node9;{
					var _$parent32 = _$temp;var _node24 = { "attrs": {}, "tagName": "div", "sid": 17 };_node24.children = [];_node24.attrSize = 1;_node24.attrHash = 2123612943;_node24.attrs["w-class"] = "body-title-value";_$temp = _node24;{
						var _$parent33 = _$temp;_addText(it.showTime, _$parent33);
					}_chFunc(_node24);_$parent32.children.push(_node24);
				}_$temp = _node9;{
					var _$parent34 = _$temp;var _node25 = { "attrs": {}, "tagName": "div", "sid": 18 };_node25.children = [];_node25.childHash = 1422108169;_node25.attrSize = 1;_node25.attrHash = 1516714034;_node25.attrs["w-class"] = "body-title";_$temp = _node25;{
						var _$parent35 = _$temp;var _node26 = _installText("交易号", 2568396572);;
						_$parent35.children.push(_node26);
					}_$parent34.children.push(_node25);
				}_$temp = _node9;{
					var _$parent36 = _$temp;var _node27 = { "attrs": {}, "tagName": "div", "sid": 19 };_node27.children = [];_node27.attrSize = 1;_node27.attrHash = 2123612943;_node27.attrs["w-class"] = "body-title-value";_$temp = _node27;{
						var _$parent37 = _$temp;_addText(it.id, _$parent37);
					}_chFunc(_node27);_$parent36.children.push(_node27);
				}_chFunc(_node9);_$parent13.children.push(_node9);
			}_chFunc(_node5);_$parent5.children.push(_node5);
		}_chFunc(_node);return _node;
	}
});