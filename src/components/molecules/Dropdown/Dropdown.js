import React, { useState } from "react";
import "./core_dropdown.scss";
export const Dropdown = ({ css, text, children }) => {
  const [state, setState] = useState({ active: false });
  const { active } = state;
  const toggleDropdown = (isActive) => {
    if (active === true) {
      setState({ active: false });
    } else {
      setState({ active: true });
    }
  };

  return (
    <>
      <div className={active === true ? "dropdown dropdown--open" : "dropdown"}>
        <button
          className={css}
          type="button"
          aria-expanded={active ? "true" : "false"}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {text}
          <svg className="icon" role="presentation">
            <use xlinkHref="./svg/sprite.svg#caret-arrow"></use>
          </svg>
        </button>
        <div
          className="dropdown__menu"
          aria-expanded={active ? "true" : "false"}
        >
          {children}
        </div>
      </div>
    </>
  );
};
