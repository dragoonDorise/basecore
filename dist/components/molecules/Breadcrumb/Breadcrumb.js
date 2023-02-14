"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumb = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
require("./core_breadcrumb.scss");
var _BreadcrumbItem = require("./BreadcrumbItem");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Breadcrumb = _ref => {
  let {
    children
  } = _ref;
  const childrenArray = Object.values(children);
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "breadcrumb",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("ol", null, childrenArray.map((item, i) => {
    return /*#__PURE__*/_react.default.createElement(_BreadcrumbItem.BreadcrumbItem, {
      key: i,
      text: item.text,
      link: item.link,
      active: item.active
    });
  })));
};
exports.Breadcrumb = Breadcrumb;
Breadcrumb.propTypes = {
  children: _propTypes.PropTypes.object
};