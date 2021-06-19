"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormRadioSimple = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_form-radio-simple.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormRadioSimple = _ref => {
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
    className: "radio-simple"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    name: name,
    type: "radio",
    value: value,
    checked: checked
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label)));
};

exports.FormRadioSimple = FormRadioSimple;
FormRadioSimple.propTypes = {
  name: _propTypes.PropTypes.string.isRequired,
  id: _propTypes.PropTypes.string.isRequired,
  value: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  label: _propTypes.PropTypes.string.isRequired,
  checked: _propTypes.PropTypes.string,
  validation: _propTypes.PropTypes.string
};