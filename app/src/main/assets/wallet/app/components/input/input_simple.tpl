(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 1155738088;_node.attrs["w-class"] = "pi-input-simple";_node.attrs["class"] = "pi-input-simple";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "input", "sid": 1 };_node2.children = [];_node2.attrSize = 10;_node2.attrHash = 4048411649;_node2.attrs["w-class"] = "pi-input-simple__inner";_node2.attrs["class"] = "pi-input-simple__inner";{
        var attrvalue = "";attrvalue += it.style ? it.style : '';attrvalue += "";_node2.attrs["style"] = attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["style"]));{
        var _attrvalue = "";_attrvalue += it.itype ? it.itype : 'text';_attrvalue += "";_node2.attrs["type"] = _attrvalue;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["type"]));_node2.attrs["autocomplete"] = "off";{
        var _attrvalue2 = "";_attrvalue2 += it && it.placeHolder ? it.placeHolder : '';_attrvalue2 += "";_node2.attrs["placeholder"] = _attrvalue2;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["placeholder"]));{
        var _attrvalue3 = "";_attrvalue3 += it1 && it1.currentValue ? it1.currentValue : '';_attrvalue3 += "";_node2.attrs["value"] = _attrvalue3;
      }_node2.attrHash = _hash.nextHash(_node2.attrHash, _calTextHash(_node2.attrs["value"]));_node2.attrs["on-input"] = "change";_node2.attrs["on-blur"] = "blur";_node2.attrs["on-focus"] = "focus";_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});