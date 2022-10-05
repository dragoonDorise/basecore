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
    onClick: _onClick,
    id,
    onClickAlt
  } = _ref;
  //const childrenArray = Object.values(children);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
    role: "presentation",
    className: active ? "is-active" : ""
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "aria-selected": active ? "true" : "false",
    "aria-controls": "tab".concat(id, "-content"),
    id: "tab".concat(id),
    role: "tab",
    onClick: () => {
      _onClick;
      onClickAlt;
    }
  }, children)));
};

exports.TabList = TabList;