(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 124358627;_node.attrs["class"] = "ga-new-page";_node.attrs["w-class"] = "ga-new-page";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 3240429295;_node2.attrs["w-class"] = "ga-main";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 2263694382;_node3.attrs["w-class"] = "ga-leave-message";_$temp = _node3;{
          var _$parent4 = _$temp;_addText(it.leaveMessage, _$parent4);
        }_chFunc(_node3);_$parent3.children.push(_node3);
      }_$temp = _node2;{
        var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 406484528;_node4.attrs["w-class"] = "ga-tag";_$temp = _node4;{
          var _$parent6 = _$temp;_addText(it1.tag, _$parent6);
        }_chFunc(_node4);_$parent5.children.push(_node4);
      }_$temp = _node2;{
        var _$parent7 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 4 };_node5.children = [];_node5.attrSize = 3;_node5.attrHash = 1576867548;_node5.attrs["src"] = "../../../res/image/open.png";{
          var attrvalue = "";attrvalue += "ga-open ";attrvalue += it1.openClick ? 'ga-open-animate' : '';attrvalue += "";_node5.attrs["w-class"] = attrvalue;
        }_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["w-class"]));_node5.attrs["on-tap"] = "openRedEnvelopeClick";_chFunc(_node5);_$parent7.children.push(_node5);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});