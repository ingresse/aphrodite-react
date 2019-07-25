"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Constants */

/* Modal Overlay Styles */
var ModalOverlayStyled = (0, _styledBase.default)("div", {
  target: "e1bytuoh0"
})("position:fixed;z-index:", _constants.ZINDEX.MODAL - 1, ";top:0;right:0;bottom:0;left:0;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vZGFsL01vZGFsT3ZlcmxheVN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPcUMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTW9kYWwvTW9kYWxPdmVybGF5U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBaSU5ERVggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBNb2RhbCBPdmVybGF5IFN0eWxlcyAqL1xuY29uc3QgTW9kYWxPdmVybGF5U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleCA6ICR7WklOREVYLk1PREFMIC0gMX07XG4gICAgdG9wICAgICA6IDA7XG4gICAgcmlnaHQgICA6IDA7XG4gICAgYm90dG9tICA6IDA7XG4gICAgbGVmdCAgICA6IDA7XG4gICAgXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBNb2RhbE92ZXJsYXlTdHlsZWQ7XG4iXX0= */"));
/* Exporting */

var _default = ModalOverlayStyled;
exports.default = _default;