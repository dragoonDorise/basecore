"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Td = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Td = _ref => {
  let {
    children,
    dataTH
  } = _ref;
  // if (headValue === true) {
  //   return <th>{children}</th>;
  // } else {
  // console.log(dataTH);
  return /*#__PURE__*/_react.default.createElement("td", {
    "data-th": dataTH
  }, children); // }
};

exports.Td = Td;