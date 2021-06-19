"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabContent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TabContent = _ref => {
  let {
    children,
    active
  } = _ref;
  const css = active ? "is-active" : "";
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "tabpanel",
    className: "tab-content__panel ".concat(css)
  }, children);
};

exports.TabContent = TabContent;