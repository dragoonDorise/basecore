"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_alert.scss");

var _Atoms = require("getbasecore/Atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Alert = _ref => {
  let {
    children,
    css,
    close = false
  } = _ref;

  const hideMe = e => {
    alert("e");
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "alert ".concat(css),
    role: "alert"
  }, close && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "alert__close",
    "data-id-dismiss": "this",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
    icon: "close",
    onClick: hideMe
  })), children);
};

exports.Alert = Alert;
Alert.propTypes = {
  css: _propTypes.PropTypes.string,
  close: _propTypes.PropTypes.bool
};