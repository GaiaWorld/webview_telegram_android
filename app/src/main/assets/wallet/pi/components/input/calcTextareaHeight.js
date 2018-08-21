_$define("pi/components/input/calcTextareaHeight", function (require, exports, module){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hiddenTextarea = void 0;
var HIDDEN_STYLE = "\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
function calculateNodeStyling(targetElement) {
    var style = window.getComputedStyle(targetElement);
    var boxSizing = style.getPropertyValue('box-sizing');
    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
    var contextStyle = CONTEXT_STYLE.map(function (name) {
        return name + ":" + style.getPropertyValue(name);
    }).join(';');
    return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}
function calcTextareaHeight(targetElement) {
    var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }

    var _calculateNodeStyling = calculateNodeStyling(targetElement),
        paddingSize = _calculateNodeStyling.paddingSize,
        borderSize = _calculateNodeStyling.borderSize,
        boxSizing = _calculateNodeStyling.boxSizing,
        contextStyle = _calculateNodeStyling.contextStyle;

    hiddenTextarea.setAttribute('style', contextStyle + ";" + HIDDEN_STYLE);
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
    var height = hiddenTextarea.scrollHeight;
    var result = {};
    if (boxSizing === 'border-box') {
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        height = height - paddingSize;
    }
    hiddenTextarea.value = '';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
        var minHeight = singleRowHeight * minRows;
        if (boxSizing === 'border-box') {
            minHeight = minHeight + paddingSize + borderSize;
        }
        height = Math.max(minHeight, height);
        result.minHeight = minHeight + "px";
    }
    if (maxRows !== null) {
        var maxHeight = singleRowHeight * maxRows;
        if (boxSizing === 'border-box') {
            maxHeight = maxHeight + paddingSize + borderSize;
        }
        height = Math.min(maxHeight, height);
    }
    result.height = height + "px";
    hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
    hiddenTextarea = null;
    return result;
}
exports.default = calcTextareaHeight;
;
})