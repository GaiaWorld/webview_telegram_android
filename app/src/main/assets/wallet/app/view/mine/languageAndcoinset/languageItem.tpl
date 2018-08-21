(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 3373645897;_node.attrs["w-class"] = "languageItem";_node.attrs["on-tap"] = "itemclick";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "span", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 651827725;_node2.attrs["w-class"] = "ga-item-text";_$temp = _node2;{
        var _$parent3 = _$temp;_addText(it.lan, _$parent3);
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_$temp = _node;{
      var _$parent4 = _$temp;var _node3 = { "attrs": {}, "tagName": "img", "sid": 2 };_node3.children = [];_node3.attrSize = 2;_node3.attrHash = 1166216084;_node3.attrs["src"] = "../../../res/image/icon_selected.png";{
        var attrvalue = "";attrvalue += "display: ";attrvalue += it.checked ? 'block' : 'none';attrvalue += "";_node3.attrs["style"] = attrvalue;
      }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["style"]));_chFunc(_node3);_$parent4.children.push(_node3);
    }_chFunc(_node);return _node;
  }
});