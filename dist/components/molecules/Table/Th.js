"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Th = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Th = _ref => {
  let {
    children,
    dataTH
  } = _ref;
  // if (headValue === true) {
  //   return <th>{children}</th>;
  // } else {
  // console.log(dataTH);
  return /*#__PURE__*/_react.default.createElement("th", null, children);
  // }
};
exports.Th = Th;