(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1839940969;_node.attrs["class"] = "ga-new-page";_node.attrs["ev-back-click"] = "backPrePage";_node.attrs["style"] = "background-color: #fff;";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components-topBar-topBar", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 3397095968;_node2.attrHash = 0;_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = {}; //jpair pre

				{
					var jvalue = "";
					jvalue = "关于我们";
					//jpair suf

					_node3["title"] = jvalue;
				}
				_addJson(_node3, _$parent3);
			}_$parent2.children.push(_node2);
		}_$temp = _node;{
			var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 2 };_node4.children = [];_node4.childHash = 3035325139;_node4.attrSize = 1;_node4.attrHash = 3169715147;_node4.attrs["w-class"] = "aboutus-img";_$temp = _node4;{
				var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 3 };_node5.children = [];_node5.childHash = 0;_node5.attrSize = 2;_node5.attrHash = 3547507648;_node5.attrs["src"] = "../../../res/image/img_logo.png";_node5.attrs["w-class"] = "logoimg";_$parent5.children.push(_node5);
			}_$parent4.children.push(_node4);
		}_$temp = _node;{
			var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 4 };_node6.children = [];_node6.childHash = 2846474447;_node6.attrSize = 1;_node6.attrHash = 866865791;_node6.attrs["w-class"] = "version";_$temp = _node6;{
				var _$parent7 = _$temp;var _node7 = _installText("V0.0.1", 143603994);;
				_$parent7.children.push(_node7);
			}_$parent6.children.push(_node6);
		}_$temp = _node;{
			var _$parent8 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 5 };_node8.children = [];_node8.childHash = 1905264576;_node8.attrSize = 1;_node8.attrHash = 2002705810;_node8.attrs["w-class"] = "shortmess";_$temp = _node8;{
				var _$parent9 = _$temp;var _node9 = _installText("KuPay是一款功能全面、简单易用的钱包应用。", 1529410818);;
				_$parent9.children.push(_node9);
			}_$parent8.children.push(_node8);
		}{
			var _$i = 0;
			for (var _iterator = it1.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var val = _ref;
				var ind = _$i++;_$temp = _node;{
					var _$parent10 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 6 };_node10.children = [];_node10.attrSize = 2;_node10.attrHash = 949866417;_node10.attrs["w-class"] = "ga-item";{
						var attrvalue = "";attrvalue += "itemClick(e,";attrvalue += ind;attrvalue += ")";_node10.attrs["on-tap"] = attrvalue;
					}_node10.attrHash = _hash.nextHash(_node10.attrHash, _calTextHash(_node10.attrs["on-tap"]));_$temp = _node10;{
						var _$parent11 = _$temp;var _node11 = { "attrs": {}, "tagName": "span", "sid": 7 };_node11.children = [];_node11.attrSize = 1;_node11.attrHash = 651827725;_node11.attrs["w-class"] = "ga-item-text";_$temp = _node11;{
							var _$parent12 = _$temp;_addText(val.value, _$parent12);
						}_chFunc(_node11);_$parent11.children.push(_node11);
					}_$temp = _node10;{
						var _$parent13 = _$temp;var _node12 = { "attrs": {}, "tagName": "img", "sid": 8 };_node12.children = [];_node12.childHash = 0;_node12.attrSize = 2;_node12.attrHash = 4107950578;_node12.attrs["src"] = "../../../res/image/btn_right_arrow.png";_node12.attrs["w-class"] = "ga-item-arrow";_$parent13.children.push(_node12);
					}_chFunc(_node10);_$parent10.children.push(_node10);
				}
			}
		}_chFunc(_node);return _node;
	}
});