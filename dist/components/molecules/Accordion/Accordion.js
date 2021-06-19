"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _AccordionItem = require("./AccordionItem.js");

require("./core_accordion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Accordion = _ref => {
  let {
    title,
    items
  } = _ref;
  const itemsArray = Object.values(items);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion"
  }, itemsArray.map((_ref2, i) => {
    let {
      title,
      desc
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_AccordionItem.AccordionItem, {
      key: i,
      id: i,
      title: title,
      desc: desc
    });
  }));
};

exports.Accordion = Accordion;
_AccordionItem.AccordionItem.propTypes = {
  title: _propTypes.PropTypes.string.isRequired,
  items: _propTypes.PropTypes.object
};