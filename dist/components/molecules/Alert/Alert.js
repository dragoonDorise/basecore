"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;
require("core-js/modules/web.dom.iterable.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
require("./core_alert.scss");
var _Atoms = require("getbasecore/Atoms");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Alert = _ref => {
  let {
    children,
    css,
    close = false
  } = _ref;
  const [state, setState] = (0, _react.useState)({
    active: false
  });
  const {
    active
  } = state;
  const hideMe = isActive => {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: active === true ? "alert is-hidden ".concat(css) : "alert ".concat(css),
    role: "alert"
  }, close && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "alert__close",
    "data-id-dismiss": "this",
    "aria-hidden": "true",
    onClick: hideMe
  }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
    icon: "close"
  })), children);
};
exports.Alert = Alert;
Alert.propTypes = {
  css: _propTypes.PropTypes.string,
  close: _propTypes.PropTypes.bool
};