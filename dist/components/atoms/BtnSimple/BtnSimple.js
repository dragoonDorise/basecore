"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BtnSimple = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_btn-simple.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BtnSimple = _ref => {
  let {
    onClick,
    onChange,
    aria,
    type,
    css,
    children,
    href,
    disabled,
    name,
    id,
    target
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, type === "button" && /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    "aria-label": aria,
    onClick: onClick,
    className: "btn-simple ".concat(css),
    disabled: disabled ? "disabled" : ""
  }, children), type === "link" && /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    "aria-label": aria,
    onClick: onClick,
    className: "btn-simple ".concat(css),
    target: target ? target : "_parent"
  }, children), type === "toggle" && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    name: name,
    type: "radio",
    "aria-label": aria,
    autoComplete: "off",
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement("label", {
    tabIndex: "0",
    htmlFor: id,
    className: "btn-simple ".concat(css)
  }, children)), type === "multiple" && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    name: name,
    type: "checkbox",
    "aria-label": aria,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement("label", {
    tabIndex: "0",
    htmlFor: id,
    className: "btn-simple ".concat(css)
  }, children)));
};

exports.BtnSimple = BtnSimple;
BtnSimple.propTypes = {
  onClick: _propTypes.PropTypes.func,
  aria: _propTypes.PropTypes.string.isRequired,
  type: _propTypes.PropTypes.string.isRequired,
  css: _propTypes.PropTypes.string,
  href: _propTypes.PropTypes.string,
  disabled: _propTypes.PropTypes.bool,
  name: _propTypes.PropTypes.string,
  id: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object, _propTypes.PropTypes.array, _propTypes.PropTypes.element, _propTypes.PropTypes.string])
};