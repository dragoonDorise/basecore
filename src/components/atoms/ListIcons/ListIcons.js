import React from "react";
import { PropTypes } from "prop-types";
import { ListItemIcon } from "./ListItemIcon";
import "./core_list-icons.scss";
export const ListIcons = ({ items, css }) => {
  return (
    <ul className={`list ${css}`}>
      {items.map((item, i) => {
        return <ListItemIcon key={i} icon={item[0]} text={item[1]} />;
      })}
    </ul>
  );
};

ListIcons.propTypes = {
  css: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.element]),
};
