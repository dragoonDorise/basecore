"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Iframe = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./iframe.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Iframe = _ref => {
  let {
    src,
    css,
    title
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "embed-responsive embed-responsive--16-9"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    title: title,
    className: "embed-responsive__item",
    width: "1280",
    height: "720",
    src: src,
    frameBorder: "0",
    allowFullScreen: true,
    allow: "autoplay; fullscreen; picture-in-picture"
  }));
};

exports.Iframe = Iframe;
Iframe.propTypes = {
  title: _propTypes.PropTypes.string.isRequired,
  src: _propTypes.PropTypes.string.isRequired,
  css: _propTypes.PropTypes.string
};