"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _Td = require("./Td.js");

var _Th = require("./Th.js");

require("./core_table.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Table = _ref => {
  let {
    items,
    css,
    children,
    description
  } = _ref;
  let thead;
  let tbody;

  if (!!items) {
    const itemsArray = Object.values(items);
    thead = itemsArray.map((row, i) => {
      let tr;
      let td;

      if (i === 0) {
        td = row.map((item, j) => {
          // console.log(firstRow);
          return /*#__PURE__*/_react.default.createElement(_Th.Th, {
            key: j
          }, item);
        });
        return /*#__PURE__*/_react.default.createElement("thead", {
          key: i
        }, /*#__PURE__*/_react.default.createElement("tr", {
          key: i
        }, td));
      } else {
        return false;
      }
    });
    tbody = itemsArray.map((row, i) => {
      let tr;
      let td;

      if (i !== 0) {
        td = row.map((item, j) => {
          // console.log(firstRow);
          return /*#__PURE__*/_react.default.createElement(_Td.Td, {
            dataTH: itemsArray[0][j],
            key: j
          }, item);
        });
        return /*#__PURE__*/_react.default.createElement("tr", {
          key: i
        }, td);
      } else {
        return false;
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: css
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("caption", {
    className: "table__description"
  }, description), thead && thead, tbody && /*#__PURE__*/_react.default.createElement("tbody", null, tbody), children));
};

exports.Table = Table;
Table.propTypes = {
  css: _propTypes.PropTypes.string,
  items: _propTypes.PropTypes.object,
  description: _propTypes.PropTypes.string
};