"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _Atoms = require("getbasecore/Atoms");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ListItemIcon = _ref => {
  let {
    text,
    icon
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
    icon: icon
  }), text));
};
exports.ListItemIcon = ListItemIcon;