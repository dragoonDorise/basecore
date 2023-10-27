"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
require("./core_progress-bar.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ProgressBar = _ref => {
  let {
    css,
    value,
    max,
    infinite
  } = _ref;
  let valueFinal;
  if (infinite) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter(prevCounter => {
          if (prevCounter === 110) {
            prevCounter = -10;
          }
          return prevCounter + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }, []);
    valueFinal = counter;
  } else {
    valueFinal = value;
  }
  const percentage = value * 100 / max;
  return /*#__PURE__*/_react.default.createElement("progress", {
    className: "progress ".concat(css),
    value: valueFinal,
    max: max
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      width: percentage + "%"
    }
  }, value, "%")));
};
exports.ProgressBar = ProgressBar;
ProgressBar.propTypes = {
  css: _propTypes.PropTypes.string,
  value: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
  max: _propTypes.PropTypes.string.isRequired
};