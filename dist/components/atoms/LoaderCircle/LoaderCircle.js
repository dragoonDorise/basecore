"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoaderCircle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_loader-circle.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoaderCircle = _ref => {
  let {
    aria
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loader-circle",
    "aria-label": aria
  });
};

exports.LoaderCircle = LoaderCircle;
LoaderCircle.propTypes = {
  aria: _propTypes.PropTypes.string.isRequired
};