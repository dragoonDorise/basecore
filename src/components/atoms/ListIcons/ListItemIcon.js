import React from "react";
import { Icon } from "getbasecore/Atoms";
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
