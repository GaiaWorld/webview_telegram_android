(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 1079220892;_node.attrs["class"] = "pi-input";_node.attrs["w-class"] = "pi-input";_node.attrs["on-mouseover"] = "mouseover";_node.attrs["on-mouseleave"] = "mouseleave";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 964736543;_node2.attrs["w-class"] = "pi-input-box";_$temp = _node2;{
        var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "input", "sid": 2 };_node3.children = [];_node3.attrSize = 11;_node3.attrHash = 3071598399;{
          var attrvalue = "";attrvalue += it && it.disabled ? 'pi-input__inner-disabled' : 'pi-input__inner';attrvalue += "";_node3.attrs["w-class"] = attrvalue;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));{
          var _attrvalue = "";_attrvalue += it1.styleStr;_attrvalue += "";_node3.attrs["style"] = _attrvalue;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["style"]));{
          var _attrvalue2 = "";_attrvalue2 += it.itype ? it.itype : 'text';_attrvalue2 += "";_node3.attrs["type"] = _attrvalue2;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["type"]));_node3.attrs["autocomplete"] = "off";{
          var _attrvalue3 = "";_attrvalue3 += it && it.placeHolder ? it.placeHolder : '';_attrvalue3 += "";_node3.attrs["placeholder"] = _attrvalue3;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["placeholder"]));{
          var _attrvalue4 = "";_attrvalue4 += it1 && it1.currentValue ? it1.currentValue : '';_attrvalue4 += "";_node3.attrs["value"] = _attrvalue4;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["value"]));{
          var _attrvalue5 = "";_attrvalue5 = it && it.disabled ? true : false;_node3.attrs["disabled"] = _attrvalue5;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["disabled"]));{
          var _attrvalue6 = "";_attrvalue6 = it && it.autofocus ? true : false;_node3.attrs["autofocus"] = _attrvalue6;
        }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["autofocus"]));_node3.attrs["on-input"] = "change";_node3.attrs["on-blur"] = "blur";_node3.attrs["on-focus"] = "focus";_chFunc(_node3);_$parent3.children.push(_node3);
      }if (it1 && it1.showClear()) {
        _$temp = _node2;{
          var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.childHash = 2946814719;_node4.attrSize = 3;_node4.attrHash = 560654156;_node4.attrs["w-class"] = "pi-input__suffix";_node4.attrs["class"] = "pi-input-border__suffix";_node4.attrs["on-tap"] = "clearClickListener";_$parent4.children.push(_node4);
        }
      }_chFunc(_node2);_$parent2.children.push(_node2);
    }_chFunc(_node);return _node;
  }
});