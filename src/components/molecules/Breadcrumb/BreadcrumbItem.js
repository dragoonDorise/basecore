import React from "react";
//import {PropTypes} from "prop-types"
import "./core_breadcrumb.scss";
export const BreadcrumbItem = ({ active, text, link }) => {
  return (
    <>
      {active === true && (
        <li className="breadcrumb__active" aria-current="page">
          <a href={link}>{text}</a>
        </li>
      )}
      {active === false && (
        <li>
          <a href={link}>{text}</a>
        </li>
      )}
    </>
  );
};

//
