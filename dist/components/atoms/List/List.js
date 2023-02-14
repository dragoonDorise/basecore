"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
var _ListItem = require("./ListItem");
var _ListItemIcon = require("./ListItemIcon");
require("./core_list.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const List = _ref => {
  let {
    children,
    css
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "list ".concat(css)
  }, children.map((item, i) => {
    if (item.length >= 2) {
      return /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, {
        key: i,
        icon: item[0],
        text: item[1]
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
        key: i
      }, item);
    }
  }));
};
exports.List = List;
List.propTypes = {
  css: _propTypes.PropTypes.string,
  children: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object, _propTypes.PropTypes.array, _propTypes.PropTypes.element])
};