"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListItem = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("li", null, children);
};

exports.ListItem = ListItem;