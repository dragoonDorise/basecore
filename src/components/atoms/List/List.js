import React from "react";
import { PropTypes } from "prop-types";
import { ListItem } from "./ListItem";
import { ListItemIcon } from "./ListItemIcon";
import "./core_list.scss";
export const List = ({ type, children, css }) => {
  let tag;
  switch (type) {
    case "ul":
      tag = "ul";
      break;
    case "ol":
      tag = "ol";
      break;
    default:
      tag = "ul";
      break;
  }

  return React.createElement(tag, { className: `list ${css}` }, children);
};

List.propTypes = {
  css: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.element]),
};
