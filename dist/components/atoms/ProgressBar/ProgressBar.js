"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./core_progress-bar.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ProgressBar = _ref => {
  let {
    css,
    value,
    max,
    infinite
  } = _ref;
  const [counter, setCounter] = (0, _react.useState)(0);
  const [valueFinal, setValueFinal] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    let interval;
    if (infinite) {
      interval = setInterval(() => {
        setCounter(prevCounter => prevCounter === 110 ? -10 : prevCounter + 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [infinite]);
  (0, _react.useEffect)(() => {
    if (infinite) {
      setValueFinal(counter);
    } else {
      setValueFinal(value);
    }
  }, [counter, infinite, value]);
  const percentage = value * 100 / max;
  return /*#__PURE__*/_react.React.createElement("progress", {
    className: "progress ".concat(css),
    value: valueFinal,
    max: max
  }, /*#__PURE__*/_react.React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/_react.React.createElement("span", {
    style: {
      width: percentage + "%"
    }
  }, value, "%")));
};
exports.ProgressBar = ProgressBar;
ProgressBar.propTypes = {
  css: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  max: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  infinite: _propTypes.default.bool
};