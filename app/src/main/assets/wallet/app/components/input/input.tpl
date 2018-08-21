(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 4;_node.attrHash = 3227617681;{
      var attrvalue = "";attrvalue += "pi-input ";attrvalue += it.prepend || it.append ? 'pi-input-group' : '';attrvalue += "";_node.attrs["class"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["class"]));{
      var _attrvalue = "";_attrvalue += "pi-input ";_attrvalue += it.prepend || it.append ? 'pi-input-group' : '';_attrvalue += "";_node.attrs["w-class"] = _attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["w-class"]));_node.attrs["on-mouseover"] = "mouseover";_node.attrs["on-mouseleave"] = "mouseleave";if (it && it.itype === "textarea") {
      _$temp = _node;{
        var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 964736543;_node2.attrs["w-class"] = "pi-input-box";_$temp = _node2;{
          var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "textarea", "sid": 2 };_node3.children = [];_node3.attrSize = 11;_node3.attrHash = 2454407338;{
            var _attrvalue2 = "";_attrvalue2 += it && it.disabled ? 'pi-textarea__inner-disabled' : 'pi-textarea__inner';_attrvalue2 += "";_node3.attrs["class"] = _attrvalue2;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["class"]));{
            var _attrvalue3 = "";_attrvalue3 += it && it.disabled ? 'pi-textarea__inner-disabled' : 'pi-textarea__inner';_attrvalue3 += " ";_node3.attrs["w-class"] = _attrvalue3;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["w-class"]));{
            var _attrvalue4 = "";_attrvalue4 += it.style ? it.style : '';_attrvalue4 += "";_node3.attrs["style"] = _attrvalue4;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["style"]));{
            var _attrvalue5 = "";_attrvalue5 += it && it.placeHolder ? it.placeHolder : '';_attrvalue5 += "";_node3.attrs["placeholder"] = _attrvalue5;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["placeholder"]));{
            var _attrvalue6 = "";_attrvalue6 += it1 && it1.currentValue ? it1.currentValue : '';_attrvalue6 += "";_node3.attrs["value"] = _attrvalue6;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["value"]));{
            var _attrvalue7 = "";_attrvalue7 = it && it.disabled ? true : false;_node3.attrs["disabled"] = _attrvalue7;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["disabled"]));{
            var _attrvalue8 = "";_attrvalue8 = it && it.autofocus ? true : false;_node3.attrs["autofocus"] = _attrvalue8;
          }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["autofocus"]));_node3.attrs["on-input"] = "change";_node3.attrs["on-blur"] = "blur";_node3.attrs["on-focus"] = "focus";if (it && it.autosize) {
            _node3.attrs["rows"] = "1";_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash("1"));
          } else {
            {
              var _attrvalue9 = "";_attrvalue9 += it && it.rows ? it.rows : '2';_attrvalue9 += "";_node3.attrs["rows"] = _attrvalue9;
            }_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(_node3.attrs["rows"]));_node3.attrHash = _hash.nextHash(_node3.attrHash, _calTextHash(null));
          }_$temp = _node3;{
            var _$parent4 = _$temp;_addText(it1 && it1.currentValue ? it1.currentValue : '', _$parent4);
          }_chFunc(_node3);_$parent3.children.push(_node3);
        }_chFunc(_node2);_$parent2.children.push(_node2);
      }
    } else {
      if (it.prepend) {
        _$temp = _node;{
          var _$parent5 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 706029945;_node4.attrs["w-class"] = "pi-input-group__prepend";_$temp = _node4;{
            var _$parent6 = _$temp;_addText(it.prepend, _$parent6);
          }_chFunc(_node4);_$parent5.children.push(_node4);
        }
      }_$temp = _node;{
        var _$parent7 = _$temp;var _node5 = { "attrs": {}, "tagName": "div", "sid": 4 };_node5.children = [];_node5.attrSize = 1;_node5.attrHash = 964736543;_node5.attrs["w-class"] = "pi-input-box";_$temp = _node5;{
          var _$parent8 = _$temp;var _node6 = { "attrs": {}, "tagName": "input", "sid": 5 };_node6.children = [];_node6.attrSize = 13;_node6.attrHash = 782123555;{
            var _attrvalue10 = "";_attrvalue10 += it && it.disabled ? 'pi-input__inner-disabled' : 'pi-input__inner';_attrvalue10 += " ";_attrvalue10 += it && it.prepend ? 'pi-input_inner-prepend' : '';_attrvalue10 += " ";_attrvalue10 += it && it.append ? 'pi-input_inner-append' : '';_attrvalue10 += "";_node6.attrs["w-class"] = _attrvalue10;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["w-class"]));{
            var _attrvalue11 = "";_attrvalue11 += it && it.disabled ? 'pi-input__inner-disabled pi-input-dom' : 'pi-input__inner1 pi-input-dom';_attrvalue11 += "";_node6.attrs["class"] = _attrvalue11;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["class"]));{
            var _attrvalue12 = "";_attrvalue12 += it.style ? it.style : '';_attrvalue12 += "";_node6.attrs["style"] = _attrvalue12;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["style"]));{
            var _attrvalue13 = "";_attrvalue13 += it.itype ? it.itype : 'text';_attrvalue13 += "";_node6.attrs["type"] = _attrvalue13;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["type"]));_node6.attrs["autocomplete"] = "off";{
            var _attrvalue14 = "";_attrvalue14 += it && it.placeHolder ? it.placeHolder : '';_attrvalue14 += "";_node6.attrs["placeholder"] = _attrvalue14;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["placeholder"]));{
            var _attrvalue15 = "";_attrvalue15 += it1 && it1.currentValue ? it1.currentValue : '';_attrvalue15 += "";_node6.attrs["value"] = _attrvalue15;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["value"]));{
            var _attrvalue16 = "";_attrvalue16 += it && it.maxLength ? it.maxLength : '';_attrvalue16 += "";_node6.attrs["maxlength"] = _attrvalue16;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["maxlength"]));{
            var _attrvalue17 = "";_attrvalue17 = it && it.disabled ? true : false;_node6.attrs["disabled"] = _attrvalue17;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["disabled"]));{
            var _attrvalue18 = "";_attrvalue18 = it && it.autofocus ? true : false;_node6.attrs["autofocus"] = _attrvalue18;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["autofocus"]));_node6.attrs["on-input"] = "change";_node6.attrs["on-blur"] = "blur";_node6.attrs["on-focus"] = "focus";_chFunc(_node6);_$parent8.children.push(_node6);
        }if (it1 && it1.showClear()) {
          _$temp = _node5;{
            var _$parent9 = _$temp;var _node7 = { "attrs": {}, "tagName": "span", "sid": 6 };_node7.children = [];_node7.childHash = 2946814719;_node7.attrSize = 3;_node7.attrHash = 3674932189;_node7.attrs["w-class"] = "pi-input__suffix";_node7.attrs["class"] = "pi-input__suffix";_node7.attrs["on-tap"] = "clearClickListener";_$parent9.children.push(_node7);
          }
        }_chFunc(_node5);_$parent7.children.push(_node5);
      }if (it.append) {
        _$temp = _node;{
          var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 3958615901;_node8.attrs["w-class"] = "pi-input-group__append";_$temp = _node8;{
            var _$parent11 = _$temp;_addText(it.append, _$parent11);
          }_chFunc(_node8);_$parent10.children.push(_node8);
        }
      }
    }_chFunc(_node);return _node;
  }
});