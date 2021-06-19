"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabList = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TabList = _ref => {
  let {
    children,
    active,
    onClick
  } = _ref;
  //const childrenArray = Object.values(children);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
    role: "presentation",
    className: active ? "is-active" : ""
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "aria-selected": "true",
    "aria-controls": "home",
    role: "tab",
    "data-toggle": "tab",
    onClick: onClick
  }, children)));
};

exports.TabList = TabList;