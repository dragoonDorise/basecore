import React from "react";
import { PropTypes } from "prop-types";
import { ListItem } from "./ListItem";
import { ListItemIcon } from "./ListItemIcon";
import "./core_list.scss";
export const ListIcon = ({ items, css }) => {
  return (
    <ul className={`list ${css}`}>
      {items.map((item, i) => {
        return <ListItemIcon key={i} icon={item[0]} text={item[1]} />;
      })}
    </ul>
  );
};

ListIcon.propTypes = {
  css: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.element]),
};
