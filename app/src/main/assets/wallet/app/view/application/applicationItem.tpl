(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1487742539;_node.attrs["w-class"] = "applItem";_node.attrs["on-tap"] = "showDetails";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "img", "sid": 1 };_node2.children = [];_node2.attrSize = 2;_node2.attrHash = 677592558;{
        var attrvalue = "";attrvalue += it.img;attrvalue += "";_node2.attrs["src"] = attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["src"]));_node2.attrs["w-class"] = "applimg";_chFunc(_node2);_$parent2.children.push(_node2);
    }_$temp = _node;{
      var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.attrSize = 3;_node3.attrHash = 771779752;_node3.attrs["w-class"] = "appllike";{
        var _attrvalue = "";_attrvalue += it.islike ? '../../res/image/btn_dapp_pick.png' : '../../res/image/btn_dapp_heart.png';_attrvalue += "";_node3.attrs["src"] = _attrvalue;
      }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["src"]));_node3.attrs["on-tap"] = "likeit";_chFunc(_node3);_$parent3.children.push(_node3);
    }_$temp = _node;{
      var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1781992556;_node4.attrs["style"] = "flex: 1 0 0;margin-top: 4%";_$temp = _node4;{
        var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 1022183374;_node5.attrs["w-class"] = "appltitle";_$temp = _node5;{
          var _$parent6 = _$temp;_addText(it.title, _$parent6);
        }_chFunc(_node5);_$parent5.children.push(_node5);
      }_$temp = _node4;{
        var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 4100272897;_node6.attrs["w-class"] = "applmess";_$temp = _node6;{
          var _$parent8 = _$temp;_addText(it.mess, _$parent8);
        }_chFunc(_node6);_$parent7.children.push(_node6);
      }_chFunc(_node4);_$parent4.children.push(_node4);
    }_chFunc(_node);return _node;
  }
});