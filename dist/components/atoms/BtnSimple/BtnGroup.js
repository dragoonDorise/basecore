"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BtnGroup = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BtnGroup = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-group",
    role: "group"
  }, children));
};
exports.BtnGroup = BtnGroup;