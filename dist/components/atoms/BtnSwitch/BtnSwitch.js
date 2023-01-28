"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BtnSwitch = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./core_btn-switch.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BtnSwitch = _ref => {
  let {
    name,
    onChange,
    value,
    checked
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: name,
    defaultChecked: checked,
    className: "btn-switch__checkbox",
    id: name,
    onChange: onChange,
    value: value
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "btn-switch__label",
    htmlFor: name
  }));
};

exports.BtnSwitch = BtnSwitch;
BtnSwitch.propTypes = {
  name: _propTypes.PropTypes.string.isRequired,
  onChange: _propTypes.PropTypes.func,
  value: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number])
};