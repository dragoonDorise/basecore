"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionItem = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _Atoms = require("getbasecore/Atoms");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AccordionItem = _ref => {
  let {
    title,
    desc,
    id
  } = _ref;
  //Estado para determinar si está plegado o no
  const [state, setState] = (0, _react.useState)(false);

  const handleClick = () => {
    state ? setState(false) : setState(true);
  };

  let css = state ? "is-visible" : "";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "data-toggle": "collapse",
    "aria-controls": "collapse".concat(id),
    className: css,
    "aria-expanded": state ? true : false,
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_Atoms.Icon, {
    icon: "caret-arrow",
    css: "icon--xs"
  }), title), /*#__PURE__*/_react.default.createElement("div", {
    id: "collapse".concat(id),
    className: "accordion__collapse ".concat(css),
    "aria-expanded": state ? true : false
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion__panel",
    dangerouslySetInnerHTML: {
      __html: desc
    }
  })));
};

exports.AccordionItem = AccordionItem;
AccordionItem.propTypes = {
  title: _propTypes.PropTypes.string.isRequired
};