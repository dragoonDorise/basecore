import React, { useState } from "react";

import "./core_table.scss";
export const Table = ({ head, body, type }) => {
  return (
    <div className="table-reflow">
      <table className="table">
        <caption className="table__description">
          Descripción de la tabla
        </caption>
        <thead>
          <tr>
            <th scope="col">Movie Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Year</th>
            <th scope="col">Gross</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" data-th="Movie Title">
              Star Wars
            </td>
            <td data-th="Genre">Adventure, Sci-fi</td>
            <td data-th="Year">1977</td>
            <td data-th="Gross">$460,935,665</td>
          </tr>
          <tr>
            <td scope="row" data-th="Movie Title">
              Howard The Duck
            </td>
            <td data-th="Genre">"Comedy"</td>
            <td data-th="Year">1986</td>
            <td data-th="Gross">$16,295,774</td>
          </tr>
          <tr>
            <td scope="row" data-th="Movie Title">
              American Graffiti
            </td>
            <td data-th="Genre">Comedy, Drama</td>
            <td data-th="Year">1973</td>
            <td data-th="Gross">$115,000,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
