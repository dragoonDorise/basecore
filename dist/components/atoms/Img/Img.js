"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Img = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

require("./img.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Img = _ref => {
  let {
    src,
    srcXS,
    srcSM,
    srcMD,
    srcLG,
    srcXL,
    alt,
    css
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("picture", {
    className: css
  }, /*#__PURE__*/_react.default.createElement("source", {
    media: "(max-width: 460px)",
    srcSet: srcXS
  }), /*#__PURE__*/_react.default.createElement("source", {
    media: "(max-width: 768px)",
    srcSet: srcSM
  }), /*#__PURE__*/_react.default.createElement("source", {
    media: "(max-width: 992px)",
    srcSet: srcMD
  }), /*#__PURE__*/_react.default.createElement("source", {
    media: "(max-width: 1200px)",
    srcSet: srcLG
  }), /*#__PURE__*/_react.default.createElement("source", {
    media: "(max-width: 1440px)",
    srcSet: srcXL
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: css,
    src: src,
    alt: alt
  }));
};

exports.Img = Img;
Img.propTypes = {
  src: _propTypes.PropTypes.string.isRequired,
  srcXS: _propTypes.PropTypes.string,
  srcSM: _propTypes.PropTypes.string,
  srcMD: _propTypes.PropTypes.string,
  srcLG: _propTypes.PropTypes.string,
  srcXL: _propTypes.PropTypes.string,
  alt: _propTypes.PropTypes.string.isRequired,
  css: _propTypes.PropTypes.string
};