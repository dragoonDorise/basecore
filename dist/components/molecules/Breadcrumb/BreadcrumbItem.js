"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbItem = void 0;

var _react = _interopRequireDefault(require("react"));

require("./core_breadcrumb.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {PropTypes} from "prop-types"
const BreadcrumbItem = _ref => {
  let {
    active,
    text,
    link
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, active === true && /*#__PURE__*/_react.default.createElement("li", {
    className: "breadcrumb__active",
    "aria-current": "page"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: link
  }, text)), active === false && /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: link
  }, text)));
}; //


exports.BreadcrumbItem = BreadcrumbItem;