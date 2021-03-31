import React from "react";
export const ListItemIcon = ({ text, icon }) => {
  return (
    <li>
      <div className="text">
        <svg className="icon">
          <use xlinkHref={`./svg/sprite.svg#${icon}`}></use>
        </svg>
        {text}
      </div>
    </li>
  );
};
