(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1957018759;_node.attrs["class"] = "ga-new-page";_node.attrs["w-class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 2213741567;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "修改交易密码";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1980112314;_node4.attrs["w-class"] = "ga-content";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 3 };_node5.children = [];_node5.attrSize = 2;_node5.attrHash = 2718360302;_node5.attrs["w-class"] = "ga-input-father";_node5.attrs["ev-input-change"] = "newPasswordChange";_$temp = _node5;{
					var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 4 };_node6.hasChild = false;_node6.child = null;_node6.attrHash = 0;_$temp = _node6;{
						var _$parent7 = _$temp;var _node7 = {}; //jpair pre

						{
							var _jvalue = "";
							_jvalue = "password";
							//jpair suf

							_node7["itype"] = _jvalue;
						}
						//jpair pre

						{
							var _jvalue2 = "";
							_jvalue2 = "新密码";
							//jpair suf

							_node7["placeHolder"] = _jvalue2;
						}
						//jpair pre

						_node7["style"] = it1.style;
						//jpair suf
						_addJson(_node7, _$parent7);
					}_chFunc(_node6);_$parent6.children.push(_node6);
				}_$temp = _node5;{
					var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "span", "sid": 5 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 3210891895;_node8.attrs["w-class"] = "strength";_$temp = _node8;{
						var _$parent9 = _$temp;var _node9 = _installText("安全强度 &nbsp;", 1419936333);;
						_$parent9.children.push(_node9);
					}_$temp = _node8;{
						var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "span", "sid": 6 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 1485159607;{
							var attrvalue = "";attrvalue += "color: ";attrvalue += it1.strength.color;attrvalue += "";_node10.attrs["style"] = attrvalue;
						}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["style"]));_$temp = _node10;{
							var _$parent11 = _$temp;_addText(it1.strength.text, _$parent11);
						}_chFunc(_node10);_$parent10.children.push(_node10);
					}_chFunc(_node8);_$parent8.children.push(_node8);
				}_chFunc(_node5);_$parent5.children.push(_node5);
			}_$temp = _node4;{
				var _$parent12 = _$temp;var _node11 = { "attrs": {}, "tagName": "div", "sid": 7 };_node11.children = [];_node11.attrSize = 2;_node11.attrHash = 415075680;{
					var _attrvalue = "";_attrvalue += "ga-psw-tip-hidden  ";_attrvalue += it1.newPassword.length > 0 ? 'ga-psw-tip-show' : '';_attrvalue += "";_node11.attrs["w-class"] = _attrvalue;
				}_node11.attrHash = _hash.nextHash(_node11.attrHash, _calTextHash(_node11.attrs["w-class"]));_node11.attrs["style"] = "color: rgba(234,142,65,1);";_$temp = _node11;{
					var _$parent13 = _$temp;var _node12 = _installText("至少8位字符，可包含英文、数字、特殊字符", 3921053998);;
					_$parent13.children.push(_node12);
				}_chFunc(_node11);_$parent12.children.push(_node11);
			}_$temp = _node4;{
				var _$parent14 = _$temp;var _node13 = { "attrs": {}, "tagName": "div", "sid": 8 };_node13.children = [];_node13.attrSize = 2;_node13.attrHash = 4164529218;_node13.attrs["w-class"] = "ga-input-father";_node13.attrs["ev-input-change"] = "rePasswordChange";_$temp = _node13;{
					var _$parent15 = _$temp;var _node14 = { "attrs": {}, "tagName": "app-components-input-input", "sid": 9 };_node14.hasChild = false;_node14.child = null;_node14.attrHash = 0;_$temp = _node14;{
						var _$parent16 = _$temp;var _node15 = {}; //jpair pre

						{
							var _jvalue3 = "";
							_jvalue3 = "password";
							//jpair suf

							_node15["itype"] = _jvalue3;
						}
						//jpair pre

						{
							var _jvalue4 = "";
							_jvalue4 = "再次输入密码";
							//jpair suf

							_node15["placeHolder"] = _jvalue4;
						}
						//jpair pre

						_node15["style"] = it1.style;
						//jpair suf
						_addJson(_node15, _$parent16);
					}_chFunc(_node14);_$parent15.children.push(_node14);
				}_chFunc(_node13);_$parent14.children.push(_node13);
			}_$temp = _node4;{
				var _$parent17 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 10 };_node16.children = [];_node16.childHash = 1343262078;_node16.attrSize = 2;_node16.attrHash = 3915695874;_node16.attrs["w-class"] = "blueBtn";_node16.attrs["on-tap"] = "btnClicked";_$temp = _node16;{
					var _$parent18 = _$temp;var _node17 = _installText("确认修改", 1831778096);;
					_$parent18.children.push(_node17);
				}_$parent17.children.push(_node16);
			}_chFunc(_node4);_$parent4.children.push(_node4);
		}_chFunc(_node);return _node;
	}
});