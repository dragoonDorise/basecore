"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_icon.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = _ref => {
  let {
    icon,
    css
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon ".concat(css),
    role: "presentation"
  }, /*#__PURE__*/_react.default.createElement("use", {
    xlinkHref: "".concat(process.env.PUBLIC_URL, "/svg/sprite.svg#").concat(icon)
  }));
};

exports.Icon = Icon;
Icon.propTypes = {
  icon: _propTypes.PropTypes.string.isRequired,
  css: _propTypes.PropTypes.string
};