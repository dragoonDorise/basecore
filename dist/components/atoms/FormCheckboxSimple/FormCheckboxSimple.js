"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCheckboxSimple = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_form-checkbox-simple.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormCheckboxSimple = _ref => {
  let {
    name,
    id,
    value,
    label,
    checked,
    validation
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form__group ".concat(validation)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-simple"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    name: name,
    type: "checkbox",
    value: value,
    defaultChecked: checked
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label)));
};

exports.FormCheckboxSimple = FormCheckboxSimple;
FormCheckboxSimple.propTypes = {
  name: _propTypes.PropTypes.string.isRequired,
  id: _propTypes.PropTypes.string.isRequired,
  value: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  label: _propTypes.PropTypes.string.isRequired,
  checked: _propTypes.PropTypes.string,
  validation: _propTypes.PropTypes.string
};