"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkSimple = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./link-simple.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LinkSimple = _ref => {
  let {
    onClick,
    css,
    children,
    href,
    target
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, href && /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    onClick: onClick,
    className: "link-simple ".concat(css),
    target: target
  }, children), !href && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClick,
    className: "link-simple ".concat(css)
  }, children));
};

exports.LinkSimple = LinkSimple;
LinkSimple.propTypes = {
  onClick: _propTypes.PropTypes.func,
  css: _propTypes.PropTypes.string,
  href: _propTypes.PropTypes.string.isRequired,
  target: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object, _propTypes.PropTypes.array, _propTypes.PropTypes.element, _propTypes.PropTypes.string])
};