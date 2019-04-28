"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _InputLabelStyled = _interopRequireDefault(require("./InputLabelStyled"));

var _InputStyled = _interopRequireDefault(require("./InputStyled"));

var _InputErrorMsgStyled = _interopRequireDefault(require("./InputErrorMsgStyled"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Component Wrapper */
var AphInputWrapperStyled = (0, _styledBase.default)("div", {
  target: "eaa7cbg0"
})(process.env.NODE_ENV === "production" ? {
  name: "8zz7ay",
  styles: "box-sizing:border-box;position:relative;display:block;"
} : {
  name: "8zz7ay",
  styles: "box-sizing:border-box;position:relative;display:block;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0vSW5wdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN3QyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Gb3JtL0lucHV0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbXBvbmVudCBWYXJpYXRpb25zICovXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCc7XG5cbi8qIENvbXBvbmVudCBIZWxwZXJzICovXG5pbXBvcnQgQXBoSW5wdXRMYWJlbFN0eWxlZCBmcm9tICcuL0lucHV0TGFiZWxTdHlsZWQnO1xuaW1wb3J0IEFwaElucHV0U3R5bGVkIGZyb20gJy4vSW5wdXRTdHlsZWQnO1xuaW1wb3J0IEFwaElucHV0RXJyb3JNc2dTdHlsZWQgZnJvbSAnLi9JbnB1dEVycm9yTXNnU3R5bGVkJztcblxuLyogQ29tcG9uZW50IFdyYXBwZXIgKi9cbmNvbnN0IEFwaElucHV0V3JhcHBlclN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IElucHV0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBpZCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgbGFiZWxQcm9wcyxcbiAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgY29sb3IsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgaW5wdXRJZCA9IGBBcGhGb3JtRmllbGQke2lkIHx8IE1hdGgucmFuZG9tKCl9YDtcbiAgICBjb25zdCBbaGFzVmFsdWUsIHNldEhhc1ZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlID8gdHJ1ZSA6IGZhbHNlKTtcblxuICAgIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgY29sb3I9e2Vycm9yID8gJ2Vycm9yJyA6IGNvbG9yfVxuICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggaW5wdXQgY2hhbmdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2dCAtIGlucHV0IGNoYW5nZSBzeW50aGV0aWMgZXZlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldnQ7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0YXJnZXQudmFsdWU7XG5cbiAgICAgICAgc2V0SGFzVmFsdWUoaW5wdXRWYWx1ZSA/IHRydWUgOiBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25DaGFuZ2UoT2JqZWN0LmFzc2lnbih7fSwgZXZ0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoSW5wdXRXcmFwcGVyU3R5bGVkPlxuICAgICAgICAgICAgPEFwaElucHV0U3R5bGVkXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIGlkPXtpbnB1dElkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWZvcm0tY29udHJvbCAkeyghbGFiZWwgfHwgKCFsYWJlbCAmJiBoYXNWYWx1ZSkpID8gJ2FwaC1mb3JtLWNvbnRyb2wtLW1pZGRsZScgOiAnJ30gJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7KCFsYWJlbCkgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgPEFwaElucHV0TGFiZWxTdHlsZWRcbiAgICAgICAgICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2lucHV0SWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1mb3JtLWxhYmVsICR7KHBsYWNlaG9sZGVyIHx8IGhhc1ZhbHVlKSA/ICdhcGgtZm9ybS1sYWJlbC0tdG9wJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgPC9BcGhJbnB1dExhYmVsU3R5bGVkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxBcGhJbnB1dEVycm9yTXNnU3R5bGVkXG4gICAgICAgICAgICAgICAgaHRtbEZvcj17aW5wdXRJZH1cbiAgICAgICAgICAgICAgICBzdHlsZXM9eyFlcnJvck1lc3NhZ2UgPyBudWxsIDogeyBtYXhIZWlnaHQ6ICc2MDBweCcgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcGgtZm9ybS1lcnJvclwiPlxuICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgfHwgJyd9XG4gICAgICAgICAgICA8L0FwaElucHV0RXJyb3JNc2dTdHlsZWQ+XG4gICAgICAgIDwvQXBoSW5wdXRXcmFwcGVyU3R5bGVkPlxuICAgICk7XG59O1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZCAgICAgICAgOiAnJyxcbiAgICBsYWJlbFByb3BzOiB7fSxcbiAgICBsYWJlbFJpZ2h0OiBmYWxzZSxcbiAgICByaWdodCAgICAgOiBmYWxzZSxcbiAgICBzdHlsZXMgICAgOiB7fSxcbn1cblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSW5wdXQucHJvcFR5cGVzID0ge1xuICAgIGlkICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsYWJlbFByb3BzOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGxhYmVsUmlnaHQ6IHByb3BUeXBlcy5ib29sLFxuICAgIHJpZ2h0ICAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */"
});
/* Component Itself */

var Input = function Input(props) {
  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      type = props.type,
      error = props.error,
      errorMessage = props.errorMessage,
      color = props.color;
  var inputId = "AphFormField".concat(id || Math.random());

  var _useState = (0, _react.useState)(value ? true : false),
      _useState2 = _slicedToArray(_useState, 2),
      hasValue = _useState2[0],
      setHasValue = _useState2[1];

  if (type === 'checkbox') {
    return _react.default.createElement(_Checkbox.default, _extends({}, props, {
      color: error ? 'error' : color,
      id: id
    }));
  }
  /**
   * Handle with input changes
   *
   * @param {object} evt - input change synthetic event
   */


  function handleChange(evt) {
    var target = evt.target;
    var inputValue = target.value;
    setHasValue(inputValue ? true : false);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt));
    }
  }

  return _react.default.createElement(AphInputWrapperStyled, null, _react.default.createElement(_InputStyled.default, _extends({}, props, {
    id: inputId,
    onChange: handleChange,
    className: "aph-form-control ".concat(!label || !label && hasValue ? 'aph-form-control--middle' : '', " ").concat(className || '')
  })), !label ? null : _react.default.createElement(_InputLabelStyled.default, _extends({}, labelProps, {
    htmlFor: inputId,
    className: "aph-form-label ".concat(placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), _react.default.createElement(_InputErrorMsgStyled.default, {
    htmlFor: inputId,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
};
/* Default Properties */


Input.defaultProps = {
  id: '',
  labelProps: {},
  labelRight: false,
  right: false,
  styles: {}
  /* Properties Types */

};
Input.propTypes = {
  id: _propTypes.default.string.isRequired,
  labelProps: _propTypes.default.object,
  labelRight: _propTypes.default.bool,
  right: _propTypes.default.bool,
  styles: _propTypes.default.object
};
/* Exporting */

var _default = Input;
exports.default = _default;