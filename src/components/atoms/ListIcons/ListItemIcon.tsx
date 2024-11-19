import React from "react";
import { Icon } from "../../atoms/Icon/Icon";;
export const ListItemIcon = ({ text, icon }) => {
  return (
    <li>
      <div className="text">
        <Icon icon={icon} />
        {text}
      </div>
    </li>
  );
};
