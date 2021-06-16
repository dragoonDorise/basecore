import React from "react";
import { PropTypes } from "prop-types";
import { ListItem } from "./ListItem";
import { ListItemIcon } from "./ListItemIcon";
import "./core_list.scss";
export const List = ({ children, css }) => {
  return (
    <ul className={`list ${css}`}>
      {children.map((item, i) => {
        if (item.length >= 2) {
          return <ListItemIcon key={i} icon={item[0]} text={item[1]} />;
        } else {
          return <ListItem key={i}>{item}</ListItem>;
        }
      })}
    </ul>
  );
};

List.propTypes = {
  css: PropTypes.string,
};
