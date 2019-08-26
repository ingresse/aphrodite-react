"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcPagination = _interopRequireDefault(require("rc-pagination"));

var _pt_BR = _interopRequireDefault(require("rc-pagination/lib/locale/pt_BR"));

var _utils = require("../../utils");

var _ = require("../");

var _PaginationStyled = _interopRequireDefault(require("./PaginationStyled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Component Itself */
function Pagination(props) {
  /**
   * Inherit Props
   */
  var loading = props.loading,
      className = props.className,
      rest = _objectWithoutPropertiesLoose(props, ["loading", "className"]);
  /**
   * Render
   */


  return _react.default.createElement(_PaginationStyled.default, _extends({
    locale: _pt_BR.default,
    showLessItems: true
  }, rest, {
    as: !loading ? _rcPagination.default : _.Placeholder,
    jumpPrevIcon: _react.default.createElement(_react.default.Fragment, null, "\u2022\u2022\u2022"),
    jumpNextIcon: _react.default.createElement(_react.default.Fragment, null, "\u2022\u2022\u2022"),
    prevIcon: _react.default.createElement(_.Icon, {
      slug: "arrow",
      direction: "left",
      color: "inverse",
      size: 25
    }),
    nextIcon: _react.default.createElement(_.Icon, {
      slug: "arrow",
      direction: "right",
      color: "inverse",
      size: 25
    }),
    className: "aph-pagination " + (className || '')
  }), !loading ? null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.Placeholder, {
    width: 30,
    height: 30,
    className: "rc-pagination-prev"
  }), Array.from({
    length: 3
  }, function (number, index) {
    return _react.default.createElement(_.Placeholder, {
      width: 30,
      height: 30,
      className: "rc-pagination-item",
      key: "rc-pagination-placeholder-" + index
    });
  }), _react.default.createElement(_.Placeholder, {
    width: 30,
    height: 30,
    className: "rc-pagination-next"
  })));
}
/* Default Propeties */


Pagination.defaultProps = {
  onChange: function onChange() {},
  loading: true,
  total: 0,
  current: 1,
  pageSize: 25,
  styles: {}
};
/* Properties Types */

Pagination.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  loading: _propTypes.default.bool,
  total: _propTypes.default.number,
  current: _propTypes.default.number,
  pageSize: _propTypes.default.number,
  styles: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
/* Exporting */

var _default = Pagination;
exports.default = _default;