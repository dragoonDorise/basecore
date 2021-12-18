"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormInputSimple = void 0;

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_form-input-simple.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormInputSimple = _ref => {
  let {
    label,
    labelButton,
    placeholder,
    type,
    name,
    addon,
    addonText,
    disabled,
    disabledAddon,
    onClick,
    onChange,
    focus,
    value,
    max,
    min,
    maxLength,
    minLength,
    validation,
    error
  } = _ref;
  var addOnCss = addon === "left" ? "form__group--addon--left" : "";
  addOnCss = addon === "right" ? "form__group--addon--right" : "";
  let errorArray;

  if (error) {
    errorArray = Object.values(error);
  } else {
    errorArray = [];
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form__group ".concat(addOnCss, " ").concat(validation)
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    className: "form__control",
    placeholder: placeholder,
    type: type,
    name: name,
    disabled: disabled ? "disabled" : "",
    autoFocus: focus ? "autofocus" : "",
    onChange: onChange,
    value: value,
    maxLength: maxLength,
    minLength: minLength,
    max: max,
    min: min
  }), addon && /*#__PURE__*/_react.default.createElement("button", {
    className: "form__addon btn-simple--1",
    type: "submit",
    "aria-label": labelButton,
    disabled: disabledAddon ? "disabled" : "",
    onClick: onClick
  }, addonText.includes("#") ? /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon icon--xs"
  }, /*#__PURE__*/_react.default.createElement("use", {
    xlinkHref: "./svg/sprite.svg".concat(addonText)
  })) : addonText), /*#__PURE__*/_react.default.createElement("ul", {
    className: "form__error"
  }, errorArray.map((item, i) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, item);
  }))));
};

exports.FormInputSimple = FormInputSimple;
FormInputSimple.propTypes = {
  label: _propTypes.PropTypes.string.isRequired,
  placeholder: _propTypes.PropTypes.string,
  type: _propTypes.PropTypes.string.isRequired,
  name: _propTypes.PropTypes.string.isRequired,
  addon: _propTypes.PropTypes.string,
  addonText: _propTypes.PropTypes.string,
  disabled: _propTypes.PropTypes.string,
  disabledAddon: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func,
  onChange: _propTypes.PropTypes.func,
  focus: _propTypes.PropTypes.bool,
  value: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  max: _propTypes.PropTypes.number,
  min: _propTypes.PropTypes.number,
  maxLength: _propTypes.PropTypes.number,
  minLength: _propTypes.PropTypes.number,
  validation: _propTypes.PropTypes.string,
  error: _propTypes.PropTypes.string
};