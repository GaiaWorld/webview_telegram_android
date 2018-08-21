(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 3227617681;{
      var attrvalue = "";attrvalue += "pi-input ";attrvalue += it.prepend || it.append ? 'pi-input-group' : '';attrvalue += "";_node.attrs["class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["class"]));{
      var _attrvalue = "";_attrvalue += "pi-input ";_attrvalue += it.prepend || it.append ? 'pi-input-group' : '';_attrvalue += "";_node.attrs["w-class"] = _attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_node.attrs["on-mouseover"] = "mouseover";_node.attrs["on-mouseleave"] = "mouseleave";if (it.prepend) {
      _$temp = _node;{
        var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 706029945;_node2.attrs["w-class"] = "pi-input-group__prepend";_$temp = _node2;{
          var _$parent3 = _$temp;_addText(it.prepend, _$parent3);
        }_chFunc(_node2);_$parent2.children.push(_node2);
      }
    }_$temp = _node;{
      var _$parent4 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 964736543;_node3.attrs["w-class"] = "pi-input-box";_$temp = _node3;{
        var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "input", "sid": 3 };_node4.children = [];_node4.attrSize = 12;_node4.attrHash = 1131742546;{
          var _attrvalue2 = "";_attrvalue2 += it && it.disabled ? 'pi-input__inner-disabled' : 'pi-input__inner';_attrvalue2 += " ";_attrvalue2 += it && it.prepend ? 'pi-input_inner-prepend' : '';_attrvalue2 += " ";_attrvalue2 += it && it.append ? 'pi-input_inner-append' : '';_attrvalue2 += "";_node4.attrs["w-class"] = _attrvalue2;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["w-class"]));{
          var _attrvalue3 = "";_attrvalue3 += it && it.disabled ? 'pi-input__inner-disabled pi-input-dom' : 'pi-input-search__inner1 pi-input-dom';_attrvalue3 += "";_node4.attrs["class"] = _attrvalue3;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["class"]));{
          var _attrvalue4 = "";_attrvalue4 += it1.styleStr;_attrvalue4 += "";_node4.attrs["style"] = _attrvalue4;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["style"]));{
          var _attrvalue5 = "";_attrvalue5 += it.itype ? it.itype : 'text';_attrvalue5 += "";_node4.attrs["type"] = _attrvalue5;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["type"]));_node4.attrs["autocomplete"] = "off";{
          var _attrvalue6 = "";_attrvalue6 += it && it.placeHolder ? it.placeHolder : '';_attrvalue6 += "";_node4.attrs["placeholder"] = _attrvalue6;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["placeholder"]));{
          var _attrvalue7 = "";_attrvalue7 += it1 && it1.currentValue ? it1.currentValue : '';_attrvalue7 += "";_node4.attrs["value"] = _attrvalue7;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["value"]));{
          var _attrvalue8 = "";_attrvalue8 = it && it.disabled ? true : false;_node4.attrs["disabled"] = _attrvalue8;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["disabled"]));{
          var _attrvalue9 = "";_attrvalue9 = it && it.autofocus ? true : false;_node4.attrs["autofocus"] = _attrvalue9;
        }_node4.attrHash = _hash.nextHash(_node4.attrHash, _calTextHash(_node4.attrs["autofocus"]));_node4.attrs["on-input"] = "change";_node4.attrs["on-blur"] = "blur";_node4.attrs["on-focus"] = "focus";_chFunc(_node4);_$parent5.children.push(_node4);
      }if (it1 && it1.showClear()) {
        _$temp = _node3;{
          var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "span", "sid": 4 };_node5.children = [];_node5.childHash = 2946814719;_node5.attrSize = 3;_node5.attrHash = 1974580375;_node5.attrs["w-class"] = "pi-input__suffix";_node5.attrs["class"] = "pi-input-search__suffix";_node5.attrs["on-tap"] = "clearClickListener";_$parent6.children.push(_node5);
        }
      }_chFunc(_node3);_$parent4.children.push(_node3);
    }if (it.append) {
      _$temp = _node;{
        var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 3958615901;_node6.attrs["w-class"] = "pi-input-group__append";_$temp = _node6;{
          var _$parent8 = _$temp;_addText(it.append, _$parent8);
        }_chFunc(_node6);_$parent7.children.push(_node6);
      }
    }_chFunc(_node);return _node;
  }
});