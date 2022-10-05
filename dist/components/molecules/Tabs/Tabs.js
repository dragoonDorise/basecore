"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _TabList = require("./TabList");

var _TabContent = require("./TabContent");

require("./core_tabs.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Tabs = _ref => {
  let {
    tabList,
    tabContent,
    ariaLabel,
    active,
    onClick
  } = _ref;
  const tabListArray = Object.values(tabList);
  const tabContentArray = Object.values(tabContent);
  const [tabState, setTabState] = (0, _react.useState)(0);

  const updateTab = i => {
    setTabState(i);
  };

  (0, _react.useEffect)(() => {
    console.log(active);
    updateTab(active);
  }, [active]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-tabs"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    role: "tablist",
    "aria-label": ariaLabel
  }, tabListArray.map((item, i) => {
    return /*#__PURE__*/_react.default.createElement(_TabList.TabList, {
      key: i,
      id: i,
      active: tabState === i ? true : false,
      onClick: onClick ? onClick = {
        onClick
      } : null,
      onClick: () => updateTab(i)
    }, item);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-content"
  }, tabContentArray.map((item, i) => {
    return /*#__PURE__*/_react.default.createElement(_TabContent.TabContent, {
      key: i,
      id: i,
      active: tabState === i ? true : false
    }, item);
  })));
};

exports.Tabs = Tabs;
Tabs.propTypes = {
  tabList: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object, _propTypes.PropTypes.array]),
  tabContent: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.object, _propTypes.PropTypes.array])
};