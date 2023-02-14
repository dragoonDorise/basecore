"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormInputRangeSimple = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
require("./core_form-input-range-simple.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FormInputRangeSimple = _ref => {
  let {
    label,
    id,
    name,
    disabled,
    onChange,
    value,
    max,
    min,
    step,
    validation
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form__group ".concat(validation)
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: "label-range"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-range-metadata"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "form__control",
    type: "range",
    min: min,
    max: max,
    value: value,
    step: value,
    name: name,
    id: name,
    onChange: onChange
  })));
};
exports.FormInputRangeSimple = FormInputRangeSimple;
FormInputRangeSimple.propTypes = {
  label: _propTypes.PropTypes.string.isRequired,
  id: _propTypes.PropTypes.string.isRequired,
  name: _propTypes.PropTypes.string.isRequired,
  disabled: _propTypes.PropTypes.string,
  onChange: _propTypes.PropTypes.func,
  value: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  max: _propTypes.PropTypes.number.isRequired,
  min: _propTypes.PropTypes.number.isRequired,
  step: _propTypes.PropTypes.number.isRequired,
  validation: _propTypes.PropTypes.string
};