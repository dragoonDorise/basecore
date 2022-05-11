"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _Atoms = require("getbasecore/Atoms");

require("./core_dropdown.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Dropdown = _ref => {
  let {
    css,
    text,
    children,
    ariaControls,
    ariaLabelled
  } = _ref;
  const [state, setState] = (0, _react.useState)({
    active: false
  });
  const {
    active
  } = state;

  const toggleDropdown = isActive => {
    if (active === true) {
      setState({
        active: false
      });
    } else {
      setState({
        active: true
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: active === true ? "dropdown dropdown--open" : "dropdown"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: css,
    type: "button",
    id: ariaLabelled,
    "aria-expanded": active ? "true" : "false",
    "aria-haspopup": "true",
    "aria-controls": ariaControls,
    onClick: toggleDropdown
  }, text, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
    icon: "caret-arrow",
    css: "icon"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown__menu",
    "aria-expanded": active ? "true" : "false",
    "aria-labelledby": ariaLabelled,
    tabIndex: "-1",
    id: ariaControls,
    role: "menu"
  }, children)));
};

exports.Dropdown = Dropdown;
Dropdown.propTypes = {
  css: _propTypes.PropTypes.string,
  text: _propTypes.PropTypes.string.isRequired,
  children: _propTypes.PropTypes.element.isRequired,
  ariaControls: _propTypes.PropTypes.string.isRequired,
  ariaLabelled: _propTypes.PropTypes.string.isRequired
};