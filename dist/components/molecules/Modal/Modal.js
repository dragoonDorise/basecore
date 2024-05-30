"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Atoms = require("getbasecore/Atoms");
require("./core_modal.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Modal(_ref) {
  let {
    modal,
    modalActiveValue,
    modalHeaderValue,
    modalBodyValue,
    modalFooterValue,
    modalCSSValue
  } = _ref;
  const [stateModal, setStateModal] = (0, _react.useState)({
    modalActive: undefined,
    modalHeader: undefined,
    modalBody: undefined,
    modalFooter: undefined,
    modalCSS: undefined
  });
  const {
    modalActive,
    modalHeader,
    modalBody,
    modalFooter,
    modalCSS
  } = stateModal;
  const closeModal = () => {
    setStateModal(_objectSpread(_objectSpread({}, stateModal), {}, {
      modalActive: false
    }));
  };
  (0, _react.useEffect)(() => {
    if (modal) {
      setStateModal({
        modalActive: modal.active,
        modalHeader: modal.header,
        modalBody: modal.body,
        modalFooter: modal.footer,
        modalCSS: modal.css
      });
    } else if (modal === false) {
      setStateModal({
        modalActive: false
      });
    }
  }, [modal]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal ".concat(modalCSS || modalCSSValue, " ").concat(modalActive || modalActiveValue ? "is-shown" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__header"
  }, modalHeader || modalHeaderValue, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal__close",
    type: "button",
    aria: "Close",
    onClick: () => closeModal()
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__body"
  }, modalBody || modalBodyValue), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__footer"
  }, !modalFooter && !modalFooterValue && /*#__PURE__*/_react.default.createElement(_Atoms.BtnSimple, {
    css: "btn-simple--1",
    type: "button",
    aria: "Next",
    onClick: () => closeModal()
  }, "Close"), modalFooter || modalFooterValue)));
}
Modal.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array, _propTypes.default.element, _propTypes.default.string]),
  footer: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array, _propTypes.default.element, _propTypes.default.string]),
  css: _propTypes.default.string,
  onClick: _propTypes.default.func
};
Modal.defaultProps = {
  children: "",
  footer: "",
  css: "",
  onClick: () => {}
};
var _default = Modal;
exports.default = _default;