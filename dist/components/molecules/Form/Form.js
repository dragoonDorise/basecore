"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_form.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Form = _ref => {
  let {
    children,
    css,
    onSubmit
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "form ".concat(css),
    onSubmit: onSubmit
  }, children);
};

exports.Form = Form;
Form.propTypes = {
  css: _propTypes.PropTypes.string,
  onSubmit: _propTypes.PropTypes.func
};