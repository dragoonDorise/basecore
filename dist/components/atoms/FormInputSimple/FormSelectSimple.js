"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSelectSimple = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FormSelectSimple = _ref => {
  let {
    label,
    name,
    children,
    onChange,
    hideDefault,
    validation
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form__group ".concat(validation)
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: "show-sr"
  }, label), /*#__PURE__*/_react.default.createElement("select", {
    className: "form__select",
    name: name,
    id: name,
    onChange: onChange
  }, !hideDefault && /*#__PURE__*/_react.default.createElement("option", {
    value: "-1"
  }, label), children)));
};
exports.FormSelectSimple = FormSelectSimple;
FormSelectSimple.propTypes = {
  label: _propTypes.PropTypes.string.isRequired,
  name: _propTypes.PropTypes.string.isRequired,
  onChange: _propTypes.PropTypes.func,
  hideDefault: _propTypes.PropTypes.bool,
  validation: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object, _propTypes.PropTypes.array, _propTypes.PropTypes.element])
};