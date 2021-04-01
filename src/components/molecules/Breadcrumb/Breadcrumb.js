import React from "react";
//import {PropTypes} from "prop-types"
import "./core_breadcrumb.scss";
export const Breadcrumb = ({ children }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./">Library</a>
        </li>
        <li className="breadcrumb__active" aria-current="page">
          <a href="./">Data</a>
        </li>
      </ol>
    </nav>
  );
};
