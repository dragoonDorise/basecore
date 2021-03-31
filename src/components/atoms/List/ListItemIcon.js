import React from "react";
export const ListItemIcon = ({ text, icon }) => {
  return (
    <li>
      <div class="text">
        <svg class="icon">
          <use xlinkHref={`./svg/sprite.svg#${icon}`}></use>
        </svg>
        {text}
      </div>
    </li>
  );
};
