import React from "react";
import { PropTypes } from "prop-types";
import "./core_breadcrumb.scss";
import { BreadcrumbItem } from "./BreadcrumbItem";
export const Breadcrumb = ({ children }) => {
  const childrenArray = Object.values(children);

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {childrenArray.map((item, i) => {
          return (
            <BreadcrumbItem
              key={i}
              text={item.text}
              link={item.link}
              active={item.active}
            />
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.object,
};
