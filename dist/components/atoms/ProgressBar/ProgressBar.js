"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
require("./core_progress-bar.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ProgressBar = _ref => {
  let {
    css,
    value,
    max
  } = _ref;
  const percentage = value * 100 / max;
  return /*#__PURE__*/_react.default.createElement("progress", {
    className: "progress ".concat(css),
    value: value,
    max: max
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      width: percentage + "%"
    }
  }, value, "%")));
};
exports.ProgressBar = ProgressBar;
ProgressBar.propTypes = {
  css: _propTypes.PropTypes.string,
  value: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  max: _propTypes.PropTypes.string.isRequired
};