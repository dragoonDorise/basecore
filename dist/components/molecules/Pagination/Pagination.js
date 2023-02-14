"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
var _Atoms = require("getbasecore/Atoms");
require("./core_pagination.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Pagination = _ref => {
  let {
    onClick: _onClick,
    onClickNext,
    onClickPrev,
    pages
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("nav", {
    role: "navigation",
    className: "pagination",
    "aria-label": "Page navigation"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "./",
    "aria-label": "Previous",
    onClick: onClickPrev
  }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
    icon: "arrow-left"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    className: "is-active"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "./",
    "aria-label": "Page 1",
    onClick: e => _onClick
  }, "1")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "./",
    "aria-label": "Page 2"
  }, "2")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "./",
    "aria-label": "Next",
    onClick: onClickNext
  }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
    icon: "arrow-right"
  })))));
};
exports.Pagination = Pagination;
Pagination.propTypes = {
  onClick: _propTypes.PropTypes.func,
  onClickNext: _propTypes.PropTypes.func,
  onClickPrev: _propTypes.PropTypes.func,
  pages: _propTypes.PropTypes.string
};