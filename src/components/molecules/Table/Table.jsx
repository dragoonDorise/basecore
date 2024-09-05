import React from "react";
import { PropTypes } from "prop-types";
import { Td } from "./Td.js";
import { Th } from "./Th.js";
import "./core_table.scss";
export const Table = ({ items, css, children, description }) => {
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
          return <Th key={j}>{item}</Th>;
        });
        return (
          <thead key={i}>
            <tr key={i}>{td}</tr>
          </thead>
        );
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
          return (
            <Td dataTH={itemsArray[0][j]} key={j}>
              {item}
            </Td>
          );
        });
        return <tr key={i}>{td}</tr>;
      } else {
        return false;
      }
    });
  }

  return (
    <div className={css}>
      <table className="table">
        <caption className="table__description">{description}</caption>
        {thead && thead}
        {tbody && <tbody>{tbody}</tbody>}
        {children}
      </table>
    </div>
  );
};

Table.propTypes = {
  css: PropTypes.string,
  items: PropTypes.object,
  description: PropTypes.string,
};
