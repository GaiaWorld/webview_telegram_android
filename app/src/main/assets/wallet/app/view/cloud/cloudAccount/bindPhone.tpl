(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 520368922;_node.attrs["w-class"] = "base";_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backClick";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 2246528509;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "验证手机";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 910843763;_node4.attrs["style"] = "position: relative;top: 90px;";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.childHash = 1423322871;_node5.attrSize = 2;_node5.attrHash = 1229609783;_node5.attrs["w-class"] = "phone-input";_node5.attrs["ev-input-change"] = "phoneChange";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.childHash = 3012185058;_node6.attrHash = 0;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = {}; //jpair pre

						{
							var _jvalue = "";
							_jvalue = "请填入手机号";
							//jpair suf

							_node7["placeHolder"] = _jvalue;
						}
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "padding-left: 100px;padding-right: 30px;";
							//jpair suf

							_node7["style"] = _jvalue2;
						}
						_addJson(_node7, _$parent7);
					}_$parent6.children.push(_node6);
				}_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.attrSize = 2;_node8.attrHash = 1287046569;_node8.attrs["w-class"] = "old-code";_node8.attrs["on-tap"] = "showNewCode";_$temp = _node8;{
					var _$parent9 = _$temp;var _node9 = _installText("+", 3807426999);;
					_$parent9.children.push(_node9);
				}_$temp = _node8;{
					var _$parent10 = _$temp;_addText(it1.oldCode, _$parent10);
				}_chFunc(_node8);_$parent8.children.push(_node8);
			}_$temp = _node4;{
				var _$parent11 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 6 };_node10.children = [];_node10.childHash = 2579734874;_node10.attrSize = 2;_node10.attrHash = 77026052;_node10.attrs["w-class"] = "code-input";_node10.attrs["ev-input-change"] = "codeChange";_$temp = _node10;{
					var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 7 };_node11.hasChild = false;_node11.child = null;_node11.childHash = 3041350061;_node11.attrHash = 0;_$temp = _node11;{
						var _$parent13 = _$temp;var _node12 = {}; //jpair pre

						{
							var _jvalue3 = "";
							_jvalue3 = "请填入验证码";
							//jpair suf

							_node12["placeHolder"] = _jvalue3;
						}
						//jpair pre

						{
							var _jvalue4 = "";
							_jvalue4 = "padding-left: 30px;padding-right: 180px;";
							//jpair suf

							_node12["style"] = _jvalue4;
						}
						_addJson(_node12, _$parent13);
					}_$parent12.children.push(_node11);
				}_$parent11.children.push(_node10);
			}if (it1.countdown > 0) {
				_$temp = _node4;{
					var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.attrSize = 1;_node13.attrHash = 3104787591;_node13.attrs["w-class"] = "text-code";_$temp = _node13;{
						var _$parent15 = _$temp;_addText(it1.countdown, _$parent15);
					}_$temp = _node13;{
						var _$parent16 = _$temp;var _node14 = _installText("秒", 3630949974);;
						_$parent16.children.push(_node14);
					}_chFunc(_node13);_$parent14.children.push(_node13);
				}
			} else {
				_$temp = _node4;{
					var _$parent17 = _$temp;var _node15 = { "attrs": {}, "tagName": "div", "sid": 9 };_node15.children = [];_node15.childHash = 2070980467;_node15.attrSize = 2;_node15.attrHash = 729955063;_node15.attrs["w-class"] = "text-code";_node15.attrs["on-tap"] = "getCode";_$temp = _node15;{
						var _$parent18 = _$temp;var _node16 = _installText("获取验证码", 1490842992);;
						_$parent18.children.push(_node16);
					}_$parent17.children.push(_node15);
				}
			}if (it1.isShowNewCode) {
				_$temp = _node4;{
					var _$parent19 = _$temp;var _node17 = { "attrs": {}, "tagName": "div", "sid": 10 };_node17.children = [];_node17.childHash = 2946814719;_node17.attrSize = 2;_node17.attrHash = 3769097145;_node17.attrs["w-class"] = "new-code-bg";_node17.attrs["on-tap"] = "chooseNewCode";_$parent19.children.push(_node17);
				}_$temp = _node4;{
					var _$parent20 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 11 };_node18.children = [];_node18.attrSize = 1;_node18.attrHash = 1589033648;_node18.attrs["w-class"] = "new-code";_$temp = _node18;{
						var _$parent21 = _$temp;var _node19 = _installText("+", 3807426999);;
						_$parent21.children.push(_node19);
					}_$temp = _node18;{
						var _$parent22 = _$temp;_addText(it1.newCode, _$parent22);
					}_chFunc(_node18);_$parent20.children.push(_node18);
				}
			}_$temp = _node4;{
				var _$parent23 = _$temp;var _node20 = { "attrs": {}, "tagName": "div", "sid": 12 };_node20.children = [];_node20.childHash = 3544014448;_node20.attrSize = 2;_node20.attrHash = 688990472;_node20.attrs["w-class"] = "btn-code";_node20.attrs["on-tap"] = "doSure";_$temp = _node20;{
					var _$parent24 = _$temp;var _node21 = _installText("确认", 1153195424);;
					_$parent24.children.push(_node21);
				}_$parent23.children.push(_node20);
			}_$temp = _node4;{
				var _$parent25 = _$temp;var _node22 = { "attrs": {}, "tagName": "div", "sid": 13 };_node22.children = [];_node22.childHash = 2221506464;_node22.attrSize = 1;_node22.attrHash = 1708543478;_node22.attrs["w-class"] = "tip";_$temp = _node22;{
					var _$parent26 = _$temp;var _node23 = _installText("一个手机号只能验证一个钱包", 1852780183);;
					_$parent26.children.push(_node23);
				}_$parent25.children.push(_node22);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});